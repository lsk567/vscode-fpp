import * as vscode from 'vscode';

import { Worker } from 'worker_threads';

import * as Fpp from './ast';
import { DeclCollector, DiangosicManager, FppAnnotator } from '../fpp';
import { IFppMessage, IRange } from './message';
import { TextDecoder } from 'util';
import path from 'path';
import { RangeAssociator } from '../associator';
import { RangeRuleAssociation } from './visitor';

interface DocumentOrFile {
    path: string;
    version: number; // 0 for files
    getText(): string;
}

interface PendingParse {
    key: string;
    document: DocumentOrFile;
    resolve: (msg: FppMessage) => void;
    reject: (err?: string) => void;
}

export interface ParsingOptions {
    /**
     * Parse even if the latest AST is up to date
     * This could happen if we think that the version
     * identifier for this document is incorrect
     */
    forceReparse?: boolean;

    /**
     * Normally, parsing a document will trigger open
     * text documents to be re-annotated to give you
     * live feedback on on errors and other rules
     * 
     * When indexing the entire project we push this back
     * to the end of the indexing run since we only really need
     * to do it once.
     */
    noAnnotationRefresh?: boolean;

    /**
     * Disables VSCode diagnostic emission so that initial parse
     * looks clean to the user
     */
    disableDiagnostics?: boolean;
}

export class FppMessage {
    constructor(
        readonly version: number,
        readonly ast: Fpp.TranslationUnit,
        readonly ranges: RangeAssociator<RangeRuleAssociation>,
        readonly syntaxErrors: vscode.Diagnostic[]
    ) {
    }

    private static deserializeRange(iface: IRange): vscode.Range {
        return new vscode.Range(
            new vscode.Position(iface[0], iface[1]),
            new vscode.Position(iface[2], iface[3]),
        );
    }

    static deserialize(msg: IFppMessage): FppMessage {
        return new FppMessage(
            msg.version,
            msg.ast,
            new RangeAssociator<RangeRuleAssociation>(msg.ranges),
            msg.syntaxErrors.map((diag) => new vscode.Diagnostic(
                FppMessage.deserializeRange(diag.range),
                diag.message
            ))
        );
    }
}

class FppWorker extends Worker implements vscode.Disposable {
    private readonly readyPromise: Promise<void>;

    private inProgress?: PendingParse;
    private wasCancelled: boolean;

    private readonly pending = new Map<string, PendingParse>();
    private readonly promises = new Map<string, Promise<FppMessage>>();

    private readonly queue: string[] = [];

    constructor() {
        super(path.join(__dirname, 'worker.js'), {
            workerData: { path: './worker.ts' }
        });

        this.wasCancelled = false;

        this.readyPromise = new Promise<void>((resolve) => {
            this.on('online', resolve);
        });

        this.on('message', (rawMsg: { code: "error", msg: string } | { code: "success", msg: IFppMessage }) => {
            if (!this.inProgress) {
                throw new Error("Got message reply when no parse in progress");
            }

            if (!this.wasCancelled) {
                if (rawMsg.code === "success") {
                    const msg = FppMessage.deserialize(rawMsg.msg);
                    this.inProgress.resolve(msg);
                } else {
                    this.inProgress.reject(rawMsg.msg);
                }
            } else {
                this.inProgress.reject();
            }

            this.inProgress = undefined;
            this.wasCancelled = false;
            this.scheduleNext();
        });
    }

    dispose() {
        this.terminate();
    }

    private scheduleNext() {
        if (this.inProgress) {
            return;
        }

        const nextItem = this.queue.pop();
        if (nextItem) {
            const parsing = this.pending.get(nextItem);
            if (!parsing) {
                console.error(`File ${nextItem} does not have a pending parse structure`);
            } else {
                this.pending.delete(nextItem);
                this.promises.delete(nextItem);
                this.inProgress = parsing;
                this.postMessage({
                    path: nextItem,
                    version: parsing.document.version,
                    text: parsing.document.getText()
                });
            }
        }
    }

    ready(): Promise<void> {
        return this.readyPromise;
    }

    parse(document: DocumentOrFile, token?: vscode.CancellationToken): Promise<FppMessage> {
        const key = document.path;
        if (this.inProgress?.key === key && this.inProgress.document.version < document.version) {
            this.wasCancelled = true;
        }

        // TODO(tumbar) Find out if the cancellation is done when typing fast
        // Does it happen before or after the new parse request is sent?
        token?.onCancellationRequested(() => {
            if (this.inProgress?.key === key) {
                this.wasCancelled = true;
            } else {
                const idx = this.queue.indexOf(key);
                if (idx >= 0) {
                    this.queue.splice(idx);
                    this.pending.delete(key);
                    this.promises.delete(key);
                }
            }
        });

        const pending = this.pending.get(key);
        if (pending) {
            if (document.version > pending.document.version) {
                pending.document = document;
            }

            return this.promises.get(key)!;
        } else {
            const promise = new Promise<FppMessage>((resolve, reject) => {
                this.pending.set(key, { key, document, resolve, reject });

                if (!this.queue.includes(key)) {
                    this.queue.push(key);
                }

                this.scheduleNext();
            });

            this.promises.set(key, promise);
            return promise;
        }
    }
}

const textDecoder = new TextDecoder();
export class AstManager implements vscode.Disposable {
    private decl: DeclCollector = new DeclCollector();

    private asts = new Map<string, FppMessage>();
    private annotations = new Map<string, FppAnnotator>();
    private worker = new FppWorker();
    private syntaxListener: DiangosicManager;

    private hasComponentInstances = new Set<string>();

    constructor(
        public readonly documentSelector: vscode.DocumentSelector
    ) {
        this.syntaxListener = new DiangosicManager();
    }

    ready(): Promise<void> {
        return this.worker.ready();
    }

    get decls(): DeclCollector {
        return this.decl;
    }

    dispose() {
        this.decl.dispose();
        for (const v of this.annotations.values()) {
            v.dispose();
        }

        this.annotations.clear();
        this.worker.dispose();
    }

    async get(document: vscode.TextDocument, token?: vscode.CancellationToken): Promise<FppAnnotator> {
        // Re-parse the document if needed
        await this.parse(document, token);
        return this.annotations.get(document.uri.path)!;
    }

    clear(uri: vscode.Uri) {
        this.decl.clearDecls(uri.path);
        this.annotations.get(uri.path)?.dispose();
        this.annotations.delete(uri.path);
    }

    refreshAnnotations(options?: ParsingOptions, ignoreKey?: string) {
        // Keep track of files we annotated
        const annotated = new Set<string>();
        if (ignoreKey) {
            annotated.add(ignoreKey);
        }

        // Refresh annotations on open text files
        for (const textDocument of vscode.workspace.textDocuments) {
            if (annotated.has(textDocument.uri.path)) {
                continue;
            }

            if (vscode.languages.match(this.documentSelector, textDocument)) {
                const ast = this.asts.get(textDocument.uri.path);
                if (!ast) {
                    // Document not parsed yet, skip for now
                    continue;
                }

                const annotations = this.annotations.get(textDocument.uri.path);
                if (options?.disableDiagnostics) {
                    annotations?.disable();
                }
                annotations?.pass(ast.ast, textDocument.uri.path);
                annotations?.enable();
            }
        }

        for (const needsRefreshUri of this.hasComponentInstances) {
            if (annotated.has(needsRefreshUri)) {
                continue;
            }

            const ast = this.asts.get(needsRefreshUri);
            if (!ast) {
                // Document not parsed yet, skip for now
                continue;
            }

            const annotations = this.annotations.get(needsRefreshUri);
            if (options?.disableDiagnostics) {
                annotations?.disable();
            }
            annotations?.pass(ast.ast, needsRefreshUri);
            annotations?.enable();
        }
    }

    async parse(
        documentOrUri: vscode.TextDocument | vscode.Uri,
        token?: vscode.CancellationToken,
        options?: ParsingOptions
    ): Promise<FppMessage> {
        if (documentOrUri instanceof vscode.Uri) {
            // Check if we already have this file open in the workspace
            // If we do, use the open version instead of reading directly from disk
            const alreadyOpenDoc = vscode.workspace.textDocuments.find(v => v.uri.path === documentOrUri.path);
            if (alreadyOpenDoc) {
                return await this.parseImpl({
                    path: alreadyOpenDoc.uri.path,
                    version: alreadyOpenDoc.version,
                    getText: alreadyOpenDoc.getText.bind(documentOrUri)
                }, token, options);
            }

            // Read and decode the text file
            const text = textDecoder.decode(await vscode.workspace.fs.readFile(documentOrUri));

            return await this.parseImpl({
                path: documentOrUri.path,
                // Any changes in the text document will force a reparse
                version: -1,
                getText() { return text; }
            }, token, options);
        } else {
            return await this.parseImpl({
                path: documentOrUri.uri.path,
                version: documentOrUri.version,
                getText: documentOrUri.getText.bind(documentOrUri)
            }, token, options);
        }
    }

    private async parseImpl(
        document: DocumentOrFile,
        token?: vscode.CancellationToken,
        options?: ParsingOptions
    ): Promise<FppMessage> {
        const key = document.path;

        // First check if the AST we have is good enough
        if (!options?.forceReparse && (this.asts.get(key)?.version ?? -10) >= document.version) {
            return this.asts.get(key)!;
        }

        // Wait for the document to be parsed in the other thread
        const msg = await this.worker.parse(document, token);

        // Update our knowledge of the AST
        this.asts.set(key, msg);

        if (options?.disableDiagnostics) {
            this.decl.disable();
        }

        // Update the project declarations
        this.decl.pass(msg.ast, key);

        this.decl.enable();

        if (this.decl.hasComponentInstances) {
            this.hasComponentInstances.add(key);
        } else {
            this.hasComponentInstances.delete(key);
        }

        // Update the annotations
        let annotator = this.annotations.get(key);
        if (!annotator) {
            annotator = new FppAnnotator(this.decl);
            this.annotations.set(key, annotator);
        }

        if (options?.disableDiagnostics) {
            annotator.disable();
        }

        annotator.pass(msg.ast, key);
        annotator.enable();

        this.syntaxListener.flush(key);
        this.syntaxListener.flush(key);
        const uri = vscode.Uri.file(key);
        for (const err of msg.syntaxErrors) {
            this.syntaxListener.emit(uri, err);
        }
        this.syntaxListener.flush(key);

        if (!options?.noAnnotationRefresh) {
            this.refreshAnnotations(options, key);
        }

        return msg;
    }
}
