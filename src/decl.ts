import * as vscode from 'vscode';
import * as Fpp from './parser/ast';

import { MemberTraverser } from './traverser';
import { ReferenceTracker } from './referenceTracker';
import { RangeAssociator } from './associator';
import { DiangosicManager } from './diagnostics';

export type TypeDecl = Fpp.AbstractTypeDecl | Fpp.StructDecl | Fpp.ArrayDecl | Fpp.EnumDecl;

interface DeclConflict {
    original: Fpp.Identifier;
    conflict: Fpp.Identifier;
}

interface ConstantDefinition extends Fpp.Decl {
    name: Fpp.Identifier;
    value: Fpp.Expr;
}

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
    inputPortDecl, // function
    outputPortDecl, // function
    cppInterface, // function
    parameter,  // parameter
}

export const tokenTypeNames: string[] = [
    "Module",
    "Topology",
    "Component",
    "Component Instance",
    "Constant",
    "Graph Group",
    "Port",
    "Type",
    "Modifier",
    "Input Port Instance",
    "Output Port Instance",
    "Input Port",
    "Output Port",
    "C++ interface",
    "Parameter"
];

// Denotes how declarations can be referenced in other areas
// The resolver uses this to provide the correct semantic coloring
export const tokenParents = new Map<FppTokenType, FppTokenType[]>([
    [FppTokenType.topology, [FppTokenType.module]],
    [FppTokenType.component, [FppTokenType.module]],
    [FppTokenType.componentInstance, [FppTokenType.module]],
    [FppTokenType.constant, [FppTokenType.module, FppTokenType.type, FppTokenType.component]],
    [FppTokenType.graphGroup, [FppTokenType.topology]],
    [FppTokenType.port, [FppTokenType.module]],
    [FppTokenType.type, [FppTokenType.module, FppTokenType.component]],
    [FppTokenType.inputPortInstance, [FppTokenType.componentInstance]],
    [FppTokenType.outputPortInstance, [FppTokenType.componentInstance]],
    [FppTokenType.inputPortDecl, [FppTokenType.component]],
    [FppTokenType.outputPortDecl, [FppTokenType.component]],
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
    generalInputPortDecl = new Map<string, Fpp.GeneralPortInstanceDecl>();
    generalOutputPortDecl = new Map<string, Fpp.GeneralPortInstanceDecl>();
    graphGroups = new Map<string, Fpp.DirectGraphDecl>();
    ports = new Map<string, Fpp.PortDecl>();
    topologies = new Map<string, Fpp.TopologyDecl>();
    types = new Map<string, TypeDecl>();

    references = new ReferenceTracker<vscode.Range>();
    translationUnitDeclarations = new Map<string, RangeAssociator<[FppTokenType, string]>>();

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
                        const portName = MemberTraverser.flat(componentScope, member.name);
                        if (member.kind.isOutput) {
                            this.parent.generalOutputPortInstances.set(portName, member);
                            this.parent.translationUnitDeclarations.get(ast.location.source)!.add(
                                DiangosicManager.asRange(ast.name.location),
                                [FppTokenType.outputPortInstance, portName]
                            );
                        } else {
                            this.parent.generalInputPortInstances.set(portName, member);
                            this.parent.translationUnitDeclarations.get(ast.location.source)!.add(
                                DiangosicManager.asRange(ast.name.location),
                                [FppTokenType.inputPortInstance, portName]
                            );
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
            for (const [_, declTup] of alreadyDeclared) {
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
                    case FppTokenType.inputPortDecl:
                        this.generalInputPortDecl.delete(decl);
                        break;
                    case FppTokenType.outputPortDecl:
                        this.generalOutputPortDecl.delete(decl);
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

        this.translationUnitDeclarations.set(grammarSource, new RangeAssociator<[FppTokenType, string]>());
        this.references.dispose(grammarSource);
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

        this.translationUnitDeclarations.get(decl.location.source)!.add(
            DiangosicManager.asRange(decl.name.location),
            [FppTokenType.type, name]
        );
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
        this.translationUnitDeclarations.get(decl.location.source)!.add(
            DiangosicManager.asRange(decl.name.location),
            [FppTokenType.constant, name]
        );
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
        this.translationUnitDeclarations.get(ast.location.source)!.add(
            DiangosicManager.asRange(ast.name.location),
            [FppTokenType.componentInstance, name]
        );
    }

    portDecl(ast: Fpp.PortDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.check(name, FppTokenType.port, ast.name)) {
            return;
        }

        ast.scope = scope;
        this.ports.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.add(
            DiangosicManager.asRange(ast.name.location),
            [FppTokenType.port, name]
        );
    }

    directGraphDecl(ast: Fpp.DirectGraphDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.graphGroups.has(name)) {
            this.conflict(name, this.graphGroups.get(name)!.name, ast.name);
            return;
        }

        ast.scope = scope;
        this.graphGroups.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.add(
            DiangosicManager.asRange(ast.name.location),
            [FppTokenType.graphGroup, name]
        );
    }

    componentDecl(ast: Fpp.ComponentDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.check(name, FppTokenType.component, ast.name)) {
            return;
        }

        ast.scope = scope;
        this.components.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.add(
            DiangosicManager.asRange(ast.name.location),
            [FppTokenType.component, name]
        );
        super.componentDecl(ast, scope);
    }

    topologyDecl(ast: Fpp.TopologyDecl, scope: Fpp.QualifiedIdentifier): void {
        const name = MemberTraverser.flat(scope, ast.name);
        if (this.check(name, FppTokenType.topology, ast.name)) {
            return;
        }

        ast.scope = scope;
        this.topologies.set(name, ast);
        this.translationUnitDeclarations.get(ast.location.source)!.add(
            DiangosicManager.asRange(ast.name.location),
            [FppTokenType.topology, name]
        );

        super.topologyDecl(ast, scope);
    }

    generalPortInstanceDecl(ast: Fpp.GeneralPortInstanceDecl, scope: Fpp.QualifiedIdentifier): void {
        if (!ast.name || ast.name.isError) {
            return;
        }

        const portName = MemberTraverser.flat(scope, ast.name);
        if (ast.kind.isOutput) {
            this.generalOutputPortDecl.set(portName, ast);
            this.translationUnitDeclarations.get(ast.location.source)!.add(
                DiangosicManager.asRange(ast.name.location),
                [FppTokenType.outputPortDecl, portName]
            );
        } else {
            this.generalInputPortDecl.set(portName, ast);
            this.translationUnitDeclarations.get(ast.location.source)!.add(
                DiangosicManager.asRange(ast.name.location),
                [FppTokenType.inputPortDecl, portName]
            );
        }
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
            case FppTokenType.inputPortDecl:
                return this.generalInputPortDecl.get(name);
            case FppTokenType.outputPortDecl:
                return this.generalOutputPortDecl.get(name);
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

        let tryScope: Fpp.QualifiedIdentifier = [];
        for (const subScope of scope) {
            const full = tryScope.concat(ident);
            const name = MemberTraverser.flat(full);

            const decl = this.get(name, type);
            if (decl) {
                return full;
            }

            // The scope is infered and therefore has no location
            tryScope = [...tryScope, {
                value: subScope.value,
                location: Fpp.implicitLocation
            }];
        }

        const full = tryScope.concat(ident);
        const name = MemberTraverser.flat(full);
        const decl = this.get(name, type);
        if (decl) {
            return full;
        }
    }
}
