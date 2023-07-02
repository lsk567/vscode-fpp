import * as vscode from 'vscode';

import { FppParser, QualIdentContext } from './grammar/FppParser';

import * as Fpp from './parser/ast';

import Signatures from "./signatures.json";
import { AstManager } from './parser/manager';
import { CompletionRelevantInfo, getCandidates } from './completion';
import { declRules, ignoreTokens } from './parser/common';
import { FppProject } from './project';
import { FppAnnotator } from './annotator';
import { MemberTraverser } from './traverser';
import { FppTokenType, fppLegend } from './decl';
import { DiangosicManager } from './diagnostics';
import { RangeAssociation } from './associator';

const signaturesDefinitions = (Signatures as Record<string, ISignature>);

interface ISignature {
    signature: string;
    parameters: Record<string, string | string[]>;
    stateMap?: {
        offset: number;
        map: Record<string, number[]>
    } | string[];
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

    const out = new vscode.SignatureInformation(signature.signature);
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
    vscode.ReferenceProvider,
    vscode.Disposable {

    private project: FppProject;
    private manager: AstManager;

    private subscriptions: vscode.Disposable[];

    constructor(
        private readonly context: vscode.ExtensionContext
    ) {
        this.manager = new AstManager({ scheme: 'file', language: 'fpp' });

        this.project = new FppProject(
            this.manager,
            async (addUri, token?: vscode.CancellationToken) => {
                // Refresh declarations created by this AST
                await this.manager.parse(addUri, token, {
                    disableDiagnostics: true
                });
            },
            (deleteUri) => {
                this.manager.clear(deleteUri.path);
            },
            async (locs: Set<string>, increment: number, progress: vscode.Progress<{ message?: string; increment?: number }>, token: vscode.CancellationToken) => {
                // Reindex all file to resolve declaration errors
                for (const file of locs) {
                    try {
                        progress.report({ message: file, increment });
                        await this.manager.parse(vscode.Uri.file(file), token, {
                            forceReparse: true,
                            noAnnotationRefresh: true,
                            disableDiagnostics: true
                        });
                    } catch { }
                }

                this.manager.refreshAnnotations();
                this._onDidChangeSemanticTokens.fire();
            }
        );

        // Once the worker boots up, load the project
        this.subscriptions = [];
        this.manager.ready().then(() => {
            const file = this.context.workspaceState.get<string>("fpp.locsFile");

            // Don't allow the language providers interfere with the project loading
            this.setLocs(file ? vscode.Uri.file(file) : undefined)
                .finally(() => {
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
                        vscode.languages.registerReferenceProvider(this.manager.documentSelector, this)
                    ];
                });
        });
    }

    async provideReferences(
        document: vscode.TextDocument,
        position: vscode.Position,
        context: vscode.ReferenceContext,
        token: vscode.CancellationToken
    ): Promise<vscode.Location[] | undefined> {

        if (this.inComment(document, position)) {
            return;
        }

        // Check if this definition exists
        let fullyQualified: string | undefined = this.manager.decls.translationUnitDeclarations.get(document.uri.path)?.get(position)?.[1];
        if (!fullyQualified) {
            // See if this is a reference to a declaration
            let definition = (await this.manager.get(document, token)).definitions.get(document.uri.path)?.get(position);
            if (!definition) {
                return;
            }

            fullyQualified = DiangosicManager.flat(definition.scope ?? [], definition.name);
        }

        const allReferences = this.manager.decls.references.get(fullyQualified);

        const out: vscode.Location[] = [];
        for (const [source, references] of allReferences) {
            const uri = vscode.Uri.file(source);

            for (const ref of references) {
                out.push(new vscode.Location(uri, ref));
            }
        }

        return out;
    }

    ready(): Promise<void> {
        return this.manager.ready();
    }

    async setLocs(locsFile: vscode.Uri | undefined) {
        this.context.workspaceState.update('fpp.locsFile', locsFile?.path);
        await this.project.set(locsFile);
    }

    reload() {
        return this.project.reload();
    }

    _onDidChangeSemanticTokens = new vscode.EventEmitter<void>();
    onDidChangeSemanticTokens = this._onDidChangeSemanticTokens.event;
    async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens | undefined> {
        return (await this.manager.get(document, token)).tokens.get(document.uri.path)?.build();
    }

    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition | undefined> {
        const definition = (await this.manager.get(document, token)).definitions.get(document.uri.path)?.get(position);
        if (definition) {
            return FppAnnotator.asLocation(definition.name.location);
        }
    }

    async provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentLink[]> {
        return (await this.manager.get(document, token)).links.get(document.uri.path) ?? [];
    }

    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover | undefined> {
        if (this.inComment(document, position)) {
            return;
        }

        let association: RangeAssociation<Fpp.Decl> | undefined;

        // Check if this definition exists
        const declAssociation = this.manager.decls.translationUnitDeclarations.get(document.uri.path)?.getAssociation(position);
        if (declAssociation) {
            const { range, value } = declAssociation;
            const decl = this.manager.decls.get(value[1], value[0]);
            association = decl ? { range: range, value: decl } : undefined;
        } else {
            // Check if we are hovering over a variable reference
            association = (await this.manager.get(document, token)).definitions.get(document.uri.path)?.getAssociation(position);
        }

        let range: vscode.Range | undefined = undefined;
        const md: vscode.MarkdownString[] = [];

        if (association) {
            const definition = association.value;
            let typeName: string | undefined;
            if (definition.fppType) {
                if (definition.fppType.complex) {
                    typeName = MemberTraverser.flat(definition.fppType.type);

                    const possibleFppTypes: FppTokenType[] = [
                        FppTokenType.type,
                        FppTokenType.port,
                        FppTokenType.component
                    ];

                    let resolved = false;
                    for (const fppTokType of possibleFppTypes) {
                        const resolvedFppType = this.manager.decls.resolve(definition.fppType.type, definition.scope, fppTokType);
                        if (resolvedFppType) {
                            typeName = MemberTraverser.flat(resolvedFppType);
                            resolved = true;
                            break;
                        }
                    }

                    if (!resolved) {
                        typeName = `${typeName} (Unresolved)`;
                    }
                } else {
                    typeName = definition.fppType.type;
                }
            }

            const fullName = FppAnnotator.flat(definition.scope, definition.name);

            const mdAssociation = new vscode.MarkdownString();
            let signatureBlock: string = `(${definition.type.replace("Decl", "")}) ${fullName}`;
            if (typeName) {
                signatureBlock += `: ${typeName}`;
            }

            if (definition.annotatedValue) {
                signatureBlock += ' ' + definition.annotatedValue;
            }

            mdAssociation.appendCodeblock(signatureBlock, 'typescript');
            md.push(mdAssociation);

            // Add the optional annotation
            let annotationStr: string = '';
            if (definition.annotation) {
                annotationStr = definition.annotation;
            }

            if (definition.annotatedMembers) {
                annotationStr += '\n\n' + definition.annotatedMembers.map(v => ` *@${definition.annotatedMemberName ?? 'param'}* \`${v[0]}\` @< ${v[1]}`).join('\n\n');
            }

            if (annotationStr.length > 0) {
                md.push(new vscode.MarkdownString(annotationStr));
            }

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

    private generateReferenceListFromScope(
        map: Map<string, Fpp.Decl>,
        context: QualIdentContext | undefined,
        scope: readonly string[],
        kind: vscode.CompletionItemKind
    ): vscode.CompletionItem[] {
        let writtenSoFar: string = '';
        if (context) {
            writtenSoFar = context.text.replaceAll(" ", "");
        }

        const out: vscode.CompletionItem[] = [];

        let scopeBuildUp: string[] = [];
        const scopeTeardown = [...scope].reverse();

        const keys = Array.from(map.keys());

        while (true) {
            const prefix = [...scopeBuildUp, writtenSoFar].join(".");
            const foundItems = keys.filter(v => v.startsWith(prefix));

            const nextToks = new Set<string>(
                foundItems.map(found => found.slice(prefix.length).split('.')[0])
            );

            for (const tok of nextToks) {
                const decl = map.get(`${prefix}${tok}`);
                if (decl) {
                    const item = new vscode.CompletionItem(tok, kind);
                    item.detail = decl.annotation;
                    out.push(item);
                } else {
                    out.push(new vscode.CompletionItem(tok, kind));
                }
            }

            const nextScope = scopeTeardown.pop();
            if (nextScope) {
                scopeBuildUp.push(nextScope);
            } else {
                break;
            }
        }

        return out;
    }

    private referenceCompletion(declType: FppTokenType, context: QualIdentContext, scope: string[]): vscode.CompletionItem[] {
        const declTypeMap = new Map<FppTokenType, [Map<string, Fpp.Decl>, vscode.CompletionItemKind]>([
            [FppTokenType.topology, [this.manager.decls.topologies, vscode.CompletionItemKind.Module]],
            [FppTokenType.component, [this.manager.decls.components, vscode.CompletionItemKind.Class]],
            [FppTokenType.componentInstance, [this.manager.decls.componentInstances, vscode.CompletionItemKind.Variable]],
            [FppTokenType.constant, [this.manager.decls.constants, vscode.CompletionItemKind.EnumMember]],
            [FppTokenType.port, [this.manager.decls.ports, vscode.CompletionItemKind.Class]],
            [FppTokenType.type, [this.manager.decls.types, vscode.CompletionItemKind.Class]],
            [FppTokenType.inputPortInstance, [this.manager.decls.generalInputPortInstances, vscode.CompletionItemKind.Function]],
            [FppTokenType.outputPortInstance, [this.manager.decls.generalOutputPortInstances, vscode.CompletionItemKind.Function]],
        ]);

        const mapping = declTypeMap.get(declType);
        if (mapping) {
            return this.generateReferenceListFromScope(
                mapping[0],
                context,
                scope,
                mapping[1]
            );
        }

        return [];
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

        const candidates = getCandidates(document, position);
        const out: vscode.CompletionItem[] = [];

        const keywords: string[] = [];
        for (const candidate of candidates.tokens) {
            if (ignoreTokens.has(candidate)) {
                continue;
            }

            const displayName = candidates.parser.vocabulary.getDisplayName(candidate);
            if (displayName.startsWith("'")) {
                keywords.push(displayName.replaceAll("'", ""));
            }
        }

        keywords.sort().map(keyword => {
            out.push(
                new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword)
            );
        });

        // Check if we either expected an identifier next or if we are currently
        // trying to resolve a qualified identifier.
        // It can't just be a simple identifier because that could be the declaration
        // name which shouldn't bring up any completion items.
        // If RULE_qualIdent does not should up in the candiate.rules its because we expect
        // EITHER a qualIdent or a keyword next. This means that we did not create a qualIdent
        // context in the parser.
        const expectsQualIdent = candidates.tokens.has(FppParser.IDENTIFIER) && keywords.length > 0;
        const qualIdentInfo = candidates.rules.get(FppParser.RULE_qualIdent);
        const expectsExpr = candidates.rules.get(FppParser.RULE_expr);
        if (qualIdentInfo || expectsQualIdent || expectsExpr) {
            // A qualified identifier references some declaration
            // We need to figure out what type this is referencing

            const singleQualIdentMappings: [number, FppTokenType][] = [
                // This is in order of priority
                // Only the first two need to be injested first
                [FppParser.RULE_expr, FppTokenType.constant],
                [FppParser.RULE_typeName, FppTokenType.type],
                [FppParser.RULE_formalParameterList, FppTokenType.type],

                [FppParser.RULE_generalPortInstanceType, FppTokenType.port],
                [FppParser.RULE_componentInstanceDecl, FppTokenType.component],
                [FppParser.RULE_componentInstanceSpec, FppTokenType.componentInstance],
                // This is special since we there are two in the rule
                // [FppParser.RULE_connectionNode, FppTokenType.componentInstance],
                [FppParser.RULE_patternGraphSources, FppTokenType.componentInstance],
                [FppParser.RULE_topologyImportStmt, FppTokenType.topology],
                [FppParser.RULE_generalPortInstanceDecl, FppTokenType.port],

                // I'm not doing this cause its annoying ;)
                // Also who the hell writes these manually
                // [FppParser.RULE_locationStmt, FppTokenType.],
            ];

            for (const [ruleIdx, type] of singleQualIdentMappings) {
                if (candidates.rules.has(ruleIdx)) {
                    return out.concat(this.referenceCompletion(
                        type, qualIdentInfo?.context as QualIdentContext, candidates.scope
                    ));
                }
            }

            // Rule the manual rules
            const connectionInfo = candidates.rules.get(FppParser.RULE_connection);
            if (connectionInfo) {
                return out.concat(this.referenceCompletion(
                    connectionInfo.context.childCount <= 1 ? FppTokenType.outputPortInstance : FppTokenType.inputPortInstance,
                    qualIdentInfo?.context as QualIdentContext, candidates.scope
                ));
            }
        }

        return out;
    }

    private getSignatureRelevantInfo(ruleIdx: number, relevant: CompletionRelevantInfo) {
        const ruleName = FppParser.ruleNames[ruleIdx];

        if (!signaturesDefinitions[ruleName]) {
            return;
        }

        const stateMap = signaturesDefinitions[ruleName].stateMap;

        let paramName: string;
        if (!stateMap) {
            return;
        } else if (Array.isArray(stateMap)) {
            paramName = stateMap[relevant.context.childCount];
        } else {
            const map = new Map<number, string>();

            for (const [key, states] of Object.entries(stateMap.map)) {
                for (const stateOffset of states) {
                    map.set(stateOffset, key);
                }
            }

            const prmName = map.get(relevant.state - stateMap.offset);
            if (!prmName) {
                return;
            }

            paramName = prmName;
        }

        return generateSignature(signaturesDefinitions[ruleName], paramName);
    }

    async provideSignatureHelp(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.SignatureHelpContext
    ): Promise<vscode.SignatureHelp | undefined> {
        if (this.inComment(document, position)) {
            return;
        }

        // Provide all signatures of candidate rules
        const matched = (await this.manager.parse(document, token)).ranges.get(document.uri.path)?.getAssociation(position);
        if (matched) {
            const ruleName = FppParser.ruleNames[matched.value.rule];
            const iSignature = signaturesDefinitions[ruleName];
            if (!iSignature) {
                return undefined;
            }

            return {
                signatures: [generateSignature(iSignature, matched.value.param)],
                activeParameter: 0,
                activeSignature: 0
            };
        }

        const candidates = getCandidates(document, position, declRules);

        const signatures: vscode.SignatureInformation[] = [];
        for (const [ruleIdx, relevant] of candidates.rules) {
            const signature = this.getSignatureRelevantInfo(ruleIdx, relevant);
            if (signature) {
                signatures.push(signature);
            }
        }

        return {
            signatures,
            activeParameter: 0,
            activeSignature: 0
        };
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
        vscode.commands.registerCommand('fpp.reload', extension.reload.bind(extension)),
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
