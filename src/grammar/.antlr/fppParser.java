// Generated from /home/tumbar/git/fpp/grammar/fpp.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class fppParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, U8=15, I8=16, U16=17, 
		I16=18, U32=19, I32=20, U64=21, I64=22, F32=23, F64=24, ACTIVE=25, ACTIVITY=26, 
		ALWAYS=27, ARRAY=28, ASSERT=29, ASYNC=30, AT=31, BASE=32, BLOCK=33, BOOL=34, 
		CHANGE=35, COMMAND=36, COMPONENT=37, CONNECTIONS=38, CONSTANT=39, CPU=40, 
		DEFAULT=41, DIAGNOSTIC=42, DROP=43, ENUM=44, EVENT=45, FALSE=46, FATAL=47, 
		FORMAT=48, GET=49, GUARDED=50, HEALTH=51, HIGH=52, ID=53, IMPORT=54, INCLUDE=55, 
		INPUT=56, INSTANCE=57, INTERNAL=58, LOCATE=59, LOW=60, MATCH=61, MODULE=62, 
		ON=63, OPCODE=64, ORANGE=65, OUTPUT=66, PARAM=67, PASSIVE=68, PHASE=69, 
		PORT=70, PRIORITY=71, PRIVATE=72, QUEUE=73, QUEUED=74, RECV=75, RED=76, 
		REF=77, REG=78, RESP=79, SAVE=80, SERIAL=81, SET=82, SEVERITY=83, SIZE=84, 
		STACK=85, STRING=86, STRUCT=87, SYNC=88, TELEMETRY=89, TEXT=90, THROTTLE=91, 
		TIME=92, TOPOLOGY=93, TRUE=94, TYPE=95, UPDATE=96, WARNING=97, WITH=98, 
		YELLOW=99, IDENTIFIER=100, WHITESPACE=101, LINE_CONTINUATION=102, COMMENT=103, 
		NEWLINE=104, ANNOTATION=105, LIT_STRING=106, LIT_FLOAT=107, LIT_INT=108;
	public static final int
		RULE_prog = 0, RULE_moduleMember = 1, RULE_abstractTypeDecl = 2, RULE_arrayDecl = 3, 
		RULE_doc = 4, RULE_qualIdent = 5, RULE_integralType = 6, RULE_floatType = 7, 
		RULE_numericType = 8, RULE_typeName = 9, RULE_commaDelim = 10, RULE_semiDelim = 11, 
		RULE_arrayExpr = 12, RULE_structAssignment = 13, RULE_structExpr = 14, 
		RULE_expr = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "moduleMember", "abstractTypeDecl", "arrayDecl", "doc", "qualIdent", 
			"integralType", "floatType", "numericType", "typeName", "commaDelim", 
			"semiDelim", "arrayExpr", "structAssignment", "structExpr", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'['", "']'", "'.'", "','", "';'", "'{'", "'}'", "'-'", 
			"'*'", "'/'", "'+'", "'('", "')'", "'U8'", "'I8'", "'U16'", "'I16'", 
			"'U32'", "'I32'", "'U64'", "'I64'", "'F32'", "'F64'", "'active'", "'activity'", 
			"'always'", "'array'", "'assert'", "'async'", "'at'", "'base'", "'block'", 
			"'bool'", "'change'", "'command'", "'component'", "'connections'", "'constant'", 
			"'cpu'", "'default'", "'diagnostic'", "'drop'", "'enum'", "'event'", 
			"'false'", "'fatal'", "'format'", "'get'", "'guarded'", "'health'", "'high'", 
			"'id'", "'import'", "'include'", "'input'", "'instance'", "'internal'", 
			"'locate'", "'low'", "'match'", "'module'", "'on'", "'opcode'", "'orange'", 
			"'output'", "'param'", "'passive'", "'phase'", "'port'", "'priority'", 
			"'private'", "'queue'", "'queued'", "'recv'", "'red'", "'ref'", "'reg'", 
			"'resp'", "'save'", "'serial'", "'set'", "'severity'", "'size'", "'stack'", 
			"'string'", "'struct'", "'sync'", "'telemetry'", "'text'", "'throttle'", 
			"'time'", "'topology'", "'true'", "'type'", "'update'", "'warning'", 
			"'with'", "'yellow'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "U8", "I8", "U16", "I16", "U32", "I32", "U64", "I64", 
			"F32", "F64", "ACTIVE", "ACTIVITY", "ALWAYS", "ARRAY", "ASSERT", "ASYNC", 
			"AT", "BASE", "BLOCK", "BOOL", "CHANGE", "COMMAND", "COMPONENT", "CONNECTIONS", 
			"CONSTANT", "CPU", "DEFAULT", "DIAGNOSTIC", "DROP", "ENUM", "EVENT", 
			"FALSE", "FATAL", "FORMAT", "GET", "GUARDED", "HEALTH", "HIGH", "ID", 
			"IMPORT", "INCLUDE", "INPUT", "INSTANCE", "INTERNAL", "LOCATE", "LOW", 
			"MATCH", "MODULE", "ON", "OPCODE", "ORANGE", "OUTPUT", "PARAM", "PASSIVE", 
			"PHASE", "PORT", "PRIORITY", "PRIVATE", "QUEUE", "QUEUED", "RECV", "RED", 
			"REF", "REG", "RESP", "SAVE", "SERIAL", "SET", "SEVERITY", "SIZE", "STACK", 
			"STRING", "STRUCT", "SYNC", "TELEMETRY", "TEXT", "THROTTLE", "TIME", 
			"TOPOLOGY", "TRUE", "TYPE", "UPDATE", "WARNING", "WITH", "YELLOW", "IDENTIFIER", 
			"WHITESPACE", "LINE_CONTINUATION", "COMMENT", "NEWLINE", "ANNOTATION", 
			"LIT_STRING", "LIT_FLOAT", "LIT_INT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "fpp.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public fppParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgContext extends ParserRuleContext {
		public List<DocContext> doc() {
			return getRuleContexts(DocContext.class);
		}
		public DocContext doc(int i) {
			return getRuleContext(DocContext.class,i);
		}
		public List<ModuleMemberContext> moduleMember() {
			return getRuleContexts(ModuleMemberContext.class);
		}
		public ModuleMemberContext moduleMember(int i) {
			return getRuleContext(ModuleMemberContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(32);
					doc();
					}
					} 
				}
				setState(37);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(45); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(41);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==NEWLINE || _la==ANNOTATION) {
						{
						{
						setState(38);
						doc();
						}
						}
						setState(43);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(44);
					moduleMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(47); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE || _la==ANNOTATION) {
				{
				{
				setState(49);
				doc();
				}
				}
				setState(54);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleMemberContext extends ParserRuleContext {
		public AbstractTypeDeclContext abstractTypeDecl() {
			return getRuleContext(AbstractTypeDeclContext.class,0);
		}
		public ModuleMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleMember; }
	}

	public final ModuleMemberContext moduleMember() throws RecognitionException {
		ModuleMemberContext _localctx = new ModuleMemberContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_moduleMember);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			abstractTypeDecl();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AbstractTypeDeclContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(fppParser.TYPE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(fppParser.IDENTIFIER, 0); }
		public AbstractTypeDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_abstractTypeDecl; }
	}

	public final AbstractTypeDeclContext abstractTypeDecl() throws RecognitionException {
		AbstractTypeDeclContext _localctx = new AbstractTypeDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_abstractTypeDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(TYPE);
			setState(58);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayDeclContext extends ParserRuleContext {
		public Token name;
		public Token size;
		public TypeNameContext type;
		public ArrayExprContext default_;
		public Token format;
		public TerminalNode ARRAY() { return getToken(fppParser.ARRAY, 0); }
		public TerminalNode IDENTIFIER() { return getToken(fppParser.IDENTIFIER, 0); }
		public TerminalNode SIZE() { return getToken(fppParser.SIZE, 0); }
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode DEFAULT() { return getToken(fppParser.DEFAULT, 0); }
		public TerminalNode FORMAT() { return getToken(fppParser.FORMAT, 0); }
		public ArrayExprContext arrayExpr() {
			return getRuleContext(ArrayExprContext.class,0);
		}
		public TerminalNode LIT_STRING() { return getToken(fppParser.LIT_STRING, 0); }
		public ArrayDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayDecl; }
	}

	public final ArrayDeclContext arrayDecl() throws RecognitionException {
		ArrayDeclContext _localctx = new ArrayDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_arrayDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(ARRAY);
			setState(61);
			((ArrayDeclContext)_localctx).name = match(IDENTIFIER);
			setState(62);
			match(T__0);
			setState(63);
			match(T__1);
			setState(64);
			((ArrayDeclContext)_localctx).size = match(SIZE);
			setState(65);
			match(T__2);
			setState(66);
			((ArrayDeclContext)_localctx).type = typeName();
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DEFAULT) {
				{
				setState(67);
				match(DEFAULT);
				setState(68);
				((ArrayDeclContext)_localctx).default_ = arrayExpr();
				}
			}

			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FORMAT) {
				{
				setState(71);
				match(FORMAT);
				setState(72);
				((ArrayDeclContext)_localctx).format = match(LIT_STRING);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DocContext extends ParserRuleContext {
		public List<TerminalNode> ANNOTATION() { return getTokens(fppParser.ANNOTATION); }
		public TerminalNode ANNOTATION(int i) {
			return getToken(fppParser.ANNOTATION, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(fppParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(fppParser.NEWLINE, i);
		}
		public DocContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doc; }
	}

	public final DocContext doc() throws RecognitionException {
		DocContext _localctx = new DocContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_doc);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(76); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(75);
					_la = _input.LA(1);
					if ( !(_la==NEWLINE || _la==ANNOTATION) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(78); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualIdentContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(fppParser.IDENTIFIER, 0); }
		public List<QualIdentContext> qualIdent() {
			return getRuleContexts(QualIdentContext.class);
		}
		public QualIdentContext qualIdent(int i) {
			return getRuleContext(QualIdentContext.class,i);
		}
		public QualIdentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualIdent; }
	}

	public final QualIdentContext qualIdent() throws RecognitionException {
		QualIdentContext _localctx = new QualIdentContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_qualIdent);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(IDENTIFIER);
			setState(85);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(81);
					match(T__3);
					setState(82);
					qualIdent();
					}
					} 
				}
				setState(87);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegralTypeContext extends ParserRuleContext {
		public TerminalNode U8() { return getToken(fppParser.U8, 0); }
		public TerminalNode I8() { return getToken(fppParser.I8, 0); }
		public TerminalNode U16() { return getToken(fppParser.U16, 0); }
		public TerminalNode I16() { return getToken(fppParser.I16, 0); }
		public TerminalNode U32() { return getToken(fppParser.U32, 0); }
		public TerminalNode I32() { return getToken(fppParser.I32, 0); }
		public TerminalNode U64() { return getToken(fppParser.U64, 0); }
		public TerminalNode I64() { return getToken(fppParser.I64, 0); }
		public IntegralTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integralType; }
	}

	public final IntegralTypeContext integralType() throws RecognitionException {
		IntegralTypeContext _localctx = new IntegralTypeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_integralType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << U8) | (1L << I8) | (1L << U16) | (1L << I16) | (1L << U32) | (1L << I32) | (1L << U64) | (1L << I64))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FloatTypeContext extends ParserRuleContext {
		public TerminalNode F32() { return getToken(fppParser.F32, 0); }
		public TerminalNode F64() { return getToken(fppParser.F64, 0); }
		public FloatTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatType; }
	}

	public final FloatTypeContext floatType() throws RecognitionException {
		FloatTypeContext _localctx = new FloatTypeContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_floatType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			_la = _input.LA(1);
			if ( !(_la==F32 || _la==F64) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumericTypeContext extends ParserRuleContext {
		public IntegralTypeContext integralType() {
			return getRuleContext(IntegralTypeContext.class,0);
		}
		public FloatTypeContext floatType() {
			return getRuleContext(FloatTypeContext.class,0);
		}
		public NumericTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericType; }
	}

	public final NumericTypeContext numericType() throws RecognitionException {
		NumericTypeContext _localctx = new NumericTypeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_numericType);
		try {
			setState(94);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case U8:
			case I8:
			case U16:
			case I16:
			case U32:
			case I32:
			case U64:
			case I64:
				enterOuterAlt(_localctx, 1);
				{
				setState(92);
				integralType();
				}
				break;
			case F32:
			case F64:
				enterOuterAlt(_localctx, 2);
				{
				setState(93);
				floatType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeNameContext extends ParserRuleContext {
		public ExprContext size;
		public NumericTypeContext numericType() {
			return getRuleContext(NumericTypeContext.class,0);
		}
		public TerminalNode BOOL() { return getToken(fppParser.BOOL, 0); }
		public TerminalNode STRING() { return getToken(fppParser.STRING, 0); }
		public TerminalNode SIZE() { return getToken(fppParser.SIZE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public QualIdentContext qualIdent() {
			return getRuleContext(QualIdentContext.class,0);
		}
		public TypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeName; }
	}

	public final TypeNameContext typeName() throws RecognitionException {
		TypeNameContext _localctx = new TypeNameContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_typeName);
		int _la;
		try {
			setState(104);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case U8:
			case I8:
			case U16:
			case I16:
			case U32:
			case I32:
			case U64:
			case I64:
			case F32:
			case F64:
				enterOuterAlt(_localctx, 1);
				{
				setState(96);
				numericType();
				}
				break;
			case BOOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(97);
				match(BOOL);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(98);
				match(STRING);
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SIZE) {
					{
					setState(99);
					match(SIZE);
					setState(100);
					((TypeNameContext)_localctx).size = expr(0);
					}
				}

				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 4);
				{
				setState(103);
				qualIdent();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommaDelimContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(fppParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(fppParser.NEWLINE, i);
		}
		public CommaDelimContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commaDelim; }
	}

	public final CommaDelimContext commaDelim() throws RecognitionException {
		CommaDelimContext _localctx = new CommaDelimContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_commaDelim);
		int _la;
		try {
			setState(118);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				enterOuterAlt(_localctx, 1);
				{
				setState(106);
				match(T__4);
				setState(110);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(107);
					match(NEWLINE);
					}
					}
					setState(112);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case NEWLINE:
				enterOuterAlt(_localctx, 2);
				{
				setState(114); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(113);
					match(NEWLINE);
					}
					}
					setState(116); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==NEWLINE );
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SemiDelimContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(fppParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(fppParser.NEWLINE, i);
		}
		public SemiDelimContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_semiDelim; }
	}

	public final SemiDelimContext semiDelim() throws RecognitionException {
		SemiDelimContext _localctx = new SemiDelimContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_semiDelim);
		int _la;
		try {
			setState(132);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
				enterOuterAlt(_localctx, 1);
				{
				setState(120);
				match(T__5);
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NEWLINE) {
					{
					{
					setState(121);
					match(NEWLINE);
					}
					}
					setState(126);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case NEWLINE:
				enterOuterAlt(_localctx, 2);
				{
				setState(128); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(127);
					match(NEWLINE);
					}
					}
					setState(130); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==NEWLINE );
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayExprContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<CommaDelimContext> commaDelim() {
			return getRuleContexts(CommaDelimContext.class);
		}
		public CommaDelimContext commaDelim(int i) {
			return getRuleContext(CommaDelimContext.class,i);
		}
		public ArrayExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayExpr; }
	}

	public final ArrayExprContext arrayExpr() throws RecognitionException {
		ArrayExprContext _localctx = new ArrayExprContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_arrayExpr);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			match(T__1);
			setState(135);
			expr(0);
			setState(141);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(136);
					commaDelim();
					setState(137);
					expr(0);
					}
					} 
				}
				setState(143);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4 || _la==NEWLINE) {
				{
				setState(144);
				commaDelim();
				}
			}

			setState(147);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructAssignmentContext extends ParserRuleContext {
		public Token name;
		public ExprContext value;
		public TerminalNode IDENTIFIER() { return getToken(fppParser.IDENTIFIER, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StructAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structAssignment; }
	}

	public final StructAssignmentContext structAssignment() throws RecognitionException {
		StructAssignmentContext _localctx = new StructAssignmentContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_structAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			((StructAssignmentContext)_localctx).name = match(IDENTIFIER);
			setState(150);
			match(T__0);
			setState(151);
			((StructAssignmentContext)_localctx).value = expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructExprContext extends ParserRuleContext {
		public List<StructAssignmentContext> structAssignment() {
			return getRuleContexts(StructAssignmentContext.class);
		}
		public StructAssignmentContext structAssignment(int i) {
			return getRuleContext(StructAssignmentContext.class,i);
		}
		public List<CommaDelimContext> commaDelim() {
			return getRuleContexts(CommaDelimContext.class);
		}
		public CommaDelimContext commaDelim(int i) {
			return getRuleContext(CommaDelimContext.class,i);
		}
		public StructExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structExpr; }
	}

	public final StructExprContext structExpr() throws RecognitionException {
		StructExprContext _localctx = new StructExprContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_structExpr);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			match(T__6);
			setState(154);
			structAssignment();
			setState(160);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(155);
					commaDelim();
					setState(156);
					structAssignment();
					}
					} 
				}
				setState(162);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4 || _la==NEWLINE) {
				{
				setState(163);
				commaDelim();
				}
			}

			setState(166);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ArrayExprContext arrayExpr() {
			return getRuleContext(ArrayExprContext.class,0);
		}
		public StructExprContext structExpr() {
			return getRuleContext(StructExprContext.class,0);
		}
		public QualIdentContext qualIdent() {
			return getRuleContext(QualIdentContext.class,0);
		}
		public TerminalNode LIT_FLOAT() { return getToken(fppParser.LIT_FLOAT, 0); }
		public TerminalNode LIT_INT() { return getToken(fppParser.LIT_INT, 0); }
		public TerminalNode LIT_STRING() { return getToken(fppParser.LIT_STRING, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 30;
		enterRecursionRule(_localctx, 30, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				{
				setState(169);
				match(T__8);
				setState(170);
				expr(10);
				}
				break;
			case T__1:
				{
				setState(171);
				arrayExpr();
				}
				break;
			case T__6:
				{
				setState(172);
				structExpr();
				}
				break;
			case IDENTIFIER:
				{
				setState(173);
				qualIdent();
				}
				break;
			case LIT_FLOAT:
				{
				setState(174);
				match(LIT_FLOAT);
				}
				break;
			case LIT_INT:
				{
				setState(175);
				match(LIT_INT);
				}
				break;
			case LIT_STRING:
				{
				setState(176);
				match(LIT_STRING);
				}
				break;
			case T__12:
				{
				setState(177);
				match(T__12);
				setState(178);
				expr(0);
				setState(179);
				match(T__13);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(191);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(189);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(183);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(184);
						((ExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__9 || _la==T__10) ) {
							((ExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(185);
						expr(10);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(186);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(187);
						((ExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__8 || _la==T__11) ) {
							((ExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(188);
						expr(9);
						}
						break;
					}
					} 
				}
				setState(193);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 15:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 9);
		case 1:
			return precpred(_ctx, 8);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3n\u00c5\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\7\2$\n"+
		"\2\f\2\16\2\'\13\2\3\2\7\2*\n\2\f\2\16\2-\13\2\3\2\6\2\60\n\2\r\2\16\2"+
		"\61\3\2\7\2\65\n\2\f\2\16\28\13\2\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\5\5H\n\5\3\5\3\5\5\5L\n\5\3\6\6\6O\n\6\r\6\16\6P"+
		"\3\7\3\7\3\7\7\7V\n\7\f\7\16\7Y\13\7\3\b\3\b\3\t\3\t\3\n\3\n\5\na\n\n"+
		"\3\13\3\13\3\13\3\13\3\13\5\13h\n\13\3\13\5\13k\n\13\3\f\3\f\7\fo\n\f"+
		"\f\f\16\fr\13\f\3\f\6\fu\n\f\r\f\16\fv\5\fy\n\f\3\r\3\r\7\r}\n\r\f\r\16"+
		"\r\u0080\13\r\3\r\6\r\u0083\n\r\r\r\16\r\u0084\5\r\u0087\n\r\3\16\3\16"+
		"\3\16\3\16\3\16\7\16\u008e\n\16\f\16\16\16\u0091\13\16\3\16\5\16\u0094"+
		"\n\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\7\20\u00a1"+
		"\n\20\f\20\16\20\u00a4\13\20\3\20\5\20\u00a7\n\20\3\20\3\20\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u00b8\n\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\7\21\u00c0\n\21\f\21\16\21\u00c3\13\21"+
		"\3\21\2\3 \22\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \2\7\3\2jk\3\2\21"+
		"\30\3\2\31\32\3\2\f\r\4\2\13\13\16\16\2\u00d4\2%\3\2\2\2\49\3\2\2\2\6"+
		";\3\2\2\2\b>\3\2\2\2\nN\3\2\2\2\fR\3\2\2\2\16Z\3\2\2\2\20\\\3\2\2\2\22"+
		"`\3\2\2\2\24j\3\2\2\2\26x\3\2\2\2\30\u0086\3\2\2\2\32\u0088\3\2\2\2\34"+
		"\u0097\3\2\2\2\36\u009b\3\2\2\2 \u00b7\3\2\2\2\"$\5\n\6\2#\"\3\2\2\2$"+
		"\'\3\2\2\2%#\3\2\2\2%&\3\2\2\2&/\3\2\2\2\'%\3\2\2\2(*\5\n\6\2)(\3\2\2"+
		"\2*-\3\2\2\2+)\3\2\2\2+,\3\2\2\2,.\3\2\2\2-+\3\2\2\2.\60\5\4\3\2/+\3\2"+
		"\2\2\60\61\3\2\2\2\61/\3\2\2\2\61\62\3\2\2\2\62\66\3\2\2\2\63\65\5\n\6"+
		"\2\64\63\3\2\2\2\658\3\2\2\2\66\64\3\2\2\2\66\67\3\2\2\2\67\3\3\2\2\2"+
		"8\66\3\2\2\29:\5\6\4\2:\5\3\2\2\2;<\7a\2\2<=\7f\2\2=\7\3\2\2\2>?\7\36"+
		"\2\2?@\7f\2\2@A\7\3\2\2AB\7\4\2\2BC\7V\2\2CD\7\5\2\2DG\5\24\13\2EF\7+"+
		"\2\2FH\5\32\16\2GE\3\2\2\2GH\3\2\2\2HK\3\2\2\2IJ\7\62\2\2JL\7l\2\2KI\3"+
		"\2\2\2KL\3\2\2\2L\t\3\2\2\2MO\t\2\2\2NM\3\2\2\2OP\3\2\2\2PN\3\2\2\2PQ"+
		"\3\2\2\2Q\13\3\2\2\2RW\7f\2\2ST\7\6\2\2TV\5\f\7\2US\3\2\2\2VY\3\2\2\2"+
		"WU\3\2\2\2WX\3\2\2\2X\r\3\2\2\2YW\3\2\2\2Z[\t\3\2\2[\17\3\2\2\2\\]\t\4"+
		"\2\2]\21\3\2\2\2^a\5\16\b\2_a\5\20\t\2`^\3\2\2\2`_\3\2\2\2a\23\3\2\2\2"+
		"bk\5\22\n\2ck\7$\2\2dg\7X\2\2ef\7V\2\2fh\5 \21\2ge\3\2\2\2gh\3\2\2\2h"+
		"k\3\2\2\2ik\5\f\7\2jb\3\2\2\2jc\3\2\2\2jd\3\2\2\2ji\3\2\2\2k\25\3\2\2"+
		"\2lp\7\7\2\2mo\7j\2\2nm\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2qy\3\2\2"+
		"\2rp\3\2\2\2su\7j\2\2ts\3\2\2\2uv\3\2\2\2vt\3\2\2\2vw\3\2\2\2wy\3\2\2"+
		"\2xl\3\2\2\2xt\3\2\2\2y\27\3\2\2\2z~\7\b\2\2{}\7j\2\2|{\3\2\2\2}\u0080"+
		"\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\u0087\3\2\2\2\u0080~\3\2\2\2\u0081"+
		"\u0083\7j\2\2\u0082\u0081\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0082\3\2"+
		"\2\2\u0084\u0085\3\2\2\2\u0085\u0087\3\2\2\2\u0086z\3\2\2\2\u0086\u0082"+
		"\3\2\2\2\u0087\31\3\2\2\2\u0088\u0089\7\4\2\2\u0089\u008f\5 \21\2\u008a"+
		"\u008b\5\26\f\2\u008b\u008c\5 \21\2\u008c\u008e\3\2\2\2\u008d\u008a\3"+
		"\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u0090\3\2\2\2\u0090"+
		"\u0093\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u0094\5\26\f\2\u0093\u0092\3"+
		"\2\2\2\u0093\u0094\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096\7\5\2\2\u0096"+
		"\33\3\2\2\2\u0097\u0098\7f\2\2\u0098\u0099\7\3\2\2\u0099\u009a\5 \21\2"+
		"\u009a\35\3\2\2\2\u009b\u009c\7\t\2\2\u009c\u00a2\5\34\17\2\u009d\u009e"+
		"\5\26\f\2\u009e\u009f\5\34\17\2\u009f\u00a1\3\2\2\2\u00a0\u009d\3\2\2"+
		"\2\u00a1\u00a4\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a6"+
		"\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a5\u00a7\5\26\f\2\u00a6\u00a5\3\2\2\2"+
		"\u00a6\u00a7\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00a9\7\n\2\2\u00a9\37"+
		"\3\2\2\2\u00aa\u00ab\b\21\1\2\u00ab\u00ac\7\13\2\2\u00ac\u00b8\5 \21\f"+
		"\u00ad\u00b8\5\32\16\2\u00ae\u00b8\5\36\20\2\u00af\u00b8\5\f\7\2\u00b0"+
		"\u00b8\7m\2\2\u00b1\u00b8\7n\2\2\u00b2\u00b8\7l\2\2\u00b3\u00b4\7\17\2"+
		"\2\u00b4\u00b5\5 \21\2\u00b5\u00b6\7\20\2\2\u00b6\u00b8\3\2\2\2\u00b7"+
		"\u00aa\3\2\2\2\u00b7\u00ad\3\2\2\2\u00b7\u00ae\3\2\2\2\u00b7\u00af\3\2"+
		"\2\2\u00b7\u00b0\3\2\2\2\u00b7\u00b1\3\2\2\2\u00b7\u00b2\3\2\2\2\u00b7"+
		"\u00b3\3\2\2\2\u00b8\u00c1\3\2\2\2\u00b9\u00ba\f\13\2\2\u00ba\u00bb\t"+
		"\5\2\2\u00bb\u00c0\5 \21\f\u00bc\u00bd\f\n\2\2\u00bd\u00be\t\6\2\2\u00be"+
		"\u00c0\5 \21\13\u00bf\u00b9\3\2\2\2\u00bf\u00bc\3\2\2\2\u00c0\u00c3\3"+
		"\2\2\2\u00c1\u00bf\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2!\3\2\2\2\u00c3\u00c1"+
		"\3\2\2\2\32%+\61\66GKPW`gjpvx~\u0084\u0086\u008f\u0093\u00a2\u00a6\u00b7"+
		"\u00bf\u00c1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}