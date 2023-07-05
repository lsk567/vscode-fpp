import * as vscode from 'vscode';

import * as Fpp from './parser/ast';
import { AstManager } from './parser/manager';
import { MemberTraverser } from './traverser';
import { symLinkCache } from './annotator';

export class FppProject implements vscode.Disposable {
    private locs = new Set<string>();
    private locsFile?: vscode.Uri;

    private locsNew: vscode.LanguageStatusItem;
    private locsReload: vscode.LanguageStatusItem;

    constructor(
        readonly manager: AstManager,
        readonly onCreate: (file: vscode.Uri, token?: vscode.CancellationToken) => Promise<void>,
        readonly onDelete: (file: vscode.Uri) => void,
        readonly onScanDone: (locs: Set<string>, increment: number, progress: vscode.Progress<{ message?: string; increment?: number }>, token: vscode.CancellationToken) => Promise<void>
    ) {
        this.locsNew = vscode.languages.createLanguageStatusItem(
            'fpp.locsNew',
            this.manager.documentSelector
        );
        this.locsNew.name = "FPP Project Status";

        this.locsReload = vscode.languages.createLanguageStatusItem(
            'fpp.locsReload',
            this.manager.documentSelector
        );

        this.refreshLanguageStatus();

        this.locsTrav.parent = this;
    }

    private refreshLanguageStatus() {
        if (!this.locsFile) {
            this.locsNew.text = "No `locs.fpp` file file loaded";
            this.locsNew.command = { title: "Load", command: "fpp.open" };
            this.locsNew.severity = vscode.LanguageStatusSeverity.Warning;

            // Don't show this language item right now
            this.locsReload.selector = { scheme: 'INVALID', language: 'INVALID' };

            this.locsReload.command = undefined;
            this.locsReload.detail = undefined;
            this.locsReload.text = "";
        } else {
            this.locsNew.text = "FPP Project Loaded";
            this.locsNew.command = { title: "Close", command: "fpp.close" };
            this.locsNew.severity = vscode.LanguageStatusSeverity.Information;

            this.locsReload.selector = this.manager.documentSelector;
            this.locsReload.command = { title: "Reload", command: "fpp.reload" };
            this.locsReload.detail = "Reload FPP Project";
            this.locsReload.text = vscode.workspace.asRelativePath(this.locsFile);
        }
    }

    private async scan(progress: vscode.Progress<{ message?: string; increment?: number }>, token: vscode.CancellationToken) {
        // Read the locsFile file
        if (!this.locsFile) {
            throw new Error('No locs loaded');
        }

        symLinkCache.clear();
        this.manager.decls.clearAll();

        progress.report({
            message: "Scanning locs file",
            increment: 0
        });

        // Parse the locs file
        const { ast } = await this.manager.parse(this.locsFile, undefined, {
            forceReparse: true,
            noAnnotationRefresh: true,
            disableDiagnostics: true
        });

        // Parse the locs file
        this.locsTrav.pass(ast);
        const indexCount = this.locsTrav.promises.length;

        // Wait for all files to finish
        let i = 1;
        this.locsTrav.token = token;
        for (const [uri, prom] of this.locsTrav.promises) {
            try {
                progress.report({
                    message: uri.path,
                    increment: 100 / (this.locs.size + indexCount)
                });

                await prom;
            } catch { }
            i++;
        }

        this.locsTrav.token = undefined;

        // For reparse of all files to resolve declarations
        await this.onScanDone(this.locs, 100 / (this.locs.size + indexCount), progress, token);

        // Force reparse of locs
        await this.manager.parse(this.locsFile, token, {
            forceReparse: true
        });
    }

    private locsTrav = new class extends MemberTraverser {
        parent!: FppProject;

        newLocs = new Set<string>();
        promises: [vscode.Uri, Promise<void>][] = [];
        token?: vscode.CancellationToken;

        pass(ast: Fpp.TranslationUnit): void {
            this.newLocs.clear();
            this.promises = [];
            super.pass(ast);

            for (const loc of this.parent) {
                if (!this.newLocs.has(loc)) {
                    this.parent.onDelete(vscode.Uri.file(loc));
                }
            }

            this.parent.setLocs(this.newLocs);
        }

        protected locationStmt(ast: Fpp.LocationStmt, scope: Fpp.QualifiedIdentifier): void {
            if (this.newLocs.has(ast.path.value)) {
                // No need to double dip this file
                return;
            }

            if (!this.parent.has(ast.path.value)) {
                const uri = vscode.Uri.file(ast.path.value);
                this.promises.push([uri, this.parent.onCreate(uri, this.token)]);
            }

            this.newLocs.add(ast.path.value);
        }
    }();

    [Symbol.iterator](): Iterator<string> {
        return this.locs.keys();
    }

    has(loc: string): boolean {
        return this.locs.has(loc);
    }

    setLocs(locs: Set<string>) {
        this.locs = new Set<string>(locs);
    }

    async reload() {
        this.refreshLanguageStatus();
        if (!this.locsFile) {
            return;
        }

        this.locsReload.busy = true;

        try {
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Indexing FPP Project",
                cancellable: true
            }, this.scan.bind(this));
        } catch (e) {
            vscode.window.showErrorMessage(`Failed to load locs.fpp: ${e}`);
            this.locsNew.text = "Locs load failed";
            this.locsNew.severity = vscode.LanguageStatusSeverity.Error;
        } finally {
            this.locsReload.busy = false;
        }
    }

    async set(locsFile: vscode.Uri | undefined) {
        if (!locsFile) {
            this.locsFile = undefined;
            this.refreshLanguageStatus();
        } else {
            this.locsFile = locsFile;

            this.refreshLanguageStatus();
            this.locsNew.busy = true;

            try {
                await vscode.window.withProgress({
                    location: vscode.ProgressLocation.Notification,
                    title: "Indexing FPP Project",
                    cancellable: true
                }, this.scan.bind(this));
            } catch (e) {
                vscode.window.showErrorMessage(`Failed to load locs.fpp: ${e}`);
                this.locsNew.text = "Locs load failed";
                this.locsNew.severity = vscode.LanguageStatusSeverity.Error;
            } finally {
                this.locsNew.busy = false;
            }
        }
    }

    dispose() {
        this.locs.clear();
        this.locsNew.dispose();
        this.locsReload.dispose();
    }
}
