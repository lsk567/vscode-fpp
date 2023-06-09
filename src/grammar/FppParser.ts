// Generated from src/grammar/Fpp.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FppListener } from "./FppListener";
import { FppVisitor } from "./FppVisitor";


export class FppParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly PRIM_TYPE = 17;
	public static readonly INT_TYPE = 18;
	public static readonly NL = 19;
	public static readonly WS = 20;
	public static readonly WS_NL = 21;
	public static readonly COMMENT = 22;
	public static readonly ANNOTATION = 23;
	public static readonly LIT_BOOLEAN = 24;
	public static readonly LIT_STRING = 25;
	public static readonly LIT_FLOAT = 26;
	public static readonly LIT_INT = 27;
	public static readonly U8 = 28;
	public static readonly I8 = 29;
	public static readonly U16 = 30;
	public static readonly I16 = 31;
	public static readonly U32 = 32;
	public static readonly I32 = 33;
	public static readonly U64 = 34;
	public static readonly I64 = 35;
	public static readonly F32 = 36;
	public static readonly F64 = 37;
	public static readonly ACTIVE = 38;
	public static readonly ACTIVITY = 39;
	public static readonly ALWAYS = 40;
	public static readonly ARRAY = 41;
	public static readonly ASSERT = 42;
	public static readonly ASYNC = 43;
	public static readonly AT = 44;
	public static readonly BASE = 45;
	public static readonly BLOCK = 46;
	public static readonly BOOL = 47;
	public static readonly CHANGE = 48;
	public static readonly COMMAND = 49;
	public static readonly COMPONENT = 50;
	public static readonly CONNECTIONS = 51;
	public static readonly CONSTANT = 52;
	public static readonly CPU = 53;
	public static readonly DEFAULT = 54;
	public static readonly DIAGNOSTIC = 55;
	public static readonly DROP = 56;
	public static readonly ENUM = 57;
	public static readonly EVENT = 58;
	public static readonly FALSE = 59;
	public static readonly FATAL = 60;
	public static readonly FORMAT = 61;
	public static readonly GET = 62;
	public static readonly GUARDED = 63;
	public static readonly HEALTH = 64;
	public static readonly HIGH = 65;
	public static readonly ID = 66;
	public static readonly IMPORT = 67;
	public static readonly INCLUDE = 68;
	public static readonly INPUT = 69;
	public static readonly INSTANCE = 70;
	public static readonly INTERNAL = 71;
	public static readonly LOCATE = 72;
	public static readonly LOW = 73;
	public static readonly MATCH = 74;
	public static readonly MODULE = 75;
	public static readonly ON = 76;
	public static readonly OPCODE = 77;
	public static readonly ORANGE = 78;
	public static readonly OUTPUT = 79;
	public static readonly PARAM = 80;
	public static readonly PASSIVE = 81;
	public static readonly PHASE = 82;
	public static readonly PORT = 83;
	public static readonly PRIORITY = 84;
	public static readonly PRIVATE = 85;
	public static readonly QUEUE = 86;
	public static readonly QUEUED = 87;
	public static readonly RECV = 88;
	public static readonly RED = 89;
	public static readonly REF = 90;
	public static readonly REG = 91;
	public static readonly RESP = 92;
	public static readonly SAVE = 93;
	public static readonly SERIAL = 94;
	public static readonly SET = 95;
	public static readonly SEVERITY = 96;
	public static readonly SIZE = 97;
	public static readonly STACK = 98;
	public static readonly STRING = 99;
	public static readonly STRUCT = 100;
	public static readonly SYNC = 101;
	public static readonly TELEMETRY = 102;
	public static readonly TEXT = 103;
	public static readonly THROTTLE = 104;
	public static readonly TIME = 105;
	public static readonly TOPOLOGY = 106;
	public static readonly TRUE = 107;
	public static readonly TYPE = 108;
	public static readonly UPDATE = 109;
	public static readonly WARNING = 110;
	public static readonly WITH = 111;
	public static readonly YELLOW = 112;
	public static readonly IDENTIFIER = 113;
	public static readonly RULE_prog = 0;
	public static readonly RULE_abstractTypeDecl = 1;
	public static readonly RULE_arrayDecl = 2;
	public static readonly RULE_constantDecl = 3;
	public static readonly RULE_structMember = 4;
	public static readonly RULE_structDecl = 5;
	public static readonly RULE_queueFullBehavior = 6;
	public static readonly RULE_commandKind = 7;
	public static readonly RULE_commandDecl = 8;
	public static readonly RULE_paramDecl = 9;
	public static readonly RULE_generalPortKind = 10;
	public static readonly RULE_specialPortKind = 11;
	public static readonly RULE_generalPortInstanceType = 12;
	public static readonly RULE_generalPortInstanceDecl = 13;
	public static readonly RULE_specialPortInstanceDecl = 14;
	public static readonly RULE_telemetryLimitKind = 15;
	public static readonly RULE_telemetryLimitExpr = 16;
	public static readonly RULE_telemetryLimit = 17;
	public static readonly RULE_telemetryUpdate = 18;
	public static readonly RULE_telemetryChannelDecl = 19;
	public static readonly RULE_enumMember = 20;
	public static readonly RULE_enumDecl = 21;
	public static readonly RULE_eventSeverity = 22;
	public static readonly RULE_eventDecl = 23;
	public static readonly RULE_includeStmt = 24;
	public static readonly RULE_matchStmt = 25;
	public static readonly RULE_internalPortDecl = 26;
	public static readonly RULE_initSpecifier = 27;
	public static readonly RULE_componentInstanceDecl = 28;
	public static readonly RULE_componentKind = 29;
	public static readonly RULE_componentMember = 30;
	public static readonly RULE_componentDecl = 31;
	public static readonly RULE_portDecl = 32;
	public static readonly RULE_componentInstanceSpec = 33;
	public static readonly RULE_connectionNode = 34;
	public static readonly RULE_connection = 35;
	public static readonly RULE_directGraphDecl = 36;
	public static readonly RULE_patternKind = 37;
	public static readonly RULE_patternGraphSources = 38;
	public static readonly RULE_patternGraphStmt = 39;
	public static readonly RULE_topologyImportStmt = 40;
	public static readonly RULE_topologyMember = 41;
	public static readonly RULE_topologyDecl = 42;
	public static readonly RULE_locationKind = 43;
	public static readonly RULE_locationStmt = 44;
	public static readonly RULE_moduleMember = 45;
	public static readonly RULE_moduleDecl = 46;
	public static readonly RULE_formalParameter = 47;
	public static readonly RULE_formalParameterList = 48;
	public static readonly RULE_qualIdent = 49;
	public static readonly RULE_primitiveType = 50;
	public static readonly RULE_typeName = 51;
	public static readonly RULE_commaDelim = 52;
	public static readonly RULE_semiDelim = 53;
	public static readonly RULE_arrayExpr = 54;
	public static readonly RULE_structAssignment = 55;
	public static readonly RULE_structExpr = 56;
	public static readonly RULE_expr = 57;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "abstractTypeDecl", "arrayDecl", "constantDecl", "structMember", 
		"structDecl", "queueFullBehavior", "commandKind", "commandDecl", "paramDecl", 
		"generalPortKind", "specialPortKind", "generalPortInstanceType", "generalPortInstanceDecl", 
		"specialPortInstanceDecl", "telemetryLimitKind", "telemetryLimitExpr", 
		"telemetryLimit", "telemetryUpdate", "telemetryChannelDecl", "enumMember", 
		"enumDecl", "eventSeverity", "eventDecl", "includeStmt", "matchStmt", 
		"internalPortDecl", "initSpecifier", "componentInstanceDecl", "componentKind", 
		"componentMember", "componentDecl", "portDecl", "componentInstanceSpec", 
		"connectionNode", "connection", "directGraphDecl", "patternKind", "patternGraphSources", 
		"patternGraphStmt", "topologyImportStmt", "topologyMember", "topologyDecl", 
		"locationKind", "locationStmt", "moduleMember", "moduleDecl", "formalParameter", 
		"formalParameterList", "qualIdent", "primitiveType", "typeName", "commaDelim", 
		"semiDelim", "arrayExpr", "structAssignment", "structExpr", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'['", "']'", "':'", "'{'", "'}'", "'->'", "'('", "')'", 
		"'.'", "','", "';'", "'-'", "'*'", "'/'", "'+'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'U8'", "'I8'", "'U16'", "'I16'", "'U32'", "'I32'", 
		"'U64'", "'I64'", "'F32'", "'F64'", "'active'", "'activity'", "'always'", 
		"'array'", "'assert'", "'async'", "'at'", "'base'", "'block'", "'bool'", 
		"'change'", "'command'", "'component'", "'connections'", "'constant'", 
		"'cpu'", "'default'", "'diagnostic'", "'drop'", "'enum'", "'event'", "'false'", 
		"'fatal'", "'format'", "'get'", "'guarded'", "'health'", "'high'", "'id'", 
		"'import'", "'include'", "'input'", "'instance'", "'internal'", "'locate'", 
		"'low'", "'match'", "'module'", "'on'", "'opcode'", "'orange'", "'output'", 
		"'param'", "'passive'", "'phase'", "'port'", "'priority'", "'private'", 
		"'queue'", "'queued'", "'recv'", "'red'", "'ref'", "'reg'", "'resp'", 
		"'save'", "'serial'", "'set'", "'severity'", "'size'", "'stack'", "'string'", 
		"'struct'", "'sync'", "'telemetry'", "'text'", "'throttle'", "'time'", 
		"'topology'", "'true'", "'type'", "'update'", "'warning'", "'with'", "'yellow'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "PRIM_TYPE", "INT_TYPE", "NL", "WS", 
		"WS_NL", "COMMENT", "ANNOTATION", "LIT_BOOLEAN", "LIT_STRING", "LIT_FLOAT", 
		"LIT_INT", "U8", "I8", "U16", "I16", "U32", "I32", "U64", "I64", "F32", 
		"F64", "ACTIVE", "ACTIVITY", "ALWAYS", "ARRAY", "ASSERT", "ASYNC", "AT", 
		"BASE", "BLOCK", "BOOL", "CHANGE", "COMMAND", "COMPONENT", "CONNECTIONS", 
		"CONSTANT", "CPU", "DEFAULT", "DIAGNOSTIC", "DROP", "ENUM", "EVENT", "FALSE", 
		"FATAL", "FORMAT", "GET", "GUARDED", "HEALTH", "HIGH", "ID", "IMPORT", 
		"INCLUDE", "INPUT", "INSTANCE", "INTERNAL", "LOCATE", "LOW", "MATCH", 
		"MODULE", "ON", "OPCODE", "ORANGE", "OUTPUT", "PARAM", "PASSIVE", "PHASE", 
		"PORT", "PRIORITY", "PRIVATE", "QUEUE", "QUEUED", "RECV", "RED", "REF", 
		"REG", "RESP", "SAVE", "SERIAL", "SET", "SEVERITY", "SIZE", "STACK", "STRING", 
		"STRUCT", "SYNC", "TELEMETRY", "TEXT", "THROTTLE", "TIME", "TOPOLOGY", 
		"TRUE", "TYPE", "UPDATE", "WARNING", "WITH", "YELLOW", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FppParser._LITERAL_NAMES, FppParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FppParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Fpp.g4"; }

	// @Override
	public get ruleNames(): string[] { return FppParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FppParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FppParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FppParser.RULE_prog);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 116;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (FppParser.ACTIVE - 38)) | (1 << (FppParser.ARRAY - 38)) | (1 << (FppParser.CONSTANT - 38)) | (1 << (FppParser.ENUM - 38)) | (1 << (FppParser.INCLUDE - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (FppParser.INSTANCE - 70)) | (1 << (FppParser.LOCATE - 70)) | (1 << (FppParser.MODULE - 70)) | (1 << (FppParser.PASSIVE - 70)) | (1 << (FppParser.PORT - 70)) | (1 << (FppParser.QUEUED - 70)) | (1 << (FppParser.STRUCT - 70)))) !== 0) || _la === FppParser.TOPOLOGY || _la === FppParser.TYPE) {
				{
				{
				this.state = 122;
				this.moduleMember();
				this.state = 125;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FppParser.T__11:
				case FppParser.NL:
					{
					this.state = 123;
					this.semiDelim();
					}
					break;
				case FppParser.EOF:
					{
					this.state = 124;
					this.match(FppParser.EOF);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 132;
				this.match(FppParser.NL);
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 138;
			this.match(FppParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractTypeDecl(): AbstractTypeDeclContext {
		let _localctx: AbstractTypeDeclContext = new AbstractTypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FppParser.RULE_abstractTypeDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(FppParser.TYPE);
			this.state = 141;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayDecl(): ArrayDeclContext {
		let _localctx: ArrayDeclContext = new ArrayDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FppParser.RULE_arrayDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(FppParser.ARRAY);
			this.state = 144;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 145;
			this.match(FppParser.T__0);
			this.state = 146;
			this.match(FppParser.T__1);
			this.state = 147;
			_localctx._size = this.expr(0);
			this.state = 148;
			this.match(FppParser.T__2);
			this.state = 149;
			_localctx._type = this.typeName();
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 150;
				this.match(FppParser.DEFAULT);
				this.state = 151;
				_localctx._default_ = this.arrayExpr();
				}
			}

			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 154;
				this.match(FppParser.FORMAT);
				this.state = 155;
				_localctx._format = this.match(FppParser.LIT_STRING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDecl(): ConstantDeclContext {
		let _localctx: ConstantDeclContext = new ConstantDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FppParser.RULE_constantDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(FppParser.CONSTANT);
			this.state = 159;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 160;
			this.match(FppParser.T__0);
			this.state = 161;
			_localctx._value = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structMember(): StructMemberContext {
		let _localctx: StructMemberContext = new StructMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FppParser.RULE_structMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 164;
			this.match(FppParser.T__3);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 165;
				this.match(FppParser.T__1);
				this.state = 166;
				_localctx._size = this.expr(0);
				this.state = 167;
				this.match(FppParser.T__2);
				}
			}

			this.state = 171;
			_localctx._type = this.typeName();
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 172;
				this.match(FppParser.FORMAT);
				this.state = 173;
				_localctx._format = this.match(FppParser.LIT_STRING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDecl(): StructDeclContext {
		let _localctx: StructDeclContext = new StructDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FppParser.RULE_structDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(FppParser.STRUCT);
			this.state = 177;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 178;
			this.match(FppParser.T__4);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 179;
				this.match(FppParser.NL);
				}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 185;
				this.structMember();
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 186;
						this.commaDelim();
						this.state = 187;
						this.structMember();
						}
						}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 194;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 199;
			this.match(FppParser.T__5);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 200;
				this.match(FppParser.DEFAULT);
				this.state = 201;
				_localctx._default_ = this.structExpr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queueFullBehavior(): QueueFullBehaviorContext {
		let _localctx: QueueFullBehaviorContext = new QueueFullBehaviorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FppParser.RULE_queueFullBehavior);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			_la = this._input.LA(1);
			if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FppParser.ASSERT - 42)) | (1 << (FppParser.BLOCK - 42)) | (1 << (FppParser.DROP - 42)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandKind(): CommandKindContext {
		let _localctx: CommandKindContext = new CommandKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FppParser.RULE_commandKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			_la = this._input.LA(1);
			if (!(_la === FppParser.ASYNC || _la === FppParser.GUARDED || _la === FppParser.SYNC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandDecl(): CommandDeclContext {
		let _localctx: CommandDeclContext = new CommandDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FppParser.RULE_commandDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			_localctx._kind = this.commandKind();
			this.state = 209;
			this.match(FppParser.COMMAND);
			this.state = 210;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 211;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.OPCODE) {
				{
				this.state = 214;
				this.match(FppParser.OPCODE);
				this.state = 215;
				_localctx._opcode = this.expr(0);
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 218;
				this.match(FppParser.PRIORITY);
				this.state = 219;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FppParser.ASSERT - 42)) | (1 << (FppParser.BLOCK - 42)) | (1 << (FppParser.DROP - 42)))) !== 0)) {
				{
				this.state = 222;
				_localctx._queueFull = this.queueFullBehavior();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramDecl(): ParamDeclContext {
		let _localctx: ParamDeclContext = new ParamDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FppParser.RULE_paramDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(FppParser.PARAM);
			this.state = 226;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 227;
			this.match(FppParser.T__3);
			this.state = 228;
			_localctx._type = this.typeName();
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 229;
				this.match(FppParser.DEFAULT);
				this.state = 230;
				_localctx._default_ = this.expr(0);
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 233;
				this.match(FppParser.ID);
				this.state = 234;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SET) {
				{
				this.state = 237;
				this.match(FppParser.SET);
				this.state = 238;
				this.match(FppParser.OPCODE);
				this.state = 239;
				_localctx._setOpcode = this.expr(0);
				}
			}

			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SAVE) {
				{
				this.state = 242;
				this.match(FppParser.SAVE);
				this.state = 243;
				this.match(FppParser.OPCODE);
				this.state = 244;
				_localctx._saveOpcode = this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalPortKind(): GeneralPortKindContext {
		let _localctx: GeneralPortKindContext = new GeneralPortKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FppParser.RULE_generalPortKind);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ASYNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.match(FppParser.ASYNC);
				this.state = 248;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.GUARDED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.match(FppParser.GUARDED);
				this.state = 250;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.SYNC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 251;
				this.match(FppParser.SYNC);
				this.state = 252;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.OUTPUT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 253;
				this.match(FppParser.OUTPUT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialPortKind(): SpecialPortKindContext {
		let _localctx: SpecialPortKindContext = new SpecialPortKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FppParser.RULE_specialPortKind);
		try {
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.match(FppParser.COMMAND);
				this.state = 257;
				this.match(FppParser.RECV);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 258;
				this.match(FppParser.COMMAND);
				this.state = 259;
				this.match(FppParser.REG);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 260;
				this.match(FppParser.COMMAND);
				this.state = 261;
				this.match(FppParser.RESP);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 262;
				this.match(FppParser.EVENT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 263;
				this.match(FppParser.PARAM);
				this.state = 264;
				this.match(FppParser.GET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 265;
				this.match(FppParser.PARAM);
				this.state = 266;
				this.match(FppParser.SET);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 267;
				this.match(FppParser.TELEMETRY);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 268;
				this.match(FppParser.TEXT);
				this.state = 269;
				this.match(FppParser.EVENT);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 270;
				this.match(FppParser.TIME);
				this.state = 271;
				this.match(FppParser.GET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalPortInstanceType(): GeneralPortInstanceTypeContext {
		let _localctx: GeneralPortInstanceTypeContext = new GeneralPortInstanceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FppParser.RULE_generalPortInstanceType);
		try {
			this.state = 276;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.SERIAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 274;
				this.match(FppParser.SERIAL);
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.qualIdent();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalPortInstanceDecl(): GeneralPortInstanceDeclContext {
		let _localctx: GeneralPortInstanceDeclContext = new GeneralPortInstanceDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FppParser.RULE_generalPortInstanceDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			_localctx._kind = this.generalPortKind();
			this.state = 279;
			this.match(FppParser.PORT);
			this.state = 280;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 281;
			this.match(FppParser.T__3);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 282;
				this.match(FppParser.T__1);
				this.state = 283;
				_localctx._n = this.expr(0);
				this.state = 284;
				this.match(FppParser.T__2);
				}
			}

			this.state = 288;
			_localctx._type = this.generalPortInstanceType();
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 289;
				this.match(FppParser.PRIORITY);
				this.state = 290;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FppParser.ASSERT - 42)) | (1 << (FppParser.BLOCK - 42)) | (1 << (FppParser.DROP - 42)))) !== 0)) {
				{
				this.state = 293;
				_localctx._queueFull = this.queueFullBehavior();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialPortInstanceDecl(): SpecialPortInstanceDeclContext {
		let _localctx: SpecialPortInstanceDeclContext = new SpecialPortInstanceDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FppParser.RULE_specialPortInstanceDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.specialPortKind();
			this.state = 297;
			this.match(FppParser.PORT);
			this.state = 298;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public telemetryLimitKind(): TelemetryLimitKindContext {
		let _localctx: TelemetryLimitKindContext = new TelemetryLimitKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FppParser.RULE_telemetryLimitKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			_la = this._input.LA(1);
			if (!(_la === FppParser.ORANGE || _la === FppParser.RED || _la === FppParser.YELLOW)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public telemetryLimitExpr(): TelemetryLimitExprContext {
		let _localctx: TelemetryLimitExprContext = new TelemetryLimitExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FppParser.RULE_telemetryLimitExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			_localctx._kind = this.telemetryLimitKind();
			this.state = 303;
			_localctx._limit = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public telemetryLimit(): TelemetryLimitContext {
		let _localctx: TelemetryLimitContext = new TelemetryLimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FppParser.RULE_telemetryLimit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(FppParser.T__4);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 306;
				this.match(FppParser.NL);
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ORANGE || _la === FppParser.RED || _la === FppParser.YELLOW) {
				{
				this.state = 312;
				this.telemetryLimitExpr();
				this.state = 318;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 313;
						this.commaDelim();
						this.state = 314;
						this.telemetryLimitExpr();
						}
						}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 321;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 326;
			this.match(FppParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public telemetryUpdate(): TelemetryUpdateContext {
		let _localctx: TelemetryUpdateContext = new TelemetryUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FppParser.RULE_telemetryUpdate);
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ALWAYS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 328;
				this.match(FppParser.ALWAYS);
				}
				break;
			case FppParser.ON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
				this.match(FppParser.ON);
				this.state = 330;
				this.match(FppParser.CHANGE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public telemetryChannelDecl(): TelemetryChannelDeclContext {
		let _localctx: TelemetryChannelDeclContext = new TelemetryChannelDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FppParser.RULE_telemetryChannelDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(FppParser.TELEMETRY);
			this.state = 334;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 335;
			this.match(FppParser.T__3);
			this.state = 336;
			_localctx._type = this.typeName();
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 337;
				this.match(FppParser.ID);
				this.state = 338;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.UPDATE) {
				{
				this.state = 341;
				this.match(FppParser.UPDATE);
				this.state = 342;
				_localctx._update = this.telemetryUpdate();
				}
			}

			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 345;
				this.match(FppParser.FORMAT);
				this.state = 346;
				_localctx._format = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.LOW) {
				{
				this.state = 349;
				this.match(FppParser.LOW);
				this.state = 350;
				_localctx._low = this.telemetryLimit();
				}
			}

			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.HIGH) {
				{
				this.state = 353;
				this.match(FppParser.HIGH);
				this.state = 354;
				_localctx._high = this.telemetryLimit();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FppParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__0) {
				{
				this.state = 358;
				this.match(FppParser.T__0);
				this.state = 359;
				_localctx._value = this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDecl(): EnumDeclContext {
		let _localctx: EnumDeclContext = new EnumDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FppParser.RULE_enumDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(FppParser.ENUM);
			this.state = 363;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__3) {
				{
				this.state = 364;
				this.match(FppParser.T__3);
				this.state = 365;
				_localctx._type = this.match(FppParser.INT_TYPE);
				}
			}

			this.state = 368;
			this.match(FppParser.T__4);
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 369;
				this.match(FppParser.NL);
				}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 375;
				this.enumMember();
				this.state = 381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 376;
						this.commaDelim();
						this.state = 377;
						this.enumMember();
						}
						}
					}
					this.state = 383;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 384;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 389;
			this.match(FppParser.T__5);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 390;
				this.match(FppParser.DEFAULT);
				this.state = 391;
				_localctx._default_ = this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventSeverity(): EventSeverityContext {
		let _localctx: EventSeverityContext = new EventSeverityContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FppParser.RULE_eventSeverity);
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 394;
				this.match(FppParser.ACTIVITY);
				this.state = 395;
				this.match(FppParser.HIGH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 396;
				this.match(FppParser.ACTIVITY);
				this.state = 397;
				this.match(FppParser.LOW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 398;
				this.match(FppParser.COMMAND);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 399;
				this.match(FppParser.DIAGNOSTIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 400;
				this.match(FppParser.FATAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 401;
				this.match(FppParser.WARNING);
				this.state = 402;
				this.match(FppParser.HIGH);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 403;
				this.match(FppParser.WARNING);
				this.state = 404;
				this.match(FppParser.LOW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDecl(): EventDeclContext {
		let _localctx: EventDeclContext = new EventDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FppParser.RULE_eventDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(FppParser.EVENT);
			this.state = 408;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 409;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 412;
			this.match(FppParser.SEVERITY);
			this.state = 413;
			this.eventSeverity();
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 414;
				this.match(FppParser.ID);
				this.state = 415;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 418;
			this.match(FppParser.FORMAT);
			this.state = 419;
			_localctx._format = this.match(FppParser.LIT_STRING);
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.THROTTLE) {
				{
				this.state = 420;
				this.match(FppParser.THROTTLE);
				this.state = 421;
				_localctx._throttle = this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeStmt(): IncludeStmtContext {
		let _localctx: IncludeStmtContext = new IncludeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FppParser.RULE_includeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(FppParser.INCLUDE);
			this.state = 425;
			_localctx._include = this.match(FppParser.LIT_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchStmt(): MatchStmtContext {
		let _localctx: MatchStmtContext = new MatchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FppParser.RULE_matchStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(FppParser.MATCH);
			this.state = 428;
			_localctx._match = this.match(FppParser.IDENTIFIER);
			this.state = 429;
			this.match(FppParser.WITH);
			this.state = 430;
			_localctx._with_ = this.match(FppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public internalPortDecl(): InternalPortDeclContext {
		let _localctx: InternalPortDeclContext = new InternalPortDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FppParser.RULE_internalPortDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(FppParser.INTERNAL);
			this.state = 433;
			this.match(FppParser.PORT);
			this.state = 434;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 435;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 438;
				this.match(FppParser.PRIORITY);
				this.state = 439;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (FppParser.ASSERT - 42)) | (1 << (FppParser.BLOCK - 42)) | (1 << (FppParser.DROP - 42)))) !== 0)) {
				{
				this.state = 442;
				_localctx._queueFull = this.queueFullBehavior();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initSpecifier(): InitSpecifierContext {
		let _localctx: InitSpecifierContext = new InitSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FppParser.RULE_initSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(FppParser.PHASE);
			this.state = 446;
			_localctx._phase = this.expr(0);
			this.state = 447;
			_localctx._code = this.match(FppParser.LIT_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentInstanceDecl(): ComponentInstanceDeclContext {
		let _localctx: ComponentInstanceDeclContext = new ComponentInstanceDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FppParser.RULE_componentInstanceDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(FppParser.INSTANCE);
			this.state = 450;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 451;
			this.match(FppParser.T__3);
			this.state = 452;
			_localctx._fppType = this.qualIdent();
			this.state = 453;
			this.match(FppParser.BASE);
			this.state = 454;
			this.match(FppParser.ID);
			this.state = 455;
			_localctx._base_id = this.expr(0);
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.TYPE) {
				{
				this.state = 456;
				this.match(FppParser.TYPE);
				this.state = 457;
				_localctx._cppType = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.AT) {
				{
				this.state = 460;
				this.match(FppParser.AT);
				this.state = 461;
				_localctx._at = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.QUEUE) {
				{
				this.state = 464;
				this.match(FppParser.QUEUE);
				this.state = 465;
				this.match(FppParser.SIZE);
				this.state = 466;
				_localctx._queueSize = this.expr(0);
				}
			}

			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.STACK) {
				{
				this.state = 469;
				this.match(FppParser.STACK);
				this.state = 470;
				this.match(FppParser.SIZE);
				this.state = 471;
				_localctx._stackSize = this.expr(0);
				}
			}

			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 474;
				this.match(FppParser.PRIORITY);
				this.state = 475;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.CPU) {
				{
				this.state = 478;
				this.match(FppParser.CPU);
				this.state = 479;
				_localctx._cpu = this.expr(0);
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__4) {
				{
				this.state = 482;
				this.match(FppParser.T__4);
				this.state = 486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 483;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 488;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.PHASE) {
					{
					{
					this.state = 489;
					this.initSpecifier();
					this.state = 490;
					this.semiDelim();
					}
					}
					this.state = 496;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.NL) {
					{
					{
					this.state = 497;
					this.match(FppParser.NL);
					}
					}
					this.state = 502;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 503;
				this.match(FppParser.T__5);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentKind(): ComponentKindContext {
		let _localctx: ComponentKindContext = new ComponentKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FppParser.RULE_componentKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			_la = this._input.LA(1);
			if (!(_la === FppParser.ACTIVE || _la === FppParser.PASSIVE || _la === FppParser.QUEUED)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentMember(): ComponentMemberContext {
		let _localctx: ComponentMemberContext = new ComponentMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FppParser.RULE_componentMember);
		try {
			this.state = 522;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.abstractTypeDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this.arrayDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 510;
				this.constantDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 511;
				this.structDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 512;
				this.commandDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 513;
				this.paramDecl();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 514;
				this.generalPortInstanceDecl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 515;
				this.specialPortInstanceDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 516;
				this.telemetryChannelDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 517;
				this.enumDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 518;
				this.eventDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 519;
				this.includeStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 520;
				this.internalPortDecl();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 521;
				this.matchStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentDecl(): ComponentDeclContext {
		let _localctx: ComponentDeclContext = new ComponentDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FppParser.RULE_componentDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			_localctx._kind = this.componentKind();
			this.state = 525;
			this.match(FppParser.COMPONENT);
			this.state = 526;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 527;
			this.match(FppParser.T__4);
			this.state = 531;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 528;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 533;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (FppParser.ARRAY - 41)) | (1 << (FppParser.ASYNC - 41)) | (1 << (FppParser.COMMAND - 41)) | (1 << (FppParser.CONSTANT - 41)) | (1 << (FppParser.ENUM - 41)) | (1 << (FppParser.EVENT - 41)) | (1 << (FppParser.GUARDED - 41)) | (1 << (FppParser.INCLUDE - 41)) | (1 << (FppParser.INTERNAL - 41)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (FppParser.MATCH - 74)) | (1 << (FppParser.OUTPUT - 74)) | (1 << (FppParser.PARAM - 74)) | (1 << (FppParser.STRUCT - 74)) | (1 << (FppParser.SYNC - 74)) | (1 << (FppParser.TELEMETRY - 74)) | (1 << (FppParser.TEXT - 74)) | (1 << (FppParser.TIME - 74)))) !== 0) || _la === FppParser.TYPE) {
				{
				{
				this.state = 534;
				this.componentMember();
				this.state = 535;
				this.semiDelim();
				}
				}
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 542;
				this.match(FppParser.NL);
				}
				}
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 548;
			this.match(FppParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public portDecl(): PortDeclContext {
		let _localctx: PortDeclContext = new PortDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FppParser.RULE_portDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(FppParser.PORT);
			this.state = 551;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 552;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__6) {
				{
				this.state = 555;
				this.match(FppParser.T__6);
				this.state = 556;
				_localctx._returnType = this.typeName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentInstanceSpec(): ComponentInstanceSpecContext {
		let _localctx: ComponentInstanceSpecContext = new ComponentInstanceSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FppParser.RULE_componentInstanceSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIVATE) {
				{
				this.state = 559;
				this.match(FppParser.PRIVATE);
				}
			}

			this.state = 562;
			this.match(FppParser.INSTANCE);
			this.state = 563;
			_localctx._name = this.qualIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public connectionNode(): ConnectionNodeContext {
		let _localctx: ConnectionNodeContext = new ConnectionNodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FppParser.RULE_connectionNode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			_localctx._node = this.qualIdent();
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 566;
				this.match(FppParser.T__1);
				this.state = 567;
				_localctx._index = this.expr(0);
				this.state = 568;
				this.match(FppParser.T__2);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public connection(): ConnectionContext {
		let _localctx: ConnectionContext = new ConnectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FppParser.RULE_connection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			_localctx._source = this.connectionNode();
			this.state = 573;
			this.match(FppParser.T__6);
			this.state = 574;
			_localctx._destination = this.connectionNode();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directGraphDecl(): DirectGraphDeclContext {
		let _localctx: DirectGraphDeclContext = new DirectGraphDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FppParser.RULE_directGraphDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.match(FppParser.CONNECTIONS);
			this.state = 577;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 578;
			this.match(FppParser.T__4);
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 579;
				this.match(FppParser.NL);
				}
				}
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 585;
				this.connection();
				this.state = 591;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 586;
						this.commaDelim();
						this.state = 587;
						this.connection();
						}
						}
					}
					this.state = 593;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 594;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 599;
			this.match(FppParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternKind(): PatternKindContext {
		let _localctx: PatternKindContext = new PatternKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FppParser.RULE_patternKind);
		try {
			this.state = 609;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.COMMAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 601;
				this.match(FppParser.COMMAND);
				}
				break;
			case FppParser.EVENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 602;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.TEXT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 603;
				this.match(FppParser.TEXT);
				this.state = 604;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.HEALTH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 605;
				this.match(FppParser.HEALTH);
				}
				break;
			case FppParser.PARAM:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 606;
				this.match(FppParser.PARAM);
				}
				break;
			case FppParser.TELEMETRY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 607;
				this.match(FppParser.TELEMETRY);
				}
				break;
			case FppParser.TIME:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 608;
				this.match(FppParser.TIME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternGraphSources(): PatternGraphSourcesContext {
		let _localctx: PatternGraphSourcesContext = new PatternGraphSourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FppParser.RULE_patternGraphSources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 611;
			this.qualIdent();
			this.state = 617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 612;
					this.commaDelim();
					this.state = 613;
					this.qualIdent();
					}
					}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 620;
				this.commaDelim();
				}
				break;
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternGraphStmt(): PatternGraphStmtContext {
		let _localctx: PatternGraphStmtContext = new PatternGraphStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FppParser.RULE_patternGraphStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			_localctx._kind = this.patternKind();
			this.state = 624;
			this.match(FppParser.CONNECTIONS);
			this.state = 625;
			this.match(FppParser.INSTANCE);
			this.state = 626;
			_localctx._target = this.qualIdent();
			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 627;
				this.patternGraphSources();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topologyImportStmt(): TopologyImportStmtContext {
		let _localctx: TopologyImportStmtContext = new TopologyImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, FppParser.RULE_topologyImportStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.match(FppParser.IMPORT);
			this.state = 631;
			_localctx._topology = this.qualIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topologyMember(): TopologyMemberContext {
		let _localctx: TopologyMemberContext = new TopologyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FppParser.RULE_topologyMember);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.INSTANCE:
			case FppParser.PRIVATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this.componentInstanceSpec();
				}
				break;
			case FppParser.CONNECTIONS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 634;
				this.directGraphDecl();
				}
				break;
			case FppParser.COMMAND:
			case FppParser.EVENT:
			case FppParser.HEALTH:
			case FppParser.PARAM:
			case FppParser.TELEMETRY:
			case FppParser.TEXT:
			case FppParser.TIME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 635;
				this.patternGraphStmt();
				}
				break;
			case FppParser.IMPORT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 636;
				this.topologyImportStmt();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 637;
				this.includeStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topologyDecl(): TopologyDeclContext {
		let _localctx: TopologyDeclContext = new TopologyDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, FppParser.RULE_topologyDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(FppParser.TOPOLOGY);
			this.state = 641;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 642;
			this.match(FppParser.T__4);
			this.state = 646;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 643;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 648;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (FppParser.COMMAND - 49)) | (1 << (FppParser.CONNECTIONS - 49)) | (1 << (FppParser.EVENT - 49)) | (1 << (FppParser.HEALTH - 49)) | (1 << (FppParser.IMPORT - 49)) | (1 << (FppParser.INCLUDE - 49)) | (1 << (FppParser.INSTANCE - 49)) | (1 << (FppParser.PARAM - 49)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (FppParser.PRIVATE - 85)) | (1 << (FppParser.TELEMETRY - 85)) | (1 << (FppParser.TEXT - 85)) | (1 << (FppParser.TIME - 85)))) !== 0)) {
				{
				{
				this.state = 649;
				this.topologyMember();
				this.state = 650;
				this.semiDelim();
				}
				}
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 657;
				this.match(FppParser.NL);
				}
				}
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 663;
			this.match(FppParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public locationKind(): LocationKindContext {
		let _localctx: LocationKindContext = new LocationKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, FppParser.RULE_locationKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			_la = this._input.LA(1);
			if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (FppParser.COMPONENT - 50)) | (1 << (FppParser.CONSTANT - 50)) | (1 << (FppParser.INSTANCE - 50)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (FppParser.PORT - 83)) | (1 << (FppParser.TOPOLOGY - 83)) | (1 << (FppParser.TYPE - 83)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public locationStmt(): LocationStmtContext {
		let _localctx: LocationStmtContext = new LocationStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, FppParser.RULE_locationStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.match(FppParser.LOCATE);
			this.state = 668;
			_localctx._kind = this.locationKind();
			this.state = 669;
			_localctx._name = this.qualIdent();
			this.state = 670;
			this.match(FppParser.AT);
			this.state = 671;
			_localctx._path = this.match(FppParser.LIT_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleMember(): ModuleMemberContext {
		let _localctx: ModuleMemberContext = new ModuleMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, FppParser.RULE_moduleMember);
		try {
			this.state = 685;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 673;
				this.abstractTypeDecl();
				}
				break;
			case FppParser.ARRAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 674;
				this.arrayDecl();
				}
				break;
			case FppParser.ACTIVE:
			case FppParser.PASSIVE:
			case FppParser.QUEUED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 675;
				this.componentDecl();
				}
				break;
			case FppParser.INSTANCE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 676;
				this.componentInstanceDecl();
				}
				break;
			case FppParser.CONSTANT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 677;
				this.constantDecl();
				}
				break;
			case FppParser.MODULE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 678;
				this.moduleDecl();
				}
				break;
			case FppParser.PORT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 679;
				this.portDecl();
				}
				break;
			case FppParser.STRUCT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 680;
				this.structDecl();
				}
				break;
			case FppParser.LOCATE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 681;
				this.locationStmt();
				}
				break;
			case FppParser.ENUM:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 682;
				this.enumDecl();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 683;
				this.includeStmt();
				}
				break;
			case FppParser.TOPOLOGY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 684;
				this.topologyDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDecl(): ModuleDeclContext {
		let _localctx: ModuleDeclContext = new ModuleDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, FppParser.RULE_moduleDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(FppParser.MODULE);
			this.state = 688;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 689;
			this.match(FppParser.T__4);
			this.state = 693;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 690;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 695;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (FppParser.ACTIVE - 38)) | (1 << (FppParser.ARRAY - 38)) | (1 << (FppParser.CONSTANT - 38)) | (1 << (FppParser.ENUM - 38)) | (1 << (FppParser.INCLUDE - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (FppParser.INSTANCE - 70)) | (1 << (FppParser.LOCATE - 70)) | (1 << (FppParser.MODULE - 70)) | (1 << (FppParser.PASSIVE - 70)) | (1 << (FppParser.PORT - 70)) | (1 << (FppParser.QUEUED - 70)) | (1 << (FppParser.STRUCT - 70)))) !== 0) || _la === FppParser.TOPOLOGY || _la === FppParser.TYPE) {
				{
				{
				this.state = 696;
				this.moduleMember();
				this.state = 697;
				this.semiDelim();
				}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 704;
				this.match(FppParser.NL);
				}
				}
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 710;
			this.match(FppParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, FppParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF) {
				{
				this.state = 712;
				this.match(FppParser.REF);
				}
			}

			this.state = 715;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 716;
			this.match(FppParser.T__3);
			this.state = 717;
			_localctx._type = this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, FppParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.match(FppParser.T__7);
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 720;
				this.match(FppParser.NL);
				}
				}
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF || _la === FppParser.IDENTIFIER) {
				{
				this.state = 726;
				this.formalParameter();
				this.state = 732;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 727;
						this.commaDelim();
						this.state = 728;
						this.formalParameter();
						}
						}
					}
					this.state = 734;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 735;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 740;
			this.match(FppParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualIdent(): QualIdentContext {
		let _localctx: QualIdentContext = new QualIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, FppParser.RULE_qualIdent);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.match(FppParser.IDENTIFIER);
			this.state = 747;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 743;
					this.match(FppParser.T__9);
					this.state = 744;
					this.match(FppParser.IDENTIFIER);
					}
					}
				}
				this.state = 749;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, FppParser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.PRIM_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 750;
				_localctx._type = this.match(FppParser.PRIM_TYPE);
				}
				break;
			case FppParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 751;
				_localctx._type = this.match(FppParser.STRING);
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.SIZE) {
					{
					this.state = 752;
					this.match(FppParser.SIZE);
					this.state = 753;
					_localctx._size = this.expr(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, FppParser.RULE_typeName);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.PRIM_TYPE:
			case FppParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 758;
				this.primitiveType();
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 759;
				this.qualIdent();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commaDelim(): CommaDelimContext {
		let _localctx: CommaDelimContext = new CommaDelimContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, FppParser.RULE_commaDelim);
		try {
			let _alt: number;
			this.state = 774;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				this.match(FppParser.T__10);
				this.state = 766;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 763;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 768;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 769;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 772;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public semiDelim(): SemiDelimContext {
		let _localctx: SemiDelimContext = new SemiDelimContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FppParser.RULE_semiDelim);
		try {
			let _alt: number;
			this.state = 788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 776;
				this.match(FppParser.T__11);
				this.state = 780;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 777;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 782;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 784;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 783;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 786;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayExpr(): ArrayExprContext {
		let _localctx: ArrayExprContext = new ArrayExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, FppParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(FppParser.T__1);
			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 791;
				this.match(FppParser.NL);
				}
				}
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FppParser.T__1) | (1 << FppParser.T__4) | (1 << FppParser.T__7) | (1 << FppParser.T__12) | (1 << FppParser.LIT_BOOLEAN) | (1 << FppParser.LIT_STRING) | (1 << FppParser.LIT_FLOAT) | (1 << FppParser.LIT_INT))) !== 0) || _la === FppParser.IDENTIFIER) {
				{
				this.state = 797;
				this.expr(0);
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					{
					this.state = 798;
					this.commaDelim();
					this.state = 799;
					this.expr(0);
					}
					}
					this.state = 805;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 808;
			this.match(FppParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structAssignment(): StructAssignmentContext {
		let _localctx: StructAssignmentContext = new StructAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, FppParser.RULE_structAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 811;
			this.match(FppParser.T__0);
			this.state = 812;
			_localctx._value = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExpr(): StructExprContext {
		let _localctx: StructExprContext = new StructExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, FppParser.RULE_structExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
			this.match(FppParser.T__4);
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 815;
				this.match(FppParser.NL);
				}
				}
				this.state = 820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 821;
				this.structAssignment();
				this.state = 827;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 822;
						this.commaDelim();
						this.state = 823;
						this.structAssignment();
						}
						}
					}
					this.state = 829;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				this.state = 831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 830;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 835;
			this.match(FppParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 114;
		this.enterRecursionRule(_localctx, 114, FppParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__12:
				{
				this.state = 838;
				this.match(FppParser.T__12);
				this.state = 839;
				_localctx._unary = this.expr(11);
				}
				break;
			case FppParser.T__1:
				{
				this.state = 840;
				this.arrayExpr();
				}
				break;
			case FppParser.T__4:
				{
				this.state = 841;
				this.structExpr();
				}
				break;
			case FppParser.IDENTIFIER:
				{
				this.state = 842;
				this.qualIdent();
				}
				break;
			case FppParser.LIT_BOOLEAN:
				{
				this.state = 843;
				this.match(FppParser.LIT_BOOLEAN);
				}
				break;
			case FppParser.LIT_FLOAT:
				{
				this.state = 844;
				this.match(FppParser.LIT_FLOAT);
				}
				break;
			case FppParser.LIT_INT:
				{
				this.state = 845;
				this.match(FppParser.LIT_INT);
				}
				break;
			case FppParser.LIT_STRING:
				{
				this.state = 846;
				this.match(FppParser.LIT_STRING);
				}
				break;
			case FppParser.T__7:
				{
				this.state = 847;
				this.match(FppParser.T__7);
				this.state = 848;
				_localctx._p = this.expr(0);
				this.state = 849;
				this.match(FppParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 861;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 859;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 853;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 854;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FppParser.T__13 || _la === FppParser.T__14)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 855;
						_localctx._right = this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 856;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 857;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FppParser.T__12 || _la === FppParser.T__15)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 858;
						_localctx._right = this.expr(10);
						}
						break;
					}
					}
				}
				this.state = 863;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 57:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03s\u0363\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x03\x02\x07" +
		"\x02x\n\x02\f\x02\x0E\x02{\v\x02\x03\x02\x03\x02\x03\x02\x05\x02\x80\n" +
		"\x02\x07\x02\x82\n\x02\f\x02\x0E\x02\x85\v\x02\x03\x02\x07\x02\x88\n\x02" +
		"\f\x02\x0E\x02\x8B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\x9B\n\x04\x03\x04\x03\x04\x05\x04\x9F\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xAC" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB1\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\xB7\n\x07\f\x07\x0E\x07\xBA\v\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07\xC0\n\x07\f\x07\x0E\x07\xC3\v\x07\x03\x07\x05\x07" +
		"\xC6\n\x07\x05\x07\xC8\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xCD\n\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\xD7\n\n\x03\n\x03" +
		"\n\x05\n\xDB\n\n\x03\n\x03\n\x05\n\xDF\n\n\x03\n\x05\n\xE2\n\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\xEA\n\v\x03\v\x03\v\x05\v\xEE\n\v\x03" +
		"\v\x03\v\x03\v\x05\v\xF3\n\v\x03\v\x03\v\x03\v\x05\v\xF8\n\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0101\n\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0113\n\r\x03\x0E\x03\x0E\x05\x0E\u0117\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0121\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u0126\n\x0F\x03\x0F\x05\x0F\u0129\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x07\x13\u0136\n\x13\f\x13\x0E\x13\u0139\v\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\u013F\n\x13\f\x13\x0E\x13\u0142\v\x13\x03" +
		"\x13\x05\x13\u0145\n\x13\x05\x13\u0147\n\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u014E\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u0156\n\x15\x03\x15\x03\x15\x05\x15\u015A\n\x15\x03\x15" +
		"\x03\x15\x05\x15\u015E\n\x15\x03\x15\x03\x15\x05\x15\u0162\n\x15\x03\x15" +
		"\x03\x15\x05\x15\u0166\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u016B\n\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0171\n\x17\x03\x17\x03\x17\x07" +
		"\x17\u0175\n\x17\f\x17\x0E\x17\u0178\v\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u017E\n\x17\f\x17\x0E\x17\u0181\v\x17\x03\x17\x05\x17\u0184" +
		"\n\x17\x05\x17\u0186\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u018B\n\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0198\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u019D" +
		"\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01A3\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x05\x19\u01A9\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u01B7\n\x1C\x03\x1C\x03\x1C\x05\x1C\u01BB\n\x1C\x03\x1C\x05\x1C\u01BE" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01CD\n\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u01D1\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D6\n\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u01DB\n\x1E\x03\x1E\x03\x1E\x05\x1E\u01DF" +
		"\n\x1E\x03\x1E\x03\x1E\x05\x1E\u01E3\n\x1E\x03\x1E\x03\x1E\x07\x1E\u01E7" +
		"\n\x1E\f\x1E\x0E\x1E\u01EA\v\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01EF" +
		"\n\x1E\f\x1E\x0E\x1E\u01F2\v\x1E\x03\x1E\x07\x1E\u01F5\n\x1E\f\x1E\x0E" +
		"\x1E\u01F8\v\x1E\x03\x1E\x05\x1E\u01FB\n\x1E\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u020D" +
		"\n \x03!\x03!\x03!\x03!\x03!\x07!\u0214\n!\f!\x0E!\u0217\v!\x03!\x03!" +
		"\x03!\x07!\u021C\n!\f!\x0E!\u021F\v!\x03!\x07!\u0222\n!\f!\x0E!\u0225" +
		"\v!\x03!\x03!\x03\"\x03\"\x03\"\x05\"\u022C\n\"\x03\"\x03\"\x05\"\u0230" +
		"\n\"\x03#\x05#\u0233\n#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x05$\u023D" +
		"\n$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x07&\u0247\n&\f&\x0E&\u024A" +
		"\v&\x03&\x03&\x03&\x03&\x07&\u0250\n&\f&\x0E&\u0253\v&\x03&\x05&\u0256" +
		"\n&\x05&\u0258\n&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
		"\x03\'\x05\'\u0264\n\'\x03(\x03(\x03(\x03(\x07(\u026A\n(\f(\x0E(\u026D" +
		"\v(\x03(\x05(\u0270\n(\x03)\x03)\x03)\x03)\x03)\x05)\u0277\n)\x03*\x03" +
		"*\x03*\x03+\x03+\x03+\x03+\x03+\x05+\u0281\n+\x03,\x03,\x03,\x03,\x07" +
		",\u0287\n,\f,\x0E,\u028A\v,\x03,\x03,\x03,\x07,\u028F\n,\f,\x0E,\u0292" +
		"\v,\x03,\x07,\u0295\n,\f,\x0E,\u0298\v,\x03,\x03,\x03-\x03-\x03.\x03." +
		"\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x05/\u02B0\n/\x030\x030\x030\x030\x070\u02B6\n0\f0\x0E0\u02B9" +
		"\v0\x030\x030\x030\x070\u02BE\n0\f0\x0E0\u02C1\v0\x030\x070\u02C4\n0\f" +
		"0\x0E0\u02C7\v0\x030\x030\x031\x051\u02CC\n1\x031\x031\x031\x031\x032" +
		"\x032\x072\u02D4\n2\f2\x0E2\u02D7\v2\x032\x032\x032\x032\x072\u02DD\n" +
		"2\f2\x0E2\u02E0\v2\x032\x052\u02E3\n2\x052\u02E5\n2\x032\x032\x033\x03" +
		"3\x033\x073\u02EC\n3\f3\x0E3\u02EF\v3\x034\x034\x034\x034\x054\u02F5\n" +
		"4\x054\u02F7\n4\x035\x035\x055\u02FB\n5\x036\x036\x076\u02FF\n6\f6\x0E" +
		"6\u0302\v6\x036\x066\u0305\n6\r6\x0E6\u0306\x056\u0309\n6\x037\x037\x07" +
		"7\u030D\n7\f7\x0E7\u0310\v7\x037\x067\u0313\n7\r7\x0E7\u0314\x057\u0317" +
		"\n7\x038\x038\x078\u031B\n8\f8\x0E8\u031E\v8\x038\x038\x038\x038\x078" +
		"\u0324\n8\f8\x0E8\u0327\v8\x058\u0329\n8\x038\x038\x039\x039\x039\x03" +
		"9\x03:\x03:\x07:\u0333\n:\f:\x0E:\u0336\v:\x03:\x03:\x03:\x03:\x07:\u033C" +
		"\n:\f:\x0E:\u033F\v:\x03:\x05:\u0342\n:\x05:\u0344\n:\x03:\x03:\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u0356" +
		"\n;\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u035E\n;\f;\x0E;\u0361\v;\x03;" +
		"\x02\x02\x03t<\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02\x02\t\x05" +
		"\x02,,00::\x05\x02--AAgg\x05\x02PP[[rr\x05\x02((SSYY\b\x024466HHUUlln" +
		"n\x03\x02\x10\x11\x04\x02\x0F\x0F\x12\x12\x02\u03C9\x02y\x03\x02\x02\x02" +
		"\x04\x8E\x03\x02\x02\x02\x06\x91\x03\x02\x02\x02\b\xA0\x03\x02\x02\x02" +
		"\n\xA5\x03\x02\x02\x02\f\xB2\x03\x02\x02\x02\x0E\xCE\x03\x02\x02\x02\x10" +
		"\xD0\x03\x02\x02\x02\x12\xD2\x03\x02\x02\x02\x14\xE3\x03\x02\x02\x02\x16" +
		"\u0100\x03\x02\x02\x02\x18\u0112\x03\x02\x02\x02\x1A\u0116\x03\x02\x02" +
		"\x02\x1C\u0118\x03\x02\x02\x02\x1E\u012A\x03\x02\x02\x02 \u012E\x03\x02" +
		"\x02\x02\"\u0130\x03\x02\x02\x02$\u0133\x03\x02\x02\x02&\u014D\x03\x02" +
		"\x02\x02(\u014F\x03\x02\x02\x02*\u0167\x03\x02\x02\x02,\u016C\x03\x02" +
		"\x02\x02.\u0197\x03\x02\x02\x020\u0199\x03\x02\x02\x022\u01AA\x03\x02" +
		"\x02\x024\u01AD\x03\x02\x02\x026\u01B2\x03\x02\x02\x028\u01BF\x03\x02" +
		"\x02\x02:\u01C3\x03\x02\x02\x02<\u01FC\x03\x02\x02\x02>\u020C\x03\x02" +
		"\x02\x02@\u020E\x03\x02\x02\x02B\u0228\x03\x02\x02\x02D\u0232\x03\x02" +
		"\x02\x02F\u0237\x03\x02\x02\x02H\u023E\x03\x02\x02\x02J\u0242\x03\x02" +
		"\x02\x02L\u0263\x03\x02\x02\x02N\u0265\x03\x02\x02\x02P\u0271\x03\x02" +
		"\x02\x02R\u0278\x03\x02\x02\x02T\u0280\x03\x02\x02\x02V\u0282\x03\x02" +
		"\x02\x02X\u029B\x03\x02\x02\x02Z\u029D\x03\x02\x02\x02\\\u02AF\x03\x02" +
		"\x02\x02^\u02B1\x03\x02\x02\x02`\u02CB\x03\x02\x02\x02b\u02D1\x03\x02" +
		"\x02\x02d\u02E8\x03\x02\x02\x02f\u02F6\x03\x02\x02\x02h\u02FA\x03\x02" +
		"\x02\x02j\u0308\x03\x02\x02\x02l\u0316\x03\x02\x02\x02n\u0318\x03\x02" +
		"\x02\x02p\u032C\x03\x02\x02\x02r\u0330\x03\x02\x02\x02t\u0355\x03\x02" +
		"\x02\x02vx\x07\x15\x02\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02" +
		"\x02\x02yz\x03\x02\x02\x02z\x83\x03\x02\x02\x02{y\x03\x02\x02\x02|\x7F" +
		"\x05\\/\x02}\x80\x05l7\x02~\x80\x07\x02\x02\x03\x7F}\x03\x02\x02\x02\x7F" +
		"~\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81|\x03\x02\x02\x02\x82\x85" +
		"\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x89" +
		"\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x88\x07\x15\x02\x02\x87\x86" +
		"\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x8C\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8D" +
		"\x07\x02\x02\x03\x8D\x03\x03\x02\x02\x02\x8E\x8F\x07n\x02\x02\x8F\x90" +
		"\x07s\x02\x02\x90\x05\x03\x02\x02\x02\x91\x92\x07+\x02\x02\x92\x93\x07" +
		"s\x02\x02\x93\x94\x07\x03\x02\x02\x94\x95\x07\x04\x02\x02\x95\x96\x05" +
		"t;\x02\x96\x97\x07\x05\x02\x02\x97\x9A\x05h5\x02\x98\x99\x078\x02\x02" +
		"\x99\x9B\x05n8\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B" +
		"\x9E\x03\x02\x02\x02\x9C\x9D\x07?\x02\x02\x9D\x9F\x07\x1B\x02\x02\x9E" +
		"\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x07\x03\x02\x02\x02\xA0" +
		"\xA1\x076\x02\x02\xA1\xA2\x07s\x02\x02\xA2\xA3\x07\x03\x02\x02\xA3\xA4" +
		"\x05t;\x02\xA4\t\x03\x02\x02\x02\xA5\xA6\x07s\x02\x02\xA6\xAB\x07\x06" +
		"\x02\x02\xA7\xA8\x07\x04\x02\x02\xA8\xA9\x05t;\x02\xA9\xAA\x07\x05\x02" +
		"\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA7\x03\x02\x02\x02\xAB\xAC\x03\x02\x02" +
		"\x02\xAC\xAD\x03\x02\x02\x02\xAD\xB0\x05h5\x02\xAE\xAF\x07?\x02\x02\xAF" +
		"\xB1\x07\x1B\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1" +
		"\v\x03\x02\x02\x02\xB2\xB3\x07f\x02\x02\xB3\xB4\x07s\x02\x02\xB4\xB8\x07" +
		"\x07\x02\x02\xB5\xB7\x07\x15\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA\x03" +
		"\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC7\x03" +
		"\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xC1\x05\n\x06\x02\xBC\xBD\x05" +
		"j6\x02\xBD\xBE\x05\n\x06\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBC\x03\x02\x02" +
		"\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02" +
		"\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC6\x05j6\x02" +
		"\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02" +
		"\xC7\xBB\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02" +
		"\xC9\xCC\x07\b\x02\x02\xCA\xCB\x078\x02\x02\xCB\xCD\x05r:\x02\xCC\xCA" +
		"\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\r\x03\x02\x02\x02\xCE\xCF" +
		"\t\x02\x02\x02\xCF\x0F\x03\x02\x02\x02\xD0\xD1\t\x03\x02\x02\xD1\x11\x03" +
		"\x02\x02\x02\xD2\xD3\x05\x10\t\x02\xD3\xD4\x073\x02\x02\xD4\xD6\x07s\x02" +
		"\x02\xD5\xD7\x05b2\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02" +
		"\xD7\xDA\x03\x02\x02\x02\xD8\xD9\x07O\x02\x02\xD9\xDB\x05t;\x02\xDA\xD8" +
		"\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDD" +
		"\x07V\x02\x02\xDD\xDF\x05t;\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02" +
		"\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xE2\x05\x0E\b\x02\xE1\xE0\x03\x02" +
		"\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\x13\x03\x02\x02\x02\xE3\xE4\x07R" +
		"\x02\x02\xE4\xE5\x07s\x02\x02\xE5\xE6\x07\x06\x02\x02\xE6\xE9\x05h5\x02" +
		"\xE7\xE8\x078\x02\x02\xE8\xEA\x05t;\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA" +
		"\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xEC\x07D\x02\x02\xEC\xEE" +
		"\x05t;\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF2\x03" +
		"\x02\x02\x02\xEF\xF0\x07a\x02\x02\xF0\xF1\x07O\x02\x02\xF1\xF3\x05t;\x02" +
		"\xF2\xEF\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF7\x03\x02\x02\x02" +
		"\xF4\xF5\x07_\x02\x02\xF5\xF6\x07O\x02\x02\xF6\xF8\x05t;\x02\xF7\xF4\x03" +
		"\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\x15\x03\x02\x02\x02\xF9\xFA\x07" +
		"-\x02\x02\xFA\u0101\x07G\x02\x02\xFB\xFC\x07A\x02\x02\xFC\u0101\x07G\x02" +
		"\x02\xFD\xFE\x07g\x02\x02\xFE\u0101\x07G\x02\x02\xFF\u0101\x07Q\x02\x02" +
		"\u0100\xF9\x03\x02\x02\x02\u0100\xFB\x03\x02\x02\x02\u0100\xFD\x03\x02" +
		"\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\x17\x03\x02\x02\x02\u0102\u0103" +
		"\x073\x02\x02\u0103\u0113\x07Z\x02\x02\u0104\u0105\x073\x02\x02\u0105" +
		"\u0113\x07]\x02\x02\u0106\u0107\x073\x02\x02\u0107\u0113\x07^\x02\x02" +
		"\u0108\u0113\x07<\x02\x02\u0109\u010A\x07R\x02\x02\u010A\u0113\x07@\x02" +
		"\x02\u010B\u010C\x07R\x02\x02\u010C\u0113\x07a\x02\x02\u010D\u0113\x07" +
		"h\x02\x02\u010E\u010F\x07i\x02\x02\u010F\u0113\x07<\x02\x02\u0110\u0111" +
		"\x07k\x02\x02\u0111\u0113\x07@\x02\x02\u0112\u0102\x03\x02\x02\x02\u0112" +
		"\u0104\x03\x02\x02\x02\u0112\u0106\x03\x02\x02\x02\u0112\u0108\x03\x02" +
		"\x02\x02\u0112\u0109\x03\x02\x02\x02\u0112\u010B\x03\x02\x02\x02\u0112" +
		"\u010D\x03\x02\x02\x02\u0112\u010E\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0113\x19\x03\x02\x02\x02\u0114\u0117\x07`\x02\x02\u0115\u0117" +
		"\x05d3\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117" +
		"\x1B\x03\x02\x02\x02\u0118\u0119\x05\x16\f\x02\u0119\u011A\x07U\x02\x02" +
		"\u011A\u011B\x07s\x02\x02\u011B\u0120\x07\x06\x02\x02\u011C\u011D\x07" +
		"\x04\x02\x02\u011D\u011E\x05t;\x02\u011E\u011F\x07\x05\x02\x02\u011F\u0121" +
		"\x03\x02\x02\x02\u0120\u011C\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02" +
		"\u0121\u0122\x03\x02\x02\x02\u0122\u0125\x05\x1A\x0E\x02\u0123\u0124\x07" +
		"V\x02\x02\u0124\u0126\x05t;\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126" +
		"\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0129\x05\x0E\b\x02" +
		"\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\x1D\x03" +
		"\x02\x02\x02\u012A\u012B\x05\x18\r\x02\u012B\u012C\x07U\x02\x02\u012C" +
		"\u012D\x07s\x02\x02\u012D\x1F\x03\x02\x02\x02\u012E\u012F\t\x04\x02\x02" +
		"\u012F!\x03\x02\x02\x02\u0130\u0131\x05 \x11\x02\u0131\u0132\x05t;\x02" +
		"\u0132#\x03\x02\x02\x02\u0133\u0137\x07\x07\x02\x02\u0134\u0136\x07\x15" +
		"\x02\x02\u0135\u0134\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137" +
		"\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0146\x03\x02" +
		"\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u0140\x05\"\x12\x02\u013B\u013C" +
		"\x05j6\x02\u013C\u013D\x05\"\x12\x02\u013D\u013F\x03\x02\x02\x02\u013E" +
		"\u013B\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02" +
		"\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142" +
		"\u0140\x03\x02\x02\x02\u0143\u0145\x05j6\x02\u0144\u0143\x03\x02\x02\x02" +
		"\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u013A\x03" +
		"\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"\u0149\x07\b\x02\x02\u0149%\x03\x02\x02\x02\u014A\u014E\x07*\x02\x02\u014B" +
		"\u014C\x07N\x02\x02\u014C\u014E\x072\x02\x02\u014D\u014A\x03\x02\x02\x02" +
		"\u014D\u014B\x03\x02\x02\x02\u014E\'\x03\x02\x02\x02\u014F\u0150\x07h" +
		"\x02\x02\u0150\u0151\x07s\x02\x02\u0151\u0152\x07\x06\x02\x02\u0152\u0155" +
		"\x05h5\x02\u0153\u0154\x07D\x02\x02\u0154\u0156\x05t;\x02\u0155\u0153" +
		"\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02" +
		"\u0157\u0158\x07o\x02\x02\u0158\u015A\x05&\x14\x02\u0159\u0157\x03\x02" +
		"\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B" +
		"\u015C\x07?\x02\x02\u015C\u015E\x07\x1B\x02\x02\u015D\u015B\x03\x02\x02" +
		"\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u0160" +
		"\x07K\x02\x02\u0160\u0162\x05$\x13\x02\u0161\u015F\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0164\x07C\x02" +
		"\x02\u0164\u0166\x05$\x13\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166" +
		"\x03\x02\x02\x02\u0166)\x03\x02\x02\x02\u0167\u016A\x07s\x02\x02\u0168" +
		"\u0169\x07\x03\x02\x02\u0169\u016B\x05t;\x02\u016A\u0168\x03\x02\x02\x02" +
		"\u016A\u016B\x03\x02\x02\x02\u016B+\x03\x02\x02\x02\u016C\u016D\x07;\x02" +
		"\x02\u016D\u0170\x07s\x02\x02\u016E\u016F\x07\x06\x02\x02\u016F\u0171" +
		"\x07\x14\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02" +
		"\u0171\u0172\x03\x02\x02\x02\u0172\u0176\x07\x07\x02\x02\u0173\u0175\x07" +
		"\x15\x02\x02\u0174\u0173\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176" +
		"\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0185\x03\x02" +
		"\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017F\x05*\x16\x02\u017A\u017B" +
		"\x05j6\x02\u017B\u017C\x05*\x16\x02\u017C\u017E\x03\x02\x02\x02\u017D" +
		"\u017A\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02" +
		"\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181" +
		"\u017F\x03\x02\x02\x02\u0182\u0184\x05j6\x02\u0183\u0182\x03\x02\x02\x02" +
		"\u0183\u0184\x03\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0179\x03" +
		"\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187" +
		"\u018A\x07\b\x02\x02\u0188\u0189\x078\x02\x02\u0189\u018B\x05t;\x02\u018A" +
		"\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B-\x03\x02\x02" +
		"\x02\u018C\u018D\x07)\x02\x02\u018D\u0198\x07C\x02\x02\u018E\u018F\x07" +
		")\x02\x02\u018F\u0198\x07K\x02\x02\u0190\u0198\x073\x02\x02\u0191\u0198" +
		"\x079\x02\x02\u0192\u0198\x07>\x02\x02\u0193\u0194\x07p\x02\x02\u0194" +
		"\u0198\x07C\x02\x02\u0195\u0196\x07p\x02\x02\u0196\u0198\x07K\x02\x02" +
		"\u0197\u018C\x03\x02\x02\x02\u0197\u018E\x03\x02\x02\x02\u0197\u0190\x03" +
		"\x02\x02\x02\u0197\u0191\x03\x02\x02\x02\u0197\u0192\x03\x02\x02\x02\u0197" +
		"\u0193\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198/\x03\x02\x02" +
		"\x02\u0199\u019A\x07<\x02\x02\u019A\u019C\x07s\x02\x02\u019B\u019D\x05" +
		"b2\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E" +
		"\x03\x02\x02\x02\u019E\u019F\x07b\x02\x02\u019F\u01A2\x05.\x18\x02\u01A0" +
		"\u01A1\x07D\x02\x02\u01A1\u01A3\x05t;\x02\u01A2\u01A0\x03\x02\x02\x02" +
		"\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\x07" +
		"?\x02\x02\u01A5\u01A8\x07\x1B\x02\x02\u01A6\u01A7\x07j\x02\x02\u01A7\u01A9" +
		"\x05t;\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9" +
		"1\x03\x02\x02\x02\u01AA\u01AB\x07F\x02\x02\u01AB\u01AC\x07\x1B\x02\x02" +
		"\u01AC3\x03\x02\x02\x02\u01AD\u01AE\x07L\x02\x02\u01AE\u01AF\x07s\x02" +
		"\x02\u01AF\u01B0\x07q\x02\x02\u01B0\u01B1\x07s\x02\x02\u01B15\x03\x02" +
		"\x02\x02\u01B2\u01B3\x07I\x02\x02\u01B3\u01B4\x07U\x02\x02\u01B4\u01B6" +
		"\x07s\x02\x02\u01B5\u01B7\x05b2\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6" +
		"\u01B7\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B9\x07V\x02" +
		"\x02\u01B9\u01BB\x05t;\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03" +
		"\x02\x02\x02\u01BB\u01BD\x03\x02\x02\x02\u01BC\u01BE\x05\x0E\b\x02\u01BD" +
		"\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE7\x03\x02\x02" +
		"\x02\u01BF\u01C0\x07T\x02\x02\u01C0\u01C1\x05t;\x02\u01C1\u01C2\x07\x1B" +
		"\x02\x02\u01C29\x03\x02\x02\x02\u01C3\u01C4\x07H\x02\x02\u01C4\u01C5\x07" +
		"s\x02\x02\u01C5\u01C6\x07\x06\x02\x02\u01C6\u01C7\x05d3\x02\u01C7\u01C8" +
		"\x07/\x02\x02\u01C8\u01C9\x07D\x02\x02\u01C9\u01CC\x05t;\x02\u01CA\u01CB" +
		"\x07n\x02\x02\u01CB\u01CD\x07\x1B\x02\x02\u01CC\u01CA\x03\x02\x02\x02" +
		"\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CF\x07" +
		".\x02\x02\u01CF\u01D1\x07\x1B\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0" +
		"\u01D1\x03\x02\x02\x02\u01D1\u01D5\x03\x02\x02\x02\u01D2\u01D3\x07X\x02" +
		"\x02\u01D3\u01D4\x07c\x02\x02\u01D4\u01D6\x05t;\x02\u01D5\u01D2\x03\x02" +
		"\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01DA\x03\x02\x02\x02\u01D7" +
		"\u01D8\x07d\x02\x02\u01D8\u01D9\x07c\x02\x02\u01D9\u01DB\x05t;\x02\u01DA" +
		"\u01D7\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DE\x03\x02" +
		"\x02\x02\u01DC\u01DD\x07V\x02\x02\u01DD\u01DF\x05t;\x02\u01DE\u01DC\x03" +
		"\x02\x02\x02\u01DE\u01DF\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01E1\x077\x02\x02\u01E1\u01E3" +
		"\x05t;\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3" +
		"\u01FA\x03\x02\x02\x02\u01E4\u01E8\x07\x07\x02\x02\u01E5\u01E7\x07\x15" +
		"\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8" +
		"\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01F0\x03\x02" +
		"\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01EC\x058\x1D\x02\u01EC\u01ED" +
		"\x05l7\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01EB\x03\x02\x02\x02\u01EF" +
		"\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1\u01F6\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3" +
		"\u01F5\x07\x15\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5\u01F8\x03\x02" +
		"\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
		"\u01F9\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FB\x07\b\x02" +
		"\x02\u01FA\u01E4\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB;\x03" +
		"\x02\x02\x02\u01FC\u01FD\t\x05\x02\x02\u01FD=\x03\x02\x02\x02\u01FE\u020D" +
		"\x05\x04\x03\x02\u01FF\u020D\x05\x06\x04\x02\u0200\u020D\x05\b\x05\x02" +
		"\u0201\u020D\x05\f\x07\x02\u0202\u020D\x05\x12\n\x02\u0203\u020D\x05\x14" +
		"\v\x02\u0204\u020D\x05\x1C\x0F\x02\u0205\u020D\x05\x1E\x10\x02\u0206\u020D" +
		"\x05(\x15\x02\u0207\u020D\x05,\x17\x02\u0208\u020D\x050\x19\x02\u0209" +
		"\u020D\x052\x1A\x02\u020A\u020D\x056\x1C\x02\u020B\u020D\x054\x1B\x02" +
		"\u020C\u01FE\x03\x02\x02\x02\u020C\u01FF\x03\x02\x02\x02\u020C\u0200\x03" +
		"\x02\x02\x02\u020C\u0201\x03\x02\x02\x02\u020C\u0202\x03\x02\x02\x02\u020C" +
		"\u0203\x03\x02\x02\x02\u020C\u0204\x03\x02\x02\x02\u020C\u0205\x03\x02" +
		"\x02\x02\u020C\u0206\x03\x02\x02\x02\u020C\u0207\x03\x02\x02\x02\u020C" +
		"\u0208\x03\x02\x02\x02\u020C\u0209\x03\x02\x02\x02\u020C\u020A\x03\x02" +
		"\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D?\x03\x02\x02\x02\u020E\u020F" +
		"\x05<\x1F\x02\u020F\u0210\x074\x02\x02\u0210\u0211\x07s\x02\x02\u0211" +
		"\u0215\x07\x07\x02\x02\u0212\u0214\x07\x15\x02\x02\u0213\u0212\x03\x02" +
		"\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215" +
		"\u0216\x03\x02\x02\x02\u0216\u021D\x03\x02\x02\x02\u0217\u0215\x03\x02" +
		"\x02\x02\u0218\u0219\x05> \x02\u0219\u021A\x05l7\x02\u021A\u021C\x03\x02" +
		"\x02\x02\u021B\u0218\x03\x02\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D" +
		"\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0223\x03\x02" +
		"\x02\x02\u021F\u021D\x03\x02\x02\x02\u0220\u0222\x07\x15\x02\x02\u0221" +
		"\u0220\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02\u0223\u0221\x03\x02" +
		"\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x03\x02\x02\x02\u0225" +
		"\u0223\x03\x02\x02\x02\u0226\u0227\x07\b\x02\x02\u0227A\x03\x02\x02\x02" +
		"\u0228\u0229\x07U\x02\x02\u0229\u022B\x07s\x02\x02\u022A\u022C\x05b2\x02" +
		"\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022F\x03" +
		"\x02\x02\x02\u022D\u022E\x07\t\x02\x02\u022E\u0230\x05h5\x02\u022F\u022D" +
		"\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230C\x03\x02\x02\x02\u0231" +
		"\u0233\x07W\x02\x02\u0232\u0231\x03\x02\x02\x02\u0232\u0233\x03\x02\x02" +
		"\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x07H\x02\x02\u0235\u0236" +
		"\x05d3\x02\u0236E\x03\x02\x02\x02\u0237\u023C\x05d3\x02\u0238\u0239\x07" +
		"\x04\x02\x02\u0239\u023A\x05t;\x02\u023A\u023B\x07\x05\x02\x02\u023B\u023D" +
		"\x03\x02\x02\x02\u023C\u0238\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02" +
		"\u023DG\x03\x02\x02\x02\u023E\u023F\x05F$\x02\u023F\u0240\x07\t\x02\x02" +
		"\u0240\u0241\x05F$\x02\u0241I\x03\x02\x02\x02\u0242\u0243\x075\x02\x02" +
		"\u0243\u0244\x07s\x02\x02\u0244\u0248\x07\x07\x02\x02\u0245\u0247\x07" +
		"\x15\x02\x02\u0246\u0245\x03\x02\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248" +
		"\u0246\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u0257\x03\x02" +
		"\x02\x02\u024A\u0248\x03\x02\x02\x02\u024B\u0251\x05H%\x02\u024C\u024D" +
		"\x05j6\x02\u024D\u024E\x05H%\x02\u024E\u0250\x03\x02\x02\x02\u024F\u024C" +
		"\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02" +
		"\u0251\u0252\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03" +
		"\x02\x02\x02\u0254\u0256\x05j6\x02\u0255\u0254\x03\x02\x02\x02\u0255\u0256" +
		"\x03\x02\x02\x02\u0256\u0258\x03\x02\x02\x02\u0257\u024B\x03\x02\x02\x02" +
		"\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x07" +
		"\b\x02\x02\u025AK\x03\x02\x02\x02\u025B\u0264\x073\x02\x02\u025C\u0264" +
		"\x07<\x02\x02\u025D\u025E\x07i\x02\x02\u025E\u0264\x07<\x02\x02\u025F" +
		"\u0264\x07B\x02\x02\u0260\u0264\x07R\x02\x02\u0261\u0264\x07h\x02\x02" +
		"\u0262\u0264\x07k\x02\x02\u0263\u025B\x03\x02\x02\x02\u0263\u025C\x03" +
		"\x02\x02\x02\u0263\u025D\x03\x02\x02\x02\u0263\u025F\x03\x02\x02\x02\u0263" +
		"\u0260\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0262\x03\x02" +
		"\x02\x02\u0264M\x03\x02\x02\x02\u0265\u026B\x05d3\x02\u0266\u0267\x05" +
		"j6\x02\u0267\u0268\x05d3\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0266\x03" +
		"\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B" +
		"\u026C\x03\x02\x02\x02\u026C\u026F\x03\x02\x02\x02\u026D\u026B\x03\x02" +
		"\x02\x02\u026E\u0270\x05j6\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270" +
		"\x03\x02\x02\x02\u0270O\x03\x02\x02\x02\u0271\u0272\x05L\'\x02\u0272\u0273" +
		"\x075\x02\x02\u0273\u0274\x07H\x02\x02\u0274\u0276\x05d3\x02\u0275\u0277" +
		"\x05N(\x02\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277" +
		"Q\x03\x02\x02\x02\u0278\u0279\x07E\x02\x02\u0279\u027A\x05d3\x02\u027A" +
		"S\x03\x02\x02\x02\u027B\u0281\x05D#\x02\u027C\u0281\x05J&\x02\u027D\u0281" +
		"\x05P)\x02\u027E\u0281\x05R*\x02\u027F\u0281\x052\x1A\x02\u0280\u027B" +
		"\x03\x02\x02\x02\u0280\u027C\x03\x02\x02\x02\u0280\u027D\x03\x02\x02\x02" +
		"\u0280\u027E\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281U\x03\x02" +
		"\x02\x02\u0282\u0283\x07l\x02\x02\u0283\u0284\x07s\x02\x02\u0284\u0288" +
		"\x07\x07\x02\x02\u0285\u0287\x07\x15\x02\x02\u0286\u0285\x03\x02\x02\x02" +
		"\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03" +
		"\x02\x02\x02\u0289\u0290\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B" +
		"\u028C\x05T+\x02\u028C\u028D\x05l7\x02\u028D\u028F\x03\x02\x02\x02\u028E" +
		"\u028B\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290\u028E\x03\x02" +
		"\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0296\x03\x02\x02\x02\u0292" +
		"\u0290\x03\x02\x02\x02\u0293\u0295\x07\x15\x02\x02\u0294\u0293\x03\x02" +
		"\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296" +
		"\u0297\x03\x02\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0296\x03\x02" +
		"\x02\x02\u0299\u029A\x07\b\x02\x02\u029AW\x03\x02\x02\x02\u029B\u029C" +
		"\t\x06\x02\x02\u029CY\x03\x02\x02\x02\u029D\u029E\x07J\x02\x02\u029E\u029F" +
		"\x05X-\x02\u029F\u02A0\x05d3\x02\u02A0\u02A1\x07.\x02\x02\u02A1\u02A2" +
		"\x07\x1B\x02\x02\u02A2[\x03\x02\x02\x02\u02A3\u02B0\x05\x04\x03\x02\u02A4" +
		"\u02B0\x05\x06\x04\x02\u02A5\u02B0\x05@!\x02\u02A6\u02B0\x05:\x1E\x02" +
		"\u02A7\u02B0\x05\b\x05\x02\u02A8\u02B0\x05^0\x02\u02A9\u02B0\x05B\"\x02" +
		"\u02AA\u02B0\x05\f\x07\x02\u02AB\u02B0\x05Z.\x02\u02AC\u02B0\x05,\x17" +
		"\x02\u02AD\u02B0\x052\x1A\x02\u02AE\u02B0\x05V,\x02\u02AF\u02A3\x03\x02" +
		"\x02\x02\u02AF\u02A4\x03\x02\x02\x02\u02AF\u02A5\x03\x02\x02\x02\u02AF" +
		"\u02A6\x03\x02\x02\x02\u02AF\u02A7\x03\x02\x02\x02\u02AF\u02A8\x03\x02" +
		"\x02\x02\u02AF\u02A9\x03\x02\x02\x02\u02AF\u02AA\x03\x02\x02\x02\u02AF" +
		"\u02AB\x03\x02\x02\x02\u02AF\u02AC\x03\x02\x02\x02\u02AF\u02AD\x03\x02" +
		"\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02B0]\x03\x02\x02\x02\u02B1\u02B2" +
		"\x07M\x02\x02\u02B2\u02B3\x07s\x02\x02\u02B3\u02B7\x07\x07\x02\x02\u02B4" +
		"\u02B6\x07\x15\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B6\u02B9\x03\x02" +
		"\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8" +
		"\u02BF\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA\u02BB\x05\\/" +
		"\x02\u02BB\u02BC\x05l7\x02\u02BC\u02BE\x03\x02\x02\x02\u02BD\u02BA\x03" +
		"\x02\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0\u02C5\x03\x02\x02\x02\u02C1\u02BF\x03\x02" +
		"\x02\x02\u02C2\u02C4\x07\x15\x02\x02\u02C3\u02C2\x03\x02\x02\x02\u02C4" +
		"\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03\x02" +
		"\x02\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C8" +
		"\u02C9\x07\b\x02\x02\u02C9_\x03\x02\x02\x02\u02CA\u02CC\x07\\\x02\x02" +
		"\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD\x03" +
		"\x02\x02\x02\u02CD\u02CE\x07s\x02\x02\u02CE\u02CF\x07\x06\x02\x02\u02CF" +
		"\u02D0\x05h5\x02\u02D0a\x03\x02\x02\x02\u02D1\u02D5\x07\n\x02\x02\u02D2" +
		"\u02D4\x07\x15\x02\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4\u02D7\x03\x02" +
		"\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6" +
		"\u02E4\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02DE\x05`1\x02" +
		"\u02D9\u02DA\x05j6\x02\u02DA\u02DB\x05`1\x02\u02DB\u02DD\x03\x02\x02\x02" +
		"\u02DC\u02D9\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02\u02DE\u02DC\x03" +
		"\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E2\x03\x02\x02\x02\u02E0" +
		"\u02DE\x03\x02\x02\x02\u02E1\u02E3\x05j6\x02\u02E2\u02E1\x03\x02\x02\x02" +
		"\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4\u02D8\x03" +
		"\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6" +
		"\u02E7\x07\v\x02\x02\u02E7c\x03\x02\x02\x02\u02E8\u02ED\x07s\x02\x02\u02E9" +
		"\u02EA\x07\f\x02\x02\u02EA\u02EC\x07s\x02\x02\u02EB\u02E9\x03\x02\x02" +
		"\x02\u02EC\u02EF\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE" +
		"\x03\x02\x02\x02\u02EEe\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0" +
		"\u02F7\x07\x13\x02\x02\u02F1\u02F4\x07e\x02\x02\u02F2\u02F3\x07c\x02\x02" +
		"\u02F3\u02F5\x05t;\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02" +
		"\x02\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02F0\x03\x02\x02\x02\u02F6" +
		"\u02F1\x03\x02\x02\x02\u02F7g\x03\x02\x02\x02\u02F8\u02FB\x05f4\x02\u02F9" +
		"\u02FB\x05d3\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02F9\x03\x02\x02\x02" +
		"\u02FBi\x03\x02\x02\x02\u02FC\u0300\x07\r\x02\x02\u02FD\u02FF\x07\x15" +
		"\x02\x02\u02FE\u02FD\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300" +
		"\u02FE\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0309\x03\x02" +
		"\x02\x02\u0302\u0300\x03\x02\x02\x02\u0303\u0305\x07\x15\x02\x02\u0304" +
		"\u0303\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0304\x03\x02" +
		"\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0309\x03\x02\x02\x02\u0308" +
		"\u02FC\x03\x02\x02\x02\u0308\u0304\x03\x02\x02\x02\u0309k\x03\x02\x02" +
		"\x02\u030A\u030E\x07\x0E\x02\x02\u030B\u030D\x07\x15\x02\x02\u030C\u030B" +
		"\x03\x02\x02\x02\u030D\u0310\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02" +
		"\u030E\u030F\x03\x02\x02\x02\u030F\u0317\x03\x02\x02\x02\u0310\u030E\x03" +
		"\x02\x02\x02\u0311\u0313\x07\x15\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313" +
		"\u0314\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02" +
		"\x02\x02\u0315\u0317\x03\x02\x02\x02\u0316\u030A\x03\x02\x02\x02\u0316" +
		"\u0312\x03\x02\x02\x02\u0317m\x03\x02\x02\x02\u0318\u031C\x07\x04\x02" +
		"\x02\u0319\u031B\x07\x15\x02\x02\u031A\u0319\x03\x02\x02\x02\u031B\u031E" +
		"\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02" +
		"\u031D\u0328\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0325\x05" +
		"t;\x02\u0320\u0321\x05j6\x02\u0321\u0322\x05t;\x02\u0322\u0324\x03\x02" +
		"\x02\x02\u0323\u0320\x03\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325" +
		"\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0329\x03\x02" +
		"\x02\x02\u0327\u0325\x03\x02\x02\x02\u0328\u031F\x03\x02\x02\x02\u0328" +
		"\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032B\x07\x05" +
		"\x02\x02\u032Bo\x03\x02\x02\x02\u032C\u032D\x07s\x02\x02\u032D\u032E\x07" +
		"\x03\x02\x02\u032E\u032F\x05t;\x02\u032Fq\x03\x02\x02\x02\u0330\u0334" +
		"\x07\x07\x02\x02\u0331\u0333\x07\x15\x02\x02\u0332\u0331\x03\x02\x02\x02" +
		"\u0333\u0336\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0334\u0335\x03" +
		"\x02\x02\x02\u0335\u0343\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337" +
		"\u033D\x05p9\x02\u0338\u0339\x05j6\x02\u0339\u033A\x05p9\x02\u033A\u033C" +
		"\x03\x02\x02\x02\u033B\u0338\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02" +
		"\u033D\u033B\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u0341\x03" +
		"\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u0340\u0342\x05j6\x02\u0341\u0340" +
		"\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0344\x03\x02\x02\x02" +
		"\u0343\u0337\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x03" +
		"\x02\x02\x02\u0345\u0346\x07\b\x02\x02\u0346s\x03\x02\x02\x02\u0347\u0348" +
		"\b;\x01\x02\u0348\u0349\x07\x0F\x02\x02\u0349\u0356\x05t;\r\u034A\u0356" +
		"\x05n8\x02\u034B\u0356\x05r:\x02\u034C\u0356\x05d3\x02\u034D\u0356\x07" +
		"\x1A\x02\x02\u034E\u0356\x07\x1C\x02\x02\u034F\u0356\x07\x1D\x02\x02\u0350" +
		"\u0356\x07\x1B\x02\x02\u0351\u0352\x07\n\x02\x02\u0352\u0353\x05t;\x02" +
		"\u0353\u0354\x07\v\x02\x02\u0354\u0356\x03\x02\x02\x02\u0355\u0347\x03" +
		"\x02\x02\x02\u0355\u034A\x03\x02\x02\x02\u0355\u034B\x03\x02\x02\x02\u0355" +
		"\u034C\x03\x02\x02\x02\u0355\u034D\x03\x02\x02\x02\u0355\u034E\x03\x02" +
		"\x02\x02\u0355\u034F\x03\x02\x02\x02\u0355\u0350\x03\x02\x02\x02\u0355" +
		"\u0351\x03\x02\x02\x02\u0356\u035F\x03\x02\x02\x02\u0357\u0358\f\f\x02" +
		"\x02\u0358\u0359\t\x07\x02\x02\u0359\u035E\x05t;\r\u035A\u035B\f\v\x02" +
		"\x02\u035B\u035C\t\b\x02\x02\u035C\u035E\x05t;\f\u035D\u0357\x03\x02\x02" +
		"\x02\u035D\u035A\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F\u035D" +
		"\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360u\x03\x02\x02\x02\u0361" +
		"\u035F\x03\x02\x02\x02py\x7F\x83\x89\x9A\x9E\xAB\xB0\xB8\xC1\xC5\xC7\xCC" +
		"\xD6\xDA\xDE\xE1\xE9\xED\xF2\xF7\u0100\u0112\u0116\u0120\u0125\u0128\u0137" +
		"\u0140\u0144\u0146\u014D\u0155\u0159\u015D\u0161\u0165\u016A\u0170\u0176" +
		"\u017F\u0183\u0185\u018A\u0197\u019C\u01A2\u01A8\u01B6\u01BA\u01BD\u01CC" +
		"\u01D0\u01D5\u01DA\u01DE\u01E2\u01E8\u01F0\u01F6\u01FA\u020C\u0215\u021D" +
		"\u0223\u022B\u022F\u0232\u023C\u0248\u0251\u0255\u0257\u0263\u026B\u026F" +
		"\u0276\u0280\u0288\u0290\u0296\u02AF\u02B7\u02BF\u02C5\u02CB\u02D5\u02DE" +
		"\u02E2\u02E4\u02ED\u02F4\u02F6\u02FA\u0300\u0306\u0308\u030E\u0314\u0316" +
		"\u031C\u0325\u0328\u0334\u033D\u0341\u0343\u0355\u035D\u035F";
	public static readonly _serializedATN: string = Utils.join(
		[
			FppParser._serializedATNSegment0,
			FppParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FppParser.__ATN) {
			FppParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FppParser._serializedATN));
		}

		return FppParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode[];
	public EOF(i: number): TerminalNode;
	public EOF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.EOF);
		} else {
			return this.getToken(FppParser.EOF, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public moduleMember(): ModuleMemberContext[];
	public moduleMember(i: number): ModuleMemberContext;
	public moduleMember(i?: number): ModuleMemberContext | ModuleMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleMemberContext);
		} else {
			return this.getRuleContext(i, ModuleMemberContext);
		}
	}
	public semiDelim(): SemiDelimContext[];
	public semiDelim(i: number): SemiDelimContext;
	public semiDelim(i?: number): SemiDelimContext | SemiDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SemiDelimContext);
		} else {
			return this.getRuleContext(i, SemiDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_prog; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractTypeDeclContext extends ParserRuleContext {
	public _name!: Token;
	public TYPE(): TerminalNode { return this.getToken(FppParser.TYPE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_abstractTypeDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterAbstractTypeDecl) {
			listener.enterAbstractTypeDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitAbstractTypeDecl) {
			listener.exitAbstractTypeDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitAbstractTypeDecl) {
			return visitor.visitAbstractTypeDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _size!: ExprContext;
	public _type!: TypeNameContext;
	public _default_!: ArrayExprContext;
	public _format!: Token;
	public ARRAY(): TerminalNode { return this.getToken(FppParser.ARRAY, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FppParser.DEFAULT, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(FppParser.FORMAT, 0); }
	public arrayExpr(): ArrayExprContext | undefined {
		return this.tryGetRuleContext(0, ArrayExprContext);
	}
	public LIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_arrayDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterArrayDecl) {
			listener.enterArrayDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitArrayDecl) {
			listener.exitArrayDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitArrayDecl) {
			return visitor.visitArrayDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _value!: ExprContext;
	public CONSTANT(): TerminalNode { return this.getToken(FppParser.CONSTANT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_constantDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterConstantDecl) {
			listener.enterConstantDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitConstantDecl) {
			listener.exitConstantDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitConstantDecl) {
			return visitor.visitConstantDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructMemberContext extends ParserRuleContext {
	public _name!: Token;
	public _size!: ExprContext;
	public _type!: TypeNameContext;
	public _format!: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(FppParser.FORMAT, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public LIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_structMember; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStructMember) {
			listener.enterStructMember(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStructMember) {
			listener.exitStructMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStructMember) {
			return visitor.visitStructMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _default_!: StructExprContext;
	public STRUCT(): TerminalNode { return this.getToken(FppParser.STRUCT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
		}
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FppParser.DEFAULT, 0); }
	public structExpr(): StructExprContext | undefined {
		return this.tryGetRuleContext(0, StructExprContext);
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_structDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStructDecl) {
			listener.enterStructDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStructDecl) {
			listener.exitStructDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStructDecl) {
			return visitor.visitStructDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueueFullBehaviorContext extends ParserRuleContext {
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(FppParser.ASSERT, 0); }
	public BLOCK(): TerminalNode | undefined { return this.tryGetToken(FppParser.BLOCK, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(FppParser.DROP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_queueFullBehavior; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterQueueFullBehavior) {
			listener.enterQueueFullBehavior(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitQueueFullBehavior) {
			listener.exitQueueFullBehavior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitQueueFullBehavior) {
			return visitor.visitQueueFullBehavior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandKindContext extends ParserRuleContext {
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(FppParser.ASYNC, 0); }
	public GUARDED(): TerminalNode | undefined { return this.tryGetToken(FppParser.GUARDED, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(FppParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_commandKind; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterCommandKind) {
			listener.enterCommandKind(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitCommandKind) {
			listener.exitCommandKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitCommandKind) {
			return visitor.visitCommandKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandDeclContext extends ParserRuleContext {
	public _kind!: CommandKindContext;
	public _name!: Token;
	public _params!: FormalParameterListContext;
	public _opcode!: ExprContext;
	public _priority!: ExprContext;
	public _queueFull!: QueueFullBehaviorContext;
	public COMMAND(): TerminalNode { return this.getToken(FppParser.COMMAND, 0); }
	public commandKind(): CommandKindContext {
		return this.getRuleContext(0, CommandKindContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public OPCODE(): TerminalNode | undefined { return this.tryGetToken(FppParser.OPCODE, 0); }
	public PRIORITY(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRIORITY, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public queueFullBehavior(): QueueFullBehaviorContext | undefined {
		return this.tryGetRuleContext(0, QueueFullBehaviorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_commandDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterCommandDecl) {
			listener.enterCommandDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitCommandDecl) {
			listener.exitCommandDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitCommandDecl) {
			return visitor.visitCommandDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public _default_!: ExprContext;
	public _id!: ExprContext;
	public _setOpcode!: ExprContext;
	public _saveOpcode!: ExprContext;
	public PARAM(): TerminalNode { return this.getToken(FppParser.PARAM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FppParser.DEFAULT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(FppParser.ID, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(FppParser.SET, 0); }
	public OPCODE(): TerminalNode[];
	public OPCODE(i: number): TerminalNode;
	public OPCODE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.OPCODE);
		} else {
			return this.getToken(FppParser.OPCODE, i);
		}
	}
	public SAVE(): TerminalNode | undefined { return this.tryGetToken(FppParser.SAVE, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_paramDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterParamDecl) {
			listener.enterParamDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitParamDecl) {
			listener.exitParamDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitParamDecl) {
			return visitor.visitParamDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GeneralPortKindContext extends ParserRuleContext {
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(FppParser.ASYNC, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(FppParser.INPUT, 0); }
	public GUARDED(): TerminalNode | undefined { return this.tryGetToken(FppParser.GUARDED, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(FppParser.SYNC, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(FppParser.OUTPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_generalPortKind; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterGeneralPortKind) {
			listener.enterGeneralPortKind(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitGeneralPortKind) {
			listener.exitGeneralPortKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitGeneralPortKind) {
			return visitor.visitGeneralPortKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialPortKindContext extends ParserRuleContext {
	public COMMAND(): TerminalNode | undefined { return this.tryGetToken(FppParser.COMMAND, 0); }
	public RECV(): TerminalNode | undefined { return this.tryGetToken(FppParser.RECV, 0); }
	public REG(): TerminalNode | undefined { return this.tryGetToken(FppParser.REG, 0); }
	public RESP(): TerminalNode | undefined { return this.tryGetToken(FppParser.RESP, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(FppParser.EVENT, 0); }
	public PARAM(): TerminalNode | undefined { return this.tryGetToken(FppParser.PARAM, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(FppParser.GET, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(FppParser.SET, 0); }
	public TELEMETRY(): TerminalNode | undefined { return this.tryGetToken(FppParser.TELEMETRY, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(FppParser.TEXT, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(FppParser.TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_specialPortKind; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterSpecialPortKind) {
			listener.enterSpecialPortKind(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitSpecialPortKind) {
			listener.exitSpecialPortKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitSpecialPortKind) {
			return visitor.visitSpecialPortKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GeneralPortInstanceTypeContext extends ParserRuleContext {
	public SERIAL(): TerminalNode | undefined { return this.tryGetToken(FppParser.SERIAL, 0); }
	public qualIdent(): QualIdentContext | undefined {
		return this.tryGetRuleContext(0, QualIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_generalPortInstanceType; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterGeneralPortInstanceType) {
			listener.enterGeneralPortInstanceType(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitGeneralPortInstanceType) {
			listener.exitGeneralPortInstanceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitGeneralPortInstanceType) {
			return visitor.visitGeneralPortInstanceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GeneralPortInstanceDeclContext extends ParserRuleContext {
	public _kind!: GeneralPortKindContext;
	public _name!: Token;
	public _n!: ExprContext;
	public _type!: GeneralPortInstanceTypeContext;
	public _priority!: ExprContext;
	public _queueFull!: QueueFullBehaviorContext;
	public PORT(): TerminalNode { return this.getToken(FppParser.PORT, 0); }
	public generalPortKind(): GeneralPortKindContext {
		return this.getRuleContext(0, GeneralPortKindContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public generalPortInstanceType(): GeneralPortInstanceTypeContext {
		return this.getRuleContext(0, GeneralPortInstanceTypeContext);
	}
	public PRIORITY(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRIORITY, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public queueFullBehavior(): QueueFullBehaviorContext | undefined {
		return this.tryGetRuleContext(0, QueueFullBehaviorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_generalPortInstanceDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterGeneralPortInstanceDecl) {
			listener.enterGeneralPortInstanceDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitGeneralPortInstanceDecl) {
			listener.exitGeneralPortInstanceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitGeneralPortInstanceDecl) {
			return visitor.visitGeneralPortInstanceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialPortInstanceDeclContext extends ParserRuleContext {
	public _name!: Token;
	public specialPortKind(): SpecialPortKindContext {
		return this.getRuleContext(0, SpecialPortKindContext);
	}
	public PORT(): TerminalNode { return this.getToken(FppParser.PORT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_specialPortInstanceDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterSpecialPortInstanceDecl) {
			listener.enterSpecialPortInstanceDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitSpecialPortInstanceDecl) {
			listener.exitSpecialPortInstanceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitSpecialPortInstanceDecl) {
			return visitor.visitSpecialPortInstanceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TelemetryLimitKindContext extends ParserRuleContext {
	public RED(): TerminalNode | undefined { return this.tryGetToken(FppParser.RED, 0); }
	public ORANGE(): TerminalNode | undefined { return this.tryGetToken(FppParser.ORANGE, 0); }
	public YELLOW(): TerminalNode | undefined { return this.tryGetToken(FppParser.YELLOW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_telemetryLimitKind; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTelemetryLimitKind) {
			listener.enterTelemetryLimitKind(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTelemetryLimitKind) {
			listener.exitTelemetryLimitKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTelemetryLimitKind) {
			return visitor.visitTelemetryLimitKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TelemetryLimitExprContext extends ParserRuleContext {
	public _kind!: TelemetryLimitKindContext;
	public _limit!: ExprContext;
	public telemetryLimitKind(): TelemetryLimitKindContext {
		return this.getRuleContext(0, TelemetryLimitKindContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_telemetryLimitExpr; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTelemetryLimitExpr) {
			listener.enterTelemetryLimitExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTelemetryLimitExpr) {
			listener.exitTelemetryLimitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTelemetryLimitExpr) {
			return visitor.visitTelemetryLimitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TelemetryLimitContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public telemetryLimitExpr(): TelemetryLimitExprContext[];
	public telemetryLimitExpr(i: number): TelemetryLimitExprContext;
	public telemetryLimitExpr(i?: number): TelemetryLimitExprContext | TelemetryLimitExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TelemetryLimitExprContext);
		} else {
			return this.getRuleContext(i, TelemetryLimitExprContext);
		}
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_telemetryLimit; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTelemetryLimit) {
			listener.enterTelemetryLimit(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTelemetryLimit) {
			listener.exitTelemetryLimit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTelemetryLimit) {
			return visitor.visitTelemetryLimit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TelemetryUpdateContext extends ParserRuleContext {
	public ALWAYS(): TerminalNode | undefined { return this.tryGetToken(FppParser.ALWAYS, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(FppParser.ON, 0); }
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(FppParser.CHANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_telemetryUpdate; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTelemetryUpdate) {
			listener.enterTelemetryUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTelemetryUpdate) {
			listener.exitTelemetryUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTelemetryUpdate) {
			return visitor.visitTelemetryUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TelemetryChannelDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public _id!: ExprContext;
	public _update!: TelemetryUpdateContext;
	public _format!: Token;
	public _low!: TelemetryLimitContext;
	public _high!: TelemetryLimitContext;
	public TELEMETRY(): TerminalNode { return this.getToken(FppParser.TELEMETRY, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(FppParser.ID, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(FppParser.UPDATE, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(FppParser.FORMAT, 0); }
	public LOW(): TerminalNode | undefined { return this.tryGetToken(FppParser.LOW, 0); }
	public HIGH(): TerminalNode | undefined { return this.tryGetToken(FppParser.HIGH, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public telemetryUpdate(): TelemetryUpdateContext | undefined {
		return this.tryGetRuleContext(0, TelemetryUpdateContext);
	}
	public LIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_STRING, 0); }
	public telemetryLimit(): TelemetryLimitContext[];
	public telemetryLimit(i: number): TelemetryLimitContext;
	public telemetryLimit(i?: number): TelemetryLimitContext | TelemetryLimitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TelemetryLimitContext);
		} else {
			return this.getRuleContext(i, TelemetryLimitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_telemetryChannelDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTelemetryChannelDecl) {
			listener.enterTelemetryChannelDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTelemetryChannelDecl) {
			listener.exitTelemetryChannelDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTelemetryChannelDecl) {
			return visitor.visitTelemetryChannelDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumMemberContext extends ParserRuleContext {
	public _name!: Token;
	public _value!: ExprContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_enumMember; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterEnumMember) {
			listener.enterEnumMember(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitEnumMember) {
			listener.exitEnumMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitEnumMember) {
			return visitor.visitEnumMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: Token;
	public _default_!: ExprContext;
	public ENUM(): TerminalNode { return this.getToken(FppParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public enumMember(): EnumMemberContext[];
	public enumMember(i: number): EnumMemberContext;
	public enumMember(i?: number): EnumMemberContext | EnumMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumMemberContext);
		} else {
			return this.getRuleContext(i, EnumMemberContext);
		}
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FppParser.DEFAULT, 0); }
	public INT_TYPE(): TerminalNode | undefined { return this.tryGetToken(FppParser.INT_TYPE, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_enumDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterEnumDecl) {
			listener.enterEnumDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitEnumDecl) {
			listener.exitEnumDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitEnumDecl) {
			return visitor.visitEnumDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventSeverityContext extends ParserRuleContext {
	public ACTIVITY(): TerminalNode | undefined { return this.tryGetToken(FppParser.ACTIVITY, 0); }
	public HIGH(): TerminalNode | undefined { return this.tryGetToken(FppParser.HIGH, 0); }
	public LOW(): TerminalNode | undefined { return this.tryGetToken(FppParser.LOW, 0); }
	public COMMAND(): TerminalNode | undefined { return this.tryGetToken(FppParser.COMMAND, 0); }
	public DIAGNOSTIC(): TerminalNode | undefined { return this.tryGetToken(FppParser.DIAGNOSTIC, 0); }
	public FATAL(): TerminalNode | undefined { return this.tryGetToken(FppParser.FATAL, 0); }
	public WARNING(): TerminalNode | undefined { return this.tryGetToken(FppParser.WARNING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_eventSeverity; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterEventSeverity) {
			listener.enterEventSeverity(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitEventSeverity) {
			listener.exitEventSeverity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitEventSeverity) {
			return visitor.visitEventSeverity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _params!: FormalParameterListContext;
	public _id!: ExprContext;
	public _format!: Token;
	public _throttle!: ExprContext;
	public EVENT(): TerminalNode { return this.getToken(FppParser.EVENT, 0); }
	public SEVERITY(): TerminalNode { return this.getToken(FppParser.SEVERITY, 0); }
	public eventSeverity(): EventSeverityContext {
		return this.getRuleContext(0, EventSeverityContext);
	}
	public FORMAT(): TerminalNode { return this.getToken(FppParser.FORMAT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public LIT_STRING(): TerminalNode { return this.getToken(FppParser.LIT_STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(FppParser.ID, 0); }
	public THROTTLE(): TerminalNode | undefined { return this.tryGetToken(FppParser.THROTTLE, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_eventDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterEventDecl) {
			listener.enterEventDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitEventDecl) {
			listener.exitEventDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitEventDecl) {
			return visitor.visitEventDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStmtContext extends ParserRuleContext {
	public _include!: Token;
	public INCLUDE(): TerminalNode { return this.getToken(FppParser.INCLUDE, 0); }
	public LIT_STRING(): TerminalNode { return this.getToken(FppParser.LIT_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_includeStmt; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterIncludeStmt) {
			listener.enterIncludeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitIncludeStmt) {
			listener.exitIncludeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitIncludeStmt) {
			return visitor.visitIncludeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchStmtContext extends ParserRuleContext {
	public _match!: Token;
	public _with_!: Token;
	public MATCH(): TerminalNode { return this.getToken(FppParser.MATCH, 0); }
	public WITH(): TerminalNode { return this.getToken(FppParser.WITH, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.IDENTIFIER);
		} else {
			return this.getToken(FppParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_matchStmt; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterMatchStmt) {
			listener.enterMatchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitMatchStmt) {
			listener.exitMatchStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitMatchStmt) {
			return visitor.visitMatchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InternalPortDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _params!: FormalParameterListContext;
	public _priority!: ExprContext;
	public _queueFull!: QueueFullBehaviorContext;
	public INTERNAL(): TerminalNode { return this.getToken(FppParser.INTERNAL, 0); }
	public PORT(): TerminalNode { return this.getToken(FppParser.PORT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public PRIORITY(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRIORITY, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public queueFullBehavior(): QueueFullBehaviorContext | undefined {
		return this.tryGetRuleContext(0, QueueFullBehaviorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_internalPortDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterInternalPortDecl) {
			listener.enterInternalPortDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitInternalPortDecl) {
			listener.exitInternalPortDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitInternalPortDecl) {
			return visitor.visitInternalPortDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitSpecifierContext extends ParserRuleContext {
	public _phase!: ExprContext;
	public _code!: Token;
	public PHASE(): TerminalNode { return this.getToken(FppParser.PHASE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LIT_STRING(): TerminalNode { return this.getToken(FppParser.LIT_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_initSpecifier; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterInitSpecifier) {
			listener.enterInitSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitInitSpecifier) {
			listener.exitInitSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitInitSpecifier) {
			return visitor.visitInitSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentInstanceDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _fppType!: QualIdentContext;
	public _base_id!: ExprContext;
	public _cppType!: Token;
	public _at!: Token;
	public _queueSize!: ExprContext;
	public _stackSize!: ExprContext;
	public _priority!: ExprContext;
	public _cpu!: ExprContext;
	public INSTANCE(): TerminalNode { return this.getToken(FppParser.INSTANCE, 0); }
	public BASE(): TerminalNode { return this.getToken(FppParser.BASE, 0); }
	public ID(): TerminalNode { return this.getToken(FppParser.ID, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(FppParser.TYPE, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(FppParser.AT, 0); }
	public QUEUE(): TerminalNode | undefined { return this.tryGetToken(FppParser.QUEUE, 0); }
	public SIZE(): TerminalNode[];
	public SIZE(i: number): TerminalNode;
	public SIZE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.SIZE);
		} else {
			return this.getToken(FppParser.SIZE, i);
		}
	}
	public STACK(): TerminalNode | undefined { return this.tryGetToken(FppParser.STACK, 0); }
	public PRIORITY(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRIORITY, 0); }
	public CPU(): TerminalNode | undefined { return this.tryGetToken(FppParser.CPU, 0); }
	public LIT_STRING(): TerminalNode[];
	public LIT_STRING(i: number): TerminalNode;
	public LIT_STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.LIT_STRING);
		} else {
			return this.getToken(FppParser.LIT_STRING, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public initSpecifier(): InitSpecifierContext[];
	public initSpecifier(i: number): InitSpecifierContext;
	public initSpecifier(i?: number): InitSpecifierContext | InitSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitSpecifierContext);
		} else {
			return this.getRuleContext(i, InitSpecifierContext);
		}
	}
	public semiDelim(): SemiDelimContext[];
	public semiDelim(i: number): SemiDelimContext;
	public semiDelim(i?: number): SemiDelimContext | SemiDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SemiDelimContext);
		} else {
			return this.getRuleContext(i, SemiDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_componentInstanceDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterComponentInstanceDecl) {
			listener.enterComponentInstanceDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitComponentInstanceDecl) {
			listener.exitComponentInstanceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitComponentInstanceDecl) {
			return visitor.visitComponentInstanceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentKindContext extends ParserRuleContext {
	public ACTIVE(): TerminalNode | undefined { return this.tryGetToken(FppParser.ACTIVE, 0); }
	public PASSIVE(): TerminalNode | undefined { return this.tryGetToken(FppParser.PASSIVE, 0); }
	public QUEUED(): TerminalNode | undefined { return this.tryGetToken(FppParser.QUEUED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_componentKind; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterComponentKind) {
			listener.enterComponentKind(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitComponentKind) {
			listener.exitComponentKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitComponentKind) {
			return visitor.visitComponentKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentMemberContext extends ParserRuleContext {
	public abstractTypeDecl(): AbstractTypeDeclContext | undefined {
		return this.tryGetRuleContext(0, AbstractTypeDeclContext);
	}
	public arrayDecl(): ArrayDeclContext | undefined {
		return this.tryGetRuleContext(0, ArrayDeclContext);
	}
	public constantDecl(): ConstantDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclContext);
	}
	public structDecl(): StructDeclContext | undefined {
		return this.tryGetRuleContext(0, StructDeclContext);
	}
	public commandDecl(): CommandDeclContext | undefined {
		return this.tryGetRuleContext(0, CommandDeclContext);
	}
	public paramDecl(): ParamDeclContext | undefined {
		return this.tryGetRuleContext(0, ParamDeclContext);
	}
	public generalPortInstanceDecl(): GeneralPortInstanceDeclContext | undefined {
		return this.tryGetRuleContext(0, GeneralPortInstanceDeclContext);
	}
	public specialPortInstanceDecl(): SpecialPortInstanceDeclContext | undefined {
		return this.tryGetRuleContext(0, SpecialPortInstanceDeclContext);
	}
	public telemetryChannelDecl(): TelemetryChannelDeclContext | undefined {
		return this.tryGetRuleContext(0, TelemetryChannelDeclContext);
	}
	public enumDecl(): EnumDeclContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclContext);
	}
	public eventDecl(): EventDeclContext | undefined {
		return this.tryGetRuleContext(0, EventDeclContext);
	}
	public includeStmt(): IncludeStmtContext | undefined {
		return this.tryGetRuleContext(0, IncludeStmtContext);
	}
	public internalPortDecl(): InternalPortDeclContext | undefined {
		return this.tryGetRuleContext(0, InternalPortDeclContext);
	}
	public matchStmt(): MatchStmtContext | undefined {
		return this.tryGetRuleContext(0, MatchStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_componentMember; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterComponentMember) {
			listener.enterComponentMember(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitComponentMember) {
			listener.exitComponentMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitComponentMember) {
			return visitor.visitComponentMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentDeclContext extends ParserRuleContext {
	public _kind!: ComponentKindContext;
	public _name!: Token;
	public COMPONENT(): TerminalNode { return this.getToken(FppParser.COMPONENT, 0); }
	public componentKind(): ComponentKindContext {
		return this.getRuleContext(0, ComponentKindContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public componentMember(): ComponentMemberContext[];
	public componentMember(i: number): ComponentMemberContext;
	public componentMember(i?: number): ComponentMemberContext | ComponentMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentMemberContext);
		} else {
			return this.getRuleContext(i, ComponentMemberContext);
		}
	}
	public semiDelim(): SemiDelimContext[];
	public semiDelim(i: number): SemiDelimContext;
	public semiDelim(i?: number): SemiDelimContext | SemiDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SemiDelimContext);
		} else {
			return this.getRuleContext(i, SemiDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_componentDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterComponentDecl) {
			listener.enterComponentDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitComponentDecl) {
			listener.exitComponentDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitComponentDecl) {
			return visitor.visitComponentDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _params!: FormalParameterListContext;
	public _returnType!: TypeNameContext;
	public PORT(): TerminalNode { return this.getToken(FppParser.PORT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_portDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPortDecl) {
			listener.enterPortDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPortDecl) {
			listener.exitPortDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPortDecl) {
			return visitor.visitPortDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentInstanceSpecContext extends ParserRuleContext {
	public _name!: QualIdentContext;
	public INSTANCE(): TerminalNode { return this.getToken(FppParser.INSTANCE, 0); }
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_componentInstanceSpec; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterComponentInstanceSpec) {
			listener.enterComponentInstanceSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitComponentInstanceSpec) {
			listener.exitComponentInstanceSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitComponentInstanceSpec) {
			return visitor.visitComponentInstanceSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConnectionNodeContext extends ParserRuleContext {
	public _node!: QualIdentContext;
	public _index!: ExprContext;
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_connectionNode; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterConnectionNode) {
			listener.enterConnectionNode(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitConnectionNode) {
			listener.exitConnectionNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitConnectionNode) {
			return visitor.visitConnectionNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConnectionContext extends ParserRuleContext {
	public _source!: ConnectionNodeContext;
	public _destination!: ConnectionNodeContext;
	public connectionNode(): ConnectionNodeContext[];
	public connectionNode(i: number): ConnectionNodeContext;
	public connectionNode(i?: number): ConnectionNodeContext | ConnectionNodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConnectionNodeContext);
		} else {
			return this.getRuleContext(i, ConnectionNodeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_connection; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterConnection) {
			listener.enterConnection(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitConnection) {
			listener.exitConnection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitConnection) {
			return visitor.visitConnection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectGraphDeclContext extends ParserRuleContext {
	public _name!: Token;
	public CONNECTIONS(): TerminalNode { return this.getToken(FppParser.CONNECTIONS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public connection(): ConnectionContext[];
	public connection(i: number): ConnectionContext;
	public connection(i?: number): ConnectionContext | ConnectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConnectionContext);
		} else {
			return this.getRuleContext(i, ConnectionContext);
		}
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_directGraphDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterDirectGraphDecl) {
			listener.enterDirectGraphDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitDirectGraphDecl) {
			listener.exitDirectGraphDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitDirectGraphDecl) {
			return visitor.visitDirectGraphDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternKindContext extends ParserRuleContext {
	public COMMAND(): TerminalNode | undefined { return this.tryGetToken(FppParser.COMMAND, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(FppParser.EVENT, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(FppParser.TEXT, 0); }
	public HEALTH(): TerminalNode | undefined { return this.tryGetToken(FppParser.HEALTH, 0); }
	public PARAM(): TerminalNode | undefined { return this.tryGetToken(FppParser.PARAM, 0); }
	public TELEMETRY(): TerminalNode | undefined { return this.tryGetToken(FppParser.TELEMETRY, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(FppParser.TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_patternKind; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPatternKind) {
			listener.enterPatternKind(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPatternKind) {
			listener.exitPatternKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPatternKind) {
			return visitor.visitPatternKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternGraphSourcesContext extends ParserRuleContext {
	public qualIdent(): QualIdentContext[];
	public qualIdent(i: number): QualIdentContext;
	public qualIdent(i?: number): QualIdentContext | QualIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualIdentContext);
		} else {
			return this.getRuleContext(i, QualIdentContext);
		}
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_patternGraphSources; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPatternGraphSources) {
			listener.enterPatternGraphSources(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPatternGraphSources) {
			listener.exitPatternGraphSources(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPatternGraphSources) {
			return visitor.visitPatternGraphSources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternGraphStmtContext extends ParserRuleContext {
	public _kind!: PatternKindContext;
	public _target!: QualIdentContext;
	public CONNECTIONS(): TerminalNode { return this.getToken(FppParser.CONNECTIONS, 0); }
	public INSTANCE(): TerminalNode { return this.getToken(FppParser.INSTANCE, 0); }
	public patternKind(): PatternKindContext {
		return this.getRuleContext(0, PatternKindContext);
	}
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	public patternGraphSources(): PatternGraphSourcesContext | undefined {
		return this.tryGetRuleContext(0, PatternGraphSourcesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_patternGraphStmt; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPatternGraphStmt) {
			listener.enterPatternGraphStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPatternGraphStmt) {
			listener.exitPatternGraphStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPatternGraphStmt) {
			return visitor.visitPatternGraphStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopologyImportStmtContext extends ParserRuleContext {
	public _topology!: QualIdentContext;
	public IMPORT(): TerminalNode { return this.getToken(FppParser.IMPORT, 0); }
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_topologyImportStmt; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTopologyImportStmt) {
			listener.enterTopologyImportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTopologyImportStmt) {
			listener.exitTopologyImportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTopologyImportStmt) {
			return visitor.visitTopologyImportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopologyMemberContext extends ParserRuleContext {
	public componentInstanceSpec(): ComponentInstanceSpecContext | undefined {
		return this.tryGetRuleContext(0, ComponentInstanceSpecContext);
	}
	public directGraphDecl(): DirectGraphDeclContext | undefined {
		return this.tryGetRuleContext(0, DirectGraphDeclContext);
	}
	public patternGraphStmt(): PatternGraphStmtContext | undefined {
		return this.tryGetRuleContext(0, PatternGraphStmtContext);
	}
	public topologyImportStmt(): TopologyImportStmtContext | undefined {
		return this.tryGetRuleContext(0, TopologyImportStmtContext);
	}
	public includeStmt(): IncludeStmtContext | undefined {
		return this.tryGetRuleContext(0, IncludeStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_topologyMember; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTopologyMember) {
			listener.enterTopologyMember(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTopologyMember) {
			listener.exitTopologyMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTopologyMember) {
			return visitor.visitTopologyMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopologyDeclContext extends ParserRuleContext {
	public _name!: Token;
	public TOPOLOGY(): TerminalNode { return this.getToken(FppParser.TOPOLOGY, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public topologyMember(): TopologyMemberContext[];
	public topologyMember(i: number): TopologyMemberContext;
	public topologyMember(i?: number): TopologyMemberContext | TopologyMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopologyMemberContext);
		} else {
			return this.getRuleContext(i, TopologyMemberContext);
		}
	}
	public semiDelim(): SemiDelimContext[];
	public semiDelim(i: number): SemiDelimContext;
	public semiDelim(i?: number): SemiDelimContext | SemiDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SemiDelimContext);
		} else {
			return this.getRuleContext(i, SemiDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_topologyDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTopologyDecl) {
			listener.enterTopologyDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTopologyDecl) {
			listener.exitTopologyDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTopologyDecl) {
			return visitor.visitTopologyDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocationKindContext extends ParserRuleContext {
	public INSTANCE(): TerminalNode | undefined { return this.tryGetToken(FppParser.INSTANCE, 0); }
	public COMPONENT(): TerminalNode | undefined { return this.tryGetToken(FppParser.COMPONENT, 0); }
	public CONSTANT(): TerminalNode | undefined { return this.tryGetToken(FppParser.CONSTANT, 0); }
	public PORT(): TerminalNode | undefined { return this.tryGetToken(FppParser.PORT, 0); }
	public TOPOLOGY(): TerminalNode | undefined { return this.tryGetToken(FppParser.TOPOLOGY, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(FppParser.TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_locationKind; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterLocationKind) {
			listener.enterLocationKind(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitLocationKind) {
			listener.exitLocationKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitLocationKind) {
			return visitor.visitLocationKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocationStmtContext extends ParserRuleContext {
	public _kind!: LocationKindContext;
	public _name!: QualIdentContext;
	public _path!: Token;
	public LOCATE(): TerminalNode { return this.getToken(FppParser.LOCATE, 0); }
	public AT(): TerminalNode { return this.getToken(FppParser.AT, 0); }
	public locationKind(): LocationKindContext {
		return this.getRuleContext(0, LocationKindContext);
	}
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	public LIT_STRING(): TerminalNode { return this.getToken(FppParser.LIT_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_locationStmt; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterLocationStmt) {
			listener.enterLocationStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitLocationStmt) {
			listener.exitLocationStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitLocationStmt) {
			return visitor.visitLocationStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleMemberContext extends ParserRuleContext {
	public abstractTypeDecl(): AbstractTypeDeclContext | undefined {
		return this.tryGetRuleContext(0, AbstractTypeDeclContext);
	}
	public arrayDecl(): ArrayDeclContext | undefined {
		return this.tryGetRuleContext(0, ArrayDeclContext);
	}
	public componentDecl(): ComponentDeclContext | undefined {
		return this.tryGetRuleContext(0, ComponentDeclContext);
	}
	public componentInstanceDecl(): ComponentInstanceDeclContext | undefined {
		return this.tryGetRuleContext(0, ComponentInstanceDeclContext);
	}
	public constantDecl(): ConstantDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclContext);
	}
	public moduleDecl(): ModuleDeclContext | undefined {
		return this.tryGetRuleContext(0, ModuleDeclContext);
	}
	public portDecl(): PortDeclContext | undefined {
		return this.tryGetRuleContext(0, PortDeclContext);
	}
	public structDecl(): StructDeclContext | undefined {
		return this.tryGetRuleContext(0, StructDeclContext);
	}
	public locationStmt(): LocationStmtContext | undefined {
		return this.tryGetRuleContext(0, LocationStmtContext);
	}
	public enumDecl(): EnumDeclContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclContext);
	}
	public includeStmt(): IncludeStmtContext | undefined {
		return this.tryGetRuleContext(0, IncludeStmtContext);
	}
	public topologyDecl(): TopologyDeclContext | undefined {
		return this.tryGetRuleContext(0, TopologyDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_moduleMember; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterModuleMember) {
			listener.enterModuleMember(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitModuleMember) {
			listener.exitModuleMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitModuleMember) {
			return visitor.visitModuleMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDeclContext extends ParserRuleContext {
	public _name!: Token;
	public MODULE(): TerminalNode { return this.getToken(FppParser.MODULE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public moduleMember(): ModuleMemberContext[];
	public moduleMember(i: number): ModuleMemberContext;
	public moduleMember(i?: number): ModuleMemberContext | ModuleMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleMemberContext);
		} else {
			return this.getRuleContext(i, ModuleMemberContext);
		}
	}
	public semiDelim(): SemiDelimContext[];
	public semiDelim(i: number): SemiDelimContext;
	public semiDelim(i?: number): SemiDelimContext | SemiDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SemiDelimContext);
		} else {
			return this.getRuleContext(i, SemiDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_moduleDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterModuleDecl) {
			listener.enterModuleDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitModuleDecl) {
			listener.exitModuleDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitModuleDecl) {
			return visitor.visitModuleDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(FppParser.REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualIdentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.IDENTIFIER);
		} else {
			return this.getToken(FppParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_qualIdent; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterQualIdent) {
			listener.enterQualIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitQualIdent) {
			listener.exitQualIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitQualIdent) {
			return visitor.visitQualIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public _type!: Token;
	public _size!: ExprContext;
	public PRIM_TYPE(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRIM_TYPE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FppParser.STRING, 0); }
	public SIZE(): TerminalNode | undefined { return this.tryGetToken(FppParser.SIZE, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public qualIdent(): QualIdentContext | undefined {
		return this.tryGetRuleContext(0, QualIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_typeName; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommaDelimContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_commaDelim; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterCommaDelim) {
			listener.enterCommaDelim(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitCommaDelim) {
			listener.exitCommaDelim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitCommaDelim) {
			return visitor.visitCommaDelim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SemiDelimContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_semiDelim; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterSemiDelim) {
			listener.enterSemiDelim(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitSemiDelim) {
			listener.exitSemiDelim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitSemiDelim) {
			return visitor.visitSemiDelim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayExprContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_arrayExpr; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterArrayExpr) {
			listener.enterArrayExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitArrayExpr) {
			listener.exitArrayExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitArrayExpr) {
			return visitor.visitArrayExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructAssignmentContext extends ParserRuleContext {
	public _name!: Token;
	public _value!: ExprContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_structAssignment; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStructAssignment) {
			listener.enterStructAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStructAssignment) {
			listener.exitStructAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStructAssignment) {
			return visitor.visitStructAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExprContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public structAssignment(): StructAssignmentContext[];
	public structAssignment(i: number): StructAssignmentContext;
	public structAssignment(i?: number): StructAssignmentContext | StructAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructAssignmentContext);
		} else {
			return this.getRuleContext(i, StructAssignmentContext);
		}
	}
	public commaDelim(): CommaDelimContext[];
	public commaDelim(i: number): CommaDelimContext;
	public commaDelim(i?: number): CommaDelimContext | CommaDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaDelimContext);
		} else {
			return this.getRuleContext(i, CommaDelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_structExpr; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStructExpr) {
			listener.enterStructExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStructExpr) {
			listener.exitStructExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStructExpr) {
			return visitor.visitStructExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _left!: ExprContext;
	public _unary!: ExprContext;
	public _p!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public arrayExpr(): ArrayExprContext | undefined {
		return this.tryGetRuleContext(0, ArrayExprContext);
	}
	public structExpr(): StructExprContext | undefined {
		return this.tryGetRuleContext(0, StructExprContext);
	}
	public qualIdent(): QualIdentContext | undefined {
		return this.tryGetRuleContext(0, QualIdentContext);
	}
	public LIT_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_BOOLEAN, 0); }
	public LIT_FLOAT(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_FLOAT, 0); }
	public LIT_INT(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_INT, 0); }
	public LIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_expr; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


