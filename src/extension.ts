import * as vscode from 'vscode';

import { TextDecoder, } from 'util';

import { FppParser } from './grammar/FppParser';

import * as Fpp from './parser/ast';
import { FppAnnotator, MemberTraverser, fppLegend } from './fpp';

import Signatures from "./signatures.json";
import { FppErrorListener, declRules, exprRules, getCandidates, ignoreTokens, parseFpp } from './parser/parse';
import { Token } from 'antlr4ts';
import { AstManager } from './parser/manager';

const textDecoder = new TextDecoder();

class FppProject implements vscode.Disposable {
    private locs = new Set<string>();
    private locsFile?: vscode.Uri;
    private fsWatcher?: vscode.FileSystemWatcher;

    private projectStatus: vscode.StatusBarItem;

    private locsTrav = new class extends MemberTraverser {
        parent!: FppProject;
        newLocs = new Set<string>();
        promises: Promise<void>[] = [];

        pass(ast: Fpp.TranslationUnit, grammarSource: string): void {
            this.newLocs.clear();
            this.promises = [];
            super.pass(ast, grammarSource);

            for (const loc of this.parent) {
                if (!this.newLocs.has(loc)) {
                    this.parent.onDelete(vscode.Uri.file(loc));
                }
            }

            this.parent.setLocs(this.newLocs);
        }

        protected locationStmt(ast: Fpp.LocationStmt, grammarSource: string, scope: Fpp.QualifiedIdentifier): void {
            if (this.newLocs.has(ast.path.value)) {
                // No need to double dip this file
                return;
            }

            if (!this.parent.has(ast.path.value)) {
                this.promises.push(this.parent.onCreate(vscode.Uri.file(ast.path.value)));
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

    constructor(
        private readonly syntaxListener: FppErrorListener,
        readonly onCreate: (file: vscode.Uri) => Promise<void>,
        readonly onDelete: (file: vscode.Uri) => void,
        readonly onScanDone: (locs: Set<string>) => Promise<void>
    ) {
        this.projectStatus = vscode.window.createStatusBarItem(
            'fpp.projectStatus',
            vscode.StatusBarAlignment.Right,
            2
        );

        this.projectStatus.command = "fpp.open";
        this.locsTrav.parent = this;
    }

    private async scan() {
        // Read the locsFile file
        if (!this.locsFile) {
            throw new Error('No locs loaded');
        }

        // Read and decode the locs file
        const text = textDecoder.decode(await vscode.workspace.fs.readFile(this.locsFile));

        // Parse the locs file
        try {
            // Parse this FPP inline
            const locsAst = parseFpp(text, this.syntaxListener, this.locsFile);
            this.locsTrav.pass(locsAst, this.locsFile.path);

            // Wait for all files to finish
            for (const prom of this.locsTrav.promises) {
                try {
                    await prom;
                } catch { }
            }

            await this.onScanDone(this.locs);
        } catch (e) {
            vscode.window.showErrorMessage(`Failed to parse locs file: ${e}`);
        }
    }

    async set(locsFile: vscode.Uri | undefined) {
        if (!locsFile) {
            this.fsWatcher?.dispose();
            this.fsWatcher = undefined;
            this.locsFile = undefined;

            this.projectStatus.text = "Load locs.fpp";
            this.projectStatus.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
            this.projectStatus.show();
        } else {
            this.locsFile = locsFile;
            this.fsWatcher?.dispose();
            // this.fsWatcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(locsFile, '*'));

            this.projectStatus.text = "Loading...";
            this.projectStatus.backgroundColor = new vscode.ThemeColor('statusBarItem.prominentBackground');
            this.projectStatus.show();

            await this.scan();
            this.projectStatus.hide();
        }
    }

    dispose() {
        this.fsWatcher?.dispose();
        this.locs.clear();
        this.projectStatus.dispose();
    }
}

interface ISignature {
    signature: string;
    description: string;
    parameters: Record<string, string | string[]>;
}

function generateSignature(signature: ISignature, activeParameter: string): vscode.SignatureInformation {
    const parameters: vscode.ParameterInformation[] = [];
    let activeParameterIdx: number | undefined = undefined;

    let i = 0;
    for (const [name, desc] of Object.entries(signature.parameters)) {
        let description: string;
        if (typeof desc === "string") {
            description = desc;
        } else {
            description = desc.join("\n");
        }

        if (name === activeParameter) {
            activeParameterIdx = i;
        }

        parameters.push(new vscode.ParameterInformation(name, new vscode.MarkdownString(description)));
        i++;
    }

    if (activeParameterIdx === undefined) {
        // Keywords and symbols are not explicitely
        // defined in the signature file
        // We still include and highlight them in the signature
        parameters.push(new vscode.ParameterInformation(activeParameter));
        activeParameterIdx = parameters.length - 1;
    }

    const out = new vscode.SignatureInformation(signature.signature, signature.description);
    out.parameters = parameters;
    out.activeParameter = activeParameterIdx;
    return out;
}

class FppExtension implements
    vscode.DocumentSemanticTokensProvider,
    // vscode.TypeDefinitionProvider,
    vscode.DefinitionProvider,
    vscode.DocumentLinkProvider,
    vscode.HoverProvider,
    vscode.CompletionItemProvider,
    vscode.SignatureHelpProvider,
    vscode.Disposable {

    private project: FppProject;
    private manager: AstManager;

    private subscriptions: vscode.Disposable[];
    private syntaxListeners: FppErrorListener;

    constructor(
        private readonly context: vscode.ExtensionContext
    ) {
        this.syntaxListeners = new FppErrorListener();
        this.manager = new AstManager();

        const docSelector: vscode.DocumentSelector = { scheme: 'file', language: 'fpp' };
        this.project = new FppProject(
            this.syntaxListeners,
            async (addUri) => {
                // Refresh declarations created by this AST
                await this.manager.parse(addUri);
                this._onDidChangeSemanticTokens.fire();
            },
            (deleteUri) => {
                this.manager.clear(deleteUri);
            },
            async (locs: Set<string>) => {
                // Reindex all file to resolve declaration errors
                for (const file of locs) {
                    await this.manager.parse(vscode.Uri.file(file), undefined, true);
                }

                this._onDidChangeSemanticTokens.fire();
            }
        );

        // Once the worker boots up, load the project
        this.subscriptions = [];
        this.manager.ready().then(() => {
            this.subscriptions = [
                vscode.languages.registerDocumentSemanticTokensProvider(docSelector, this, fppLegend),
                vscode.languages.registerDefinitionProvider(docSelector, this),
                vscode.workspace.onDidChangeTextDocument((e) => {
                    if (vscode.languages.match(docSelector, e.document)) {
                        // Reparse the document to update the information
                        this.manager.parse(e.document);
                    }
                }),
                vscode.languages.registerDocumentLinkProvider(docSelector, this),
                vscode.languages.registerHoverProvider(docSelector, this),
                vscode.languages.registerCompletionItemProvider(docSelector, this, " ", "."),
                vscode.languages.registerSignatureHelpProvider(docSelector, this, " ", ",", "[", "(", "{", "="),
            ];

            this.project.set(this.context.workspaceState.get("fpp.locsFile"));
        });
    }

    ready(): Promise<void> {
        return this.manager.ready();
    }

    async setLocs(locsFile: vscode.Uri | undefined) {
        this.context.workspaceState.update('fpp.locsFile', locsFile);
        await this.project.set(locsFile);
    }

    _onDidChangeSemanticTokens = new vscode.EventEmitter<void>();
    onDidChangeSemanticTokens = this._onDidChangeSemanticTokens.event;
    async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
        return (await this.manager.get(document)).tokens.build();
    }

    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition | undefined> {
        const definition = (await this.manager.get(document)).definitions.get(position);
        if (definition) {
            return FppAnnotator.asLocation(definition.name.location);
        }
    }

    provideTypeDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition> {
        return undefined;
    }

    async provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentLink[]> {
        return (await this.manager.get(document)).links;
    }

    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover | undefined> {
        // Check if we are hovering over a variable reference
        const association = (await this.manager.get(document)).definitions.getAssociation(position);

        const signature = await this.provideSignatureHelp(document, position, token, {
            triggerKind: vscode.SignatureHelpTriggerKind.Invoke,
            isRetrigger: false,
            triggerCharacter: undefined,
            activeSignatureHelp: undefined
        });

        let range: vscode.Range | undefined = undefined;
        const md: vscode.MarkdownString[] = [];

        if (signature) {
            const paramMd = new vscode.MarkdownString();
            const sigMd = new vscode.MarkdownString();

            const sig = signature.signatures[signature.activeSignature];
            const param = sig.parameters[sig.activeParameter ?? signature.activeParameter];
            if (param.documentation) {
                if (typeof param.documentation === "string") {
                    paramMd.appendText(param.documentation);
                } else if (param.documentation) {
                    paramMd.appendMarkdown(param.documentation.value);
                }
            }

            if (sig.documentation) {
                if (typeof sig.documentation === "string") {
                    sigMd.appendText(sig.documentation);
                } else if (sig.documentation) {
                    sigMd.appendMarkdown(sig.documentation.value);
                }
            }

            md.push(paramMd);
            md.push(sigMd);

            range = signature.lastToken;
        }

        if (association) {
            const definition = association.value;
            let typeName: string | undefined;
            if (definition.fppType) {
                if (definition.fppType.complex) {
                    typeName = MemberTraverser.flat(definition.fppType.type);
                } else {
                    typeName = definition.fppType.type;
                }
            }

            const fullName = FppAnnotator.flat(definition.scope ?? [], definition.name);

            const mdAssociation = new vscode.MarkdownString();
            mdAssociation.appendCodeblock(
                typeName ?
                    `(${definition.type.replace("Decl", "")}) ${fullName}: ${typeName}`
                    : `(${definition.type.replace("Decl", "")}) ${fullName}`,
                'typescript'
            );

            md.push(mdAssociation);
            range = new vscode.Range(
                association.range.start.line, association.range.start.character,
                association.range.end.line, association.range.end.character
            );
        }

        if (!range) {
            return undefined;
        }

        return new vscode.Hover(md, range);
    }

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[]> {
        const [candidates, listener, parser] = getCandidates(document, position, exprRules);
        const out: vscode.CompletionItem[] = [];

        for (const candidate of candidates.tokens) {
            const displayName = parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName.startsWith("'")) {
                out.push(
                    new vscode.CompletionItem(
                        displayName.replaceAll("'", ""),
                        vscode.CompletionItemKind.Keyword)
                );
            }
        }

        if (out.length > 0) {
            return out;
        }

        const syntaxException = listener.getException(position);
        if (syntaxException) {
            if (syntaxException.expectedTokens) {
                for (const token of syntaxException.expectedTokens.toArray()) {
                    if (ignoreTokens.has(token)) {
                        continue;
                    }

                    const displayName = parser.vocabulary.getDisplayName(token);
                    if (displayName.startsWith("'")) {
                        out.push(
                            new vscode.CompletionItem(
                                displayName.replaceAll("'", ""),
                                vscode.CompletionItemKind.Keyword)
                        );
                    }
                }
            }
        }

        if (out.length > 0) {
            return out;
        }

        for (const candidate of candidates.rules) {
            switch (candidate[0]) {
                case FppParser.RULE_expr:

                    break;
            }
        }

        return out;
    }

    async provideSignatureHelp(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.SignatureHelpContext
    ): Promise<vscode.SignatureHelp & { lastToken: vscode.Range } | undefined> {

        // Provide all signatures of candidate rules
        const signatures: vscode.SignatureInformation[] = [];
        const matched = (await this.manager.parse(document, token)).ranges.getAssociation(position);
        if (matched) {
            const ruleName = FppParser.ruleNames[matched.value.rule];
            const iSignature = (Signatures as { [name: string]: ISignature })[ruleName];
            if (iSignature) {
                signatures.push(generateSignature(iSignature, matched.value.param));
            } else {
                console.error(`No signature for ${ruleName}`);
            }

            return {
                signatures: signatures,
                activeParameter: 0,
                activeSignature: 0,
                lastToken: new vscode.Range(
                    matched.range.start.line, matched.range.start.character,
                    matched.range.start.line, matched.range.end.character
                )
            };
        }

        const [candidates, _, parser, core] = getCandidates(document, position, declRules);
        

        return undefined;
    }

    dispose() {
        this.subscriptions.map(e => e.dispose());
        this.subscriptions = [];

        this.manager.dispose();
        this.project.dispose();
    }
}

export function activate(context: vscode.ExtensionContext) {
    const extension = new FppExtension(context);

    context.subscriptions.push(
        extension,
        vscode.commands.registerCommand('fpp.index', () => {
            // extension.refresh(true);
        }),
        vscode.commands.registerCommand('fpp.load', async (file?: vscode.Uri) => {
            if (!file) {
                vscode.commands.executeCommand('fpp.open');
            } else {
                await extension.setLocs(file);
            }
        }),
        vscode.commands.registerCommand('fpp.close', async () => {
            await extension.setLocs(undefined);
        }),
        vscode.commands.registerCommand('fpp.open', () => {
            vscode.window.showOpenDialog({
                defaultUri: context.workspaceState.get("fpp.locsFile"),
                openLabel: "Open locs",
                canSelectFiles: true,
                canSelectFolders: false,
                canSelectMany: false,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                filters: { "FPP": ["fpp"] },
                title: "Open 'locs.fpp' files in build directory"
            }).then((value) => {
                if (value) {
                    extension.setLocs(value[0]);
                }
            });
        })
    );
}

export function deactivate() { }
