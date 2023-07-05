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

    /**
     * Track this AST in the decls if its in the locs file
     */
    fromLocs?: boolean;
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

export class FppWorker extends Worker implements vscode.Disposable {
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
