import * as vscode from 'vscode';

import {
    ANTLRErrorListener,
    BufferedTokenStream,
    CharStreams,
    CommonTokenStream,
    ParserRuleContext,
    RecognitionException,
    Recognizer,
    RuleContext,
    Token,
    TokenStream
} from 'antlr4ts';

import { FppParser } from '../grammar/FppParser';
import { FppLexer } from '../grammar/FppLexer';

import * as Fpp from './ast';
import { DiangosicManager } from '../fpp';
import { AstVisitor } from './visitor';
import { CandidatesCollection, CodeCompletionCore } from './completion';
import { RangeAssociator } from '../associator';
import { IntervalSet } from 'antlr4ts/misc/IntervalSet';


export class FppErrorListener extends DiangosicManager implements ANTLRErrorListener<any> {
    private uri?: vscode.Uri;
    set(uri: vscode.Uri) {
        this.uri = uri;
    }

    syntaxError(recognizer: Recognizer<any, any>, offendingSymbol: any, line: number, charPositionInLine: number, message: string, e: RecognitionException | undefined): void {

        const diag = new vscode.Diagnostic(
            new vscode.Range(
                new vscode.Position(line - 1, charPositionInLine),
                new vscode.Position(line - 1, charPositionInLine + (e?.getOffendingToken(recognizer)?.text?.length || 1))
            ), message
        );

        this.emit(this.uri!, diag);
    }
}

export class FppCompletionListener implements ANTLRErrorListener<any> {
    exceptions: {
        position: vscode.Position;
        ctx: RuleContext;
        state: number;
        expectedTokens?: IntervalSet;
    }[] = [];

    syntaxError(
        recognizer: any,
        offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        message: string,
        e: RecognitionException | undefined
    ): void {
        const parser = (recognizer as FppParserWithAnnotator);
        this.exceptions.push({
            position: new vscode.Position(line - 1, charPositionInLine),
            ctx: parser.context,
            state: parser.state,
            expectedTokens: e?.expectedTokens
        });
    }

    getException(position: vscode.Position) {
        for (const exception of this.exceptions) {
            if (exception.position.isEqual(position)) {
                return exception;
            }
        }
    }
}

export function parseFpp(text: string, syntaxListener: FppErrorListener, uri: vscode.Uri): Fpp.TranslationUnit {
    const inputStream = CharStreams.fromString(text);

    const lexer = new FppLexer(inputStream);
    lexer.removeErrorListeners();

    syntaxListener.flush(uri.path);
    syntaxListener.flush(uri.path);
    syntaxListener.set(uri);
    lexer.addErrorListener(syntaxListener);

    const tokenStream = new CommonTokenStream(lexer);
    const parser = new FppParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(syntaxListener);

    try {
        return new AstVisitor(uri.path, tokenStream).visitProg(parser.prog());
    } finally {
        syntaxListener.flush(uri.path);
    }
}

export const declRules = new Set([
    FppParser.RULE_abstractTypeDecl,
    FppParser.RULE_arrayDecl,
    FppParser.RULE_commandDecl,
    FppParser.RULE_componentInstanceDecl,
    FppParser.RULE_componentInstanceSpec,
    FppParser.RULE_connection,
    FppParser.RULE_connectionNode,
    FppParser.RULE_constantDecl,
    FppParser.RULE_enumDecl,
    FppParser.RULE_eventDecl,
    FppParser.RULE_generalPortInstanceDecl,
    FppParser.RULE_includeStmt,
    FppParser.RULE_internalPortDecl,
    FppParser.RULE_locationStmt,
    FppParser.RULE_matchStmt,
    FppParser.RULE_paramDecl,
    FppParser.RULE_patternGraphStmt,
    FppParser.RULE_portDecl,
    FppParser.RULE_specialPortInstanceDecl,
    FppParser.RULE_structDecl,
]);

export const exprRules = new Set([
    FppParser.RULE_qualIdent,
    FppParser.RULE_expr,
    FppParser.RULE_arrayExpr,
    FppParser.RULE_structExpr,
]);

export const ignoreTokens = new Set([
    FppParser.T__0,
    FppParser.T__1,
    FppParser.T__2,
    FppParser.T__3,
    FppParser.T__4,
    FppParser.T__5,
    FppParser.T__6,
    FppParser.T__7,
    FppParser.T__8,
    FppParser.T__9,
    FppParser.T__10,
    FppParser.T__11,
    FppParser.T__12,
    FppParser.T__13,
    FppParser.T__14,
    FppParser.T__15,
    FppParser.NL,
    FppParser.WS,
    FppParser.WS_NL,
    FppParser.COMMENT,
    FppParser.ANNOTATION,
]);



export class FppParserWithAnnotator extends FppParser {
    private readonly watchedRulesStack: number[] = [];
    private readonly ruleStack: number[] = [];
    private readonly stateStack: number[] = [];
    private currentRule: number = 0;

    readonly tokens = new RangeAssociator<{
        ruleIndex: number;
        offset: number;
    }>();

    constructor(
        private readonly watchFor: Set<number>,
        inputStream: TokenStream
    ) {
        super(inputStream);
    }

    private associate(tok: Token) {
        const range = new vscode.Range(
            new vscode.Position(tok.line, tok.charPositionInLine + 1),
            new vscode.Position(tok.line, tok.charPositionInLine + (tok.text?.length ?? 0) + 1)
        );

        const ruleIndex = this.watchedRulesStack[this.watchedRulesStack.length - 1] ?? 0;
        const startState = this.atn.ruleToStartState[ruleIndex];

        const state = this.state;
        if (this.currentRule === ruleIndex) {
            this.state = this.stateStack[this.stateStack.length - 1];
        }

        this.tokens.add(range, {
            offset: state - startState.stateNumber,
            ruleIndex: ruleIndex
        });
    }

    enterRule(localctx: ParserRuleContext, state: number, ruleIndex: number): void {
        if (this.watchFor.has(ruleIndex)) {
            this.watchedRulesStack.push(ruleIndex);
            this.stateStack.push(state);
        }

        this.ruleStack.push(ruleIndex);
        this.currentRule = ruleIndex;

        super.enterRule(localctx, state, ruleIndex);
    }

    match(ttype: number): Token {
        if (this.currentToken.type === ttype) {
            // Token matched, link its position with the current rule state
            this.associate(this.currentToken);
        }

        return super.match(ttype);
    }

    exitRule(): void {
        this.currentRule = this.ruleStack.pop()!;
        if (this.watchFor.has(this.currentRule)) {
            this.watchedRulesStack.pop();
            this.stateStack.pop();
        }

        super.exitRule();
    }
}

export function getCandidates(
    document: vscode.TextDocument, position: vscode.Position,
    preferredRules: Set<number>
): [CandidatesCollection, FppCompletionListener, FppParserWithAnnotator, CodeCompletionCore] {
    // Generate a token stream from the document
    // Run this through C3 to get parsing candidates
    const inputStream = CharStreams.fromString(document.getText());
    const lexer = new FppLexer(inputStream);

    const listener = new FppCompletionListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);

    const tokenStream = new BufferedTokenStream(lexer);
    const parser = new FppParserWithAnnotator(preferredRules, tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    // Parse the input to pull the tokens through the lexer
    const ctx = parser.prog();

    // Convert the caret position from line:col to offset
    const offset = document.offsetAt(position);

    // Get the parser candidates
    const core = new CodeCompletionCore(parser);
    core.preferredRules = preferredRules;
    core.ignoredTokens = ignoreTokens;

    const candidates = core.collectCandidates(offset, ctx);

    return [candidates, listener, parser, core];
}
