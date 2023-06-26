import * as vscode from 'vscode';

import { TextDecoder } from 'util';
import path from 'path';
import * as fs from 'fs/promises';

import { Worker } from 'worker_threads';

import * as Fpp from './ast';
import { IFppMessage, IFppWorkerRequest } from './message';
import { RangeAssociator } from '../associator';
import { RangeRuleAssociation } from './common';
import { DiangosicManager } from '../diagnostics';
import { FppAnnotator } from '../annotator';
import { DeclCollector } from '../decl';

interface DocumentOrFile {
    path: string;
    version: number; // 0 for files
    getText(): string;
    getTextSub?(): [string, string];
}

interface PendingParse {
    key: string;
    document: DocumentOrFile;
    resolve: ((msg: FppMessage) => void)[];
    reject: ((err?: string) => void)[];
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
        readonly path: string,
        readonly version: number,
        readonly ast: Fpp.TranslationUnit,
        readonly dependencies: Set<string>,
        readonly ranges: Map<string, RangeAssociator<RangeRuleAssociation>>,
        readonly syntaxErrors: [string, vscode.Diagnostic][]
    ) {
    }

    static deserialize(msg: IFppMessage): FppMessage {
        return new FppMessage(
            msg.path,
            msg.version,
            msg.ast,
            new Set<string>(msg.dependencies),
            new Map<string, RangeAssociator<RangeRuleAssociation>>(
                msg.ranges.map(v => [
                    v[0],
                    new RangeAssociator<RangeRuleAssociation>(v[1])
                ])
            ),
            msg.syntaxErrors.map((diag) => ([
                diag.source, new vscode.Diagnostic(
                    new vscode.Range(...diag.range),
                    diag.message
                )
            ]))
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

    private readyResolve?: () => void;

    constructor() {
        super(path.join(__dirname, 'worker.js'), {
            workerData: { path: './worker.ts' }
        });

        this.wasCancelled = false;

        this.readyPromise = new Promise<void>((resolve) => {
            this.readyResolve = resolve;
        });

        this.on('message', (rawMsg: { code: "error", msg: string } | { code: "success", msg: IFppMessage } | { code: "startup" }) => {
            if (rawMsg.code === "startup") {
                this.readyResolve?.();
                this.readyResolve = undefined;
                return;
            }

            if (!this.inProgress) {
                throw new Error("Got message reply when no parse in progress");
            }

            if (!this.wasCancelled) {
                if (rawMsg.code === "success") {
                    const msg = FppMessage.deserialize(rawMsg.msg);
                    this.inProgress.resolve.map(v => v(msg));
                } else {
                    this.inProgress.reject.map(v => v(rawMsg.msg));
                }
            } else {
                this.inProgress.reject.map(v => v());
            }

            this.inProgress = undefined;
            this.wasCancelled = false;
            this.scheduleNext();
        });

        this.on('exit', (code) => {
            vscode.window.showErrorMessage(`FPP worker exited unexpectedly with code: ${code}`);
        });

        this.on('error', (err) => {
            vscode.window.showErrorMessage(`FPP worker ran into an error: ${err}`);
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
                    text: parsing.document.getText(),
                    subText: parsing.document.getTextSub?.()
                } as IFppWorkerRequest);
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

            return new Promise<FppMessage>((resolve, reject) => {
                pending.resolve.push(resolve);
                pending.reject.push(reject);
            });
        } else {
            const promise = new Promise<FppMessage>((resolve, reject) => {
                this.pending.set(key, { key, document, resolve: [resolve], reject: [reject] });

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
    private parentFile = new Map<string, string>();

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
        const parseOut = await this.parse(document, token);
        return this.annotations.get(parseOut.path)!;
    }

    clear(path: string) {
        this.decl.clearDecls(path);
        this.asts.delete(path);
        this.hasComponentInstances.delete(path);
        this.annotations.get(path)?.dispose();
        this.annotations.delete(path);
        this.syntaxListener.flush(path);
        this.syntaxListener.flush(path);
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
                annotations?.pass(ast.ast);
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
            annotations?.pass(ast.ast);
            annotations?.enable();
        }
    }

    private async getTextOf(uri: vscode.Uri): Promise<[number, string]> {
        // Check if we already have this file open in the workspace
        // If we do, use the open version instead of reading directly from disk
        const alreadyOpenDoc = vscode.workspace.textDocuments.find(v => v.uri.path === uri.path);
        if (alreadyOpenDoc) {
            return [alreadyOpenDoc.version, alreadyOpenDoc.getText()];
        }

        // Read and decode the text file
        return [-1, textDecoder.decode(await vscode.workspace.fs.readFile(uri))];
    }

    async parse(
        documentOrUri: vscode.TextDocument | vscode.Uri,
        token?: vscode.CancellationToken,
        options?: ParsingOptions
    ): Promise<FppMessage> {
        if (documentOrUri instanceof vscode.Uri) {
            const [version, text] = await this.getTextOf(documentOrUri);
            return await this.parseImpl({
                path: documentOrUri.path,
                version,
                getText: () => text,
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
        // Symlinks cause issues since there are two different paths referencing
        // the same file, we should resolve the symlinks here before going further.
        document.path = await fs.realpath(document.path);

        // If we are attempting to parse a file that has been included by another file
        // We actually need to parse the parent file so the declarations work properly
        let parentFile = this.parentFile.get(document.path);

        if (parentFile) {
            const [version, text] = await this.getTextOf(vscode.Uri.file(parentFile));
            return await this.parseImpl2({
                path: parentFile,
                version,
                getText: () => text,
                getTextSub: () => [document.getText(), document.path]
            }, token, {
                ...options,
                forceReparse: true
            });
        } else {
            return await this.parseImpl2(document, token, options);
        }
    }

    private async parseImpl2(
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

        for (const dep of msg.dependencies) {
            this.clear(dep);
            this.parentFile.set(dep, key);
        }

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
            this.decl.disable();
            annotator.disable();
        }

        annotator.pass(msg.ast);

        this.decl.enable();
        annotator.enable();

        this.syntaxListener.flush(key);
        this.syntaxListener.flush(key);
        for (const [uriStr, err] of msg.syntaxErrors) {
            this.syntaxListener.emit(vscode.Uri.file(uriStr), err);
        }
        this.syntaxListener.flush(key);

        if (!options?.noAnnotationRefresh) {
            this.refreshAnnotations(options, key);
        }

        return msg;
    }
}
