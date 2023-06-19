import * as vscode from 'vscode';

import { FppParser } from './grammar/FppParser';

import * as Fpp from './parser/ast';
import { FppAnnotator, MemberTraverser, fppLegend } from './fpp';

import Signatures from "./signatures.json";
import { FppErrorListener, declRules, exprRules, getCandidates, ignoreTokens } from './parser/parse';
import { AstManager } from './parser/manager';
import { RuleContext } from 'antlr4ts';

class FppProject implements vscode.Disposable {
    private locs = new Set<string>();
    private locsFile?: vscode.Uri;

    private projectStatus: vscode.StatusBarItem;

    constructor(
        readonly manager: AstManager,
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

        // Parse the locs file
        const { ast } = await this.manager.parse(this.locsFile, undefined, true, true);

        // Parse the locs file
        this.locsTrav.pass(ast, this.locsFile.path);

        // Wait for all files to finish
        for (const prom of this.locsTrav.promises) {
            try {
                await prom;
            } catch { }
        }

        // For reparse of all files to resolve declarations
        await this.onScanDone(this.locs);

        // Force reparse of locs
        await this.manager.parse(this.locsFile, undefined, true);
    }

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

    async set(locsFile: vscode.Uri | undefined) {
        if (!locsFile) {
            this.locsFile = undefined;

            this.projectStatus.text = "Load locs.fpp";
            this.projectStatus.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
            this.projectStatus.show();
        } else {
            this.locsFile = locsFile;

            this.projectStatus.text = "Loading...";
            this.projectStatus.backgroundColor = new vscode.ThemeColor('statusBarItem.prominentBackground');
            this.projectStatus.show();

            try {
                await this.scan();
                this.projectStatus.hide();
            } catch (e) {
                vscode.window.showErrorMessage(`Failed to load locs.fpp: ${e}`);
                this.projectStatus.text = "Locs Failed";
                this.projectStatus.backgroundColor = new vscode.ThemeColor('statusBarItem.errorBackground');
            }
        }
    }

    dispose() {
        this.locs.clear();
        this.projectStatus.dispose();
    }
}

interface ISignature {
    signature: string;
    description: string;
    parameters: Record<string, string | string[]>;
    stateMap?: Record<string, number[]> | string[];
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
        this.manager = new AstManager(
            { scheme: 'file', language: 'fpp' },
            this.syntaxListeners
        );

        this.project = new FppProject(
            this.manager,
            async (addUri) => {
                // Refresh declarations created by this AST
                await this.manager.parse(addUri);
            },
            (deleteUri) => {
                this.manager.clear(deleteUri);
            },
            async (locs: Set<string>) => {
                // Reindex all file to resolve declaration errors
                for (const file of locs) {
                    try {
                        await this.manager.parse(vscode.Uri.file(file), undefined, true, true);
                    } catch {

                    }
                }

                this.manager.refreshAnnotations();
                this._onDidChangeSemanticTokens.fire();
            }
        );

        // Once the worker boots up, load the project
        this.subscriptions = [];
        this.manager.ready().then(() => {
            this.subscriptions = [
                vscode.languages.registerDocumentSemanticTokensProvider(this.manager.documentSelector, this, fppLegend),
                vscode.languages.registerDefinitionProvider(this.manager.documentSelector, this),
                vscode.workspace.onDidChangeTextDocument((e) => {
                    if (vscode.languages.match(this.manager.documentSelector, e.document)) {
                        // Reparse the document to update the information
                        this.manager.parse(e.document);
                    }
                }),
                vscode.languages.registerDocumentLinkProvider(this.manager.documentSelector, this),
                vscode.languages.registerHoverProvider(this.manager.documentSelector, this),
                vscode.languages.registerCompletionItemProvider(this.manager.documentSelector, this, " ", ".", ":"),
                vscode.languages.registerSignatureHelpProvider(this.manager.documentSelector, this, " ", ",", "[", "(", "{", "=", ":"),
            ];

            const file = this.context.workspaceState.get<string>("fpp.locsFile");
            this.setLocs(file ? vscode.Uri.file(file) : undefined);
        });
    }

    ready(): Promise<void> {
        return this.manager.ready();
    }

    async setLocs(locsFile: vscode.Uri | undefined) {
        this.context.workspaceState.update('fpp.locsFile', locsFile?.path);
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
        if (this.inComment(document, position)) {
            return;
        }

        // Check if we are hovering over a variable reference
        const association = (await this.manager.get(document, token)).definitions.getAssociation(position);

        let range: vscode.Range | undefined = undefined;
        const md: vscode.MarkdownString[] = [];

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

            // Add the optional annotation
            if (definition.annotation) {
                md.push(new vscode.MarkdownString(definition.annotation));
            }

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

    private inComment(document: vscode.TextDocument, position: vscode.Position): boolean {
        const currentLine = document.lineAt(position.line);
        let commentIdx = currentLine.text.indexOf('#');
        commentIdx = commentIdx < 0 ? currentLine.text.indexOf('@') : commentIdx;

        // We are writing a comment since the cursor is after a line comment start
        return commentIdx >= 0 && commentIdx <= position.character;
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[]> {

        // First things first, check if we are in a comment
        // The parser does not know how to recognize comments since
        // they are expelled at lexing time
        // FPP only has find line comments which makes things simple
        if (this.inComment(document, position)) {
            return;
        }

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
        if (this.inComment(document, position)) {
            return;
        }

        const signaturesDefinitions = (Signatures as { [name: string]: ISignature });

        // Provide all signatures of candidate rules
        const signatures: vscode.SignatureInformation[] = [];
        const matched = (await this.manager.parse(document, token)).ranges.getAssociation(position);
        if (matched) {
            const ruleName = FppParser.ruleNames[matched.value.rule];
            const iSignature = signaturesDefinitions[ruleName];
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

        const [candidates, syntaxErrorListener, parser, core] = getCandidates(document, new vscode.Position(position.line, position.character + 1), declRules);
        const exception = syntaxErrorListener.getException(position);
        if (exception) {
            // We are currently writing a rule
            // We must be at the end of the rule if the token is not matched yet
            // This means the argument offset is the current child count

            // Find the matching signature definition in the parsing rule context stack
            // To do this we must traverse the parsing stack and find a signatured def
            let currentState = exception.state;

            for (
                let ctx: RuleContext | undefined = exception.ctx;
                ctx; currentState = ctx.invokingState, ctx = ctx.parent
            ) {
                const ruleName = FppParser.ruleNames[ctx.ruleIndex];
                if (signaturesDefinitions[ruleName] && signaturesDefinitions[ruleName].stateMap) {
                    // We found one that matches
                    let paramName: string;
                    if (Array.isArray(signaturesDefinitions[ruleName].stateMap)) {
                        paramName = (signaturesDefinitions[ruleName].stateMap as string[])[ctx.childCount];
                    } else {
                        const map = new Map<number, string>();
                        for (const [key, states] of Object.entries(signaturesDefinitions[ruleName].stateMap as Record<string, number[]>)) {
                            for (const state of states) {
                                map.set(state, key);
                            }
                        }

                        const targetParam = map.get(currentState);
                        if (!targetParam) {
                            continue;
                        }

                        paramName = targetParam;
                    }

                    signatures.push(generateSignature(signaturesDefinitions[ruleName], paramName));
                    break;
                }
            }

            return {
                signatures: signatures,
                activeParameter: 0,
                activeSignature: 0,
                lastToken: new vscode.Range(position, position)
            };
        }

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
            const locs = context.workspaceState.get<string>("fpp.locsFile");
            vscode.window.showOpenDialog({
                defaultUri: locs ? vscode.Uri.file(locs) : undefined,
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
