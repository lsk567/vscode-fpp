import {
    ANTLRErrorListener,
    BufferedTokenStream,
    CharStreams,
    RecognitionException,
    Recognizer,
} from 'antlr4ts';

import { FppParser } from '../grammar/FppParser';
import { FppLexer } from '../grammar/FppLexer';

import { parentPort } from 'worker_threads';
import { AstVisitor } from './visitor';
import { IFppMessage, IDiagnostic } from './message';


class SyntaxErrorListener implements ANTLRErrorListener<any> {
    diagnostics: IDiagnostic[] = [];

    syntaxError(
        recognizer: Recognizer<any, any>,
        offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        message: string, e: RecognitionException | undefined
    ): void {
        this.diagnostics.push({
            range: [
                line - 1, charPositionInLine,
                line - 1, charPositionInLine + (e?.getOffendingToken(recognizer)?.text?.length || 1)
            ],
            message
        });
    }
}

parentPort?.on("message", (message: {
    path: string;
    version: number;
    text: string;
}) => {
    try {
        // Generate a token stream from the document
        // Run this through C3 to get parsing candidates
        const inputStream = CharStreams.fromString(message.text);
        const lexer = new FppLexer(inputStream);

        const listener = new SyntaxErrorListener();
        lexer.removeErrorListeners();
        lexer.addErrorListener(listener);

        const tokenStream = new BufferedTokenStream(lexer);
        const parser = new FppParser(tokenStream);
        parser.removeErrorListeners();
        parser.addErrorListener(listener);

        // Parse the input to pull the tokens through the lexer
        const ctx = parser.prog();

        // Lower the ANTLR parsing tree to an AST
        const visitor = new AstVisitor(message.path, tokenStream);
        const ast = visitor.visitProg(ctx);

        const retMessage: IFppMessage = {
            ast,
            ranges: visitor.signature.serialize(),
            syntaxErrors: listener.diagnostics,
            version: message.version
        };

        // Reply to the parsing request
        parentPort?.postMessage({
            code: "success",
            msg: retMessage
        });
    } catch(e) {
        parentPort?.postMessage({
            code: "error",
            msg: `${e}`
        });
    }
});
