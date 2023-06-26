import * as Fpp from './parser/ast';
import { DiangosicManager } from './diagnostics';

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
        } else if ('name' in ast && !ast.name) {
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
            } catch (e) { }
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
