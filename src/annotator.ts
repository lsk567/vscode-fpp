import * as vscode from 'vscode';
import * as path from 'path';

import * as fs from 'fs';

import * as Fpp from './parser/ast';
import { RangeAssociator } from './associator';
import { DeclCollector, FppTokenType, TypeDecl, fppLegend, tokenParents, tokenTypeNames } from './decl';
import { ExpressionTraverser, MemberTraverser } from './traverser';
import { DiangosicManager } from './diagnostics';

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

export let symLinkCache = new Map<string, string>();

class SymlinkedMap<V> extends Map<string, V> {
    private real(key: string): string {
        const cached = symLinkCache.get(key);
        if (cached) {
            return cached;
        }

        let realpath = fs.realpathSync(key, { encoding: 'utf-8' });
        symLinkCache.set(key, realpath);
        return realpath;
    }

    get(key: string): V | undefined {
        return super.get(this.real(key));
    }

    delete(key: string): boolean {
        return super.delete(this.real(key));
    }

    set(key: string, value: V) {
        return super.set(this.real(key), value);
    }
}

/**
 * Annotates the following on a single AST:
 *   - token highlighting semantics
 *   - diagnostic messages
 *   - document links
 */
export class FppAnnotator extends MemberTraverser {
    tokens = new SymlinkedMap<vscode.SemanticTokensBuilder>();
    definitions = new SymlinkedMap<RangeAssociator<Fpp.Decl>>();
    links = new SymlinkedMap<vscode.DocumentLink[]>();

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
                            scope: [...this.scope],
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

        const fullQualified = [...value.scope, value.name];
        this.decl.references.add(DiangosicManager.flat(fullQualified), source, range);
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

            // Make some assumptions about semantic annotations to keep things pretty
            for(let i = 0; i < ident.length; i++) {
                if (i + 1 === ident.length) {
                    this.semantic(ident[i], type);

                    this.emit(
                        vscode.Uri.file(ident[i].location.source),
                        new vscode.Diagnostic(
                            MemberTraverser.asRange(ident[i].location),
                            `No ${tokenTypeNames[type].toLowerCase()} '${ident[i].value}' found in ${MemberTraverser.flat(ident.slice(0, 1))}`
                        )
                    );
                } else {
                    this.semantic(ident[i], FppTokenType.module);
                }
            }

            return;
        }

        const finalTok = resolved[resolved.length - 1];
        this.semantic(finalTok, type);
        const resolveDecl = this.decl.get(MemberTraverser.flat(resolved), type)!;

        // Attach the definition to this token
        this.addDefinition(finalTok.location.source, FppAnnotator.asRange(resolved[resolved.length - 1].location), resolveDecl);

        const fullyResolvedQualifier = [...resolveDecl.scope, resolveDecl.name];

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
            this.expr(member.size, scope, { complex: false, type: "U32", location: Fpp.implicitLocation });
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
