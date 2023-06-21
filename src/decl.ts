import * as vscode from 'vscode';

import { MemberTraverser } from './traverser';
import * as Fpp from './parser/ast';

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
    cppInterface, // function
    parameter,  // parameter
}

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
