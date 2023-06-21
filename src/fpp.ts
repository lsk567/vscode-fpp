import * as vscode from 'vscode';
import * as path from 'path';

import * as fs from 'fs';

import * as Fpp from './parser/ast';
import { RangeAssociator } from './associator';

type MessageSeverity = "info" | "warning" | "error";
export interface AstMessage {
    severity: MessageSeverity;
    location: Fpp.Location;
    message: string;
}

export class DiangosicManager implements vscode.Disposable {
    private diagnostics: vscode.DiagnosticCollection;
    private pendingDiagnostics = new Map<string, vscode.Diagnostic[]>();

    private isDisabled: boolean = false;

    constructor() {
        this.diagnostics = vscode.languages.createDiagnosticCollection("fpp");
    }

    flush(grammarSource: string) {
        this.diagnostics.set(vscode.Uri.file(grammarSource), undefined);
        for (const [uri, diags] of this.pendingDiagnostics) {
            this.diagnostics.set(vscode.Uri.file(uri), diags);
        }
        this.pendingDiagnostics.clear();
    }

    static asRange(location: Fpp.Location): vscode.Range {
        const start = new vscode.Position(location.start.line, location.start.column);
        const end = new vscode.Position(location.end.line, location.end.column);
        return new vscode.Range(start, end);
    }

    static asLocation(location: Fpp.Location): vscode.Location {
        return new vscode.Location(vscode.Uri.file(location.source), FppAnnotator.asRange(location));
    }

    static getQualifiedRange(qualified: Fpp.QualifiedIdentifier) {
        // The last token should always be non-implicit
        const last = MemberTraverser.asRange(qualified[qualified.length - 1].location);

        // Get the first non-implicit token
        for (const tok of qualified) {
            if (tok.location.start.line !== -1) {
                return MemberTraverser.asRange(tok.location).union(last);
            }
        }

        return last;
    }

    static flat(qual: Fpp.QualifiedIdentifier, f?: Fpp.Identifier): string {
        return (f ? qual.concat(f) : qual).map(q => q ? q.value : "").join(".");
    }

    clear(source: string) {
        this.pendingDiagnostics.delete(source);
        this.diagnostics.delete(vscode.Uri.file(source));
    }

    dispose() {
        this.pendingDiagnostics.clear();
        this.diagnostics.dispose();
    }

    disable() {
        this.isDisabled = true;
    }

    enable() {
        this.isDisabled = false;
    }

    emit(uri: vscode.Uri, diagnostic: vscode.Diagnostic) {
        if (this.isDisabled) {
            return;
        }

        if (!this.pendingDiagnostics.has(uri.path)) {
            this.pendingDiagnostics.set(uri.path, [diagnostic]);
        } else {
            this.pendingDiagnostics.get(uri.path)!.push(diagnostic);
        }
    }
}

export abstract class MemberTraverser extends DiangosicManager {
    private passSemaphore: number = 0;

    pass(ast: Fpp.TranslationUnit<Fpp.Member>, scope: Fpp.QualifiedIdentifier = []) {
        this.passSemaphore++;

        for (const member of ast.members) {
            this.traverse(member, scope);
        }

        this.passSemaphore--;

        // Only flush diags on the outer most recursion
        if (this.passSemaphore === 0) {
            this.flush(ast.location.source);
        }
    }

    protected traverse(ast: Fpp.Member, scope: Fpp.QualifiedIdentifier) {
        if (ast.isError) {
            return;
        }

        switch (ast.type) {
            case 'AbstractTypeDecl':
                this.abstractTypeDecl(ast, scope);
                break;
            case 'ArrayDecl':
                this.arrayDecl(ast, scope);
                break;
            case 'ConstantDecl':
                this.constantDecl(ast, scope);
                break;
            case 'StructDecl':
                this.structDecl(ast, scope);
                break;
            case 'CommandDecl':
                this.commandDecl(ast, scope);
                break;
            case 'ParamDecl':
                this.paramDecl(ast, scope);
                break;
            case 'GeneralPortInstanceDecl':
                this.generalPortInstanceDecl(ast, scope);
                break;
            case 'SpecialPortInstanceDecl':
                this.specialPortInstanceDecl(ast, scope);
                break;
            case 'TelemetryChannelDecl':
                this.telemetryChannelDecl(ast, scope);
                break;
            case 'EnumDecl':
                this.enumDecl(ast, scope);
                break;
            case 'EventDecl':
                this.eventDecl(ast, scope);
                break;
            case 'IncludeStmt':
                this.includeStmt(ast, scope);
                break;
            case 'InternalPortDecl':
                this.internalPortDecl(ast, scope);
                break;
            case 'MatchStmt':
                this.matchStmt(ast, scope);
                break;
            case 'ComponentDecl':
                this.componentDecl(ast, scope);
                break;
            case 'ComponentInstanceDecl':
                this.componentInstanceDecl(ast, scope);
                break;
            case 'ModuleDecl':
                this.moduleDecl(ast, scope);
                break;
            case 'PortDecl':
                this.portDecl(ast, scope);
                break;
            case 'TopologyDecl':
                this.topologyDecl(ast, scope);
                break;
            case 'LocationStmt':
                this.locationStmt(ast, scope);
                break;
            case 'ComponentInstanceSpec':
                this.componentInstanceSpec(ast, scope);
                break;
            case 'DirectGraphDecl':
                this.directGraphDecl(ast, scope);
                break;
            case 'PatternGraphStmt':
                this.patternGraphStmt(ast, scope);
                break;
            case 'TopologyImportStmt':
                this.topologyImportStmt(ast, scope);
                break;
            default:
                throw new Error(`Unhandled declaration type ${(ast as any).type}: ${ast}`);
        }
    }

    protected abstractTypeDecl(ast: Fpp.AbstractTypeDecl, scope: Fpp.QualifiedIdentifier) { }
    protected arrayDecl(ast: Fpp.ArrayDecl, scope: Fpp.QualifiedIdentifier) { }
    protected constantDecl(ast: Fpp.ConstantDecl, scope: Fpp.QualifiedIdentifier) { }
    protected structDecl(ast: Fpp.StructDecl, scope: Fpp.QualifiedIdentifier) { }
    protected commandDecl(ast: Fpp.CommandDecl, scope: Fpp.QualifiedIdentifier) { }
    protected paramDecl(ast: Fpp.ParamDecl, scope: Fpp.QualifiedIdentifier) { }
    protected generalPortInstanceDecl(ast: Fpp.GeneralPortInstanceDecl, scope: Fpp.QualifiedIdentifier) { }
    protected specialPortInstanceDecl(ast: Fpp.SpecialPortInstanceDecl, scope: Fpp.QualifiedIdentifier) { }
    protected telemetryChannelDecl(ast: Fpp.TelemetryChannelDecl, scope: Fpp.QualifiedIdentifier) { }
    protected enumDecl(ast: Fpp.EnumDecl, scope: Fpp.QualifiedIdentifier) { }
    protected eventDecl(ast: Fpp.EventDecl, scope: Fpp.QualifiedIdentifier) { }
    protected matchStmt(ast: Fpp.MatchStmt, scope: Fpp.QualifiedIdentifier) { }
    protected internalPortDecl(ast: Fpp.InternalPortDecl, scope: Fpp.QualifiedIdentifier) { }
    protected componentInstanceDecl(ast: Fpp.ComponentInstanceDecl, scope: Fpp.QualifiedIdentifier) { }
    protected portDecl(ast: Fpp.PortDecl, scope: Fpp.QualifiedIdentifier) { }
    protected locationStmt(ast: Fpp.LocationStmt, scope: Fpp.QualifiedIdentifier) { }
    protected componentInstanceSpec(ast: Fpp.ComponentInstanceSpec, scope: Fpp.QualifiedIdentifier) { }
    protected directGraphDecl(ast: Fpp.DirectGraphDecl, scope: Fpp.QualifiedIdentifier) { }
    protected patternGraphStmt(ast: Fpp.PatternGraphStmt, scope: Fpp.QualifiedIdentifier) { }
    protected topologyImportStmt(ast: Fpp.TopologyImportStmt, scope: Fpp.QualifiedIdentifier) { }

    protected includeStmt(ast: Fpp.IncludeStmt<Fpp.Member>, scope: Fpp.QualifiedIdentifier) {
        if (ast.resolved) {
            try {
                this.pass(ast.resolved, scope);
            } catch(e) {
                console.error(e);
            }
        }
    }

    protected componentDecl(ast: Fpp.ComponentDecl, scope: Fpp.QualifiedIdentifier) {
        for (const member of ast.members) {
            this.traverse(member, [...scope, ast.name]);
        }
    }

    protected moduleDecl(ast: Fpp.ModuleDecl, scope: Fpp.QualifiedIdentifier) {
        for (const member of ast.members) {
            this.traverse(member, [...scope, ast.name]);
        }
    }

    protected topologyDecl(ast: Fpp.TopologyDecl, scope: Fpp.QualifiedIdentifier) {
        for (const member of ast.members) {
            // this.traverse(member, [...scope, ast.name]);
            this.traverse(member, scope);
        }
    }
}

export abstract class ExpressionTraverser {
    protected traverse(ast: Fpp.Expr): void {
        switch (ast.type) {
            case 'ArrayExpr': return this.arrayExpr(ast);
            case 'BinaryExpr': return this.binaryExpr(ast);
            case 'BooleanExpr': return this.booleanExpr(ast);
            case 'FloatLiteral': return this.floatLiteral(ast);
            case 'Identifier': return this.identifier(ast);
            case 'IntLiteral': return this.intLiteral(ast);
            case 'NegExpr': return this.negExpr(ast);
            case 'StringLiteral': return this.stringLiteral(ast);
            case 'StructExpr': return this.structExpr(ast);
        }
    }

    protected arrayExpr(ast: Fpp.ArrayExpr) {
        for (const elem of ast.value) {
            this.traverse(elem);
        }
    }

    protected binaryExpr(ast: Fpp.BinaryExpr) {
        this.traverse(ast.left);
        this.traverse(ast.right);
    }

    protected booleanExpr(ast: Fpp.BooleanExpr) { }
    protected floatLiteral(ast: Fpp.LiteralFloatExpr) { }
    protected identifier(ast: Fpp.IdentifierExpr) { }
    protected intLiteral(ast: Fpp.LiteralIntExpr) { }
    protected negExpr(ast: Fpp.NegExpr) { this.traverse(ast.value); }
    protected stringLiteral(ast: Fpp.LiteralStringExpr) { }
    protected structExpr(ast: Fpp.StructExpr) {
        for (const member of ast.value) {
            this.traverse(member.value);
        }
    }
}

export type TypeDecl = Fpp.AbstractTypeDecl | Fpp.StructDecl | Fpp.ArrayDecl | Fpp.EnumDecl;

interface DeclConflict {
    original: Fpp.Identifier;
    conflict: Fpp.Identifier;
}

interface ConstantDefinition extends Fpp.Decl {
    name: Fpp.Identifier;
    value: Fpp.Expr;
}

enum PrimitiveExpressionType {
    integer = "integer",
    floating = "floating",
    boolean = "boolean",
    string = "string",
    array = "array",
    struct = "struct",
}

interface StructExpressionType {
    type: "StructExpr";
    members: {
        name: string;
        type: ExpressionType;
    }[];
}

interface ArrayExpressionType {
    type: "ArrayExpr";
    memberType: ExpressionType;
}

type ExpressionType = (
    PrimitiveExpressionType |
    StructExpressionType |
    ArrayExpressionType
);

export enum FppTokenType {
    module, // namespace
    topology, // macro
    component, // class
    componentInstance, // variable
    constant, // enumMember
    graphGroup, // label
    port, // interface
    type, // type
    modifier, // keyword
    inputPortInstance, // function
    outputPortInstance, // function
    cppInterface, // function
    parameter,  // parameter
}

const tokenTypeNames: string[] = [
    "Module",
    "Topology",
    "Component",
    "Component Instance",
    "Constant",
    "Graph Group",
    "Port",
    "Type",
    "Modifier",
    "Input Port",
    "Output Port",
    "C++ interface",
    "Parameter"
];

// Denotes how declarations can be referenced in other areas
// The resolver uses this to provide the correct semantic coloring
const tokenParents = new Map<FppTokenType, FppTokenType[]>([
    [FppTokenType.topology, [FppTokenType.module]],
    [FppTokenType.component, [FppTokenType.module]],
    [FppTokenType.componentInstance, [FppTokenType.module]],
    [FppTokenType.constant, [FppTokenType.module, FppTokenType.type, FppTokenType.component]],
    [FppTokenType.graphGroup, [FppTokenType.topology]],
    [FppTokenType.port, [FppTokenType.module]],
    [FppTokenType.type, [FppTokenType.module, FppTokenType.component]],
    [FppTokenType.inputPortInstance, [FppTokenType.componentInstance]],
    [FppTokenType.outputPortInstance, [FppTokenType.componentInstance]],
]);

export const fppLegend = new vscode.SemanticTokensLegend(
    [
        'namespace',
        'macro',
        'class',
        'variable',
        'enumMember',
        'label',
        'interface',
        'type',
        'keyword',
        'function',
        'function',
        'function',
        'parameter'
    ],
    []
);

export class DeclCollector extends MemberTraverser {
    components = new Map<string, Fpp.ComponentDecl>();
    componentInstances = new Map<string, Fpp.ComponentInstanceDecl>();
    constants = new Map<string, ConstantDefinition>();
    generalInputPortInstances = new Map<string, Fpp.GeneralPortInstanceDecl>();
    generalOutputPortInstances = new Map<string, Fpp.GeneralPortInstanceDecl>();
    graphGroups = new Map<string, Fpp.DirectGraphDecl>();
    ports = new Map<string, Fpp.PortDecl>();
    topologies = new Map<string, Fpp.TopologyDecl>();
    types = new Map<string, TypeDecl>();

    translationUnitDeclarations = new Map<string, [FppTokenType, string][]>();

    // If a translation unit includes component instances,
    // there is a second stage of reference depth that should
    // force re-annotation on doc refresh. Normally document
    // annotation refresh happens only on open text documents
    // since its not required, in this case it shouldn't matter
    // if the doc is open or not
    hasComponentInstances: boolean = false;

    topologyPortsTrav = new class extends MemberTraverser {
        parent!: DeclCollector;

        protected componentInstanceDecl(ast: Fpp.ComponentInstanceDecl, scope: Fpp.QualifiedIdentifier): void {
            const resolved = this.parent.resolve(ast.fppType.type, scope, FppTokenType.component);
            if (!resolved) {
                // This error will be annotated later
                return;
            }

            this.parent.hasComponentInstances = true;

            const componentScope = [...scope, ast.name];

            const componentAst = this.parent.components.get(MemberTraverser.flat(resolved));
            if (componentAst) {
                for (const member of componentAst.members) {
                    if (member.type === "GeneralPortInstanceDecl") {
                        member.scope = componentScope;
                        const portName = MemberTraverser.flat(componentScope, member.name);
                        if (member.kind.isOutput) {
                            this.parent.generalOutputPortInstances.set(portName, member);
                            this.parent.translationUnitDeclarations.get(ast.location.source)!.push([
                                FppTokenType.outputPortInstance, portName,
                            ]);
                        } else {
                            this.parent.generalInputPortInstances.set(portName, member);
                            this.parent.translationUnitDeclarations.get(ast.location.source)!.push([
                                FppTokenType.inputPortInstance, portName,
                            ]);
                        }
                    }
                }
            }
        }
    };

    conflicts: DeclConflict[] = [];

    constructor() {
        super();
        this.topologyPortsTrav.parent = this;
    }

    clearDecls(grammarSource: string) {
        const alreadyDeclared = this.translationUnitDeclarations.get(grammarSource);
        if (alreadyDeclared) {
            for (const declTup of alreadyDeclared) {
                const [type, decl] = declTup;
                switch (type) {
                    case FppTokenType.component:
                        this.components.delete(decl);
                        break;
                    case FppTokenType.componentInstance:
                        this.componentInstances.delete(decl);
                        break;
                    case FppTokenType.inputPortInstance:
                        this.generalInputPortInstances.delete(decl);
                        break;
                    case FppTokenType.outputPortInstance:
                        this.generalOutputPortInstances.delete(decl);
                        break;
                    case FppTokenType.constant:
                        this.constants.delete(decl);
                        break;
                    case FppTokenType.graphGroup:
                        this.graphGroups.delete(decl);
                        break;
                    case FppTokenType.port:
                        this.ports.delete(decl);
                        break;
                    case FppTokenType.topology:
                        this.topologies.delete(decl);
                        break;
                    case FppTokenType.type:
                        this.types.delete(decl);
                        break;
                    default:
                    case FppTokenType.module:
                        // ModuleDecls are not unique
                        break;
                }
            }
        }

        this.translationUnitDeclarations.set(grammarSource, []);
    }

    pass(ast: Fpp.TranslationUnit, scope: Fpp.QualifiedIdentifier = []): void {
        this.hasComponentInstances = false;
        this.clearDecls(ast.location.source);
        super.pass(ast, scope);
        this.topologyPortsTrav.pass(ast, scope);
    }

    private typeCollect(decl: TypeDecl, scope: Fpp.QualifiedIdentifier) {
        const name = MemberTraverser.flat(scope, decl.name);
        if (this.check(name, FppTokenType.type, decl.name)) {
            return;
        }

        decl.scope = scope;
        this.types.set(name, decl);
        this.translationUnitDeclarations.get(decl.location.source)!.push([FppTokenType.type, name]);
    }

    private constantCollect(decl: Fpp.ConstantDecl | Fpp.EnumMember, scope: Fpp.QualifiedIdentifier, defaultValue: Fpp.Expr) {
        const name = MemberTraverser.flat(scope, decl.name);
        if (this.check(name, FppTokenType.constant, decl.name)) {
            return;
        }

        this.constants.set(name, {
            name: decl.name,
            type: "ConstantDecl",
            scope: scope,
            location: decl.location,
            value: decl.value ?? defaultValue,
            annotation: decl.annotation
        });
        this.translationUnitDeclarations.get(decl.location.source)!.push([FppTokenType.constant, name]);
    }

    abstractTypeDecl(ast: Fpp.AbstractTypeDecl, scope: Fpp.QualifiedIdentifier): void {
        this.typeCollect(ast, scope);
    }

    structDecl(ast: Fpp.StructDecl, scope: Fpp.QualifiedIdentifier): void {
        this.typeCollect(ast, scope);
    }

    arrayDecl(ast: Fpp.ArrayDecl, scope: Fpp.QualifiedIdentifier): void {
        this.typeCollect(ast, scope);
    }

    enumDecl(ast: Fpp.EnumDecl, scope: Fpp.QualifiedIdentifier): void {
        this.typeCollect(ast, scope);

        const enumScope = [...scope, ast.name];
        const one: Fpp.Expr = { type: "IntLiteral", value: 1, location: Fpp.implicitLocation };

        let lastExpression: Fpp.Expr = { type: "IntLiteral", value: -1, location: Fpp.implicitLocation };
        for (const member of ast.members) {
            let currDefault: Fpp.Expr = {
                type: "BinaryExpr",
                operator: { value: "+", location: Fpp.implicitLocation },
                left: lastExpression, right: one, location: Fpp.implicitLocation
            };

            this.constantCollect(member, enumScope, currDefault);
            lastExpression = member.value ?? currDefault;
        }
    }

    constantDecl(ast: Fpp.ConstantDecl, scope: Fpp.QualifiedIdentifier): void {
        this.constantCollect(ast, scope, ast.value);
    }

    componentInstanceDecl(ast: Fpp.ComponentInstanceDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.check(name, FppTokenType.componentInstance, ast.name)) {
            return;
        }

        ast.scope = scope;
        this.componentInstances.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.push([FppTokenType.componentInstance, name]);
    }

    portDecl(ast: Fpp.PortDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.check(name, FppTokenType.port, ast.name)) {
            return;
        }

        ast.scope = scope;
        this.ports.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.push([FppTokenType.port, name]);
    }

    directGraphDecl(ast: Fpp.DirectGraphDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.graphGroups.has(name)) {
            this.conflict(name, this.graphGroups.get(name)!.name, ast.name);
            return;
        }

        ast.scope = scope;
        this.graphGroups.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.push([FppTokenType.graphGroup, name]);
    }

    componentDecl(ast: Fpp.ComponentDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.check(name, FppTokenType.component, ast.name)) {
            return;
        }

        ast.scope = scope;
        this.components.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.push([FppTokenType.component, name]);
        super.componentDecl(ast, scope);
    }

    topologyDecl(ast: Fpp.TopologyDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.check(name, FppTokenType.topology, ast.name)) {
            return;
        }

        ast.scope = scope;
        this.topologies.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.push([FppTokenType.topology, name]);

        super.topologyDecl(ast, scope);
    }

    private conflict(name: string, original: Fpp.Identifier, conflict: Fpp.Identifier) {
        let diag = new vscode.Diagnostic(
            MemberTraverser.asRange(conflict.location),
            `${name} already exists`,
            vscode.DiagnosticSeverity.Error
        );

        diag.relatedInformation = [new vscode.DiagnosticRelatedInformation(
            MemberTraverser.asLocation(original.location),
            `${name} declared here`
        )];

        this.emit(vscode.Uri.file(conflict.location.source), diag);

        this.conflicts.push({ original, conflict });
    }

    // get(name: string, type: FppTokenType.component): Fpp.ComponentDecl | undefined;
    // get(name: string, type: FppTokenType.componentInstance): Fpp.ComponentInstanceDecl | undefined;
    // get(name: string, type: FppTokenType.constant): Fpp.ConstantDecl | undefined;
    // get(name: string, type: FppTokenType.outputPortInstance): Fpp.GeneralPortInstanceDecl | undefined;
    // get(name: string, type: FppTokenType.inputPortInstance): Fpp.GeneralPortInstanceDecl | undefined;
    // get(name: string, type: FppTokenType.graphGroup): Fpp.DirectGraphDecl | undefined;
    // get(name: string, type: FppTokenType.port): Fpp.PortDecl | undefined;
    // get(name: string, type: FppTokenType.topology): Fpp.TopologyDecl | undefined;
    // get(name: string, type: FppTokenType.type): TypeDecl | undefined;

    get(name: string, type: FppTokenType): Fpp.Decl | undefined {
        switch (type) {
            case FppTokenType.module:
            case FppTokenType.modifier:
            case FppTokenType.cppInterface:
            case FppTokenType.parameter:
            default:
                break;

            case FppTokenType.topology:
                return this.topologies.get(name);
            case FppTokenType.component:
                return this.components.get(name);
            case FppTokenType.componentInstance:
                return this.componentInstances.get(name);
            case FppTokenType.constant:
                return this.constants.get(name);
            case FppTokenType.graphGroup:
                return this.graphGroups.get(name);
            case FppTokenType.port:
                return this.ports.get(name);
            case FppTokenType.type:
                return this.types.get(name);
            case FppTokenType.inputPortInstance:
                return this.generalInputPortInstances.get(name);
            case FppTokenType.outputPortInstance:
                return this.generalOutputPortInstances.get(name);
        }
    }

    private check(name: string, type: FppTokenType, token: Fpp.Identifier): boolean {
        let t: Fpp.Decl | undefined;
        switch (type) {
            case FppTokenType.module:
            case FppTokenType.graphGroup:
                break;
            case FppTokenType.topology:
                t = this.topologies.get(name);
                break;
            case FppTokenType.component:
                t = this.components.get(name);
                break;
            case FppTokenType.componentInstance:
                t = this.componentInstances.get(name);
                break;
            case FppTokenType.constant:
                t = this.constants.get(name);
                break;
            case FppTokenType.port:
                t = this.ports.get(name);
                break;
            case FppTokenType.type:
                t = this.types.get(name);
                break;
            case FppTokenType.modifier:
            default:
                break;
        }

        if (t) {
            this.conflict(name, t.name, token);
            return true;
        }

        return false;
    }

    resolve(ident: Fpp.QualifiedIdentifier, scope: Fpp.QualifiedIdentifier, type: FppTokenType): Fpp.QualifiedIdentifier | undefined {
        // Identifiers can optionally include their own scopes
        // To resolve an identifier we need to try all implicit combinations
        // of the current scope

        const tryScope: Fpp.QualifiedIdentifier = [];
        for (const subScope of scope) {
            const full = tryScope.concat(ident);
            const name = MemberTraverser.flat(full);

            const decl = this.get(name, type);
            if (decl) {
                return full;
            }

            // The scope is infered and therefore has no location
            tryScope.push({
                value: subScope.value,
                location: Fpp.implicitLocation
            });
        }

        const full = tryScope.concat(ident);
        const name = MemberTraverser.flat(full);
        const decl = this.get(name, type);
        if (decl) {
            return full;
        }
    }
}

/**
 * Annotates the following on a single AST:
 *   - token highlighting semantics
 *   - diagnostic messages
 *   - document links
 */
export class FppAnnotator extends MemberTraverser {
    tokens = new Map<string, vscode.SemanticTokensBuilder>();
    definitions = new Map<string, RangeAssociator<Fpp.Decl>>();
    links = new Map<string, vscode.DocumentLink[]>();

    exprTrav = new (class extends ExpressionTraverser {
        parent!: FppAnnotator;
        scope!: Fpp.QualifiedIdentifier;
        private expectedReturn!: Fpp.TypeName;
        private resolvedType?: TypeDecl;

        private typeName(type: Fpp.TypeName): string {
            if (type.complex) {
                return MemberTraverser.flat(type.type);
            } else {
                return type.type;
            }
        }

        private is(ast: Fpp.BasicExpr, gotExprType: PrimitiveExpressionType): boolean {
            let ok: boolean;
            let shouldEmit = true;

            if (this.expectedReturn.complex) {
                // Look up the type in decl
                if (!this.resolvedType) {
                    shouldEmit = false;
                }

                switch (gotExprType) {
                    case PrimitiveExpressionType.array:
                        ok = this.resolvedType?.type === "ArrayDecl";
                        break;
                    case PrimitiveExpressionType.struct:
                        ok = this.resolvedType?.type === "StructDecl";
                        break;
                    case PrimitiveExpressionType.integer:
                        ok = this.resolvedType?.type === "EnumDecl";
                    default:
                        ok = false;
                        break;
                }
            } else {
                switch (gotExprType) {
                    case PrimitiveExpressionType.integer:
                        ok = Fpp.isNumeric(this.expectedReturn.type);
                        break;
                    case PrimitiveExpressionType.floating:
                        ok = Fpp.isFloating(this.expectedReturn.type);
                        break;
                    case PrimitiveExpressionType.boolean:
                        ok = this.expectedReturn.type === "bool";
                        break;
                    case PrimitiveExpressionType.string:
                        ok = this.expectedReturn.type === "string";
                        break;
                    default:
                        ok = false;
                        break;
                }
            }

            if (!ok && shouldEmit) {
                this.parent.emit(
                    vscode.Uri.file(ast.location.source),
                    new vscode.Diagnostic(
                        MemberTraverser.asRange(ast.location),
                        `Expected ${this.typeName(this.expectedReturn)} expresssion got ${gotExprType[0]}`
                    )
                );
            }

            return ok;
        }

        private setType(expectedReturn: Fpp.TypeName, forceResolved?: TypeDecl) {
            this.expectedReturn = expectedReturn;
            if (this.expectedReturn.complex) {
                if (forceResolved) {
                    this.resolvedType = forceResolved;
                } else {
                    const resolved = this.parent.decl.resolve(this.expectedReturn.type, this.scope, FppTokenType.type);
                    if (resolved) {
                        this.resolvedType = this.parent.decl.types.get(MemberTraverser.flat(resolved))!;
                    } else {
                        // Type does not exist, error should already be reported
                        return false;
                    }
                }
            }

            return true;
        }

        pass(ast: Fpp.Expr, scope: Fpp.QualifiedIdentifier, expectedReturn: Fpp.TypeName) {
            this.setType(expectedReturn);
            this.scope = scope;
            this.traverse(ast);
        }

        identifier(ast: Fpp.IdentifierExpr) {
            this.parent.identifier(ast.value, this.scope, FppTokenType.constant);
        }

        floatLiteral(ast: Fpp.LiteralFloatExpr): void {
            this.is(ast, PrimitiveExpressionType.floating);
        }

        intLiteral(ast: Fpp.LiteralIntExpr): void {
            this.is(ast, PrimitiveExpressionType.integer);
        }

        booleanExpr(ast: Fpp.BooleanExpr): void {
            this.is(ast, PrimitiveExpressionType.boolean);
        }

        binaryExpr(ast: Fpp.BinaryExpr): void {
            if (this.expectedReturn.complex) {
                this.parent.emit(
                    vscode.Uri.file(ast.location.source),
                    new vscode.Diagnostic(
                        MemberTraverser.asRange(ast.location),
                        `Expression evaluates to primitive, expected ${this.typeName(this.expectedReturn)}`
                    )
                );

                return;
            }

            // Make sure we are expecting a numeric type
            // If not, this type of expression should not be used here
            if (!Fpp.isNumeric(this.expectedReturn.type)) {
                this.parent.emit(
                    vscode.Uri.file(ast.location.source),
                    new vscode.Diagnostic(
                        MemberTraverser.asRange(ast.location),
                        `Binary operations are not supported for ${this.expectedReturn.type}s`
                    )
                );
            } else {
                // We are good, check the rest of the items
                this.traverse(ast.left);
                this.traverse(ast.right);
            }
        }

        arrayExpr(ast: Fpp.ArrayExpr): void {
            if (!this.is(ast, PrimitiveExpressionType.array)) {
                return;
            }

            this.setType((this.resolvedType as Fpp.ArrayDecl).fppType);

            // Make sure every member matches the expected type
            for (const memberAst of ast.value) {
                this.traverse(memberAst);
            }
        }

        structExpr(ast: Fpp.StructExpr): void {
            if (!this.is(ast, PrimitiveExpressionType.struct)) {
                return;
            }

            const resolvedType = (this.resolvedType! as Fpp.StructDecl);

            // Make sure all members are included
            // Make sure there are no extra members
            // Make sure the member values match the required types
            const definedSet = new Map<string, Fpp.StructAssignment>();
            const memberSet = new Map<string, Fpp.StructMember>(
                resolvedType.members.map((e) => [e.name.value, e])
            );

            const uri = vscode.Uri.file(ast.location.source);

            for (const member of ast.value) {
                const memberDefinition = memberSet.get(member.name.value);
                if (!memberDefinition) {
                    this.parent.emit(
                        uri,
                        new vscode.Diagnostic(
                            MemberTraverser.asRange(member.name.location),
                            `${member.name.value} is not a member of ${resolvedType.name.value}`
                        )
                    );

                    continue;
                } else {
                    // Provide semantics and links to member names in struct expressions
                    this.parent.semantic(member.name, FppTokenType.parameter);
                    memberDefinition.scope = this.scope;
                    this.parent.addDefinition(member.name.location.source, FppAnnotator.asRange(member.name.location), memberDefinition);

                    // Validate the member value types
                    if (memberDefinition.size) {
                        const typeNameTok = { value: "Annonymous Array", location: Fpp.implicitLocation };
                        this.setType({
                            complex: true,
                            type: [typeNameTok],
                            location: Fpp.implicitLocation
                        }, {
                            name: typeNameTok,
                            type: "ArrayDecl",
                            fppType: memberDefinition.fppType,
                            size: memberDefinition.size,
                            location: Fpp.implicitLocation
                        });
                    } else {
                        this.setType(memberDefinition.fppType);
                    }

                    this.traverse(member.value);
                }

                if (definedSet.has(member.name.value)) {
                    const diag = new vscode.Diagnostic(
                        MemberTraverser.asRange(member.name.location),
                        `Value for ${member.name.value} provided multiple times`,
                        vscode.DiagnosticSeverity.Warning
                    );
                    diag.relatedInformation = [new vscode.DiagnosticRelatedInformation(
                        MemberTraverser.asLocation(definedSet.get(member.name.value)!.name.location),
                        "Previously defined here"
                    )];

                    this.parent.emit(uri, diag);
                } else {
                    definedSet.set(member.name.value, member);
                }
            }

            const notProvided: string[] = [];
            for (const [key, _] of memberSet) {
                if (!definedSet.has(key)) {
                    notProvided.push(key);
                }
            }

            if (notProvided.length > 0) {
                this.parent.emit(
                    uri,
                    new vscode.Diagnostic(
                        MemberTraverser.asRange(ast.location),
                        `Missing struct members from value: ${notProvided.join(" ")}`
                    )
                );
            }
        }
    })();

    constructor(readonly decl: DeclCollector) {
        super();
        this.exprTrav.parent = this;
    }

    clear(source: string) {
        this.tokens.delete(source);
        this.definitions.delete(source);
        this.links.delete(source);
    }

    pass(ast: Fpp.TranslationUnit, scope: Fpp.QualifiedIdentifier = []): void {
        this.clear(ast.location.source);
        this.decl.pass(ast, scope);
        super.pass(ast, scope);
    }

    semantic(tok: Fpp.Identifier, type: FppTokenType) {
        // Skip error or implicit semantics
        if (tok.location.start.line < 0) {
            return;
        }

        let builder = this.tokens.get(tok.location.source);
        if (!builder) {
            builder = new vscode.SemanticTokensBuilder(fppLegend);
            this.tokens.set(tok.location.source, builder);
        }

        builder.push(FppAnnotator.asRange(tok.location), fppLegend.tokenTypes[type]);
    }

    addDefinition(source: string, range: vscode.Range, value: Fpp.Decl) {
        let associator = this.definitions.get(source);
        if (!associator) {
            associator = new RangeAssociator<Fpp.Decl>();
            this.definitions.set(source, associator);
        }

        associator.add(range, value);
    }

    addLink(source: string, link: vscode.DocumentLink) {
        let links = this.links.get(source);
        if (!links) {
            this.links.set(source, [link]);
        } else {
            links.push(link);
        }
    }

    private identifier(ident: Fpp.QualifiedIdentifier, scope: Fpp.QualifiedIdentifier, type: FppTokenType): Fpp.Decl | undefined {
        if (!ident) {
            return;
        }

        // Marks all parts of the qual-ident
        const resolved = this.decl.resolve(ident, scope, type);
        if (!resolved) {
            if (!ident[0]) {
                return;
            }

            this.emit(
                vscode.Uri.file(ident[0].location.source),
                new vscode.Diagnostic(
                    MemberTraverser.getQualifiedRange(ident),
                    `No ${tokenTypeNames[type].toLowerCase()} named '${MemberTraverser.flat(ident)}' found`
                )
            );
            return;
        }

        const finalTok = resolved[resolved.length - 1];
        this.semantic(finalTok, type);
        const resolveDecl = this.decl.get(MemberTraverser.flat(resolved), type)!;

        // Attach the definition to this token
        this.addDefinition(finalTok.location.source, FppAnnotator.asRange(resolved[resolved.length - 1].location), resolveDecl);

        const fullyResolvedQualifier = [...(resolveDecl.scope ?? scope), resolveDecl.name];

        if (resolved.length === 1) {
            return resolveDecl;
        }

        // Mark all resolved tokens with their semantics
        // Skip any inferred tokens
        let i = 1;
        let possibleTypes: FppTokenType[] = tokenParents.get(type)!;
        for (; i < resolved.length; i++) {
            const buildI = resolved.slice(0, resolved.length - i);
            const build = MemberTraverser.flat(buildI);

            const tok = resolved[resolved.length - i - 1];
            if (tok.location.start.line < 0) {
                return resolveDecl;
            }

            let decl: Fpp.Decl | undefined;
            let foundT: FppTokenType = FppTokenType.module;
            for (const tryT of possibleTypes) {
                decl = this.decl.get(build, tryT);
                if (decl) {
                    foundT = tryT;
                    possibleTypes = tokenParents.get(tryT)!;
                    break;
                }
            }

            if (decl) {
                this.semantic(tok, foundT);

                // Attach the definition to this token
                this.addDefinition(tok.location.source, FppAnnotator.asRange(tok.location), decl);
            } else {
                // If the declaration doesn't explicitly exist,
                // it must be module. Module declarations are not
                // unique and just provide namespacing to declarations
                // They do not have a single declaration

                // We don't actually keep track of module AST positions
                // outside of their own scope so we should do anything more
                // than color the token semantics
                this.addDefinition(tok.location.source, FppAnnotator.asRange(tok.location), {
                    location: fullyResolvedQualifier[resolved.length - i - 1].location,
                    scope: resolved.slice(0, resolved.length - i - 1),
                    type: "ModuleDecl",
                    name: fullyResolvedQualifier[resolved.length - i - 1]
                });
                this.semantic(tok, FppTokenType.module);
                break;
            }
        }

        for (let j = 0; j < resolved.length - i; j++) {
            const tok = resolved[j];
            if (tok.location.start.line < 0) {
                continue;
            }

            this.addDefinition(tok.location.source, FppAnnotator.asRange(tok.location), {
                location: fullyResolvedQualifier[j].location,
                scope: resolved.slice(0, j),
                type: "ModuleDecl",
                name: fullyResolvedQualifier[j]
            });
            this.semantic(tok, FppTokenType.module);
        }

        return resolveDecl;
    }

    private expr(expr: Fpp.Expr | undefined, scope: Fpp.QualifiedIdentifier, expectedReturn: Fpp.TypeName) {
        if (expr) {
            this.exprTrav.scope = scope;
            this.exprTrav.pass(expr, scope, expectedReturn);
        }
    }

    private type(typename: Fpp.TypeName, scope: Fpp.QualifiedIdentifier) {
        if (typename.complex) {
            this.identifier(typename.type, scope, FppTokenType.type);
        }
    }

    abstractTypeDecl(ast: Fpp.AbstractTypeDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.type);
    }

    arrayDecl(ast: Fpp.ArrayDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.type);
        this.type(ast.fppType, scope);
        this.expr(ast.default_, scope, { complex: true, type: [ast.name], location: Fpp.implicitLocation });
        this.expr(ast.size, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });
    }

    constantDecl(ast: Fpp.ConstantDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.constant);

        // TODO(tumbar) Do we need another compiler stage to infer the constant type?
        this.expr(ast.value, scope, { complex: false, type: "F64", location: Fpp.implicitLocation });
    }

    structDecl(ast: Fpp.StructDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.type);
        for (const member of ast.members) {
            this.semantic(member.name, FppTokenType.parameter);
            this.type(member.fppType, scope);
        }
    }

    enumDecl(ast: Fpp.EnumDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.type);
        for (const member of ast.members) {
            this.semantic(member.name, FppTokenType.constant);
        }
    }

    commandDecl(ast: Fpp.CommandDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.cppInterface);
        for (const member of ast.params) {
            this.semantic(member.name, FppTokenType.parameter);
            this.type(member.type, scope);
        }
    }

    paramDecl(ast: Fpp.ParamDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.cppInterface);
        this.type(ast.fppType, scope);
        this.expr(ast.default_, scope, ast.fppType);
    }

    generalPortInstanceDecl(ast: Fpp.GeneralPortInstanceDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, (ast.kind.direction.value === "input") ? FppTokenType.inputPortInstance : FppTokenType.outputPortInstance);
        if (ast.fppType) {
            this.identifier(ast.fppType.type, scope, FppTokenType.port);
        }

        this.expr(ast.n, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });
    }

    specialPortInstanceDecl(ast: Fpp.SpecialPortInstanceDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic({ value: "", location: ast.kind.location }, FppTokenType.modifier);

        // Not a port instance because we shouldn't be allowed to
        // manually connect general ports to special ports
        this.semantic(ast.name, FppTokenType.cppInterface);
    }

    telemetryChannelDecl(ast: Fpp.TelemetryChannelDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.cppInterface);
        this.type(ast.fppType, scope);
    }

    eventDecl(ast: Fpp.EventDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.cppInterface);
        for (const param of ast.params) {
            this.semantic(param.name, FppTokenType.parameter);
            this.type(param.type, scope);
        }
    }

    matchStmt(ast: Fpp.MatchStmt, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.match, FppTokenType.inputPortInstance);
        this.semantic(ast.with, FppTokenType.outputPortInstance);
    }

    internalPortDecl(ast: Fpp.InternalPortDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.cppInterface);
        for (const param of ast.params) {
            this.semantic(param.name, FppTokenType.parameter);
            this.type(param.type, scope);
        }
    }

    componentInstanceDecl(ast: Fpp.ComponentInstanceDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.componentInstance);

        let fppTypeDecl: Fpp.Decl | undefined;
        if (ast.fppType) {
            fppTypeDecl = this.identifier(ast.fppType.type, scope, FppTokenType.component);
        }

        if (ast.at) {
            if (!ast.fppType) {
                this.emit(
                    vscode.Uri.file(ast.location.source),
                    new vscode.Diagnostic(FppAnnotator.asRange(ast.at.location),
                        "Component instance with an 'at' specifier must also include a FPrime component reference")
                );
            } else {
                // The 'at' path is a header file relative to the component definition
                if (fppTypeDecl) {
                    const resolvedPath = path.resolve(path.dirname(fppTypeDecl.name.location.source), ast.at.value);

                    if (fs.existsSync(resolvedPath)) {
                        this.addLink(
                            ast.location.source,
                            new vscode.DocumentLink(
                                MemberTraverser.asRange(ast.at.location),
                                vscode.Uri.file(resolvedPath)
                            )
                        );
                    } else {
                        this.emit(
                            vscode.Uri.file(ast.location.source),
                            new vscode.Diagnostic(FppAnnotator.asRange(ast.at.location),
                                `File '${resolvedPath}' does not exist`)
                        );
                    }
                }
            }
        }

        this.expr(ast.baseId, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });
        this.expr(ast.queueSize, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });
        this.expr(ast.stackSize, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });
        this.expr(ast.priority, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });
        this.expr(ast.cpu, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });

        for (const init of ast.init) {
            this.expr(init.phase, scope, { complex: false, type: "string", location: Fpp.implicitLocation });
        }
    }

    portDecl(ast: Fpp.PortDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.cppInterface);
        if (ast.returnType) {
            this.type(ast.returnType, scope);
        }

        for (const param of ast.params) {
            this.semantic(param.name, FppTokenType.parameter);
            this.type(param.type, scope);
        }
    }

    locationStmt(ast: Fpp.LocationStmt, scope: Fpp.QualifiedIdentifier): void {
        switch (ast.kind.value) {
            case 'instance':
                this.identifier(ast.name, scope, FppTokenType.componentInstance);
                break;
            case 'component':
                this.identifier(ast.name, scope, FppTokenType.component);
                break;
            case 'constant':
                this.identifier(ast.name, scope, FppTokenType.constant);
                break;
            case 'port':
                this.identifier(ast.name, scope, FppTokenType.port);
                break;
            case 'topology':
                this.identifier(ast.name, scope, FppTokenType.topology);
                break;
            case 'type':
                this.identifier(ast.name, scope, FppTokenType.type);
                break;
        }

        this.addLink(
            ast.location.source,
            new vscode.DocumentLink(
                MemberTraverser.asRange(ast.path.location),
                vscode.Uri.file(ast.path.value)
            )
        );
    }

    protected includeStmt(ast: Fpp.IncludeStmt<Fpp.Member>, scope: Fpp.QualifiedIdentifier): void {
        this.addLink(
            ast.location.source,
            new vscode.DocumentLink(
                MemberTraverser.asRange(ast.include.location),
                vscode.Uri.file(ast.include.value)
            )
        );

        super.includeStmt(ast, scope);
    }

    componentInstanceSpec(ast: Fpp.ComponentInstanceSpec, scope: Fpp.QualifiedIdentifier): void {
        this.identifier(ast.name, scope, FppTokenType.componentInstance);
    }

    directGraphDecl(ast: Fpp.DirectGraphDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.graphGroup);
        for (const conn of ast.connections) {
            this.identifier(conn.source.node, scope, FppTokenType.outputPortInstance);
            this.expr(conn.source.index, scope, { complex: false, type: "I32", location: Fpp.implicitLocation });
            this.identifier(conn.destination.node, scope, FppTokenType.inputPortInstance);
            this.expr(conn.destination.index, scope, { complex: false, type: "I32", location: Fpp.implicitLocation });
        }
    }

    patternGraphStmt(ast: Fpp.PatternGraphStmt, scope: Fpp.QualifiedIdentifier): void {
        this.identifier(ast.target, scope, FppTokenType.componentInstance);
        for (const sources of ast.sources) {
            this.identifier(sources, scope, FppTokenType.componentInstance);
        }
    }

    topologyImportStmt(ast: Fpp.TopologyImportStmt, scope: Fpp.QualifiedIdentifier): void {
        this.identifier(ast.topology, scope, FppTokenType.topology);
    }

    componentDecl(ast: Fpp.ComponentDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.component);
        super.componentDecl(ast, scope);
    }

    moduleDecl(ast: Fpp.ModuleDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.module);
        super.moduleDecl(ast, scope);
    }

    topologyDecl(ast: Fpp.TopologyDecl, scope: Fpp.QualifiedIdentifier): void {
        this.semantic(ast.name, FppTokenType.topology);
        super.topologyDecl(ast, scope);
    }
}
