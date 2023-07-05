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
	public static readonly NL = 17;
	public static readonly WS = 18;
	public static readonly WS_NL = 19;
	public static readonly COMMENT = 20;
	public static readonly ANNOTATION = 21;
	public static readonly LIT_BOOLEAN = 22;
	public static readonly LIT_STRING = 23;
	public static readonly LIT_FLOAT = 24;
	public static readonly LIT_INT = 25;
	public static readonly U8 = 26;
	public static readonly I8 = 27;
	public static readonly U16 = 28;
	public static readonly I16 = 29;
	public static readonly U32 = 30;
	public static readonly I32 = 31;
	public static readonly U64 = 32;
	public static readonly I64 = 33;
	public static readonly F32 = 34;
	public static readonly F64 = 35;
	public static readonly ACTIVE = 36;
	public static readonly ACTIVITY = 37;
	public static readonly ALWAYS = 38;
	public static readonly ARRAY = 39;
	public static readonly ASSERT = 40;
	public static readonly ASYNC = 41;
	public static readonly AT = 42;
	public static readonly BASE = 43;
	public static readonly BLOCK = 44;
	public static readonly BOOL = 45;
	public static readonly CHANGE = 46;
	public static readonly COMMAND = 47;
	public static readonly COMPONENT = 48;
	public static readonly CONNECTIONS = 49;
	public static readonly CONSTANT = 50;
	public static readonly CPU = 51;
	public static readonly DEFAULT = 52;
	public static readonly DIAGNOSTIC = 53;
	public static readonly DROP = 54;
	public static readonly ENUM = 55;
	public static readonly EVENT = 56;
	public static readonly FALSE = 57;
	public static readonly FATAL = 58;
	public static readonly FORMAT = 59;
	public static readonly GET = 60;
	public static readonly GUARDED = 61;
	public static readonly HEALTH = 62;
	public static readonly HIGH = 63;
	public static readonly ID = 64;
	public static readonly IMPORT = 65;
	public static readonly INCLUDE = 66;
	public static readonly INPUT = 67;
	public static readonly INSTANCE = 68;
	public static readonly INTERNAL = 69;
	public static readonly LOCATE = 70;
	public static readonly LOW = 71;
	public static readonly MATCH = 72;
	public static readonly MODULE = 73;
	public static readonly ON = 74;
	public static readonly OPCODE = 75;
	public static readonly ORANGE = 76;
	public static readonly OUTPUT = 77;
	public static readonly PARAM = 78;
	public static readonly PASSIVE = 79;
	public static readonly PHASE = 80;
	public static readonly PORT = 81;
	public static readonly PRIORITY = 82;
	public static readonly PRIVATE = 83;
	public static readonly QUEUE = 84;
	public static readonly QUEUED = 85;
	public static readonly RECV = 86;
	public static readonly RED = 87;
	public static readonly REF = 88;
	public static readonly REG = 89;
	public static readonly RESP = 90;
	public static readonly SAVE = 91;
	public static readonly SERIAL = 92;
	public static readonly SET = 93;
	public static readonly SEVERITY = 94;
	public static readonly SIZE = 95;
	public static readonly STACK = 96;
	public static readonly STRING = 97;
	public static readonly STRUCT = 98;
	public static readonly SYNC = 99;
	public static readonly TELEMETRY = 100;
	public static readonly TEXT = 101;
	public static readonly THROTTLE = 102;
	public static readonly TIME = 103;
	public static readonly TOPOLOGY = 104;
	public static readonly TRUE = 105;
	public static readonly TYPE = 106;
	public static readonly UPDATE = 107;
	public static readonly WARNING = 108;
	public static readonly WITH = 109;
	public static readonly YELLOW = 110;
	public static readonly IDENTIFIER = 111;
	public static readonly RULE_prog = 0;
	public static readonly RULE_progTopology = 1;
	public static readonly RULE_progComponent = 2;
	public static readonly RULE_abstractTypeDecl = 3;
	public static readonly RULE_arrayDecl = 4;
	public static readonly RULE_constantDecl = 5;
	public static readonly RULE_structMember = 6;
	public static readonly RULE_structMemberN = 7;
	public static readonly RULE_structMemberL = 8;
	public static readonly RULE_structDecl = 9;
	public static readonly RULE_queueFullBehavior = 10;
	public static readonly RULE_commandKind = 11;
	public static readonly RULE_commandDecl = 12;
	public static readonly RULE_paramDecl = 13;
	public static readonly RULE_generalPortKind = 14;
	public static readonly RULE_specialPortKind = 15;
	public static readonly RULE_generalPortInstanceType = 16;
	public static readonly RULE_generalPortInstanceDecl = 17;
	public static readonly RULE_specialPortInstanceDecl = 18;
	public static readonly RULE_telemetryLimitKind = 19;
	public static readonly RULE_telemetryLimitExpr = 20;
	public static readonly RULE_telemetryLimit = 21;
	public static readonly RULE_telemetryUpdate = 22;
	public static readonly RULE_telemetryChannelDecl = 23;
	public static readonly RULE_enumMember = 24;
	public static readonly RULE_enumMemberN = 25;
	public static readonly RULE_enumMemberL = 26;
	public static readonly RULE_enumDecl = 27;
	public static readonly RULE_eventSeverity = 28;
	public static readonly RULE_eventDecl = 29;
	public static readonly RULE_includeStmt = 30;
	public static readonly RULE_matchStmt = 31;
	public static readonly RULE_internalPortDecl = 32;
	public static readonly RULE_initSpecifier = 33;
	public static readonly RULE_componentInstanceDecl = 34;
	public static readonly RULE_componentKind = 35;
	public static readonly RULE_componentMemberTempl = 36;
	public static readonly RULE_componentMember = 37;
	public static readonly RULE_componentDecl = 38;
	public static readonly RULE_portDecl = 39;
	public static readonly RULE_componentInstanceSpec = 40;
	public static readonly RULE_connectionNode = 41;
	public static readonly RULE_connection = 42;
	public static readonly RULE_directGraphDecl = 43;
	public static readonly RULE_patternKind = 44;
	public static readonly RULE_patternGraphSources = 45;
	public static readonly RULE_patternGraphStmt = 46;
	public static readonly RULE_topologyImportStmt = 47;
	public static readonly RULE_topologyMemberTempl = 48;
	public static readonly RULE_topologyMember = 49;
	public static readonly RULE_topologyDecl = 50;
	public static readonly RULE_locationKind = 51;
	public static readonly RULE_locationStmt = 52;
	public static readonly RULE_moduleMemberTempl = 53;
	public static readonly RULE_moduleMember = 54;
	public static readonly RULE_moduleDecl = 55;
	public static readonly RULE_formalParameter = 56;
	public static readonly RULE_formalParameterN = 57;
	public static readonly RULE_formalParamaterL = 58;
	public static readonly RULE_formalParameterList = 59;
	public static readonly RULE_qualIdent = 60;
	public static readonly RULE_intType = 61;
	public static readonly RULE_primitiveType = 62;
	public static readonly RULE_typeName = 63;
	public static readonly RULE_commaDelim = 64;
	public static readonly RULE_semiDelim = 65;
	public static readonly RULE_arrayExpr = 66;
	public static readonly RULE_structAssignment = 67;
	public static readonly RULE_structExpr = 68;
	public static readonly RULE_expr = 69;
	public static readonly RULE_postAnnotation = 70;
	public static readonly RULE_preAnnotation = 71;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "progTopology", "progComponent", "abstractTypeDecl", "arrayDecl", 
		"constantDecl", "structMember", "structMemberN", "structMemberL", "structDecl", 
		"queueFullBehavior", "commandKind", "commandDecl", "paramDecl", "generalPortKind", 
		"specialPortKind", "generalPortInstanceType", "generalPortInstanceDecl", 
		"specialPortInstanceDecl", "telemetryLimitKind", "telemetryLimitExpr", 
		"telemetryLimit", "telemetryUpdate", "telemetryChannelDecl", "enumMember", 
		"enumMemberN", "enumMemberL", "enumDecl", "eventSeverity", "eventDecl", 
		"includeStmt", "matchStmt", "internalPortDecl", "initSpecifier", "componentInstanceDecl", 
		"componentKind", "componentMemberTempl", "componentMember", "componentDecl", 
		"portDecl", "componentInstanceSpec", "connectionNode", "connection", "directGraphDecl", 
		"patternKind", "patternGraphSources", "patternGraphStmt", "topologyImportStmt", 
		"topologyMemberTempl", "topologyMember", "topologyDecl", "locationKind", 
		"locationStmt", "moduleMemberTempl", "moduleMember", "moduleDecl", "formalParameter", 
		"formalParameterN", "formalParamaterL", "formalParameterList", "qualIdent", 
		"intType", "primitiveType", "typeName", "commaDelim", "semiDelim", "arrayExpr", 
		"structAssignment", "structExpr", "expr", "postAnnotation", "preAnnotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'['", "']'", "':'", "','", "'{'", "'}'", "'->'", "'('", 
		"')'", "'.'", "';'", "'-'", "'*'", "'/'", "'+'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'U8'", "'I8'", "'U16'", "'I16'", "'U32'", "'I32'", "'U64'", "'I64'", 
		"'F32'", "'F64'", "'active'", "'activity'", "'always'", "'array'", "'assert'", 
		"'async'", "'at'", "'base'", "'block'", "'bool'", "'change'", "'command'", 
		"'component'", "'connections'", "'constant'", "'cpu'", "'default'", "'diagnostic'", 
		"'drop'", "'enum'", "'event'", "'false'", "'fatal'", "'format'", "'get'", 
		"'guarded'", "'health'", "'high'", "'id'", "'import'", "'include'", "'input'", 
		"'instance'", "'internal'", "'locate'", "'low'", "'match'", "'module'", 
		"'on'", "'opcode'", "'orange'", "'output'", "'param'", "'passive'", "'phase'", 
		"'port'", "'priority'", "'private'", "'queue'", "'queued'", "'recv'", 
		"'red'", "'ref'", "'reg'", "'resp'", "'save'", "'serial'", "'set'", "'severity'", 
		"'size'", "'stack'", "'string'", "'struct'", "'sync'", "'telemetry'", 
		"'text'", "'throttle'", "'time'", "'topology'", "'true'", "'type'", "'update'", 
		"'warning'", "'with'", "'yellow'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NL", "WS", "WS_NL", "COMMENT", "ANNOTATION", 
		"LIT_BOOLEAN", "LIT_STRING", "LIT_FLOAT", "LIT_INT", "U8", "I8", "U16", 
		"I16", "U32", "I32", "U64", "I64", "F32", "F64", "ACTIVE", "ACTIVITY", 
		"ALWAYS", "ARRAY", "ASSERT", "ASYNC", "AT", "BASE", "BLOCK", "BOOL", "CHANGE", 
		"COMMAND", "COMPONENT", "CONNECTIONS", "CONSTANT", "CPU", "DEFAULT", "DIAGNOSTIC", 
		"DROP", "ENUM", "EVENT", "FALSE", "FATAL", "FORMAT", "GET", "GUARDED", 
		"HEALTH", "HIGH", "ID", "IMPORT", "INCLUDE", "INPUT", "INSTANCE", "INTERNAL", 
		"LOCATE", "LOW", "MATCH", "MODULE", "ON", "OPCODE", "ORANGE", "OUTPUT", 
		"PARAM", "PASSIVE", "PHASE", "PORT", "PRIORITY", "PRIVATE", "QUEUE", "QUEUED", 
		"RECV", "RED", "REF", "REG", "RESP", "SAVE", "SERIAL", "SET", "SEVERITY", 
		"SIZE", "STACK", "STRING", "STRUCT", "SYNC", "TELEMETRY", "TEXT", "THROTTLE", 
		"TIME", "TOPOLOGY", "TRUE", "TYPE", "UPDATE", "WARNING", "WITH", "YELLOW", 
		"IDENTIFIER",
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
			this.state = 147;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 144;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 150;
					this.moduleMember();
					this.state = 153;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case FppParser.T__11:
					case FppParser.NL:
						{
						this.state = 151;
						this.semiDelim();
						}
						break;
					case FppParser.EOF:
						{
						this.state = 152;
						this.match(FppParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 160;
				this.match(FppParser.NL);
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 166;
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
	public progTopology(): ProgTopologyContext {
		let _localctx: ProgTopologyContext = new ProgTopologyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FppParser.RULE_progTopology);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 168;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 181;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 174;
					this.topologyMember();
					this.state = 177;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case FppParser.T__11:
					case FppParser.NL:
						{
						this.state = 175;
						this.semiDelim();
						}
						break;
					case FppParser.EOF:
						{
						this.state = 176;
						this.match(FppParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 184;
				this.match(FppParser.NL);
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 190;
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
	public progComponent(): ProgComponentContext {
		let _localctx: ProgComponentContext = new ProgComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FppParser.RULE_progComponent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 192;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 198;
					this.componentMember();
					this.state = 201;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case FppParser.T__11:
					case FppParser.NL:
						{
						this.state = 199;
						this.semiDelim();
						}
						break;
					case FppParser.EOF:
						{
						this.state = 200;
						this.match(FppParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 208;
				this.match(FppParser.NL);
				}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
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
		this.enterRule(_localctx, 6, FppParser.RULE_abstractTypeDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(FppParser.TYPE);
			this.state = 217;
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
		this.enterRule(_localctx, 8, FppParser.RULE_arrayDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(FppParser.ARRAY);
			this.state = 220;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 221;
			this.match(FppParser.T__0);
			this.state = 222;
			this.match(FppParser.T__1);
			this.state = 223;
			_localctx._size = this.expr(0);
			this.state = 224;
			this.match(FppParser.T__2);
			this.state = 225;
			_localctx._type = this.typeName();
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 226;
				this.match(FppParser.DEFAULT);
				this.state = 227;
				_localctx._default_ = this.arrayExpr();
				}
			}

			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 230;
				this.match(FppParser.FORMAT);
				this.state = 231;
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
		this.enterRule(_localctx, 10, FppParser.RULE_constantDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(FppParser.CONSTANT);
			this.state = 235;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 236;
			this.match(FppParser.T__0);
			this.state = 237;
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
		this.enterRule(_localctx, 12, FppParser.RULE_structMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 240;
			this.match(FppParser.T__3);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 241;
				this.match(FppParser.T__1);
				this.state = 242;
				_localctx._size = this.expr(0);
				this.state = 243;
				this.match(FppParser.T__2);
				}
			}

			this.state = 247;
			_localctx._type = this.typeName();
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 248;
				this.match(FppParser.FORMAT);
				this.state = 249;
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
	public structMemberN(): StructMemberNContext {
		let _localctx: StructMemberNContext = new StructMemberNContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FppParser.RULE_structMemberN);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 252;
				this.preAnnotation();
				}
			}

			this.state = 255;
			this.structMember();
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 257;
					this.match(FppParser.T__4);
					}
				}

				this.state = 260;
				this.postAnnotation();
				}
				break;
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
	public structMemberL(): StructMemberLContext {
		let _localctx: StructMemberLContext = new StructMemberLContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FppParser.RULE_structMemberL);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 263;
				this.preAnnotation();
				}
			}

			this.state = 266;
			this.structMember();
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 268;
					this.match(FppParser.T__4);
					}
				}

				this.state = 271;
				this.postAnnotation();
				}
				break;
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
		this.enterRule(_localctx, 18, FppParser.RULE_structDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(FppParser.STRUCT);
			this.state = 275;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 276;
			this.match(FppParser.T__5);
			this.state = 280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 277;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION || _la === FppParser.IDENTIFIER) {
				{
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 283;
						this.structMemberN();
						}
						}
					}
					this.state = 288;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				this.state = 289;
				this.structMemberL();
				}
			}

			this.state = 292;
			this.match(FppParser.T__6);
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 293;
				this.match(FppParser.DEFAULT);
				this.state = 294;
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
		this.enterRule(_localctx, 20, FppParser.RULE_queueFullBehavior);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0))) {
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
		this.enterRule(_localctx, 22, FppParser.RULE_commandKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
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
		this.enterRule(_localctx, 24, FppParser.RULE_commandDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			_localctx._kind = this.commandKind();
			this.state = 302;
			this.match(FppParser.COMMAND);
			this.state = 303;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 304;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.OPCODE) {
				{
				this.state = 307;
				this.match(FppParser.OPCODE);
				this.state = 308;
				_localctx._opcode = this.expr(0);
				}
			}

			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 311;
				this.match(FppParser.PRIORITY);
				this.state = 312;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 315;
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
		this.enterRule(_localctx, 26, FppParser.RULE_paramDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(FppParser.PARAM);
			this.state = 319;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 320;
			this.match(FppParser.T__3);
			this.state = 321;
			_localctx._type = this.typeName();
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 322;
				this.match(FppParser.DEFAULT);
				this.state = 323;
				_localctx._default_ = this.expr(0);
				}
			}

			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 326;
				this.match(FppParser.ID);
				this.state = 327;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SET) {
				{
				this.state = 330;
				this.match(FppParser.SET);
				this.state = 331;
				this.match(FppParser.OPCODE);
				this.state = 332;
				_localctx._setOpcode = this.expr(0);
				}
			}

			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SAVE) {
				{
				this.state = 335;
				this.match(FppParser.SAVE);
				this.state = 336;
				this.match(FppParser.OPCODE);
				this.state = 337;
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
		this.enterRule(_localctx, 28, FppParser.RULE_generalPortKind);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ASYNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				this.match(FppParser.ASYNC);
				this.state = 341;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.GUARDED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.match(FppParser.GUARDED);
				this.state = 343;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.SYNC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 344;
				this.match(FppParser.SYNC);
				this.state = 345;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.OUTPUT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 346;
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
		this.enterRule(_localctx, 30, FppParser.RULE_specialPortKind);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 349;
				this.match(FppParser.COMMAND);
				this.state = 350;
				this.match(FppParser.RECV);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.match(FppParser.COMMAND);
				this.state = 352;
				this.match(FppParser.REG);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 353;
				this.match(FppParser.COMMAND);
				this.state = 354;
				this.match(FppParser.RESP);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 355;
				this.match(FppParser.EVENT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 356;
				this.match(FppParser.PARAM);
				this.state = 357;
				this.match(FppParser.GET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 358;
				this.match(FppParser.PARAM);
				this.state = 359;
				this.match(FppParser.SET);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 360;
				this.match(FppParser.TELEMETRY);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 361;
				this.match(FppParser.TEXT);
				this.state = 362;
				this.match(FppParser.EVENT);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 363;
				this.match(FppParser.TIME);
				this.state = 364;
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
		this.enterRule(_localctx, 32, FppParser.RULE_generalPortInstanceType);
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.SERIAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.match(FppParser.SERIAL);
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
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
		this.enterRule(_localctx, 34, FppParser.RULE_generalPortInstanceDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			_localctx._kind = this.generalPortKind();
			this.state = 372;
			this.match(FppParser.PORT);
			this.state = 373;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 374;
			this.match(FppParser.T__3);
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 375;
				this.match(FppParser.T__1);
				this.state = 376;
				_localctx._n = this.expr(0);
				this.state = 377;
				this.match(FppParser.T__2);
				}
			}

			this.state = 381;
			_localctx._type = this.generalPortInstanceType();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 382;
				this.match(FppParser.PRIORITY);
				this.state = 383;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 386;
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
		this.enterRule(_localctx, 36, FppParser.RULE_specialPortInstanceDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.specialPortKind();
			this.state = 390;
			this.match(FppParser.PORT);
			this.state = 391;
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
		this.enterRule(_localctx, 38, FppParser.RULE_telemetryLimitKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
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
		this.enterRule(_localctx, 40, FppParser.RULE_telemetryLimitExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			_localctx._kind = this.telemetryLimitKind();
			this.state = 396;
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
		this.enterRule(_localctx, 42, FppParser.RULE_telemetryLimit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(FppParser.T__5);
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 399;
				this.match(FppParser.NL);
				}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ORANGE || _la === FppParser.RED || _la === FppParser.YELLOW) {
				{
				this.state = 405;
				this.telemetryLimitExpr();
				this.state = 411;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 406;
						this.commaDelim();
						this.state = 407;
						this.telemetryLimitExpr();
						}
						}
					}
					this.state = 413;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					this.state = 414;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 419;
			this.match(FppParser.T__6);
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
		this.enterRule(_localctx, 44, FppParser.RULE_telemetryUpdate);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ALWAYS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 421;
				this.match(FppParser.ALWAYS);
				}
				break;
			case FppParser.ON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.match(FppParser.ON);
				this.state = 423;
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
		this.enterRule(_localctx, 46, FppParser.RULE_telemetryChannelDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(FppParser.TELEMETRY);
			this.state = 427;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 428;
			this.match(FppParser.T__3);
			this.state = 429;
			_localctx._type = this.typeName();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 430;
				this.match(FppParser.ID);
				this.state = 431;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.UPDATE) {
				{
				this.state = 434;
				this.match(FppParser.UPDATE);
				this.state = 435;
				_localctx._update = this.telemetryUpdate();
				}
			}

			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 438;
				this.match(FppParser.FORMAT);
				this.state = 439;
				_localctx._format = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.LOW) {
				{
				this.state = 442;
				this.match(FppParser.LOW);
				this.state = 443;
				_localctx._low = this.telemetryLimit();
				}
			}

			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.HIGH) {
				{
				this.state = 446;
				this.match(FppParser.HIGH);
				this.state = 447;
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
		this.enterRule(_localctx, 48, FppParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__0) {
				{
				this.state = 451;
				this.match(FppParser.T__0);
				this.state = 452;
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
	public enumMemberN(): EnumMemberNContext {
		let _localctx: EnumMemberNContext = new EnumMemberNContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FppParser.RULE_enumMemberN);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 455;
				this.preAnnotation();
				}
			}

			this.state = 458;
			this.enumMember();
			this.state = 464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 459;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 460;
					this.match(FppParser.T__4);
					}
				}

				this.state = 463;
				this.postAnnotation();
				}
				break;
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
	public enumMemberL(): EnumMemberLContext {
		let _localctx: EnumMemberLContext = new EnumMemberLContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FppParser.RULE_enumMemberL);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 466;
				this.preAnnotation();
				}
			}

			this.state = 469;
			this.enumMember();
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 470;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 471;
					this.match(FppParser.T__4);
					}
				}

				this.state = 474;
				this.postAnnotation();
				}
				break;
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
		this.enterRule(_localctx, 54, FppParser.RULE_enumDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(FppParser.ENUM);
			this.state = 478;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__3) {
				{
				this.state = 479;
				this.match(FppParser.T__3);
				this.state = 480;
				_localctx._type = this.intType();
				}
			}

			this.state = 483;
			this.match(FppParser.T__5);
			this.state = 487;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 484;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION || _la === FppParser.IDENTIFIER) {
				{
				this.state = 493;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 490;
						this.enumMemberN();
						}
						}
					}
					this.state = 495;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 496;
				this.enumMemberL();
				}
			}

			this.state = 499;
			this.match(FppParser.T__6);
			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 500;
				this.match(FppParser.DEFAULT);
				this.state = 501;
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
		this.enterRule(_localctx, 56, FppParser.RULE_eventSeverity);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 504;
				this.match(FppParser.ACTIVITY);
				this.state = 505;
				this.match(FppParser.HIGH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 506;
				this.match(FppParser.ACTIVITY);
				this.state = 507;
				this.match(FppParser.LOW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 508;
				this.match(FppParser.COMMAND);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 509;
				this.match(FppParser.DIAGNOSTIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 510;
				this.match(FppParser.FATAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 511;
				this.match(FppParser.WARNING);
				this.state = 512;
				this.match(FppParser.HIGH);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 513;
				this.match(FppParser.WARNING);
				this.state = 514;
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
		this.enterRule(_localctx, 58, FppParser.RULE_eventDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(FppParser.EVENT);
			this.state = 518;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 519;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 522;
			this.match(FppParser.SEVERITY);
			this.state = 523;
			this.eventSeverity();
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 524;
				this.match(FppParser.ID);
				this.state = 525;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 528;
			this.match(FppParser.FORMAT);
			this.state = 529;
			_localctx._format = this.match(FppParser.LIT_STRING);
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.THROTTLE) {
				{
				this.state = 530;
				this.match(FppParser.THROTTLE);
				this.state = 531;
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
		this.enterRule(_localctx, 60, FppParser.RULE_includeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(FppParser.INCLUDE);
			this.state = 535;
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
		this.enterRule(_localctx, 62, FppParser.RULE_matchStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(FppParser.MATCH);
			this.state = 538;
			_localctx._match = this.match(FppParser.IDENTIFIER);
			this.state = 539;
			this.match(FppParser.WITH);
			this.state = 540;
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
		this.enterRule(_localctx, 64, FppParser.RULE_internalPortDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(FppParser.INTERNAL);
			this.state = 543;
			this.match(FppParser.PORT);
			this.state = 544;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 545;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 548;
				this.match(FppParser.PRIORITY);
				this.state = 549;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 552;
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
		this.enterRule(_localctx, 66, FppParser.RULE_initSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 555;
				this.preAnnotation();
				}
			}

			this.state = 558;
			this.match(FppParser.PHASE);
			this.state = 559;
			_localctx._phaseExpr = this.expr(0);
			this.state = 560;
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
		this.enterRule(_localctx, 68, FppParser.RULE_componentInstanceDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(FppParser.INSTANCE);
			this.state = 563;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 564;
			this.match(FppParser.T__3);
			this.state = 565;
			_localctx._fppType = this.qualIdent();
			this.state = 566;
			this.match(FppParser.BASE);
			this.state = 567;
			this.match(FppParser.ID);
			this.state = 568;
			_localctx._base_id = this.expr(0);
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.TYPE) {
				{
				this.state = 569;
				this.match(FppParser.TYPE);
				this.state = 570;
				_localctx._cppType = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.AT) {
				{
				this.state = 573;
				this.match(FppParser.AT);
				this.state = 574;
				_localctx._at = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.QUEUE) {
				{
				this.state = 577;
				this.match(FppParser.QUEUE);
				this.state = 578;
				this.match(FppParser.SIZE);
				this.state = 579;
				_localctx._queueSize = this.expr(0);
				}
			}

			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.STACK) {
				{
				this.state = 582;
				this.match(FppParser.STACK);
				this.state = 583;
				this.match(FppParser.SIZE);
				this.state = 584;
				_localctx._stackSize = this.expr(0);
				}
			}

			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 587;
				this.match(FppParser.PRIORITY);
				this.state = 588;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.CPU) {
				{
				this.state = 591;
				this.match(FppParser.CPU);
				this.state = 592;
				_localctx._cpu = this.expr(0);
				}
			}

			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__5) {
				{
				this.state = 595;
				this.match(FppParser.T__5);
				this.state = 599;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 596;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 601;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				}
				this.state = 607;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 602;
						this.initSpecifier();
						this.state = 603;
						this.semiDelim();
						}
						}
					}
					this.state = 609;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				}
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.NL) {
					{
					{
					this.state = 610;
					this.match(FppParser.NL);
					}
					}
					this.state = 615;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 616;
				this.match(FppParser.T__6);
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
		this.enterRule(_localctx, 70, FppParser.RULE_componentKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
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
	public componentMemberTempl(): ComponentMemberTemplContext {
		let _localctx: ComponentMemberTemplContext = new ComponentMemberTemplContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FppParser.RULE_componentMemberTempl);
		try {
			this.state = 635;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 621;
				this.abstractTypeDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 622;
				this.arrayDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 623;
				this.constantDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 624;
				this.structDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 625;
				this.commandDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 626;
				this.paramDecl();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 627;
				this.generalPortInstanceDecl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 628;
				this.specialPortInstanceDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 629;
				this.telemetryChannelDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 630;
				this.enumDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 631;
				this.eventDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 632;
				this.includeStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 633;
				this.internalPortDecl();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 634;
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
	public componentMember(): ComponentMemberContext {
		let _localctx: ComponentMemberContext = new ComponentMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FppParser.RULE_componentMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 637;
				this.preAnnotation();
				}
			}

			this.state = 640;
			this.componentMemberTempl();
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
		this.enterRule(_localctx, 76, FppParser.RULE_componentDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			_localctx._kind = this.componentKind();
			this.state = 643;
			this.match(FppParser.COMPONENT);
			this.state = 644;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 645;
			this.match(FppParser.T__5);
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 646;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 657;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 652;
					this.componentMember();
					this.state = 653;
					this.semiDelim();
					}
					}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			}
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 660;
				this.match(FppParser.NL);
				}
				}
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 666;
			this.match(FppParser.T__6);
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
		this.enterRule(_localctx, 78, FppParser.RULE_portDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.match(FppParser.PORT);
			this.state = 669;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 670;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 673;
				this.match(FppParser.T__7);
				this.state = 674;
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
		this.enterRule(_localctx, 80, FppParser.RULE_componentInstanceSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIVATE) {
				{
				this.state = 677;
				this.match(FppParser.PRIVATE);
				}
			}

			this.state = 680;
			this.match(FppParser.INSTANCE);
			this.state = 681;
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
		this.enterRule(_localctx, 82, FppParser.RULE_connectionNode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			_localctx._node = this.qualIdent();
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 684;
				this.match(FppParser.T__1);
				this.state = 685;
				_localctx._index = this.expr(0);
				this.state = 686;
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
		this.enterRule(_localctx, 84, FppParser.RULE_connection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			_localctx._source = this.connectionNode();
			this.state = 691;
			this.match(FppParser.T__7);
			this.state = 692;
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
		this.enterRule(_localctx, 86, FppParser.RULE_directGraphDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(FppParser.CONNECTIONS);
			this.state = 695;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 696;
			this.match(FppParser.T__5);
			this.state = 700;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 697;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 702;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.IDENTIFIER) {
				{
				{
				this.state = 703;
				this.connection();
				this.state = 704;
				this.commaDelim();
				}
				}
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 711;
				this.match(FppParser.NL);
				}
				}
				this.state = 716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 717;
			this.match(FppParser.T__6);
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
		this.enterRule(_localctx, 88, FppParser.RULE_patternKind);
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.COMMAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 719;
				this.match(FppParser.COMMAND);
				}
				break;
			case FppParser.EVENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 720;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.TEXT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 721;
				this.match(FppParser.TEXT);
				this.state = 722;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.HEALTH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 723;
				this.match(FppParser.HEALTH);
				}
				break;
			case FppParser.PARAM:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 724;
				this.match(FppParser.PARAM);
				}
				break;
			case FppParser.TELEMETRY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 725;
				this.match(FppParser.TELEMETRY);
				}
				break;
			case FppParser.TIME:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 726;
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
		this.enterRule(_localctx, 90, FppParser.RULE_patternGraphSources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 729;
			this.qualIdent();
			this.state = 735;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 730;
					this.commaDelim();
					this.state = 731;
					this.qualIdent();
					}
					}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 738;
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
		this.enterRule(_localctx, 92, FppParser.RULE_patternGraphStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			_localctx._kind = this.patternKind();
			this.state = 742;
			this.match(FppParser.CONNECTIONS);
			this.state = 743;
			this.match(FppParser.INSTANCE);
			this.state = 744;
			_localctx._target = this.qualIdent();
			this.state = 746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 745;
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
		this.enterRule(_localctx, 94, FppParser.RULE_topologyImportStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this.match(FppParser.IMPORT);
			this.state = 749;
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
	public topologyMemberTempl(): TopologyMemberTemplContext {
		let _localctx: TopologyMemberTemplContext = new TopologyMemberTemplContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, FppParser.RULE_topologyMemberTempl);
		try {
			this.state = 756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.INSTANCE:
			case FppParser.PRIVATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 751;
				this.componentInstanceSpec();
				}
				break;
			case FppParser.CONNECTIONS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 752;
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
				this.state = 753;
				this.patternGraphStmt();
				}
				break;
			case FppParser.IMPORT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 754;
				this.topologyImportStmt();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 755;
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
	public topologyMember(): TopologyMemberContext {
		let _localctx: TopologyMemberContext = new TopologyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, FppParser.RULE_topologyMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 758;
				this.preAnnotation();
				}
			}

			this.state = 761;
			this.topologyMemberTempl();
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
		this.enterRule(_localctx, 100, FppParser.RULE_topologyDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(FppParser.TOPOLOGY);
			this.state = 764;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 765;
			this.match(FppParser.T__5);
			this.state = 769;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 766;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			this.state = 777;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 772;
					this.topologyMember();
					this.state = 773;
					this.semiDelim();
					}
					}
				}
				this.state = 779;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 780;
				this.match(FppParser.NL);
				}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 786;
			this.match(FppParser.T__6);
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
		this.enterRule(_localctx, 102, FppParser.RULE_locationKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (FppParser.COMPONENT - 48)) | (1 << (FppParser.CONSTANT - 48)) | (1 << (FppParser.INSTANCE - 48)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (FppParser.PORT - 81)) | (1 << (FppParser.TOPOLOGY - 81)) | (1 << (FppParser.TYPE - 81)))) !== 0))) {
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
		this.enterRule(_localctx, 104, FppParser.RULE_locationStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(FppParser.LOCATE);
			this.state = 791;
			_localctx._kind = this.locationKind();
			this.state = 792;
			_localctx._name = this.qualIdent();
			this.state = 793;
			this.match(FppParser.AT);
			this.state = 794;
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
	public moduleMemberTempl(): ModuleMemberTemplContext {
		let _localctx: ModuleMemberTemplContext = new ModuleMemberTemplContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FppParser.RULE_moduleMemberTempl);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 796;
				this.abstractTypeDecl();
				}
				break;
			case FppParser.ARRAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 797;
				this.arrayDecl();
				}
				break;
			case FppParser.ACTIVE:
			case FppParser.PASSIVE:
			case FppParser.QUEUED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 798;
				this.componentDecl();
				}
				break;
			case FppParser.INSTANCE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 799;
				this.componentInstanceDecl();
				}
				break;
			case FppParser.CONSTANT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 800;
				this.constantDecl();
				}
				break;
			case FppParser.MODULE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 801;
				this.moduleDecl();
				}
				break;
			case FppParser.PORT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 802;
				this.portDecl();
				}
				break;
			case FppParser.STRUCT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 803;
				this.structDecl();
				}
				break;
			case FppParser.LOCATE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 804;
				this.locationStmt();
				}
				break;
			case FppParser.ENUM:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 805;
				this.enumDecl();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 806;
				this.includeStmt();
				}
				break;
			case FppParser.TOPOLOGY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 807;
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
	public moduleMember(): ModuleMemberContext {
		let _localctx: ModuleMemberContext = new ModuleMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, FppParser.RULE_moduleMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 810;
				this.preAnnotation();
				}
			}

			this.state = 813;
			this.moduleMemberTempl();
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
		this.enterRule(_localctx, 110, FppParser.RULE_moduleDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(FppParser.MODULE);
			this.state = 816;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 817;
			this.match(FppParser.T__5);
			this.state = 821;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 818;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 823;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			this.state = 829;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 824;
					this.moduleMember();
					this.state = 825;
					this.semiDelim();
					}
					}
				}
				this.state = 831;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 832;
				this.match(FppParser.NL);
				}
				}
				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 838;
			this.match(FppParser.T__6);
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
		this.enterRule(_localctx, 112, FppParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF) {
				{
				this.state = 840;
				this.match(FppParser.REF);
				}
			}

			this.state = 843;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 844;
			this.match(FppParser.T__3);
			this.state = 845;
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
	public formalParameterN(): FormalParameterNContext {
		let _localctx: FormalParameterNContext = new FormalParameterNContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, FppParser.RULE_formalParameterN);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this.formalParameter();
			this.state = 853;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 848;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 849;
					this.match(FppParser.T__4);
					}
				}

				this.state = 852;
				this.postAnnotation();
				}
				break;
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
	public formalParamaterL(): FormalParamaterLContext {
		let _localctx: FormalParamaterLContext = new FormalParamaterLContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, FppParser.RULE_formalParamaterL);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.formalParameter();
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 856;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 857;
					this.match(FppParser.T__4);
					}
				}

				this.state = 860;
				this.postAnnotation();
				}
				break;
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
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, FppParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this.match(FppParser.T__8);
			this.state = 867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 864;
				this.match(FppParser.NL);
				}
				}
				this.state = 869;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF || _la === FppParser.IDENTIFIER) {
				{
				this.state = 873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 870;
						this.formalParameterN();
						}
						}
					}
					this.state = 875;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
				}
				this.state = 876;
				this.formalParamaterL();
				}
			}

			this.state = 879;
			this.match(FppParser.T__9);
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
		this.enterRule(_localctx, 120, FppParser.RULE_qualIdent);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(FppParser.IDENTIFIER);
			this.state = 886;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 882;
					this.match(FppParser.T__10);
					this.state = 883;
					this.match(FppParser.IDENTIFIER);
					}
					}
				}
				this.state = 888;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
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
	public intType(): IntTypeContext {
		let _localctx: IntTypeContext = new IntTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, FppParser.RULE_intType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 889;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (FppParser.U8 - 26)) | (1 << (FppParser.I8 - 26)) | (1 << (FppParser.U16 - 26)) | (1 << (FppParser.I16 - 26)) | (1 << (FppParser.U32 - 26)) | (1 << (FppParser.I32 - 26)) | (1 << (FppParser.U64 - 26)) | (1 << (FppParser.I64 - 26)))) !== 0))) {
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, FppParser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 897;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.U8:
			case FppParser.I8:
			case FppParser.U16:
			case FppParser.I16:
			case FppParser.U32:
			case FppParser.I32:
			case FppParser.U64:
			case FppParser.I64:
			case FppParser.F32:
			case FppParser.F64:
			case FppParser.BOOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 891;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (FppParser.U8 - 26)) | (1 << (FppParser.I8 - 26)) | (1 << (FppParser.U16 - 26)) | (1 << (FppParser.I16 - 26)) | (1 << (FppParser.U32 - 26)) | (1 << (FppParser.I32 - 26)) | (1 << (FppParser.U64 - 26)) | (1 << (FppParser.I64 - 26)) | (1 << (FppParser.F32 - 26)) | (1 << (FppParser.F64 - 26)) | (1 << (FppParser.BOOL - 26)))) !== 0))) {
					_localctx._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FppParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 892;
				_localctx._type = this.match(FppParser.STRING);
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.SIZE) {
					{
					this.state = 893;
					this.match(FppParser.SIZE);
					this.state = 894;
					_localctx._size = this.match(FppParser.LIT_INT);
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
		this.enterRule(_localctx, 126, FppParser.RULE_typeName);
		try {
			this.state = 901;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.U8:
			case FppParser.I8:
			case FppParser.U16:
			case FppParser.I16:
			case FppParser.U32:
			case FppParser.I32:
			case FppParser.U64:
			case FppParser.I64:
			case FppParser.F32:
			case FppParser.F64:
			case FppParser.BOOL:
			case FppParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 899;
				this.primitiveType();
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 900;
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
		this.enterRule(_localctx, 128, FppParser.RULE_commaDelim);
		try {
			let _alt: number;
			this.state = 915;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 903;
				this.match(FppParser.T__4);
				this.state = 907;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 904;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 909;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 911;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 910;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 913;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
		this.enterRule(_localctx, 130, FppParser.RULE_semiDelim);
		try {
			let _alt: number;
			this.state = 929;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 917;
				this.match(FppParser.T__11);
				this.state = 921;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 918;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 923;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 925;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 924;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 927;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
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
		this.enterRule(_localctx, 132, FppParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			this.match(FppParser.T__1);
			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 932;
				this.match(FppParser.NL);
				}
				}
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FppParser.T__1) | (1 << FppParser.T__5) | (1 << FppParser.T__8) | (1 << FppParser.T__12) | (1 << FppParser.LIT_BOOLEAN) | (1 << FppParser.LIT_STRING) | (1 << FppParser.LIT_FLOAT) | (1 << FppParser.LIT_INT))) !== 0) || _la === FppParser.IDENTIFIER) {
				{
				this.state = 938;
				this.expr(0);
				this.state = 944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					{
					this.state = 939;
					this.commaDelim();
					this.state = 940;
					this.expr(0);
					}
					}
					this.state = 946;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 949;
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
		this.enterRule(_localctx, 134, FppParser.RULE_structAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 952;
			this.match(FppParser.T__0);
			this.state = 953;
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
		this.enterRule(_localctx, 136, FppParser.RULE_structExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			this.match(FppParser.T__5);
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 956;
				this.match(FppParser.NL);
				}
				}
				this.state = 961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 962;
				this.structAssignment();
				this.state = 968;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 963;
						this.commaDelim();
						this.state = 964;
						this.structAssignment();
						}
						}
					}
					this.state = 970;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				}
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					this.state = 971;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 976;
			this.match(FppParser.T__6);
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
		let _startState: number = 138;
		this.enterRecursionRule(_localctx, 138, FppParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__12:
				{
				this.state = 979;
				this.match(FppParser.T__12);
				this.state = 980;
				_localctx._unary = this.expr(11);
				}
				break;
			case FppParser.T__1:
				{
				this.state = 981;
				this.arrayExpr();
				}
				break;
			case FppParser.T__5:
				{
				this.state = 982;
				this.structExpr();
				}
				break;
			case FppParser.IDENTIFIER:
				{
				this.state = 983;
				this.qualIdent();
				}
				break;
			case FppParser.LIT_BOOLEAN:
				{
				this.state = 984;
				this.match(FppParser.LIT_BOOLEAN);
				}
				break;
			case FppParser.LIT_FLOAT:
				{
				this.state = 985;
				this.match(FppParser.LIT_FLOAT);
				}
				break;
			case FppParser.LIT_INT:
				{
				this.state = 986;
				this.match(FppParser.LIT_INT);
				}
				break;
			case FppParser.LIT_STRING:
				{
				this.state = 987;
				this.match(FppParser.LIT_STRING);
				}
				break;
			case FppParser.T__8:
				{
				this.state = 988;
				this.match(FppParser.T__8);
				this.state = 989;
				_localctx._p = this.expr(0);
				this.state = 990;
				this.match(FppParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1002;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1000;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 994;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 995;
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
						this.state = 996;
						_localctx._right = this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 997;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 998;
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
						this.state = 999;
						_localctx._right = this.expr(10);
						}
						break;
					}
					}
				}
				this.state = 1004;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
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
	// @RuleVersion(0)
	public postAnnotation(): PostAnnotationContext {
		let _localctx: PostAnnotationContext = new PostAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, FppParser.RULE_postAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1005;
			this.match(FppParser.ANNOTATION);
			this.state = 1006;
			this.match(FppParser.NL);
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
	public preAnnotation(): PreAnnotationContext {
		let _localctx: PreAnnotationContext = new PreAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, FppParser.RULE_preAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1008;
				_la = this._input.LA(1);
				if (!(_la === FppParser.NL || _la === FppParser.ANNOTATION)) {
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
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FppParser.NL || _la === FppParser.ANNOTATION);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 69:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u03F8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x03\x02\x07\x02\x94\n\x02\f\x02\x0E\x02\x97" +
		"\v\x02\x03\x02\x03\x02\x03\x02\x05\x02\x9C\n\x02\x07\x02\x9E\n\x02\f\x02" +
		"\x0E\x02\xA1\v\x02\x03\x02\x07\x02\xA4\n\x02\f\x02\x0E\x02\xA7\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x07\x03\xAC\n\x03\f\x03\x0E\x03\xAF\v\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\xB4\n\x03\x07\x03\xB6\n\x03\f\x03\x0E\x03\xB9" +
		"\v\x03\x03\x03\x07\x03\xBC\n\x03\f\x03\x0E\x03\xBF\v\x03\x03\x03\x03\x03" +
		"\x03\x04\x07\x04\xC4\n\x04\f\x04\x0E\x04\xC7\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\xCC\n\x04\x07\x04\xCE\n\x04\f\x04\x0E\x04\xD1\v\x04\x03\x04" +
		"\x07\x04\xD4\n\x04\f\x04\x0E\x04\xD7\v\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\xE7\n\x06\x03\x06\x03\x06\x05\x06\xEB\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\xF8\n\b\x03\b\x03\b\x03\b\x05\b\xFD\n\b\x03\t\x05\t\u0100\n\t\x03\t" +
		"\x03\t\x03\t\x05\t\u0105\n\t\x03\t\x05\t\u0108\n\t\x03\n\x05\n\u010B\n" +
		"\n\x03\n\x03\n\x03\n\x05\n\u0110\n\n\x03\n\x05\n\u0113\n\n\x03\v\x03\v" +
		"\x03\v\x03\v\x07\v\u0119\n\v\f\v\x0E\v\u011C\v\v\x03\v\x07\v\u011F\n\v" +
		"\f\v\x0E\v\u0122\v\v\x03\v\x05\v\u0125\n\v\x03\v\x03\v\x03\v\x05\v\u012A" +
		"\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0134" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0138\n\x0E\x03\x0E\x03\x0E\x05\x0E\u013C" +
		"\n\x0E\x03\x0E\x05\x0E\u013F\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0147\n\x0F\x03\x0F\x03\x0F\x05\x0F\u014B\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u0150\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u0155\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u015E\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u0170\n\x11\x03\x12\x03\x12\x05\x12\u0174\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u017E\n\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u0183\n\x13\x03\x13\x05\x13\u0186\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x07\x17\u0193\n\x17\f\x17\x0E\x17\u0196\v\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x07\x17\u019C\n\x17\f\x17\x0E\x17\u019F\v\x17\x03" +
		"\x17\x05\x17\u01A2\n\x17\x05\x17\u01A4\n\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u01AB\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u01B3\n\x19\x03\x19\x03\x19\x05\x19\u01B7\n\x19\x03\x19" +
		"\x03\x19\x05\x19\u01BB\n\x19\x03\x19\x03\x19\x05\x19\u01BF\n\x19\x03\x19" +
		"\x03\x19\x05\x19\u01C3\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01C8\n\x1A" +
		"\x03\x1B\x05\x1B\u01CB\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01D0\n\x1B" +
		"\x03\x1B\x05\x1B\u01D3\n\x1B\x03\x1C\x05\x1C\u01D6\n\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u01DB\n\x1C\x03\x1C\x05\x1C\u01DE\n\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x05\x1D\u01E4\n\x1D\x03\x1D\x03\x1D\x07\x1D\u01E8\n\x1D" +
		"\f\x1D\x0E\x1D\u01EB\v\x1D\x03\x1D\x07\x1D\u01EE\n\x1D\f\x1D\x0E\x1D\u01F1" +
		"\v\x1D\x03\x1D\x05\x1D\u01F4\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01F9" +
		"\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0206\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u020B\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0211\n\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0217\n\x1F\x03 \x03 \x03 \x03!\x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\u0225\n\"\x03\"\x03\"\x05" +
		"\"\u0229\n\"\x03\"\x05\"\u022C\n\"\x03#\x05#\u022F\n#\x03#\x03#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u023E\n$\x03$\x03" +
		"$\x05$\u0242\n$\x03$\x03$\x03$\x05$\u0247\n$\x03$\x03$\x03$\x05$\u024C" +
		"\n$\x03$\x03$\x05$\u0250\n$\x03$\x03$\x05$\u0254\n$\x03$\x03$\x07$\u0258" +
		"\n$\f$\x0E$\u025B\v$\x03$\x03$\x03$\x07$\u0260\n$\f$\x0E$\u0263\v$\x03" +
		"$\x07$\u0266\n$\f$\x0E$\u0269\v$\x03$\x05$\u026C\n$\x03%\x03%\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u027E" +
		"\n&\x03\'\x05\'\u0281\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x07(\u028A" +
		"\n(\f(\x0E(\u028D\v(\x03(\x03(\x03(\x07(\u0292\n(\f(\x0E(\u0295\v(\x03" +
		"(\x07(\u0298\n(\f(\x0E(\u029B\v(\x03(\x03(\x03)\x03)\x03)\x05)\u02A2\n" +
		")\x03)\x03)\x05)\u02A6\n)\x03*\x05*\u02A9\n*\x03*\x03*\x03*\x03+\x03+" +
		"\x03+\x03+\x03+\x05+\u02B3\n+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-" +
		"\x07-\u02BD\n-\f-\x0E-\u02C0\v-\x03-\x03-\x03-\x07-\u02C5\n-\f-\x0E-\u02C8" +
		"\v-\x03-\x07-\u02CB\n-\f-\x0E-\u02CE\v-\x03-\x03-\x03.\x03.\x03.\x03." +
		"\x03.\x03.\x03.\x03.\x05.\u02DA\n.\x03/\x03/\x03/\x03/\x07/\u02E0\n/\f" +
		"/\x0E/\u02E3\v/\x03/\x05/\u02E6\n/\x030\x030\x030\x030\x030\x050\u02ED" +
		"\n0\x031\x031\x031\x032\x032\x032\x032\x032\x052\u02F7\n2\x033\x053\u02FA" +
		"\n3\x033\x033\x034\x034\x034\x034\x074\u0302\n4\f4\x0E4\u0305\v4\x034" +
		"\x034\x034\x074\u030A\n4\f4\x0E4\u030D\v4\x034\x074\u0310\n4\f4\x0E4\u0313" +
		"\v4\x034\x034\x035\x035\x036\x036\x036\x036\x036\x036\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x057\u032B\n7\x038\x058\u032E" +
		"\n8\x038\x038\x039\x039\x039\x039\x079\u0336\n9\f9\x0E9\u0339\v9\x039" +
		"\x039\x039\x079\u033E\n9\f9\x0E9\u0341\v9\x039\x079\u0344\n9\f9\x0E9\u0347" +
		"\v9\x039\x039\x03:\x05:\u034C\n:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x05" +
		";\u0355\n;\x03;\x05;\u0358\n;\x03<\x03<\x03<\x05<\u035D\n<\x03<\x05<\u0360" +
		"\n<\x03=\x03=\x07=\u0364\n=\f=\x0E=\u0367\v=\x03=\x07=\u036A\n=\f=\x0E" +
		"=\u036D\v=\x03=\x05=\u0370\n=\x03=\x03=\x03>\x03>\x03>\x07>\u0377\n>\f" +
		">\x0E>\u037A\v>\x03?\x03?\x03@\x03@\x03@\x03@\x05@\u0382\n@\x05@\u0384" +
		"\n@\x03A\x03A\x05A\u0388\nA\x03B\x03B\x07B\u038C\nB\fB\x0EB\u038F\vB\x03" +
		"B\x06B\u0392\nB\rB\x0EB\u0393\x05B\u0396\nB\x03C\x03C\x07C\u039A\nC\f" +
		"C\x0EC\u039D\vC\x03C\x06C\u03A0\nC\rC\x0EC\u03A1\x05C\u03A4\nC\x03D\x03" +
		"D\x07D\u03A8\nD\fD\x0ED\u03AB\vD\x03D\x03D\x03D\x03D\x07D\u03B1\nD\fD" +
		"\x0ED\u03B4\vD\x05D\u03B6\nD\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x07" +
		"F\u03C0\nF\fF\x0EF\u03C3\vF\x03F\x03F\x03F\x03F\x07F\u03C9\nF\fF\x0EF" +
		"\u03CC\vF\x03F\x05F\u03CF\nF\x05F\u03D1\nF\x03F\x03F\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03E3\nG\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x07G\u03EB\nG\fG\x0EG\u03EE\vG\x03H\x03H\x03" +
		"H\x03I\x06I\u03F4\nI\rI\x0EI\u03F5\x03I\x02\x02\x03\x8CJ\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
		"h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82" +
		"\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x02\f\x05" +
		"\x02**..88\x05\x02++??ee\x05\x02NNYYpp\x05\x02&&QQWW\b\x022244FFSSjjl" +
		"l\x03\x02\x1C#\x04\x02\x1C%//\x03\x02\x10\x11\x04\x02\x0F\x0F\x12\x12" +
		"\x04\x02\x13\x13\x17\x17\x02\u046C\x02\x95\x03\x02\x02\x02\x04\xAD\x03" +
		"\x02\x02\x02\x06\xC5\x03\x02\x02\x02\b\xDA\x03\x02\x02\x02\n\xDD\x03\x02" +
		"\x02\x02\f\xEC\x03\x02\x02\x02\x0E\xF1\x03\x02\x02\x02\x10\xFF\x03\x02" +
		"\x02\x02\x12\u010A\x03\x02\x02\x02\x14\u0114\x03\x02\x02\x02\x16\u012B" +
		"\x03\x02\x02\x02\x18\u012D\x03\x02\x02\x02\x1A\u012F\x03\x02\x02\x02\x1C" +
		"\u0140\x03\x02\x02\x02\x1E\u015D\x03\x02\x02\x02 \u016F\x03\x02\x02\x02" +
		"\"\u0173\x03\x02\x02\x02$\u0175\x03\x02\x02\x02&\u0187\x03\x02\x02\x02" +
		"(\u018B\x03\x02\x02\x02*\u018D\x03\x02\x02\x02,\u0190\x03\x02\x02\x02" +
		".\u01AA\x03\x02\x02\x020\u01AC\x03\x02\x02\x022\u01C4\x03\x02\x02\x02" +
		"4\u01CA\x03\x02\x02\x026\u01D5\x03\x02\x02\x028\u01DF\x03\x02\x02\x02" +
		":\u0205\x03\x02\x02\x02<\u0207\x03\x02\x02\x02>\u0218\x03\x02\x02\x02" +
		"@\u021B\x03\x02\x02\x02B\u0220\x03\x02\x02\x02D\u022E\x03\x02\x02\x02" +
		"F\u0234\x03\x02\x02\x02H\u026D\x03\x02\x02\x02J\u027D\x03\x02\x02\x02" +
		"L\u0280\x03\x02\x02\x02N\u0284\x03\x02\x02\x02P\u029E\x03\x02\x02\x02" +
		"R\u02A8\x03\x02\x02\x02T\u02AD\x03\x02\x02\x02V\u02B4\x03\x02\x02\x02" +
		"X\u02B8\x03\x02\x02\x02Z\u02D9\x03\x02\x02\x02\\\u02DB\x03\x02\x02\x02" +
		"^\u02E7\x03\x02\x02\x02`\u02EE\x03\x02\x02\x02b\u02F6\x03\x02\x02\x02" +
		"d\u02F9\x03\x02\x02\x02f\u02FD\x03\x02\x02\x02h\u0316\x03\x02\x02\x02" +
		"j\u0318\x03\x02\x02\x02l\u032A\x03\x02\x02\x02n\u032D\x03\x02\x02\x02" +
		"p\u0331\x03\x02\x02\x02r\u034B\x03\x02\x02\x02t\u0351\x03\x02\x02\x02" +
		"v\u0359\x03\x02\x02\x02x\u0361\x03\x02\x02\x02z\u0373\x03\x02\x02\x02" +
		"|\u037B\x03\x02\x02\x02~\u0383\x03\x02\x02\x02\x80\u0387\x03\x02\x02\x02" +
		"\x82\u0395\x03\x02\x02\x02\x84\u03A3\x03\x02\x02\x02\x86\u03A5\x03\x02" +
		"\x02\x02\x88\u03B9\x03\x02\x02\x02\x8A\u03BD\x03\x02\x02\x02\x8C\u03E2" +
		"\x03\x02\x02\x02\x8E\u03EF\x03\x02\x02\x02\x90\u03F3\x03\x02\x02\x02\x92" +
		"\x94\x07\x13\x02\x02\x93\x92\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95" +
		"\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x9F\x03\x02\x02\x02\x97" +
		"\x95\x03\x02\x02\x02\x98\x9B\x05n8\x02\x99\x9C\x05\x84C\x02\x9A\x9C\x07" +
		"\x02\x02\x03\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9E\x03" +
		"\x02\x02\x02\x9D\x98\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03" +
		"\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA5\x03\x02\x02\x02\xA1\x9F\x03" +
		"\x02\x02\x02\xA2\xA4\x07\x13\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4\xA7\x03" +
		"\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA8\x03" +
		"\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x07\x02\x02\x03\xA9\x03\x03" +
		"\x02\x02\x02\xAA\xAC\x07\x13\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAF\x03" +
		"\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB7\x03" +
		"\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB3\x05d3\x02\xB1\xB4\x05\x84" +
		"C\x02\xB2\xB4\x07\x02\x02\x03\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02" +
		"\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB0\x03\x02\x02\x02\xB6\xB9\x03\x02" +
		"\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBD\x03\x02" +
		"\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x07\x13\x02\x02\xBB\xBA\x03\x02" +
		"\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02" +
		"\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC1\x07\x02" +
		"\x02\x03\xC1\x05\x03\x02\x02\x02\xC2\xC4\x07\x13\x02\x02\xC3\xC2\x03\x02" +
		"\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02" +
		"\x02\x02\xC6\xCF\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCB\x05L" +
		"\'\x02\xC9\xCC\x05\x84C\x02\xCA\xCC\x07\x02\x02\x03\xCB\xC9\x03\x02\x02" +
		"\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xC8\x03\x02\x02" +
		"\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02" +
		"\x02\xD0\xD5\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD4\x07\x13\x02" +
		"\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02" +
		"\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03\x02\x02" +
		"\x02\xD8\xD9\x07\x02\x02\x03\xD9\x07\x03\x02\x02\x02\xDA\xDB\x07l\x02" +
		"\x02\xDB\xDC\x07q\x02\x02\xDC\t\x03\x02\x02\x02\xDD\xDE\x07)\x02\x02\xDE" +
		"\xDF\x07q\x02\x02\xDF\xE0\x07\x03\x02\x02\xE0\xE1\x07\x04\x02\x02\xE1" +
		"\xE2\x05\x8CG\x02\xE2\xE3\x07\x05\x02\x02\xE3\xE6\x05\x80A\x02\xE4\xE5" +
		"\x076\x02\x02\xE5\xE7\x05\x86D\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03" +
		"\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE9\x07=\x02\x02\xE9\xEB\x07" +
		"\x19\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\v\x03" +
		"\x02\x02\x02\xEC\xED\x074\x02\x02\xED\xEE\x07q\x02\x02\xEE\xEF\x07\x03" +
		"\x02\x02\xEF\xF0\x05\x8CG\x02\xF0\r\x03\x02\x02\x02\xF1\xF2\x07q\x02\x02" +
		"\xF2\xF7\x07\x06\x02\x02\xF3\xF4\x07\x04\x02\x02\xF4\xF5\x05\x8CG\x02" +
		"\xF5\xF6\x07\x05\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF3\x03\x02\x02\x02" +
		"\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFC\x05\x80A\x02" +
		"\xFA\xFB\x07=\x02\x02\xFB\xFD\x07\x19\x02\x02\xFC\xFA\x03\x02\x02\x02" +
		"\xFC\xFD\x03\x02\x02\x02\xFD\x0F\x03\x02\x02\x02\xFE\u0100\x05\x90I\x02" +
		"\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02" +
		"\x02\x02\u0101\u0107\x05\x0E\b\x02\u0102\u0108\x05\x82B\x02\u0103\u0105" +
		"\x07\x07\x02\x02\u0104\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x05\x8EH\x02\u0107\u0102\x03" +
		"\x02\x02\x02\u0107\u0104\x03\x02\x02\x02\u0108\x11\x03\x02\x02\x02\u0109" +
		"\u010B\x05\x90I\x02\u010A\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02" +
		"\x02\u010B\u010C\x03\x02\x02\x02\u010C\u0112\x05\x0E\b\x02\u010D\u0113" +
		"\x05\x82B\x02\u010E\u0110\x07\x07\x02\x02\u010F\u010E\x03\x02\x02\x02" +
		"\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x05" +
		"\x8EH\x02\u0112\u010D\x03\x02\x02\x02\u0112\u010F\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113\x13\x03\x02\x02\x02\u0114\u0115\x07d\x02" +
		"\x02\u0115\u0116\x07q\x02\x02\u0116\u011A\x07\b\x02\x02\u0117\u0119\x07" +
		"\x13\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A" +
		"\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u0124\x03\x02" +
		"\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u011F\x05\x10\t\x02\u011E\u011D" +
		"\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02" +
		"\u0120\u0121\x03\x02\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u0120\x03" +
		"\x02\x02\x02\u0123\u0125\x05\x12\n\x02\u0124\u0120\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0129\x07\t\x02" +
		"\x02\u0127\u0128\x076\x02\x02\u0128\u012A\x05\x8AF\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\x15\x03\x02\x02\x02\u012B" +
		"\u012C\t\x02\x02\x02\u012C\x17\x03\x02\x02\x02\u012D\u012E\t\x03\x02\x02" +
		"\u012E\x19\x03\x02\x02\x02\u012F\u0130\x05\x18\r\x02\u0130\u0131\x071" +
		"\x02\x02\u0131\u0133\x07q\x02\x02\u0132\u0134\x05x=\x02\u0133\u0132\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135" +
		"\u0136\x07M\x02\x02\u0136\u0138\x05\x8CG\x02\u0137\u0135\x03\x02\x02\x02" +
		"\u0137\u0138\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u013A\x07" +
		"T\x02\x02\u013A\u013C\x05\x8CG\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C" +
		"\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013F\x05\x16\f\x02" +
		"\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\x1B\x03" +
		"\x02\x02\x02\u0140\u0141\x07P\x02\x02\u0141\u0142\x07q\x02\x02\u0142\u0143" +
		"\x07\x06\x02\x02\u0143\u0146\x05\x80A\x02\u0144\u0145\x076\x02\x02\u0145" +
		"\u0147\x05\x8CG\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02" +
		"\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0149\x07B\x02\x02\u0149\u014B" +
		"\x05\x8CG\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u014F\x03\x02\x02\x02\u014C\u014D\x07_\x02\x02\u014D\u014E\x07" +
		"M\x02\x02\u014E\u0150\x05\x8CG\x02\u014F\u014C\x03\x02\x02\x02\u014F\u0150" +
		"\x03\x02\x02\x02\u0150\u0154\x03\x02\x02\x02\u0151\u0152\x07]\x02\x02" +
		"\u0152\u0153\x07M\x02\x02\u0153\u0155\x05\x8CG\x02\u0154\u0151\x03\x02" +
		"\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\x1D\x03\x02\x02\x02\u0156\u0157" +
		"\x07+\x02\x02\u0157\u015E\x07E\x02\x02\u0158\u0159\x07?\x02\x02\u0159" +
		"\u015E\x07E\x02\x02\u015A\u015B\x07e\x02\x02\u015B\u015E\x07E\x02\x02" +
		"\u015C\u015E\x07O\x02\x02\u015D\u0156\x03\x02\x02\x02\u015D\u0158\x03" +
		"\x02\x02\x02\u015D\u015A\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E" +
		"\x1F\x03\x02\x02\x02\u015F\u0160\x071\x02\x02\u0160\u0170\x07X\x02\x02" +
		"\u0161\u0162\x071\x02\x02\u0162\u0170\x07[\x02\x02\u0163\u0164\x071\x02" +
		"\x02\u0164\u0170\x07\\\x02\x02\u0165\u0170\x07:\x02\x02\u0166\u0167\x07" +
		"P\x02\x02\u0167\u0170\x07>\x02\x02\u0168\u0169\x07P\x02\x02\u0169\u0170" +
		"\x07_\x02\x02\u016A\u0170\x07f\x02\x02\u016B\u016C\x07g\x02\x02\u016C" +
		"\u0170\x07:\x02\x02\u016D\u016E\x07i\x02\x02\u016E\u0170\x07>\x02\x02" +
		"\u016F\u015F\x03\x02\x02\x02\u016F\u0161\x03\x02\x02\x02\u016F\u0163\x03" +
		"\x02\x02\x02\u016F\u0165\x03\x02\x02\x02\u016F\u0166\x03\x02\x02\x02\u016F" +
		"\u0168\x03\x02\x02\x02\u016F\u016A\x03\x02\x02\x02\u016F\u016B\x03\x02" +
		"\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170!\x03\x02\x02\x02\u0171\u0174" +
		"\x07^\x02\x02\u0172\u0174\x05z>\x02\u0173\u0171\x03\x02\x02\x02\u0173" +
		"\u0172\x03\x02\x02\x02\u0174#\x03\x02\x02\x02\u0175\u0176\x05\x1E\x10" +
		"\x02\u0176\u0177\x07S\x02\x02\u0177\u0178\x07q\x02\x02\u0178\u017D\x07" +
		"\x06\x02\x02\u0179\u017A\x07\x04\x02\x02\u017A\u017B\x05\x8CG\x02\u017B" +
		"\u017C\x07\x05\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D\u0179\x03\x02" +
		"\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"\u0182\x05\"\x12\x02\u0180\u0181\x07T\x02\x02\u0181\u0183\x05\x8CG\x02" +
		"\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0185\x03" +
		"\x02\x02\x02\u0184\u0186\x05\x16\f\x02\u0185\u0184\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186%\x03\x02\x02\x02\u0187\u0188\x05 \x11\x02" +
		"\u0188\u0189\x07S\x02\x02\u0189\u018A\x07q\x02\x02\u018A\'\x03\x02\x02" +
		"\x02\u018B\u018C\t\x04\x02\x02\u018C)\x03\x02\x02\x02\u018D\u018E\x05" +
		"(\x15\x02\u018E\u018F\x05\x8CG\x02\u018F+\x03\x02\x02\x02\u0190\u0194" +
		"\x07\b\x02\x02\u0191\u0193\x07\x13\x02\x02\u0192\u0191\x03\x02\x02\x02" +
		"\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03" +
		"\x02\x02\x02\u0195\u01A3\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197" +
		"\u019D\x05*\x16\x02\u0198\u0199\x05\x82B\x02\u0199\u019A\x05*\x16\x02" +
		"\u019A\u019C\x03\x02\x02\x02\u019B\u0198\x03\x02\x02\x02\u019C\u019F\x03" +
		"\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E" +
		"\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A2\x05\x82" +
		"B\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4" +
		"\x03\x02\x02\x02\u01A3\u0197\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02" +
		"\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x07\t\x02\x02\u01A6-\x03\x02" +
		"\x02\x02\u01A7\u01AB\x07(\x02\x02\u01A8\u01A9\x07L\x02\x02\u01A9\u01AB" +
		"\x070\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02" +
		"\u01AB/\x03\x02\x02\x02\u01AC\u01AD\x07f\x02\x02\u01AD\u01AE\x07q\x02" +
		"\x02\u01AE\u01AF\x07\x06\x02\x02\u01AF\u01B2\x05\x80A\x02\u01B0\u01B1" +
		"\x07B\x02\x02\u01B1\u01B3\x05\x8CG\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B5\x07m\x02" +
		"\x02\u01B5\u01B7\x05.\x18\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7" +
		"\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B9\x07=\x02\x02" +
		"\u01B9\u01BB\x07\x19\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA";
	private static readonly _serializedATNSegment1: string =
		"\u01BB\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BD\x07I\x02" +
		"\x02\u01BD\u01BF\x05,\x17\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF" +
		"\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01C1\x07A\x02\x02" +
		"\u01C1\u01C3\x05,\x17\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03" +
		"\x02\x02\x02\u01C31\x03\x02\x02\x02\u01C4\u01C7\x07q\x02\x02\u01C5\u01C6" +
		"\x07\x03\x02\x02\u01C6\u01C8\x05\x8CG\x02\u01C7\u01C5\x03\x02\x02\x02" +
		"\u01C7\u01C8\x03\x02\x02\x02\u01C83\x03\x02\x02\x02\u01C9\u01CB\x05\x90" +
		"I\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC" +
		"\x03\x02\x02\x02\u01CC\u01D2\x052\x1A\x02\u01CD\u01D3\x05\x82B\x02\u01CE" +
		"\u01D0\x07\x07\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02" +
		"\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D3\x05\x8EH\x02\u01D2\u01CD" +
		"\x03\x02\x02\x02\u01D2\u01CF\x03\x02\x02\x02\u01D35\x03\x02\x02\x02\u01D4" +
		"\u01D6\x05\x90I\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02" +
		"\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01DD\x052\x1A\x02\u01D8\u01DE" +
		"\x05\x82B\x02\u01D9\u01DB\x07\x07\x02\x02\u01DA\u01D9\x03\x02\x02\x02" +
		"\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DE\x05" +
		"\x8EH\x02\u01DD\u01D8\x03\x02\x02\x02\u01DD\u01DA\x03\x02\x02\x02\u01DD" +
		"\u01DE\x03\x02\x02\x02\u01DE7\x03\x02\x02\x02\u01DF\u01E0\x079\x02\x02" +
		"\u01E0\u01E3\x07q\x02\x02\u01E1\u01E2\x07\x06\x02\x02\u01E2\u01E4\x05" +
		"|?\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5" +
		"\x03\x02\x02\x02\u01E5\u01E9\x07\b\x02\x02\u01E6\u01E8\x07\x13\x02\x02" +
		"\u01E7\u01E6\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03" +
		"\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01F3\x03\x02\x02\x02\u01EB" +
		"\u01E9\x03\x02\x02\x02\u01EC\u01EE\x054\x1B\x02\u01ED\u01EC\x03\x02\x02" +
		"\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0" +
		"\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02" +
		"\u01F2\u01F4\x056\x1C\x02\u01F3\u01EF\x03\x02\x02\x02\u01F3\u01F4\x03" +
		"\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F8\x07\t\x02\x02\u01F6" +
		"\u01F7\x076\x02\x02\u01F7\u01F9\x05\x8CG\x02\u01F8\u01F6\x03\x02\x02\x02" +
		"\u01F8\u01F9\x03\x02\x02\x02\u01F99\x03\x02\x02\x02\u01FA\u01FB\x07\'" +
		"\x02\x02\u01FB\u0206\x07A\x02\x02\u01FC\u01FD\x07\'\x02\x02\u01FD\u0206" +
		"\x07I\x02\x02\u01FE\u0206\x071\x02\x02\u01FF\u0206\x077\x02\x02\u0200" +
		"\u0206\x07<\x02\x02\u0201\u0202\x07n\x02\x02\u0202\u0206\x07A\x02\x02" +
		"\u0203\u0204\x07n\x02\x02\u0204\u0206\x07I\x02\x02\u0205\u01FA\x03\x02" +
		"\x02\x02\u0205\u01FC\x03\x02\x02\x02\u0205\u01FE\x03\x02\x02\x02\u0205" +
		"\u01FF\x03\x02\x02\x02\u0205\u0200\x03\x02\x02\x02\u0205\u0201\x03\x02" +
		"\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206;\x03\x02\x02\x02\u0207\u0208" +
		"\x07:\x02\x02\u0208\u020A\x07q\x02\x02\u0209\u020B\x05x=\x02\u020A\u0209" +
		"\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02" +
		"\u020C\u020D\x07`\x02\x02\u020D\u0210\x05:\x1E\x02\u020E\u020F\x07B\x02" +
		"\x02\u020F\u0211\x05\x8CG\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211" +
		"\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x07=\x02\x02" +
		"\u0213\u0216\x07\x19\x02\x02\u0214\u0215\x07h\x02\x02\u0215\u0217\x05" +
		"\x8CG\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217" +
		"=\x03\x02\x02\x02\u0218\u0219\x07D\x02\x02\u0219\u021A\x07\x19\x02\x02" +
		"\u021A?\x03\x02\x02\x02\u021B\u021C\x07J\x02\x02\u021C\u021D\x07q\x02" +
		"\x02\u021D\u021E\x07o\x02\x02\u021E\u021F\x07q\x02\x02\u021FA\x03\x02" +
		"\x02\x02\u0220\u0221\x07G\x02\x02\u0221\u0222\x07S\x02\x02\u0222\u0224" +
		"\x07q\x02\x02\u0223\u0225\x05x=\x02\u0224\u0223\x03\x02\x02\x02\u0224" +
		"\u0225\x03\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0227\x07T\x02" +
		"\x02\u0227\u0229\x05\x8CG\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229" +
		"\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u022C\x05\x16\f\x02" +
		"\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022CC\x03\x02" +
		"\x02\x02\u022D\u022F\x05\x90I\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F" +
		"\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0231\x07R\x02\x02" +
		"\u0231\u0232\x05\x8CG\x02\u0232\u0233\x07\x19\x02\x02\u0233E\x03\x02\x02" +
		"\x02\u0234\u0235\x07F\x02\x02\u0235\u0236\x07q\x02\x02\u0236\u0237\x07" +
		"\x06\x02\x02\u0237\u0238\x05z>\x02\u0238\u0239\x07-\x02\x02\u0239\u023A" +
		"\x07B\x02\x02\u023A\u023D\x05\x8CG\x02\u023B\u023C\x07l\x02\x02\u023C" +
		"\u023E\x07\x19\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02" +
		"\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u0240\x07,\x02\x02\u0240\u0242" +
		"\x07\x19\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02" +
		"\u0242\u0246\x03\x02\x02\x02\u0243\u0244\x07V\x02\x02\u0244\u0245\x07" +
		"a\x02\x02\u0245\u0247\x05\x8CG\x02\u0246\u0243\x03\x02\x02\x02\u0246\u0247" +
		"\x03\x02\x02\x02\u0247\u024B\x03\x02\x02\x02\u0248\u0249\x07b\x02\x02" +
		"\u0249\u024A\x07a\x02\x02\u024A\u024C\x05\x8CG\x02\u024B\u0248\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D" +
		"\u024E\x07T\x02\x02\u024E\u0250\x05\x8CG\x02\u024F\u024D\x03\x02\x02\x02" +
		"\u024F\u0250\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u0252\x07" +
		"5\x02\x02\u0252\u0254\x05\x8CG\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0254" +
		"\x03\x02\x02\x02\u0254\u026B\x03\x02\x02\x02\u0255\u0259\x07\b\x02\x02" +
		"\u0256\u0258\x07\x13\x02\x02\u0257\u0256\x03\x02\x02\x02\u0258\u025B\x03" +
		"\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A" +
		"\u0261\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025D\x05D#\x02" +
		"\u025D\u025E\x05\x84C\x02\u025E\u0260\x03\x02\x02\x02\u025F\u025C\x03" +
		"\x02\x02\x02\u0260\u0263\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261" +
		"\u0262\x03\x02\x02\x02\u0262\u0267\x03\x02\x02\x02\u0263\u0261\x03\x02" +
		"\x02\x02\u0264\u0266\x07\x13\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266" +
		"\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02" +
		"\x02\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A" +
		"\u026C\x07\t\x02\x02\u026B\u0255\x03\x02\x02\x02\u026B\u026C\x03\x02\x02" +
		"\x02\u026CG\x03\x02\x02\x02\u026D\u026E\t\x05\x02\x02\u026EI\x03\x02\x02" +
		"\x02\u026F\u027E\x05\b\x05\x02\u0270\u027E\x05\n\x06\x02\u0271\u027E\x05" +
		"\f\x07\x02\u0272\u027E\x05\x14\v\x02\u0273\u027E\x05\x1A\x0E\x02\u0274" +
		"\u027E\x05\x1C\x0F\x02\u0275\u027E\x05$\x13\x02\u0276\u027E\x05&\x14\x02" +
		"\u0277\u027E\x050\x19\x02\u0278\u027E\x058\x1D\x02\u0279\u027E\x05<\x1F" +
		"\x02\u027A\u027E\x05> \x02\u027B\u027E\x05B\"\x02\u027C\u027E\x05@!\x02" +
		"\u027D\u026F\x03\x02\x02\x02\u027D\u0270\x03\x02\x02\x02\u027D\u0271\x03" +
		"\x02\x02\x02\u027D\u0272\x03\x02\x02\x02\u027D\u0273\x03\x02\x02\x02\u027D" +
		"\u0274\x03\x02\x02\x02\u027D\u0275\x03\x02\x02\x02\u027D\u0276\x03\x02" +
		"\x02\x02\u027D\u0277\x03\x02\x02\x02\u027D\u0278\x03\x02\x02\x02\u027D" +
		"\u0279\x03\x02\x02\x02\u027D\u027A\x03\x02\x02\x02\u027D\u027B\x03\x02" +
		"\x02\x02\u027D\u027C\x03\x02\x02\x02\u027EK\x03\x02\x02\x02\u027F\u0281" +
		"\x05\x90I\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
		"\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x05J&\x02\u0283M\x03\x02\x02" +
		"\x02\u0284\u0285\x05H%\x02\u0285\u0286\x072\x02\x02\u0286\u0287\x07q\x02" +
		"\x02\u0287\u028B\x07\b\x02\x02\u0288\u028A\x07\x13\x02\x02\u0289\u0288" +
		"\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02" +
		"\u028B\u028C\x03\x02\x02\x02\u028C\u0293\x03\x02\x02\x02\u028D\u028B\x03" +
		"\x02\x02\x02\u028E\u028F\x05L\'\x02\u028F\u0290\x05\x84C\x02\u0290\u0292" +
		"\x03\x02\x02\x02\u0291\u028E\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02" +
		"\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0299\x03" +
		"\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296\u0298\x07\x13\x02\x02\u0297" +
		"\u0296\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u0297\x03\x02" +
		"\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x03\x02\x02\x02\u029B" +
		"\u0299\x03\x02\x02\x02\u029C\u029D\x07\t\x02\x02\u029DO\x03\x02\x02\x02" +
		"\u029E\u029F\x07S\x02\x02\u029F\u02A1\x07q\x02\x02\u02A0\u02A2\x05x=\x02" +
		"\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A5\x03" +
		"\x02\x02\x02\u02A3\u02A4\x07\n\x02\x02\u02A4\u02A6\x05\x80A\x02\u02A5" +
		"\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6Q\x03\x02\x02" +
		"\x02\u02A7\u02A9\x07U\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9" +
		"\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AB\x07F\x02\x02" +
		"\u02AB\u02AC\x05z>\x02\u02ACS\x03\x02\x02\x02\u02AD\u02B2\x05z>\x02\u02AE" +
		"\u02AF\x07\x04\x02\x02\u02AF\u02B0\x05\x8CG\x02\u02B0\u02B1\x07\x05\x02" +
		"\x02\u02B1\u02B3\x03\x02\x02\x02\u02B2\u02AE\x03\x02\x02\x02\u02B2\u02B3" +
		"\x03\x02\x02\x02\u02B3U\x03\x02\x02\x02\u02B4\u02B5\x05T+\x02\u02B5\u02B6" +
		"\x07\n\x02\x02\u02B6\u02B7\x05T+\x02\u02B7W\x03\x02\x02\x02\u02B8\u02B9" +
		"\x073\x02\x02\u02B9\u02BA\x07q\x02\x02\u02BA\u02BE\x07\b\x02\x02\u02BB" +
		"\u02BD\x07\x13\x02\x02\u02BC\u02BB\x03\x02\x02\x02\u02BD\u02C0\x03\x02" +
		"\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF" +
		"\u02C6\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C2\x05V,\x02" +
		"\u02C2\u02C3\x05\x82B\x02\u02C3\u02C5\x03\x02\x02\x02\u02C4\u02C1\x03" +
		"\x02\x02\x02\u02C5\u02C8\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6" +
		"\u02C7\x03\x02\x02\x02\u02C7\u02CC\x03\x02\x02\x02\u02C8\u02C6\x03\x02" +
		"\x02\x02\u02C9\u02CB\x07\x13\x02\x02\u02CA\u02C9\x03\x02\x02\x02\u02CB" +
		"\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03\x02" +
		"\x02\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF" +
		"\u02D0\x07\t\x02\x02\u02D0Y\x03\x02\x02\x02\u02D1\u02DA\x071\x02\x02\u02D2" +
		"\u02DA\x07:\x02\x02\u02D3\u02D4\x07g\x02\x02\u02D4\u02DA\x07:\x02\x02" +
		"\u02D5\u02DA\x07@\x02\x02\u02D6\u02DA\x07P\x02\x02\u02D7\u02DA\x07f\x02" +
		"\x02\u02D8\u02DA\x07i\x02\x02\u02D9\u02D1\x03\x02\x02\x02\u02D9\u02D2" +
		"\x03\x02\x02\x02\u02D9\u02D3\x03\x02\x02\x02\u02D9\u02D5\x03\x02\x02\x02" +
		"\u02D9\u02D6\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02D8\x03" +
		"\x02\x02\x02\u02DA[\x03\x02\x02\x02\u02DB\u02E1\x05z>\x02\u02DC\u02DD" +
		"\x05\x82B\x02\u02DD\u02DE\x05z>\x02\u02DE\u02E0\x03\x02\x02\x02\u02DF" +
		"\u02DC\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02\u02E1\u02DF\x03\x02" +
		"\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3" +
		"\u02E1\x03\x02\x02\x02\u02E4\u02E6\x05\x82B\x02\u02E5\u02E4\x03\x02\x02" +
		"\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6]\x03\x02\x02\x02\u02E7\u02E8\x05" +
		"Z.\x02\u02E8\u02E9\x073\x02\x02\u02E9\u02EA\x07F\x02\x02\u02EA\u02EC\x05" +
		"z>\x02\u02EB\u02ED\x05\\/\x02\u02EC\u02EB\x03\x02\x02\x02\u02EC\u02ED" +
		"\x03\x02\x02\x02\u02ED_\x03\x02\x02\x02\u02EE\u02EF\x07C\x02\x02\u02EF" +
		"\u02F0\x05z>\x02\u02F0a\x03\x02\x02\x02\u02F1\u02F7\x05R*\x02\u02F2\u02F7" +
		"\x05X-\x02\u02F3\u02F7\x05^0\x02\u02F4\u02F7\x05`1\x02\u02F5\u02F7\x05" +
		"> \x02\u02F6\u02F1\x03\x02\x02\x02\u02F6\u02F2\x03\x02\x02\x02\u02F6\u02F3" +
		"\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F6\u02F5\x03\x02\x02\x02" +
		"\u02F7c\x03\x02\x02\x02\u02F8\u02FA\x05\x90I\x02\u02F9\u02F8\x03\x02\x02" +
		"\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC" +
		"\x05b2\x02\u02FCe\x03\x02\x02\x02\u02FD\u02FE\x07j\x02\x02\u02FE\u02FF" +
		"\x07q\x02\x02\u02FF\u0303\x07\b\x02\x02\u0300\u0302\x07\x13\x02\x02\u0301" +
		"\u0300\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02" +
		"\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u030B\x03\x02\x02\x02\u0305" +
		"\u0303\x03\x02\x02\x02\u0306\u0307\x05d3\x02\u0307\u0308\x05\x84C\x02" +
		"\u0308\u030A\x03\x02\x02\x02\u0309\u0306\x03\x02\x02\x02\u030A\u030D\x03" +
		"\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C" +
		"\u0311\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030E\u0310\x07\x13" +
		"\x02\x02\u030F\u030E\x03\x02\x02\x02\u0310\u0313\x03\x02\x02\x02\u0311" +
		"\u030F\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0314\x03\x02" +
		"\x02\x02\u0313\u0311\x03\x02\x02\x02\u0314\u0315\x07\t\x02\x02\u0315g" +
		"\x03\x02\x02\x02\u0316\u0317\t\x06\x02\x02\u0317i\x03\x02\x02\x02\u0318" +
		"\u0319\x07H\x02\x02\u0319\u031A\x05h5\x02\u031A\u031B\x05z>\x02\u031B" +
		"\u031C\x07,\x02\x02\u031C\u031D\x07\x19\x02\x02\u031Dk\x03\x02\x02\x02" +
		"\u031E\u032B\x05\b\x05\x02\u031F\u032B\x05\n\x06\x02\u0320\u032B\x05N" +
		"(\x02\u0321\u032B\x05F$\x02\u0322\u032B\x05\f\x07\x02\u0323\u032B\x05" +
		"p9\x02\u0324\u032B\x05P)\x02\u0325\u032B\x05\x14\v\x02\u0326\u032B\x05" +
		"j6\x02\u0327\u032B\x058\x1D\x02\u0328\u032B\x05> \x02\u0329\u032B\x05" +
		"f4\x02\u032A\u031E\x03\x02\x02\x02\u032A\u031F\x03\x02\x02\x02\u032A\u0320" +
		"\x03\x02\x02\x02\u032A\u0321\x03\x02\x02\x02\u032A\u0322\x03\x02\x02\x02" +
		"\u032A\u0323\x03\x02\x02\x02\u032A\u0324\x03\x02\x02\x02\u032A\u0325\x03" +
		"\x02\x02\x02\u032A\u0326\x03\x02\x02\x02\u032A\u0327\x03\x02\x02\x02\u032A" +
		"\u0328\x03\x02\x02\x02\u032A\u0329\x03\x02\x02\x02\u032Bm\x03\x02\x02" +
		"\x02\u032C\u032E\x05\x90I\x02\u032D\u032C\x03\x02\x02\x02\u032D\u032E" +
		"\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x05l7\x02\u0330" +
		"o\x03\x02\x02\x02\u0331\u0332\x07K\x02\x02\u0332\u0333\x07q\x02\x02\u0333" +
		"\u0337\x07\b\x02\x02\u0334\u0336\x07\x13\x02\x02\u0335\u0334\x03\x02\x02" +
		"\x02\u0336\u0339\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338" +
		"\x03\x02\x02\x02\u0338\u033F\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02" +
		"\u033A\u033B\x05n8\x02\u033B\u033C\x05\x84C\x02\u033C\u033E\x03\x02\x02" +
		"\x02\u033D\u033A\x03\x02\x02\x02\u033E\u0341\x03\x02\x02\x02\u033F\u033D" +
		"\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0345\x03\x02\x02\x02" +
		"\u0341\u033F\x03\x02\x02\x02\u0342\u0344\x07\x13\x02\x02\u0343\u0342\x03" +
		"\x02\x02\x02\u0344\u0347\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345" +
		"\u0346\x03\x02\x02\x02\u0346\u0348\x03\x02\x02\x02\u0347\u0345\x03\x02" +
		"\x02\x02\u0348\u0349\x07\t\x02\x02\u0349q\x03\x02\x02\x02\u034A\u034C" +
		"\x07Z\x02\x02\u034B\u034A\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
		"\u034C\u034D\x03\x02\x02\x02\u034D\u034E\x07q\x02\x02\u034E\u034F\x07" +
		"\x06\x02\x02\u034F\u0350\x05\x80A\x02\u0350s\x03\x02\x02\x02\u0351\u0357" +
		"\x05r:\x02\u0352\u0358\x05\x82B\x02\u0353\u0355\x07\x07\x02\x02\u0354" +
		"\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0356\x03\x02" +
		"\x02\x02\u0356\u0358\x05\x8EH\x02\u0357\u0352\x03\x02\x02\x02\u0357\u0354" +
		"\x03\x02\x02\x02\u0358u\x03\x02\x02\x02\u0359\u035F\x05r:\x02\u035A\u0360" +
		"\x05\x82B\x02\u035B\u035D\x07\x07\x02\x02\u035C\u035B\x03\x02\x02\x02" +
		"\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0360\x05" +
		"\x8EH\x02\u035F\u035A\x03\x02\x02\x02\u035F\u035C\x03\x02\x02\x02\u035F" +
		"\u0360\x03\x02\x02\x02\u0360w\x03\x02\x02\x02\u0361\u0365\x07\v\x02\x02" +
		"\u0362\u0364\x07\x13\x02\x02\u0363\u0362\x03\x02\x02\x02\u0364\u0367\x03" +
		"\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366" +
		"\u036F\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368\u036A\x05t;\x02" +
		"\u0369\u0368\x03\x02\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03" +
		"\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036E\x03\x02\x02\x02\u036D" +
		"\u036B\x03\x02\x02\x02\u036E\u0370\x05v<\x02\u036F\u036B\x03\x02\x02\x02" +
		"\u036F\u0370\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372\x07" +
		"\f\x02\x02\u0372y\x03\x02\x02\x02\u0373\u0378\x07q\x02\x02\u0374\u0375" +
		"\x07\r\x02\x02\u0375\u0377\x07q\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377" +
		"\u037A\x03\x02\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02" +
		"\x02\x02\u0379{\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037C" +
		"\t\x07\x02\x02\u037C}\x03\x02\x02\x02\u037D\u0384\t\b\x02\x02\u037E\u0381" +
		"\x07c\x02\x02\u037F\u0380\x07a\x02\x02\u0380\u0382\x07\x1B\x02\x02\u0381" +
		"\u037F\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0384\x03\x02" +
		"\x02\x02\u0383\u037D\x03\x02\x02\x02\u0383\u037E\x03\x02\x02\x02\u0384" +
		"\x7F\x03\x02\x02\x02\u0385\u0388\x05~@\x02\u0386\u0388\x05z>\x02\u0387" +
		"\u0385\x03\x02\x02\x02\u0387\u0386\x03\x02\x02\x02\u0388\x81\x03\x02\x02" +
		"\x02\u0389\u038D\x07\x07\x02\x02\u038A\u038C\x07\x13\x02\x02\u038B\u038A" +
		"\x03\x02\x02\x02\u038C\u038F\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02" +
		"\u038D\u038E\x03\x02\x02\x02\u038E\u0396\x03\x02\x02\x02\u038F\u038D\x03" +
		"\x02\x02\x02\u0390\u0392\x07\x13\x02\x02\u0391\u0390\x03\x02\x02\x02\u0392" +
		"\u0393\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02" +
		"\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395\u0389\x03\x02\x02\x02\u0395" +
		"\u0391\x03\x02\x02\x02\u0396\x83\x03\x02\x02\x02\u0397\u039B\x07\x0E\x02" +
		"\x02\u0398\u039A\x07\x13\x02\x02\u0399\u0398\x03\x02\x02\x02\u039A\u039D" +
		"\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02" +
		"\u039C\u03A4\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039E\u03A0\x07" +
		"\x13\x02\x02\u039F\u039E\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1" +
		"\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A4\x03\x02" +
		"\x02\x02\u03A3\u0397\x03\x02\x02\x02\u03A3\u039F\x03\x02\x02\x02\u03A4" +
		"\x85\x03\x02\x02\x02\u03A5\u03A9\x07\x04\x02\x02\u03A6\u03A8\x07\x13\x02" +
		"\x02\u03A7\u03A6\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7" +
		"\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03B5\x03\x02\x02\x02" +
		"\u03AB\u03A9\x03\x02\x02\x02\u03AC\u03B2\x05\x8CG\x02\u03AD\u03AE\x05" +
		"\x82B\x02\u03AE\u03AF\x05\x8CG\x02\u03AF\u03B1\x03\x02\x02\x02\u03B0\u03AD" +
		"\x03\x02\x02\x02\u03B1\u03B4\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02" +
		"\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B2\x03" +
		"\x02\x02\x02\u03B5\u03AC\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6" +
		"\u03B7\x03\x02\x02\x02\u03B7\u03B8\x07\x05\x02\x02\u03B8\x87\x03\x02\x02" +
		"\x02\u03B9\u03BA\x07q\x02\x02\u03BA\u03BB\x07\x03\x02\x02\u03BB\u03BC" +
		"\x05\x8CG\x02\u03BC\x89\x03\x02\x02\x02\u03BD\u03C1\x07\b\x02\x02\u03BE" +
		"\u03C0\x07\x13\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03C0\u03C3\x03\x02" +
		"\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2" +
		"\u03D0\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4\u03CA\x05\x88" +
		"E\x02\u03C5\u03C6\x05\x82B\x02\u03C6\u03C7\x05\x88E\x02\u03C7\u03C9\x03" +
		"\x02\x02\x02\u03C8\u03C5\x03\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02\u03CA" +
		"\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CE\x03\x02" +
		"\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03CF\x05\x82B\x02\u03CE\u03CD" +
		"\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D1\x03\x02\x02\x02" +
		"\u03D0\u03C4\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D2\x03" +
		"\x02\x02\x02\u03D2\u03D3\x07\t\x02\x02\u03D3\x8B\x03\x02\x02\x02\u03D4" +
		"\u03D5\bG\x01\x02\u03D5\u03D6\x07\x0F\x02\x02\u03D6\u03E3\x05\x8CG\r\u03D7" +
		"\u03E3\x05\x86D\x02\u03D8\u03E3\x05\x8AF\x02\u03D9\u03E3\x05z>\x02\u03DA" +
		"\u03E3\x07\x18\x02\x02\u03DB\u03E3\x07\x1A\x02\x02\u03DC\u03E3\x07\x1B" +
		"\x02\x02\u03DD\u03E3\x07\x19\x02\x02\u03DE\u03DF\x07\v\x02\x02\u03DF\u03E0" +
		"\x05\x8CG\x02\u03E0\u03E1\x07\f\x02\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2" +
		"\u03D4\x03\x02\x02\x02\u03E2\u03D7\x03\x02\x02\x02\u03E2\u03D8\x03\x02" +
		"\x02\x02\u03E2\u03D9\x03\x02\x02\x02\u03E2\u03DA\x03\x02\x02\x02\u03E2" +
		"\u03DB\x03\x02\x02\x02\u03E2\u03DC\x03\x02\x02\x02\u03E2\u03DD\x03\x02" +
		"\x02\x02\u03E2\u03DE\x03\x02\x02\x02\u03E3\u03EC\x03\x02\x02\x02\u03E4" +
		"\u03E5\f\f\x02\x02\u03E5\u03E6\t\t\x02\x02\u03E6\u03EB\x05\x8CG\r\u03E7" +
		"\u03E8\f\v\x02\x02\u03E8\u03E9\t\n\x02\x02\u03E9\u03EB\x05\x8CG\f\u03EA" +
		"\u03E4\x03\x02\x02\x02\u03EA\u03E7\x03\x02\x02\x02\u03EB\u03EE\x03\x02" +
		"\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED" +
		"\x8D\x03\x02\x02\x02\u03EE\u03EC\x03\x02\x02\x02\u03EF\u03F0\x07\x17\x02" +
		"\x02\u03F0\u03F1\x07\x13\x02\x02\u03F1\x8F\x03\x02\x02\x02\u03F2\u03F4" +
		"\t\v\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5" +
		"\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\x91\x03\x02\x02" +
		"\x02\x89\x95\x9B\x9F\xA5\xAD\xB3\xB7\xBD\xC5\xCB\xCF\xD5\xE6\xEA\xF7\xFC" +
		"\xFF\u0104\u0107\u010A\u010F\u0112\u011A\u0120\u0124\u0129\u0133\u0137" +
		"\u013B\u013E\u0146\u014A\u014F\u0154\u015D\u016F\u0173\u017D\u0182\u0185" +
		"\u0194\u019D\u01A1\u01A3\u01AA\u01B2\u01B6\u01BA\u01BE\u01C2\u01C7\u01CA" +
		"\u01CF\u01D2\u01D5\u01DA\u01DD\u01E3\u01E9\u01EF\u01F3\u01F8\u0205\u020A" +
		"\u0210\u0216\u0224\u0228\u022B\u022E\u023D\u0241\u0246\u024B\u024F\u0253" +
		"\u0259\u0261\u0267\u026B\u027D\u0280\u028B\u0293\u0299\u02A1\u02A5\u02A8" +
		"\u02B2\u02BE\u02C6\u02CC\u02D9\u02E1\u02E5\u02EC\u02F6\u02F9\u0303\u030B" +
		"\u0311\u032A\u032D\u0337\u033F\u0345\u034B\u0354\u0357\u035C\u035F\u0365" +
		"\u036B\u036F\u0378\u0381\u0383\u0387\u038D\u0393\u0395\u039B\u03A1\u03A3" +
		"\u03A9\u03B2\u03B5\u03C1\u03CA\u03CE\u03D0\u03E2\u03EA\u03EC\u03F5";
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


export class ProgTopologyContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FppParser.RULE_progTopology; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterProgTopology) {
			listener.enterProgTopology(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitProgTopology) {
			listener.exitProgTopology(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitProgTopology) {
			return visitor.visitProgTopology(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgComponentContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FppParser.RULE_progComponent; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterProgComponent) {
			listener.enterProgComponent(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitProgComponent) {
			listener.exitProgComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitProgComponent) {
			return visitor.visitProgComponent(this);
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


export class StructMemberNContext extends ParserRuleContext {
	public structMember(): StructMemberContext {
		return this.getRuleContext(0, StructMemberContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_structMemberN; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStructMemberN) {
			listener.enterStructMemberN(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStructMemberN) {
			listener.exitStructMemberN(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStructMemberN) {
			return visitor.visitStructMemberN(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructMemberLContext extends ParserRuleContext {
	public structMember(): StructMemberContext {
		return this.getRuleContext(0, StructMemberContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_structMemberL; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStructMemberL) {
			listener.enterStructMemberL(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStructMemberL) {
			listener.exitStructMemberL(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStructMemberL) {
			return visitor.visitStructMemberL(this);
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
	public structMemberL(): StructMemberLContext | undefined {
		return this.tryGetRuleContext(0, StructMemberLContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FppParser.DEFAULT, 0); }
	public structExpr(): StructExprContext | undefined {
		return this.tryGetRuleContext(0, StructExprContext);
	}
	public structMemberN(): StructMemberNContext[];
	public structMemberN(i: number): StructMemberNContext;
	public structMemberN(i?: number): StructMemberNContext | StructMemberNContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberNContext);
		} else {
			return this.getRuleContext(i, StructMemberNContext);
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


export class EnumMemberNContext extends ParserRuleContext {
	public enumMember(): EnumMemberContext {
		return this.getRuleContext(0, EnumMemberContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_enumMemberN; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterEnumMemberN) {
			listener.enterEnumMemberN(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitEnumMemberN) {
			listener.exitEnumMemberN(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitEnumMemberN) {
			return visitor.visitEnumMemberN(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumMemberLContext extends ParserRuleContext {
	public enumMember(): EnumMemberContext {
		return this.getRuleContext(0, EnumMemberContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_enumMemberL; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterEnumMemberL) {
			listener.enterEnumMemberL(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitEnumMemberL) {
			listener.exitEnumMemberL(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitEnumMemberL) {
			return visitor.visitEnumMemberL(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: IntTypeContext;
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
	public enumMemberL(): EnumMemberLContext | undefined {
		return this.tryGetRuleContext(0, EnumMemberLContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FppParser.DEFAULT, 0); }
	public intType(): IntTypeContext | undefined {
		return this.tryGetRuleContext(0, IntTypeContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public enumMemberN(): EnumMemberNContext[];
	public enumMemberN(i: number): EnumMemberNContext;
	public enumMemberN(i?: number): EnumMemberNContext | EnumMemberNContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumMemberNContext);
		} else {
			return this.getRuleContext(i, EnumMemberNContext);
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
	public _phaseExpr!: ExprContext;
	public _code!: Token;
	public PHASE(): TerminalNode { return this.getToken(FppParser.PHASE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LIT_STRING(): TerminalNode { return this.getToken(FppParser.LIT_STRING, 0); }
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
	}
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


export class ComponentMemberTemplContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FppParser.RULE_componentMemberTempl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterComponentMemberTempl) {
			listener.enterComponentMemberTempl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitComponentMemberTempl) {
			listener.exitComponentMemberTempl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitComponentMemberTempl) {
			return visitor.visitComponentMemberTempl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentMemberContext extends ParserRuleContext {
	public componentMemberTempl(): ComponentMemberTemplContext {
		return this.getRuleContext(0, ComponentMemberTemplContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
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


export class TopologyMemberTemplContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FppParser.RULE_topologyMemberTempl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTopologyMemberTempl) {
			listener.enterTopologyMemberTempl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTopologyMemberTempl) {
			listener.exitTopologyMemberTempl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTopologyMemberTempl) {
			return visitor.visitTopologyMemberTempl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopologyMemberContext extends ParserRuleContext {
	public topologyMemberTempl(): TopologyMemberTemplContext {
		return this.getRuleContext(0, TopologyMemberTemplContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
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


export class ModuleMemberTemplContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FppParser.RULE_moduleMemberTempl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterModuleMemberTempl) {
			listener.enterModuleMemberTempl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitModuleMemberTempl) {
			listener.exitModuleMemberTempl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitModuleMemberTempl) {
			return visitor.visitModuleMemberTempl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleMemberContext extends ParserRuleContext {
	public moduleMemberTempl(): ModuleMemberTemplContext {
		return this.getRuleContext(0, ModuleMemberTemplContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
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


export class FormalParameterNContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext {
		return this.getRuleContext(0, FormalParameterContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_formalParameterN; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterFormalParameterN) {
			listener.enterFormalParameterN(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitFormalParameterN) {
			listener.exitFormalParameterN(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitFormalParameterN) {
			return visitor.visitFormalParameterN(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParamaterLContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext {
		return this.getRuleContext(0, FormalParameterContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_formalParamaterL; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterFormalParamaterL) {
			listener.enterFormalParamaterL(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitFormalParamaterL) {
			listener.exitFormalParamaterL(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitFormalParamaterL) {
			return visitor.visitFormalParamaterL(this);
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
	public formalParamaterL(): FormalParamaterLContext | undefined {
		return this.tryGetRuleContext(0, FormalParamaterLContext);
	}
	public formalParameterN(): FormalParameterNContext[];
	public formalParameterN(i: number): FormalParameterNContext;
	public formalParameterN(i?: number): FormalParameterNContext | FormalParameterNContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterNContext);
		} else {
			return this.getRuleContext(i, FormalParameterNContext);
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


export class IntTypeContext extends ParserRuleContext {
	public U8(): TerminalNode | undefined { return this.tryGetToken(FppParser.U8, 0); }
	public I8(): TerminalNode | undefined { return this.tryGetToken(FppParser.I8, 0); }
	public U16(): TerminalNode | undefined { return this.tryGetToken(FppParser.U16, 0); }
	public I16(): TerminalNode | undefined { return this.tryGetToken(FppParser.I16, 0); }
	public U32(): TerminalNode | undefined { return this.tryGetToken(FppParser.U32, 0); }
	public I32(): TerminalNode | undefined { return this.tryGetToken(FppParser.I32, 0); }
	public U64(): TerminalNode | undefined { return this.tryGetToken(FppParser.U64, 0); }
	public I64(): TerminalNode | undefined { return this.tryGetToken(FppParser.I64, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_intType; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterIntType) {
			listener.enterIntType(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitIntType) {
			listener.exitIntType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitIntType) {
			return visitor.visitIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public _type!: Token;
	public _size!: Token;
	public U8(): TerminalNode | undefined { return this.tryGetToken(FppParser.U8, 0); }
	public I8(): TerminalNode | undefined { return this.tryGetToken(FppParser.I8, 0); }
	public U16(): TerminalNode | undefined { return this.tryGetToken(FppParser.U16, 0); }
	public I16(): TerminalNode | undefined { return this.tryGetToken(FppParser.I16, 0); }
	public U32(): TerminalNode | undefined { return this.tryGetToken(FppParser.U32, 0); }
	public I32(): TerminalNode | undefined { return this.tryGetToken(FppParser.I32, 0); }
	public U64(): TerminalNode | undefined { return this.tryGetToken(FppParser.U64, 0); }
	public I64(): TerminalNode | undefined { return this.tryGetToken(FppParser.I64, 0); }
	public F32(): TerminalNode | undefined { return this.tryGetToken(FppParser.F32, 0); }
	public F64(): TerminalNode | undefined { return this.tryGetToken(FppParser.F64, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(FppParser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FppParser.STRING, 0); }
	public SIZE(): TerminalNode | undefined { return this.tryGetToken(FppParser.SIZE, 0); }
	public LIT_INT(): TerminalNode | undefined { return this.tryGetToken(FppParser.LIT_INT, 0); }
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


export class PostAnnotationContext extends ParserRuleContext {
	public ANNOTATION(): TerminalNode { return this.getToken(FppParser.ANNOTATION, 0); }
	public NL(): TerminalNode { return this.getToken(FppParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_postAnnotation; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPostAnnotation) {
			listener.enterPostAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPostAnnotation) {
			listener.exitPostAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPostAnnotation) {
			return visitor.visitPostAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreAnnotationContext extends ParserRuleContext {
	public ANNOTATION(): TerminalNode[];
	public ANNOTATION(i: number): TerminalNode;
	public ANNOTATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.ANNOTATION);
		} else {
			return this.getToken(FppParser.ANNOTATION, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_preAnnotation; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPreAnnotation) {
			listener.enterPreAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPreAnnotation) {
			listener.exitPreAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPreAnnotation) {
			return visitor.visitPreAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


