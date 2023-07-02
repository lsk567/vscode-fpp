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
	public static readonly RULE_annotation = 70;
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
		"structAssignment", "structExpr", "expr", "annotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'['", "']'", "':'", "'{'", "'}'", "'->'", "'('", "')'", 
		"'.'", "','", "';'", "'-'", "'*'", "'/'", "'+'", undefined, undefined, 
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
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 142;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 155;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 148;
					this.moduleMember();
					this.state = 151;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case FppParser.T__11:
					case FppParser.NL:
						{
						this.state = 149;
						this.semiDelim();
						}
						break;
					case FppParser.EOF:
						{
						this.state = 150;
						this.match(FppParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 158;
				this.match(FppParser.NL);
				}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 164;
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
			this.state = 169;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 166;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 179;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 172;
					this.topologyMember();
					this.state = 175;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case FppParser.T__11:
					case FppParser.NL:
						{
						this.state = 173;
						this.semiDelim();
						}
						break;
					case FppParser.EOF:
						{
						this.state = 174;
						this.match(FppParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 182;
				this.match(FppParser.NL);
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 188;
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
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 190;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 203;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 196;
					this.componentMember();
					this.state = 199;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case FppParser.T__11:
					case FppParser.NL:
						{
						this.state = 197;
						this.semiDelim();
						}
						break;
					case FppParser.EOF:
						{
						this.state = 198;
						this.match(FppParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 206;
				this.match(FppParser.NL);
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 212;
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
			this.state = 214;
			this.match(FppParser.TYPE);
			this.state = 215;
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
			this.state = 217;
			this.match(FppParser.ARRAY);
			this.state = 218;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 219;
			this.match(FppParser.T__0);
			this.state = 220;
			this.match(FppParser.T__1);
			this.state = 221;
			_localctx._size = this.expr(0);
			this.state = 222;
			this.match(FppParser.T__2);
			this.state = 223;
			_localctx._type = this.typeName();
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 224;
				this.match(FppParser.DEFAULT);
				this.state = 225;
				_localctx._default_ = this.arrayExpr();
				}
			}

			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 228;
				this.match(FppParser.FORMAT);
				this.state = 229;
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
			this.state = 232;
			this.match(FppParser.CONSTANT);
			this.state = 233;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 234;
			this.match(FppParser.T__0);
			this.state = 235;
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
			this.state = 237;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 238;
			this.match(FppParser.T__3);
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 239;
				this.match(FppParser.T__1);
				this.state = 240;
				_localctx._size = this.expr(0);
				this.state = 241;
				this.match(FppParser.T__2);
				}
			}

			this.state = 245;
			_localctx._type = this.typeName();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 246;
				this.match(FppParser.FORMAT);
				this.state = 247;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.structMember();
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 251;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 253;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 252;
					this.commaDelim();
					}
					break;
				}
				this.state = 255;
				this.annotation();
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.structMember();
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 259;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 261;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 260;
					this.commaDelim();
					}
					break;
				}
				this.state = 263;
				this.annotation();
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
			this.state = 266;
			this.match(FppParser.STRUCT);
			this.state = 267;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 268;
			this.match(FppParser.T__4);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 269;
				this.match(FppParser.NL);
				}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 275;
						this.structMemberN();
						}
						}
					}
					this.state = 280;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 281;
				this.structMemberL();
				}
			}

			this.state = 284;
			this.match(FppParser.T__5);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 285;
				this.match(FppParser.DEFAULT);
				this.state = 286;
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
			this.state = 289;
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
			this.state = 291;
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
			this.state = 293;
			_localctx._kind = this.commandKind();
			this.state = 294;
			this.match(FppParser.COMMAND);
			this.state = 295;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 296;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.OPCODE) {
				{
				this.state = 299;
				this.match(FppParser.OPCODE);
				this.state = 300;
				_localctx._opcode = this.expr(0);
				}
			}

			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 303;
				this.match(FppParser.PRIORITY);
				this.state = 304;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 307;
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
			this.state = 310;
			this.match(FppParser.PARAM);
			this.state = 311;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 312;
			this.match(FppParser.T__3);
			this.state = 313;
			_localctx._type = this.typeName();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 314;
				this.match(FppParser.DEFAULT);
				this.state = 315;
				_localctx._default_ = this.expr(0);
				}
			}

			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 318;
				this.match(FppParser.ID);
				this.state = 319;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SET) {
				{
				this.state = 322;
				this.match(FppParser.SET);
				this.state = 323;
				this.match(FppParser.OPCODE);
				this.state = 324;
				_localctx._setOpcode = this.expr(0);
				}
			}

			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SAVE) {
				{
				this.state = 327;
				this.match(FppParser.SAVE);
				this.state = 328;
				this.match(FppParser.OPCODE);
				this.state = 329;
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
			this.state = 339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ASYNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 332;
				this.match(FppParser.ASYNC);
				this.state = 333;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.GUARDED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 334;
				this.match(FppParser.GUARDED);
				this.state = 335;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.SYNC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 336;
				this.match(FppParser.SYNC);
				this.state = 337;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.OUTPUT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 338;
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
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.match(FppParser.COMMAND);
				this.state = 342;
				this.match(FppParser.RECV);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.match(FppParser.COMMAND);
				this.state = 344;
				this.match(FppParser.REG);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 345;
				this.match(FppParser.COMMAND);
				this.state = 346;
				this.match(FppParser.RESP);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 347;
				this.match(FppParser.EVENT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 348;
				this.match(FppParser.PARAM);
				this.state = 349;
				this.match(FppParser.GET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 350;
				this.match(FppParser.PARAM);
				this.state = 351;
				this.match(FppParser.SET);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 352;
				this.match(FppParser.TELEMETRY);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 353;
				this.match(FppParser.TEXT);
				this.state = 354;
				this.match(FppParser.EVENT);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 355;
				this.match(FppParser.TIME);
				this.state = 356;
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
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.SERIAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.match(FppParser.SERIAL);
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
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
			this.state = 363;
			_localctx._kind = this.generalPortKind();
			this.state = 364;
			this.match(FppParser.PORT);
			this.state = 365;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 366;
			this.match(FppParser.T__3);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 367;
				this.match(FppParser.T__1);
				this.state = 368;
				_localctx._n = this.expr(0);
				this.state = 369;
				this.match(FppParser.T__2);
				}
			}

			this.state = 373;
			_localctx._type = this.generalPortInstanceType();
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 374;
				this.match(FppParser.PRIORITY);
				this.state = 375;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 378;
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
			this.state = 381;
			this.specialPortKind();
			this.state = 382;
			this.match(FppParser.PORT);
			this.state = 383;
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
			this.state = 385;
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
			this.state = 387;
			_localctx._kind = this.telemetryLimitKind();
			this.state = 388;
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
			this.state = 390;
			this.match(FppParser.T__4);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 391;
				this.match(FppParser.NL);
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ORANGE || _la === FppParser.RED || _la === FppParser.YELLOW) {
				{
				this.state = 397;
				this.telemetryLimitExpr();
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 398;
						this.commaDelim();
						this.state = 399;
						this.telemetryLimitExpr();
						}
						}
					}
					this.state = 405;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 406;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 411;
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
		this.enterRule(_localctx, 44, FppParser.RULE_telemetryUpdate);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ALWAYS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 413;
				this.match(FppParser.ALWAYS);
				}
				break;
			case FppParser.ON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
				this.match(FppParser.ON);
				this.state = 415;
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
			this.state = 418;
			this.match(FppParser.TELEMETRY);
			this.state = 419;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 420;
			this.match(FppParser.T__3);
			this.state = 421;
			_localctx._type = this.typeName();
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 422;
				this.match(FppParser.ID);
				this.state = 423;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.UPDATE) {
				{
				this.state = 426;
				this.match(FppParser.UPDATE);
				this.state = 427;
				_localctx._update = this.telemetryUpdate();
				}
			}

			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 430;
				this.match(FppParser.FORMAT);
				this.state = 431;
				_localctx._format = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.LOW) {
				{
				this.state = 434;
				this.match(FppParser.LOW);
				this.state = 435;
				_localctx._low = this.telemetryLimit();
				}
			}

			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.HIGH) {
				{
				this.state = 438;
				this.match(FppParser.HIGH);
				this.state = 439;
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
			this.state = 442;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__0) {
				{
				this.state = 443;
				this.match(FppParser.T__0);
				this.state = 444;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.enumMember();
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 448;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 450;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 449;
					this.commaDelim();
					}
					break;
				}
				this.state = 452;
				this.annotation();
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.enumMember();
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 456;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 458;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 457;
					this.commaDelim();
					}
					break;
				}
				this.state = 460;
				this.annotation();
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
			this.state = 463;
			this.match(FppParser.ENUM);
			this.state = 464;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__3) {
				{
				this.state = 465;
				this.match(FppParser.T__3);
				this.state = 466;
				_localctx._type = this.intType();
				}
			}

			this.state = 469;
			this.match(FppParser.T__4);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 470;
				this.match(FppParser.NL);
				}
				}
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 476;
						this.enumMemberN();
						}
						}
					}
					this.state = 481;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 482;
				this.enumMemberL();
				}
			}

			this.state = 485;
			this.match(FppParser.T__5);
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 486;
				this.match(FppParser.DEFAULT);
				this.state = 487;
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
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 490;
				this.match(FppParser.ACTIVITY);
				this.state = 491;
				this.match(FppParser.HIGH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 492;
				this.match(FppParser.ACTIVITY);
				this.state = 493;
				this.match(FppParser.LOW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 494;
				this.match(FppParser.COMMAND);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 495;
				this.match(FppParser.DIAGNOSTIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 496;
				this.match(FppParser.FATAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 497;
				this.match(FppParser.WARNING);
				this.state = 498;
				this.match(FppParser.HIGH);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 499;
				this.match(FppParser.WARNING);
				this.state = 500;
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
			this.state = 503;
			this.match(FppParser.EVENT);
			this.state = 504;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 505;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 508;
			this.match(FppParser.SEVERITY);
			this.state = 509;
			this.eventSeverity();
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 510;
				this.match(FppParser.ID);
				this.state = 511;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 514;
			this.match(FppParser.FORMAT);
			this.state = 515;
			_localctx._format = this.match(FppParser.LIT_STRING);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.THROTTLE) {
				{
				this.state = 516;
				this.match(FppParser.THROTTLE);
				this.state = 517;
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
			this.state = 520;
			this.match(FppParser.INCLUDE);
			this.state = 521;
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
			this.state = 523;
			this.match(FppParser.MATCH);
			this.state = 524;
			_localctx._match = this.match(FppParser.IDENTIFIER);
			this.state = 525;
			this.match(FppParser.WITH);
			this.state = 526;
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
			this.state = 528;
			this.match(FppParser.INTERNAL);
			this.state = 529;
			this.match(FppParser.PORT);
			this.state = 530;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 531;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 534;
				this.match(FppParser.PRIORITY);
				this.state = 535;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 538;
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
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 541;
				this.annotation();
				}
			}

			this.state = 544;
			this.match(FppParser.PHASE);
			this.state = 545;
			_localctx._phaseExpr = this.expr(0);
			this.state = 546;
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
			this.state = 548;
			this.match(FppParser.INSTANCE);
			this.state = 549;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 550;
			this.match(FppParser.T__3);
			this.state = 551;
			_localctx._fppType = this.qualIdent();
			this.state = 552;
			this.match(FppParser.BASE);
			this.state = 553;
			this.match(FppParser.ID);
			this.state = 554;
			_localctx._base_id = this.expr(0);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.TYPE) {
				{
				this.state = 555;
				this.match(FppParser.TYPE);
				this.state = 556;
				_localctx._cppType = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.AT) {
				{
				this.state = 559;
				this.match(FppParser.AT);
				this.state = 560;
				_localctx._at = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.QUEUE) {
				{
				this.state = 563;
				this.match(FppParser.QUEUE);
				this.state = 564;
				this.match(FppParser.SIZE);
				this.state = 565;
				_localctx._queueSize = this.expr(0);
				}
			}

			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.STACK) {
				{
				this.state = 568;
				this.match(FppParser.STACK);
				this.state = 569;
				this.match(FppParser.SIZE);
				this.state = 570;
				_localctx._stackSize = this.expr(0);
				}
			}

			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 573;
				this.match(FppParser.PRIORITY);
				this.state = 574;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.CPU) {
				{
				this.state = 577;
				this.match(FppParser.CPU);
				this.state = 578;
				_localctx._cpu = this.expr(0);
				}
			}

			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__4) {
				{
				this.state = 581;
				this.match(FppParser.T__4);
				this.state = 585;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 582;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 587;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				}
				this.state = 593;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 588;
						this.initSpecifier();
						this.state = 589;
						this.semiDelim();
						}
						}
					}
					this.state = 595;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				}
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.NL) {
					{
					{
					this.state = 596;
					this.match(FppParser.NL);
					}
					}
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 602;
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
		this.enterRule(_localctx, 70, FppParser.RULE_componentKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
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
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 607;
				this.abstractTypeDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this.arrayDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 609;
				this.constantDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 610;
				this.structDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 611;
				this.commandDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 612;
				this.paramDecl();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 613;
				this.generalPortInstanceDecl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 614;
				this.specialPortInstanceDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 615;
				this.telemetryChannelDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 616;
				this.enumDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 617;
				this.eventDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 618;
				this.includeStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 619;
				this.internalPortDecl();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 620;
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
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 623;
				this.annotation();
				}
			}

			this.state = 626;
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
			this.state = 628;
			_localctx._kind = this.componentKind();
			this.state = 629;
			this.match(FppParser.COMPONENT);
			this.state = 630;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 631;
			this.match(FppParser.T__4);
			this.state = 635;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 632;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 637;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			this.state = 643;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 638;
					this.componentMember();
					this.state = 639;
					this.semiDelim();
					}
					}
				}
				this.state = 645;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 646;
				this.match(FppParser.NL);
				}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 652;
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
		this.enterRule(_localctx, 78, FppParser.RULE_portDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.match(FppParser.PORT);
			this.state = 655;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 656;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__6) {
				{
				this.state = 659;
				this.match(FppParser.T__6);
				this.state = 660;
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
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIVATE) {
				{
				this.state = 663;
				this.match(FppParser.PRIVATE);
				}
			}

			this.state = 666;
			this.match(FppParser.INSTANCE);
			this.state = 667;
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
			this.state = 669;
			_localctx._node = this.qualIdent();
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 670;
				this.match(FppParser.T__1);
				this.state = 671;
				_localctx._index = this.expr(0);
				this.state = 672;
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
			this.state = 676;
			_localctx._source = this.connectionNode();
			this.state = 677;
			this.match(FppParser.T__6);
			this.state = 678;
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
			this.state = 680;
			this.match(FppParser.CONNECTIONS);
			this.state = 681;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 682;
			this.match(FppParser.T__4);
			this.state = 686;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 683;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 688;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			}
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.IDENTIFIER) {
				{
				{
				this.state = 689;
				this.connection();
				this.state = 690;
				this.commaDelim();
				}
				}
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 697;
				this.match(FppParser.NL);
				}
				}
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 703;
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
		this.enterRule(_localctx, 88, FppParser.RULE_patternKind);
		try {
			this.state = 713;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.COMMAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.match(FppParser.COMMAND);
				}
				break;
			case FppParser.EVENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.TEXT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 707;
				this.match(FppParser.TEXT);
				this.state = 708;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.HEALTH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 709;
				this.match(FppParser.HEALTH);
				}
				break;
			case FppParser.PARAM:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 710;
				this.match(FppParser.PARAM);
				}
				break;
			case FppParser.TELEMETRY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 711;
				this.match(FppParser.TELEMETRY);
				}
				break;
			case FppParser.TIME:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 712;
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
			this.state = 715;
			this.qualIdent();
			this.state = 721;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 716;
					this.commaDelim();
					this.state = 717;
					this.qualIdent();
					}
					}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 724;
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
			this.state = 727;
			_localctx._kind = this.patternKind();
			this.state = 728;
			this.match(FppParser.CONNECTIONS);
			this.state = 729;
			this.match(FppParser.INSTANCE);
			this.state = 730;
			_localctx._target = this.qualIdent();
			this.state = 732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 731;
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
			this.state = 734;
			this.match(FppParser.IMPORT);
			this.state = 735;
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
			this.state = 742;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.INSTANCE:
			case FppParser.PRIVATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 737;
				this.componentInstanceSpec();
				}
				break;
			case FppParser.CONNECTIONS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 738;
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
				this.state = 739;
				this.patternGraphStmt();
				}
				break;
			case FppParser.IMPORT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 740;
				this.topologyImportStmt();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 741;
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
			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 744;
				this.annotation();
				}
			}

			this.state = 747;
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
			this.state = 749;
			this.match(FppParser.TOPOLOGY);
			this.state = 750;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 751;
			this.match(FppParser.T__4);
			this.state = 755;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 752;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 757;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 763;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 758;
					this.topologyMember();
					this.state = 759;
					this.semiDelim();
					}
					}
				}
				this.state = 765;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			this.state = 769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 766;
				this.match(FppParser.NL);
				}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 772;
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
		this.enterRule(_localctx, 102, FppParser.RULE_locationKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
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
			this.state = 776;
			this.match(FppParser.LOCATE);
			this.state = 777;
			_localctx._kind = this.locationKind();
			this.state = 778;
			_localctx._name = this.qualIdent();
			this.state = 779;
			this.match(FppParser.AT);
			this.state = 780;
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
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 782;
				this.abstractTypeDecl();
				}
				break;
			case FppParser.ARRAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 783;
				this.arrayDecl();
				}
				break;
			case FppParser.ACTIVE:
			case FppParser.PASSIVE:
			case FppParser.QUEUED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 784;
				this.componentDecl();
				}
				break;
			case FppParser.INSTANCE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 785;
				this.componentInstanceDecl();
				}
				break;
			case FppParser.CONSTANT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 786;
				this.constantDecl();
				}
				break;
			case FppParser.MODULE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 787;
				this.moduleDecl();
				}
				break;
			case FppParser.PORT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 788;
				this.portDecl();
				}
				break;
			case FppParser.STRUCT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 789;
				this.structDecl();
				}
				break;
			case FppParser.LOCATE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 790;
				this.locationStmt();
				}
				break;
			case FppParser.ENUM:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 791;
				this.enumDecl();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 792;
				this.includeStmt();
				}
				break;
			case FppParser.TOPOLOGY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 793;
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
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.NL || _la === FppParser.ANNOTATION) {
				{
				this.state = 796;
				this.annotation();
				}
			}

			this.state = 799;
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
			this.state = 801;
			this.match(FppParser.MODULE);
			this.state = 802;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 803;
			this.match(FppParser.T__4);
			this.state = 807;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 804;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 809;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 810;
					this.moduleMember();
					this.state = 811;
					this.semiDelim();
					}
					}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 818;
				this.match(FppParser.NL);
				}
				}
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 824;
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
		this.enterRule(_localctx, 112, FppParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF) {
				{
				this.state = 826;
				this.match(FppParser.REF);
				}
			}

			this.state = 829;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 830;
			this.match(FppParser.T__3);
			this.state = 831;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.formalParameter();
			this.state = 839;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 834;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 836;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 835;
					this.commaDelim();
					}
					break;
				}
				this.state = 838;
				this.annotation();
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this.formalParameter();
			this.state = 847;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 842;
				this.commaDelim();
				}
				break;

			case 2:
				{
				this.state = 844;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 843;
					this.commaDelim();
					}
					break;
				}
				this.state = 846;
				this.annotation();
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
			this.state = 849;
			this.match(FppParser.T__7);
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 850;
				this.match(FppParser.NL);
				}
				}
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF || _la === FppParser.IDENTIFIER) {
				{
				this.state = 859;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 856;
						this.formalParameterN();
						}
						}
					}
					this.state = 861;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				}
				this.state = 862;
				this.formalParamaterL();
				}
			}

			this.state = 865;
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
		this.enterRule(_localctx, 120, FppParser.RULE_qualIdent);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.match(FppParser.IDENTIFIER);
			this.state = 872;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 868;
					this.match(FppParser.T__9);
					this.state = 869;
					this.match(FppParser.IDENTIFIER);
					}
					}
				}
				this.state = 874;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
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
			this.state = 875;
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
			this.state = 883;
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
				this.state = 877;
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
				this.state = 878;
				_localctx._type = this.match(FppParser.STRING);
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.SIZE) {
					{
					this.state = 879;
					this.match(FppParser.SIZE);
					this.state = 880;
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
			this.state = 887;
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
				this.state = 885;
				this.primitiveType();
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 886;
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
			this.state = 901;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 889;
				this.match(FppParser.T__10);
				this.state = 893;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 890;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 895;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 897;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 896;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 899;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
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
			this.state = 915;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 903;
				this.match(FppParser.T__11);
				this.state = 907;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
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
			this.state = 917;
			this.match(FppParser.T__1);
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 918;
				this.match(FppParser.NL);
				}
				}
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FppParser.T__1) | (1 << FppParser.T__4) | (1 << FppParser.T__7) | (1 << FppParser.T__12) | (1 << FppParser.LIT_BOOLEAN) | (1 << FppParser.LIT_STRING) | (1 << FppParser.LIT_FLOAT) | (1 << FppParser.LIT_INT))) !== 0) || _la === FppParser.IDENTIFIER) {
				{
				this.state = 924;
				this.expr(0);
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					{
					this.state = 925;
					this.commaDelim();
					this.state = 926;
					this.expr(0);
					}
					}
					this.state = 932;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 935;
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
			this.state = 937;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 938;
			this.match(FppParser.T__0);
			this.state = 939;
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
			this.state = 941;
			this.match(FppParser.T__4);
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 942;
				this.match(FppParser.NL);
				}
				}
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 948;
				this.structAssignment();
				this.state = 954;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 949;
						this.commaDelim();
						this.state = 950;
						this.structAssignment();
						}
						}
					}
					this.state = 956;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				}
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__10 || _la === FppParser.NL) {
					{
					this.state = 957;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 962;
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
		let _startState: number = 138;
		this.enterRecursionRule(_localctx, 138, FppParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 978;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__12:
				{
				this.state = 965;
				this.match(FppParser.T__12);
				this.state = 966;
				_localctx._unary = this.expr(11);
				}
				break;
			case FppParser.T__1:
				{
				this.state = 967;
				this.arrayExpr();
				}
				break;
			case FppParser.T__4:
				{
				this.state = 968;
				this.structExpr();
				}
				break;
			case FppParser.IDENTIFIER:
				{
				this.state = 969;
				this.qualIdent();
				}
				break;
			case FppParser.LIT_BOOLEAN:
				{
				this.state = 970;
				this.match(FppParser.LIT_BOOLEAN);
				}
				break;
			case FppParser.LIT_FLOAT:
				{
				this.state = 971;
				this.match(FppParser.LIT_FLOAT);
				}
				break;
			case FppParser.LIT_INT:
				{
				this.state = 972;
				this.match(FppParser.LIT_INT);
				}
				break;
			case FppParser.LIT_STRING:
				{
				this.state = 973;
				this.match(FppParser.LIT_STRING);
				}
				break;
			case FppParser.T__7:
				{
				this.state = 974;
				this.match(FppParser.T__7);
				this.state = 975;
				_localctx._p = this.expr(0);
				this.state = 976;
				this.match(FppParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 988;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 986;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 980;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 981;
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
						this.state = 982;
						_localctx._right = this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 983;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 984;
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
						this.state = 985;
						_localctx._right = this.expr(10);
						}
						break;
					}
					}
				}
				this.state = 990;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
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
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, FppParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 991;
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
				this.state = 994;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u03E7\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x03\x02\x07\x02\x92\n\x02\f\x02\x0E\x02\x95\v\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02\x9A\n\x02\x07\x02\x9C\n\x02\f\x02\x0E" +
		"\x02\x9F\v\x02\x03\x02\x07\x02\xA2\n\x02\f\x02\x0E\x02\xA5\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x07\x03\xAA\n\x03\f\x03\x0E\x03\xAD\v\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\xB2\n\x03\x07\x03\xB4\n\x03\f\x03\x0E\x03\xB7\v\x03" +
		"\x03\x03\x07\x03\xBA\n\x03\f\x03\x0E\x03\xBD\v\x03\x03\x03\x03\x03\x03" +
		"\x04\x07\x04\xC2\n\x04\f\x04\x0E\x04\xC5\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04\xCA\n\x04\x07\x04\xCC\n\x04\f\x04\x0E\x04\xCF\v\x04\x03\x04\x07" +
		"\x04\xD2\n\x04\f\x04\x0E\x04\xD5\v\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xE5\n\x06\x03\x06\x03\x06\x05\x06\xE9\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"\xF6\n\b\x03\b\x03\b\x03\b\x05\b\xFB\n\b\x03\t\x03\t\x03\t\x05\t\u0100" +
		"\n\t\x03\t\x05\t\u0103\n\t\x03\n\x03\n\x03\n\x05\n\u0108\n\n\x03\n\x05" +
		"\n\u010B\n\n\x03\v\x03\v\x03\v\x03\v\x07\v\u0111\n\v\f\v\x0E\v\u0114\v" +
		"\v\x03\v\x07\v\u0117\n\v\f\v\x0E\v\u011A\v\v\x03\v\x05\v\u011D\n\v\x03" +
		"\v\x03\v\x03\v\x05\v\u0122\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u012C\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0130\n\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0134\n\x0E\x03\x0E\x05\x0E\u0137\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u013F\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0143\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0148\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u014D\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u0156\n\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0168\n\x11\x03\x12\x03\x12\x05\x12" +
		"\u016C\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u0176\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u017B\n\x13\x03" +
		"\x13\x05\x13\u017E\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x07\x17\u018B\n\x17\f\x17\x0E" +
		"\x17\u018E\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0194\n\x17\f" +
		"\x17\x0E\x17\u0197\v\x17\x03\x17\x05\x17\u019A\n\x17\x05\x17\u019C\n\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u01A3\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01AB\n\x19\x03\x19\x03\x19" +
		"\x05\x19\u01AF\n\x19\x03\x19\x03\x19\x05\x19\u01B3\n\x19\x03\x19\x03\x19" +
		"\x05\x19\u01B7\n\x19\x03\x19\x03\x19\x05\x19\u01BB\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u01C0\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01C5\n\x1B" +
		"\x03\x1B\x05\x1B\u01C8\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01CD\n\x1C" +
		"\x03\x1C\x05\x1C\u01D0\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01D6" +
		"\n\x1D\x03\x1D\x03\x1D\x07\x1D\u01DA\n\x1D\f\x1D\x0E\x1D\u01DD\v\x1D\x03" +
		"\x1D\x07\x1D\u01E0\n\x1D\f\x1D\x0E\x1D\u01E3\v\x1D\x03\x1D\x05\x1D\u01E6" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01EB\n\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u01F8\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01FD\n\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u0203\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u0209\n\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u0217\n\"\x03\"\x03\"\x05\"\u021B\n\"\x03\"\x05\"" +
		"\u021E\n\"\x03#\x05#\u0221\n#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x05$\u0230\n$\x03$\x03$\x05$\u0234\n$\x03$\x03" +
		"$\x03$\x05$\u0239\n$\x03$\x03$\x03$\x05$\u023E\n$\x03$\x03$\x05$\u0242" +
		"\n$\x03$\x03$\x05$\u0246\n$\x03$\x03$\x07$\u024A\n$\f$\x0E$\u024D\v$\x03" +
		"$\x03$\x03$\x07$\u0252\n$\f$\x0E$\u0255\v$\x03$\x07$\u0258\n$\f$\x0E$" +
		"\u025B\v$\x03$\x05$\u025E\n$\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0270\n&\x03\'\x05\'\u0273\n" +
		"\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x07(\u027C\n(\f(\x0E(\u027F\v" +
		"(\x03(\x03(\x03(\x07(\u0284\n(\f(\x0E(\u0287\v(\x03(\x07(\u028A\n(\f(" +
		"\x0E(\u028D\v(\x03(\x03(\x03)\x03)\x03)\x05)\u0294\n)\x03)\x03)\x05)\u0298" +
		"\n)\x03*\x05*\u029B\n*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x05+\u02A5" +
		"\n+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u02AF\n-\f-\x0E-\u02B2" +
		"\v-\x03-\x03-\x03-\x07-\u02B7\n-\f-\x0E-\u02BA\v-\x03-\x07-\u02BD\n-\f" +
		"-\x0E-\u02C0\v-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05" +
		".\u02CC\n.\x03/\x03/\x03/\x03/\x07/\u02D2\n/\f/\x0E/\u02D5\v/\x03/\x05" +
		"/\u02D8\n/\x030\x030\x030\x030\x030\x050\u02DF\n0\x031\x031\x031\x032" +
		"\x032\x032\x032\x032\x052\u02E9\n2\x033\x053\u02EC\n3\x033\x033\x034\x03" +
		"4\x034\x034\x074\u02F4\n4\f4\x0E4\u02F7\v4\x034\x034\x034\x074\u02FC\n" +
		"4\f4\x0E4\u02FF\v4\x034\x074\u0302\n4\f4\x0E4\u0305\v4\x034\x034\x035" +
		"\x035\x036\x036\x036\x036\x036\x036\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x057\u031D\n7\x038\x058\u0320\n8\x038\x038" +
		"\x039\x039\x039\x039\x079\u0328\n9\f9\x0E9\u032B\v9\x039\x039\x039\x07" +
		"9\u0330\n9\f9\x0E9\u0333\v9\x039\x079\u0336\n9\f9\x0E9\u0339\v9\x039\x03" +
		"9\x03:\x05:\u033E\n:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x05;\u0347\n;" +
		"\x03;\x05;\u034A\n;\x03<\x03<\x03<\x05<\u034F\n<\x03<\x05<\u0352\n<\x03" +
		"=\x03=\x07=\u0356\n=\f=\x0E=\u0359\v=\x03=\x07=\u035C\n=\f=\x0E=\u035F" +
		"\v=\x03=\x05=\u0362\n=\x03=\x03=\x03>\x03>\x03>\x07>\u0369\n>\f>\x0E>" +
		"\u036C\v>\x03?\x03?\x03@\x03@\x03@\x03@\x05@\u0374\n@\x05@\u0376\n@\x03" +
		"A\x03A\x05A\u037A\nA\x03B\x03B\x07B\u037E\nB\fB\x0EB\u0381\vB\x03B\x06" +
		"B\u0384\nB\rB\x0EB\u0385\x05B\u0388\nB\x03C\x03C\x07C\u038C\nC\fC\x0E" +
		"C\u038F\vC\x03C\x06C\u0392\nC\rC\x0EC\u0393\x05C\u0396\nC\x03D\x03D\x07" +
		"D\u039A\nD\fD\x0ED\u039D\vD\x03D\x03D\x03D\x03D\x07D\u03A3\nD\fD\x0ED" +
		"\u03A6\vD\x05D\u03A8\nD\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x07F\u03B2" +
		"\nF\fF\x0EF\u03B5\vF\x03F\x03F\x03F\x03F\x07F\u03BB\nF\fF\x0EF\u03BE\v" +
		"F\x03F\x05F\u03C1\nF\x05F\u03C3\nF\x03F\x03F\x03G\x03G\x03G\x03G\x03G" +
		"\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03D5\nG\x03G\x03G" +
		"\x03G\x03G\x03G\x03G\x07G\u03DD\nG\fG\x0EG\u03E0\vG\x03H\x06H\u03E3\n" +
		"H\rH\x0EH\u03E4\x03H\x02\x02\x03\x8CI\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x02\f\x05\x02**..88\x05\x02+" +
		"+??ee\x05\x02NNYYpp\x05\x02&&QQWW\b\x022244FFSSjjll\x03\x02\x1C#\x04\x02" +
		"\x1C%//\x03\x02\x10\x11\x04\x02\x0F\x0F\x12\x12\x04\x02\x13\x13\x17\x17" +
		"\x02\u0458\x02\x93\x03\x02\x02\x02\x04\xAB\x03\x02\x02\x02\x06\xC3\x03" +
		"\x02\x02\x02\b\xD8\x03\x02\x02\x02\n\xDB\x03\x02\x02\x02\f\xEA\x03\x02" +
		"\x02\x02\x0E\xEF\x03\x02\x02\x02\x10\xFC\x03\x02\x02\x02\x12\u0104\x03" +
		"\x02\x02\x02\x14\u010C\x03\x02\x02\x02\x16\u0123\x03\x02\x02\x02\x18\u0125" +
		"\x03\x02\x02\x02\x1A\u0127\x03\x02\x02\x02\x1C\u0138\x03\x02\x02\x02\x1E" +
		"\u0155\x03\x02\x02\x02 \u0167\x03\x02\x02\x02\"\u016B\x03\x02\x02\x02" +
		"$\u016D\x03\x02\x02\x02&\u017F\x03\x02\x02\x02(\u0183\x03\x02\x02\x02" +
		"*\u0185\x03\x02\x02\x02,\u0188\x03\x02\x02\x02.\u01A2\x03\x02\x02\x02" +
		"0\u01A4\x03\x02\x02\x022\u01BC\x03\x02\x02\x024\u01C1\x03\x02\x02\x02" +
		"6\u01C9\x03\x02\x02\x028\u01D1\x03\x02\x02\x02:\u01F7\x03\x02\x02\x02" +
		"<\u01F9\x03\x02\x02\x02>\u020A\x03\x02\x02\x02@\u020D\x03\x02\x02\x02" +
		"B\u0212\x03\x02\x02\x02D\u0220\x03\x02\x02\x02F\u0226\x03\x02\x02\x02" +
		"H\u025F\x03\x02\x02\x02J\u026F\x03\x02\x02\x02L\u0272\x03\x02\x02\x02" +
		"N\u0276\x03\x02\x02\x02P\u0290\x03\x02\x02\x02R\u029A\x03\x02\x02\x02" +
		"T\u029F\x03\x02\x02\x02V\u02A6\x03\x02\x02\x02X\u02AA\x03\x02\x02\x02" +
		"Z\u02CB\x03\x02\x02\x02\\\u02CD\x03\x02\x02\x02^\u02D9\x03\x02\x02\x02" +
		"`\u02E0\x03\x02\x02\x02b\u02E8\x03\x02\x02\x02d\u02EB\x03\x02\x02\x02" +
		"f\u02EF\x03\x02\x02\x02h\u0308\x03\x02\x02\x02j\u030A\x03\x02\x02\x02" +
		"l\u031C\x03\x02\x02\x02n\u031F\x03\x02\x02\x02p\u0323\x03\x02\x02\x02" +
		"r\u033D\x03\x02\x02\x02t\u0343\x03\x02\x02\x02v\u034B\x03\x02\x02\x02" +
		"x\u0353\x03\x02\x02\x02z\u0365\x03\x02\x02\x02|\u036D\x03\x02\x02\x02" +
		"~\u0375\x03\x02\x02\x02\x80\u0379\x03\x02\x02\x02\x82\u0387\x03\x02\x02" +
		"\x02\x84\u0395\x03\x02\x02\x02\x86\u0397\x03\x02\x02\x02\x88\u03AB\x03" +
		"\x02\x02\x02\x8A\u03AF\x03\x02\x02\x02\x8C\u03D4\x03\x02\x02\x02\x8E\u03E2" +
		"\x03\x02\x02\x02\x90\x92\x07\x13\x02\x02\x91\x90\x03\x02\x02\x02\x92\x95" +
		"\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x9D" +
		"\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x99\x05n8\x02\x97\x9A\x05" +
		"\x84C\x02\x98\x9A\x07\x02\x02\x03\x99\x97\x03\x02\x02\x02\x99\x98\x03" +
		"\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x96\x03\x02\x02\x02\x9C\x9F\x03" +
		"\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA3\x03" +
		"\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA2\x07\x13\x02\x02\xA1\xA0\x03" +
		"\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03" +
		"\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA7\x07" +
		"\x02\x02\x03\xA7\x03\x03\x02\x02\x02\xA8\xAA\x07\x13\x02\x02\xA9\xA8\x03" +
		"\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xB5\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x05" +
		"d3\x02\xAF\xB2\x05\x84C\x02\xB0\xB2\x07\x02\x02\x03\xB1\xAF\x03\x02\x02" +
		"\x02\xB1\xB0\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xAE\x03\x02\x02" +
		"\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02" +
		"\x02\xB6\xBB\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xBA\x07\x13\x02" +
		"\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02" +
		"\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02" +
		"\x02\xBE\xBF\x07\x02\x02\x03\xBF\x05\x03\x02\x02\x02\xC0\xC2\x07\x13\x02" +
		"\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC4\xCD\x03\x02\x02\x02\xC5\xC3\x03\x02\x02" +
		"\x02\xC6\xC9\x05L\'\x02\xC7\xCA\x05\x84C\x02\xC8\xCA\x07\x02\x02\x03\xC9" +
		"\xC7\x03\x02\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB" +
		"\xC6\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xD3\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0" +
		"\xD2\x07\x13\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3" +
		"\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5" +
		"\xD3\x03\x02\x02\x02\xD6\xD7\x07\x02\x02\x03\xD7\x07\x03\x02\x02\x02\xD8" +
		"\xD9\x07l\x02\x02\xD9\xDA\x07q\x02\x02\xDA\t\x03\x02\x02\x02\xDB\xDC\x07" +
		")\x02\x02\xDC\xDD\x07q\x02\x02\xDD\xDE\x07\x03\x02\x02\xDE\xDF\x07\x04" +
		"\x02\x02\xDF\xE0\x05\x8CG\x02\xE0\xE1\x07\x05\x02\x02\xE1\xE4\x05\x80" +
		"A\x02\xE2\xE3\x076\x02\x02\xE3\xE5\x05\x86D\x02\xE4\xE2\x03\x02\x02\x02" +
		"\xE4\xE5\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE7\x07=\x02\x02" +
		"\xE7\xE9\x07\x19\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02" +
		"\xE9\v\x03\x02\x02\x02\xEA\xEB\x074\x02\x02\xEB\xEC\x07q\x02\x02\xEC\xED" +
		"\x07\x03\x02\x02\xED\xEE\x05\x8CG\x02\xEE\r\x03\x02\x02\x02\xEF\xF0\x07" +
		"q\x02\x02\xF0\xF5\x07\x06\x02\x02\xF1\xF2\x07\x04\x02\x02\xF2\xF3\x05" +
		"\x8CG\x02\xF3\xF4\x07\x05\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF1\x03" +
		"\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xFA\x05" +
		"\x80A\x02\xF8\xF9\x07=\x02\x02\xF9\xFB\x07\x19\x02\x02\xFA\xF8\x03\x02" +
		"\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\x0F\x03\x02\x02\x02\xFC\u0102\x05" +
		"\x0E\b\x02\xFD\u0103\x05\x82B\x02\xFE\u0100\x05\x82B\x02\xFF\xFE\x03\x02" +
		"\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103" +
		"\x05\x8EH\x02\u0102\xFD\x03\x02\x02\x02\u0102\xFF\x03\x02\x02\x02\u0103" +
		"\x11\x03\x02\x02\x02\u0104\u010A\x05\x0E\b\x02\u0105\u010B\x05\x82B\x02" +
		"\u0106\u0108\x05\x82B\x02\u0107\u0106\x03\x02\x02\x02\u0107\u0108\x03" +
		"\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B\x05\x8EH\x02\u010A" +
		"\u0105\x03\x02\x02\x02\u010A\u0107\x03\x02\x02\x02\u010A\u010B\x03\x02" +
		"\x02\x02\u010B\x13\x03\x02\x02\x02\u010C\u010D\x07d\x02\x02\u010D\u010E" +
		"\x07q\x02\x02\u010E\u0112\x07\x07\x02\x02\u010F\u0111\x07\x13\x02\x02" +
		"\u0110\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03" +
		"\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u011C\x03\x02\x02\x02\u0114" +
		"\u0112\x03\x02\x02\x02\u0115\u0117\x05\x10\t\x02\u0116\u0115\x03\x02\x02" +
		"\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119" +
		"\x03\x02\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02" +
		"\u011B\u011D\x05\x12\n\x02\u011C\u0118\x03\x02\x02\x02\u011C\u011D\x03" +
		"\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0121\x07\b\x02\x02\u011F" +
		"\u0120\x076\x02\x02\u0120\u0122\x05\x8AF\x02\u0121\u011F\x03\x02\x02\x02" +
		"\u0121\u0122\x03\x02\x02\x02\u0122\x15\x03\x02\x02\x02\u0123\u0124\t\x02" +
		"\x02\x02\u0124\x17\x03\x02\x02\x02\u0125\u0126\t\x03\x02\x02\u0126\x19" +
		"\x03\x02\x02\x02\u0127\u0128\x05\x18\r\x02\u0128\u0129\x071\x02\x02\u0129" +
		"\u012B\x07q\x02\x02\u012A\u012C\x05x=\x02\u012B\u012A\x03\x02\x02\x02" +
		"\u012B\u012C\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012E\x07" +
		"M\x02\x02\u012E\u0130\x05\x8CG\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130" +
		"\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u0132\x07T\x02\x02" +
		"\u0132\u0134\x05\x8CG\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03" +
		"\x02\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0137\x05\x16\f\x02\u0136" +
		"\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\x1B\x03\x02\x02" +
		"\x02\u0138\u0139\x07P\x02\x02\u0139\u013A\x07q\x02\x02\u013A\u013B\x07" +
		"\x06\x02\x02\u013B\u013E\x05\x80A\x02\u013C\u013D\x076\x02\x02\u013D\u013F" +
		"\x05\x8CG\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02" +
		"\u013F\u0142\x03\x02\x02\x02\u0140\u0141\x07B\x02\x02\u0141\u0143\x05" +
		"\x8CG\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143" +
		"\u0147\x03\x02\x02\x02\u0144\u0145\x07_\x02\x02\u0145\u0146\x07M\x02\x02" +
		"\u0146\u0148\x05\x8CG\x02\u0147\u0144\x03\x02\x02\x02\u0147\u0148\x03" +
		"\x02\x02\x02\u0148\u014C\x03\x02\x02\x02\u0149\u014A\x07]\x02\x02\u014A" +
		"\u014B\x07M\x02\x02\u014B\u014D\x05\x8CG\x02\u014C\u0149\x03\x02\x02\x02" +
		"\u014C\u014D\x03\x02\x02\x02\u014D\x1D\x03\x02\x02\x02\u014E\u014F\x07" +
		"+\x02\x02\u014F\u0156\x07E\x02\x02\u0150\u0151\x07?\x02\x02\u0151\u0156" +
		"\x07E\x02\x02\u0152\u0153\x07e\x02\x02\u0153\u0156\x07E\x02\x02\u0154" +
		"\u0156\x07O\x02\x02\u0155\u014E\x03\x02\x02\x02\u0155\u0150\x03\x02\x02" +
		"\x02\u0155\u0152\x03\x02\x02\x02\u0155\u0154\x03\x02\x02\x02\u0156\x1F" +
		"\x03\x02\x02\x02\u0157\u0158\x071\x02\x02\u0158\u0168\x07X\x02\x02\u0159" +
		"\u015A\x071\x02\x02\u015A\u0168\x07[\x02\x02\u015B\u015C\x071\x02\x02" +
		"\u015C\u0168\x07\\\x02\x02\u015D\u0168\x07:\x02\x02\u015E\u015F\x07P\x02" +
		"\x02\u015F\u0168\x07>\x02\x02\u0160\u0161\x07P\x02\x02\u0161\u0168\x07" +
		"_\x02\x02\u0162\u0168\x07f\x02\x02\u0163\u0164\x07g\x02\x02\u0164\u0168" +
		"\x07:\x02\x02\u0165\u0166\x07i\x02\x02\u0166\u0168\x07>\x02\x02\u0167" +
		"\u0157\x03\x02\x02\x02\u0167\u0159\x03\x02\x02\x02\u0167\u015B\x03\x02" +
		"\x02\x02\u0167\u015D\x03\x02\x02\x02\u0167\u015E\x03\x02\x02\x02\u0167" +
		"\u0160\x03\x02\x02\x02\u0167\u0162\x03\x02\x02\x02\u0167\u0163\x03\x02" +
		"\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168!\x03\x02\x02\x02\u0169\u016C" +
		"\x07^\x02\x02\u016A\u016C\x05z>\x02\u016B\u0169\x03\x02\x02\x02\u016B" +
		"\u016A\x03\x02\x02\x02\u016C#\x03\x02\x02\x02\u016D\u016E\x05\x1E\x10" +
		"\x02\u016E\u016F\x07S\x02\x02\u016F\u0170\x07q\x02\x02\u0170\u0175\x07" +
		"\x06\x02\x02\u0171\u0172\x07\x04\x02\x02\u0172\u0173\x05\x8CG\x02\u0173" +
		"\u0174\x07\x05\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0171\x03\x02" +
		"\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
		"\u017A\x05\"\x12\x02\u0178\u0179\x07T\x02\x02\u0179\u017B\x05\x8CG\x02" +
		"\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03" +
		"\x02\x02\x02\u017C\u017E\x05\x16\f\x02\u017D\u017C\x03\x02\x02\x02\u017D" +
		"\u017E\x03\x02\x02\x02\u017E%\x03\x02\x02\x02\u017F\u0180\x05 \x11\x02" +
		"\u0180\u0181\x07S\x02\x02\u0181\u0182\x07q\x02\x02\u0182\'\x03\x02\x02" +
		"\x02\u0183\u0184\t\x04\x02\x02\u0184)\x03\x02\x02\x02\u0185\u0186\x05" +
		"(\x15\x02\u0186\u0187\x05\x8CG\x02\u0187+\x03\x02\x02\x02\u0188\u018C" +
		"\x07\x07\x02\x02\u0189\u018B\x07\x13\x02\x02\u018A\u0189\x03\x02\x02\x02" +
		"\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03" +
		"\x02\x02\x02\u018D\u019B\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
		"\u0195\x05*\x16\x02\u0190\u0191\x05\x82B\x02\u0191\u0192\x05*\x16\x02" +
		"\u0192\u0194\x03\x02\x02\x02\u0193\u0190\x03\x02\x02\x02\u0194\u0197\x03" +
		"\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u019A\x05\x82" +
		"B\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C" +
		"\x03\x02\x02\x02\u019B\u018F\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02" +
		"\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x07\b\x02\x02\u019E-\x03\x02" +
		"\x02\x02\u019F\u01A3\x07(\x02\x02\u01A0\u01A1\x07L\x02\x02\u01A1\u01A3" +
		"\x070\x02\x02\u01A2\u019F\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02" +
		"\u01A3/\x03\x02\x02\x02\u01A4\u01A5\x07f\x02\x02\u01A5\u01A6\x07q\x02" +
		"\x02\u01A6\u01A7\x07\x06\x02\x02\u01A7\u01AA\x05\x80A\x02\u01A8\u01A9" +
		"\x07B\x02\x02\u01A9\u01AB\x05\x8CG\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA" +
		"\u01AB\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AD\x07m\x02" +
		"\x02\u01AD\u01AF\x05.\x18\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF" +
		"\x03\x02\x02\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01B1\x07=\x02\x02" +
		"\u01B1\u01B3\x07\x19\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03" +
		"\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B5\x07I\x02\x02\u01B5" +
		"\u01B7\x05,\x17\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02" +
		"\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B9\x07A\x02\x02\u01B9\u01BB" +
		"\x05,\x17\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02" +
		"\u01BB1\x03\x02\x02\x02\u01BC\u01BF\x07q\x02\x02\u01BD\u01BE\x07\x03\x02" +
		"\x02\u01BE\u01C0\x05\x8CG\x02\u01BF\u01BD\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01BF\u01C0\x03\x02\x02\x02\u01C03\x03\x02\x02\x02\u01C1\u01C7\x05" +
		"2\x1A\x02\u01C2\u01C8\x05\x82B\x02\u01C3\u01C5\x05\x82B\x02\u01C4\u01C3" +
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
		"\u01C6\u01C8\x05\x8EH\x02\u01C7\u01C2\x03\x02\x02\x02\u01C7\u01C4\x03" +
		"\x02\x02\x02\u01C85\x03\x02\x02\x02\u01C9\u01CF\x052\x1A\x02\u01CA\u01D0" +
		"\x05\x82B\x02\u01CB\u01CD\x05\x82B\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC" +
		"\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D0\x05\x8E" +
		"H\x02\u01CF\u01CA\x03\x02\x02\x02\u01CF\u01CC\x03\x02\x02\x02\u01CF\u01D0" +
		"\x03\x02\x02\x02\u01D07\x03\x02\x02\x02\u01D1\u01D2\x079\x02\x02\u01D2" +
		"\u01D5\x07q\x02\x02\u01D3\u01D4\x07\x06\x02\x02\u01D4\u01D6\x05|?\x02" +
		"\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03" +
		"\x02\x02\x02\u01D7\u01DB\x07\x07\x02\x02\u01D8\u01DA\x07\x13\x02\x02\u01D9" +
		"\u01D8\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02" +
		"\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01E5\x03\x02\x02\x02\u01DD" +
		"\u01DB\x03\x02\x02\x02\u01DE\u01E0\x054\x1B\x02\u01DF\u01DE\x03\x02\x02" +
		"\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2" +
		"\x03\x02\x02\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02" +
		"\u01E4\u01E6\x056\x1C\x02\u01E5\u01E1\x03\x02\x02\x02\u01E5\u01E6\x03" +
		"\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01EA\x07\b\x02\x02\u01E8" +
		"\u01E9\x076\x02\x02\u01E9\u01EB\x05\x8CG\x02\u01EA\u01E8\x03\x02\x02\x02" +
		"\u01EA\u01EB\x03\x02\x02\x02\u01EB9\x03\x02\x02\x02\u01EC\u01ED\x07\'" +
		"\x02\x02\u01ED\u01F8\x07A\x02\x02\u01EE\u01EF\x07\'\x02\x02\u01EF\u01F8" +
		"\x07I\x02\x02\u01F0\u01F8\x071\x02\x02\u01F1\u01F8\x077\x02\x02\u01F2" +
		"\u01F8\x07<\x02\x02\u01F3\u01F4\x07n\x02\x02\u01F4\u01F8\x07A\x02\x02" +
		"\u01F5\u01F6\x07n\x02\x02\u01F6\u01F8\x07I\x02\x02\u01F7\u01EC\x03\x02" +
		"\x02\x02\u01F7\u01EE\x03\x02\x02\x02\u01F7\u01F0\x03\x02\x02\x02\u01F7" +
		"\u01F1\x03\x02\x02\x02\u01F7\u01F2\x03\x02\x02\x02\u01F7\u01F3\x03\x02" +
		"\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8;\x03\x02\x02\x02\u01F9\u01FA" +
		"\x07:\x02\x02\u01FA\u01FC\x07q\x02\x02\u01FB\u01FD\x05x=\x02\u01FC\u01FB" +
		"\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02" +
		"\u01FE\u01FF\x07`\x02\x02\u01FF\u0202\x05:\x1E\x02\u0200\u0201\x07B\x02" +
		"\x02\u0201\u0203\x05\x8CG\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203" +
		"\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x07=\x02\x02" +
		"\u0205\u0208\x07\x19\x02\x02\u0206\u0207\x07h\x02\x02\u0207\u0209\x05" +
		"\x8CG\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209" +
		"=\x03\x02\x02\x02\u020A\u020B\x07D\x02\x02\u020B\u020C\x07\x19\x02\x02" +
		"\u020C?\x03\x02\x02\x02\u020D\u020E\x07J\x02\x02\u020E\u020F\x07q\x02" +
		"\x02\u020F\u0210\x07o\x02\x02\u0210\u0211\x07q\x02\x02\u0211A\x03\x02" +
		"\x02\x02\u0212\u0213\x07G\x02\x02\u0213\u0214\x07S\x02\x02\u0214\u0216" +
		"\x07q\x02\x02\u0215\u0217\x05x=\x02\u0216\u0215\x03\x02\x02\x02\u0216" +
		"\u0217\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0219\x07T\x02" +
		"\x02\u0219\u021B\x05\x8CG\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B" +
		"\x03\x02\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u021E\x05\x16\f\x02" +
		"\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021EC\x03\x02" +
		"\x02\x02\u021F\u0221\x05\x8EH\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221" +
		"\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07R\x02\x02" +
		"\u0223\u0224\x05\x8CG\x02\u0224\u0225\x07\x19\x02\x02\u0225E\x03\x02\x02" +
		"\x02\u0226\u0227\x07F\x02\x02\u0227\u0228\x07q\x02\x02\u0228\u0229\x07" +
		"\x06\x02\x02\u0229\u022A\x05z>\x02\u022A\u022B\x07-\x02\x02\u022B\u022C" +
		"\x07B\x02\x02\u022C\u022F\x05\x8CG\x02\u022D\u022E\x07l\x02\x02\u022E" +
		"\u0230\x07\x19\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03\x02" +
		"\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u0232\x07,\x02\x02\u0232\u0234" +
		"\x07\x19\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02" +
		"\u0234\u0238\x03\x02\x02\x02\u0235\u0236\x07V\x02\x02\u0236\u0237\x07" +
		"a\x02\x02\u0237\u0239\x05\x8CG\x02\u0238\u0235\x03\x02\x02\x02\u0238\u0239" +
		"\x03\x02\x02\x02\u0239\u023D\x03\x02\x02\x02\u023A\u023B\x07b\x02\x02" +
		"\u023B\u023C\x07a\x02\x02\u023C\u023E\x05\x8CG\x02\u023D\u023A\x03\x02" +
		"\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F" +
		"\u0240\x07T\x02\x02\u0240\u0242\x05\x8CG\x02\u0241\u023F\x03\x02\x02\x02" +
		"\u0241\u0242\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0244\x07" +
		"5\x02\x02\u0244\u0246\x05\x8CG\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246" +
		"\x03\x02\x02\x02\u0246\u025D\x03\x02\x02\x02\u0247\u024B\x07\x07\x02\x02" +
		"\u0248\u024A\x07\x13\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\u024D\x03" +
		"\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
		"\u0253\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E\u024F\x05D#\x02" +
		"\u024F\u0250\x05\x84C\x02\u0250\u0252\x03\x02\x02\x02\u0251\u024E\x03" +
		"\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253" +
		"\u0254\x03\x02\x02\x02\u0254\u0259\x03\x02\x02\x02\u0255\u0253\x03\x02" +
		"\x02\x02\u0256\u0258\x07\x13\x02\x02\u0257\u0256\x03\x02\x02\x02\u0258" +
		"\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02" +
		"\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C" +
		"\u025E\x07\b\x02\x02\u025D\u0247\x03\x02\x02\x02\u025D\u025E\x03\x02\x02" +
		"\x02\u025EG\x03\x02\x02\x02\u025F\u0260\t\x05\x02\x02\u0260I\x03\x02\x02" +
		"\x02\u0261\u0270\x05\b\x05\x02\u0262\u0270\x05\n\x06\x02\u0263\u0270\x05" +
		"\f\x07\x02\u0264\u0270\x05\x14\v\x02\u0265\u0270\x05\x1A\x0E\x02\u0266" +
		"\u0270\x05\x1C\x0F\x02\u0267\u0270\x05$\x13\x02\u0268\u0270\x05&\x14\x02" +
		"\u0269\u0270\x050\x19\x02\u026A\u0270\x058\x1D\x02\u026B\u0270\x05<\x1F" +
		"\x02\u026C\u0270\x05> \x02\u026D\u0270\x05B\"\x02\u026E\u0270\x05@!\x02" +
		"\u026F\u0261\x03\x02\x02\x02\u026F\u0262\x03\x02\x02\x02\u026F\u0263\x03" +
		"\x02\x02\x02\u026F\u0264\x03\x02\x02\x02\u026F\u0265\x03\x02\x02\x02\u026F" +
		"\u0266\x03\x02\x02\x02\u026F\u0267\x03\x02\x02\x02\u026F\u0268\x03\x02" +
		"\x02\x02\u026F\u0269\x03\x02\x02\x02\u026F\u026A\x03\x02\x02\x02\u026F" +
		"\u026B\x03\x02\x02\x02\u026F\u026C\x03\x02\x02\x02\u026F\u026D\x03\x02" +
		"\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270K\x03\x02\x02\x02\u0271\u0273" +
		"\x05\x8EH\x02\u0272\u0271\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02" +
		"\u0273\u0274\x03\x02\x02\x02\u0274\u0275\x05J&\x02\u0275M\x03\x02\x02" +
		"\x02\u0276\u0277\x05H%\x02\u0277\u0278\x072\x02\x02\u0278\u0279\x07q\x02" +
		"\x02\u0279\u027D\x07\x07\x02\x02\u027A\u027C\x07\x13\x02\x02\u027B\u027A" +
		"\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02" +
		"\u027D\u027E\x03\x02\x02\x02\u027E\u0285\x03\x02\x02\x02\u027F\u027D\x03" +
		"\x02\x02\x02\u0280\u0281\x05L\'\x02\u0281\u0282\x05\x84C\x02\u0282\u0284" +
		"\x03\x02\x02\x02\u0283\u0280\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02" +
		"\u0285\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u028B\x03" +
		"\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288\u028A\x07\x13\x02\x02\u0289" +
		"\u0288\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02" +
		"\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D" +
		"\u028B\x03\x02\x02\x02\u028E\u028F\x07\b\x02\x02\u028FO\x03\x02\x02\x02" +
		"\u0290\u0291\x07S\x02\x02\u0291\u0293\x07q\x02\x02\u0292\u0294\x05x=\x02" +
		"\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0297\x03" +
		"\x02\x02\x02\u0295\u0296\x07\t\x02\x02\u0296\u0298\x05\x80A\x02\u0297" +
		"\u0295\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298Q\x03\x02\x02" +
		"\x02\u0299\u029B\x07U\x02\x02\u029A\u0299\x03\x02\x02\x02\u029A\u029B" +
		"\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x07F\x02\x02" +
		"\u029D\u029E\x05z>\x02\u029ES\x03\x02\x02\x02\u029F\u02A4\x05z>\x02\u02A0" +
		"\u02A1\x07\x04\x02\x02\u02A1\u02A2\x05\x8CG\x02\u02A2\u02A3\x07\x05\x02" +
		"\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A0\x03\x02\x02\x02\u02A4\u02A5" +
		"\x03\x02\x02\x02\u02A5U\x03\x02\x02\x02\u02A6\u02A7\x05T+\x02\u02A7\u02A8" +
		"\x07\t\x02\x02\u02A8\u02A9\x05T+\x02\u02A9W\x03\x02\x02\x02\u02AA\u02AB" +
		"\x073\x02\x02\u02AB\u02AC\x07q\x02\x02\u02AC\u02B0\x07\x07\x02\x02\u02AD" +
		"\u02AF\x07\x13\x02\x02\u02AE\u02AD\x03\x02\x02\x02\u02AF\u02B2\x03\x02" +
		"\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1" +
		"\u02B8\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B4\x05V,\x02" +
		"\u02B4\u02B5\x05\x82B\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6\u02B3\x03" +
		"\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B8" +
		"\u02B9\x03\x02\x02\x02\u02B9\u02BE\x03\x02\x02\x02\u02BA\u02B8\x03\x02" +
		"\x02\x02\u02BB\u02BD\x07\x13\x02\x02\u02BC\u02BB\x03\x02\x02\x02\u02BD" +
		"\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02" +
		"\x02\x02\u02BF\u02C1\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1" +
		"\u02C2\x07\b\x02\x02\u02C2Y\x03\x02\x02\x02\u02C3\u02CC\x071\x02\x02\u02C4" +
		"\u02CC\x07:\x02\x02\u02C5\u02C6\x07g\x02\x02\u02C6\u02CC\x07:\x02\x02" +
		"\u02C7\u02CC\x07@\x02\x02\u02C8\u02CC\x07P\x02\x02\u02C9\u02CC\x07f\x02" +
		"\x02\u02CA\u02CC\x07i\x02\x02\u02CB\u02C3\x03\x02\x02\x02\u02CB\u02C4" +
		"\x03\x02\x02\x02\u02CB\u02C5\x03\x02\x02\x02\u02CB\u02C7\x03\x02\x02\x02" +
		"\u02CB\u02C8\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CA\x03" +
		"\x02\x02\x02\u02CC[\x03\x02\x02\x02\u02CD\u02D3\x05z>\x02\u02CE\u02CF" +
		"\x05\x82B\x02\u02CF\u02D0\x05z>\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1" +
		"\u02CE\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02" +
		"\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5" +
		"\u02D3\x03\x02\x02\x02\u02D6\u02D8\x05\x82B\x02\u02D7\u02D6\x03\x02\x02" +
		"\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8]\x03\x02\x02\x02\u02D9\u02DA\x05" +
		"Z.\x02\u02DA\u02DB\x073\x02\x02\u02DB\u02DC\x07F\x02\x02\u02DC\u02DE\x05" +
		"z>\x02\u02DD\u02DF\x05\\/\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF" +
		"\x03\x02\x02\x02\u02DF_\x03\x02\x02\x02\u02E0\u02E1\x07C\x02\x02\u02E1" +
		"\u02E2\x05z>\x02\u02E2a\x03\x02\x02\x02\u02E3\u02E9\x05R*\x02\u02E4\u02E9" +
		"\x05X-\x02\u02E5\u02E9\x05^0\x02\u02E6\u02E9\x05`1\x02\u02E7\u02E9\x05" +
		"> \x02\u02E8\u02E3\x03\x02\x02\x02\u02E8\u02E4\x03\x02\x02\x02\u02E8\u02E5" +
		"\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E7\x03\x02\x02\x02" +
		"\u02E9c\x03\x02\x02\x02\u02EA\u02EC\x05\x8EH\x02\u02EB\u02EA\x03\x02\x02" +
		"\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EE" +
		"\x05b2\x02\u02EEe\x03\x02\x02\x02\u02EF\u02F0\x07j\x02\x02\u02F0\u02F1" +
		"\x07q\x02\x02\u02F1\u02F5\x07\x07\x02\x02\u02F2\u02F4\x07\x13\x02\x02" +
		"\u02F3\u02F2\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03" +
		"\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02FD\x03\x02\x02\x02\u02F7" +
		"\u02F5\x03\x02\x02\x02\u02F8\u02F9\x05d3\x02\u02F9\u02FA\x05\x84C\x02" +
		"\u02FA\u02FC\x03\x02\x02\x02\u02FB\u02F8\x03\x02\x02\x02\u02FC\u02FF\x03" +
		"\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE" +
		"\u0303\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0302\x07\x13" +
		"\x02\x02\u0301\u0300\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303" +
		"\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0306\x03\x02" +
		"\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306\u0307\x07\b\x02\x02\u0307g" +
		"\x03\x02\x02\x02\u0308\u0309\t\x06\x02\x02\u0309i\x03\x02\x02\x02\u030A" +
		"\u030B\x07H\x02\x02\u030B\u030C\x05h5\x02\u030C\u030D\x05z>\x02\u030D" +
		"\u030E\x07,\x02\x02\u030E\u030F\x07\x19\x02\x02\u030Fk\x03\x02\x02\x02" +
		"\u0310\u031D\x05\b\x05\x02\u0311\u031D\x05\n\x06\x02\u0312\u031D\x05N" +
		"(\x02\u0313\u031D\x05F$\x02\u0314\u031D\x05\f\x07\x02\u0315\u031D\x05" +
		"p9\x02\u0316\u031D\x05P)\x02\u0317\u031D\x05\x14\v\x02\u0318\u031D\x05" +
		"j6\x02\u0319\u031D\x058\x1D\x02\u031A\u031D\x05> \x02\u031B\u031D\x05" +
		"f4\x02\u031C\u0310\x03\x02\x02\x02\u031C\u0311\x03\x02\x02\x02\u031C\u0312" +
		"\x03\x02\x02\x02\u031C\u0313\x03\x02\x02\x02\u031C\u0314\x03\x02\x02\x02" +
		"\u031C\u0315\x03\x02\x02\x02\u031C\u0316\x03\x02\x02\x02\u031C\u0317\x03" +
		"\x02\x02\x02\u031C\u0318\x03\x02\x02\x02\u031C\u0319\x03\x02\x02\x02\u031C" +
		"\u031A\x03\x02\x02\x02\u031C\u031B\x03\x02\x02\x02\u031Dm\x03\x02\x02" +
		"\x02\u031E\u0320\x05\x8EH\x02\u031F\u031E\x03\x02\x02\x02\u031F\u0320" +
		"\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x05l7\x02\u0322" +
		"o\x03\x02\x02\x02\u0323\u0324\x07K\x02\x02\u0324\u0325\x07q\x02\x02\u0325" +
		"\u0329\x07\x07\x02\x02\u0326\u0328\x07\x13\x02\x02\u0327\u0326\x03\x02" +
		"\x02\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329" +
		"\u032A\x03\x02\x02\x02\u032A\u0331\x03\x02\x02\x02\u032B\u0329\x03\x02" +
		"\x02\x02\u032C\u032D\x05n8\x02\u032D\u032E\x05\x84C\x02\u032E\u0330\x03" +
		"\x02\x02\x02\u032F\u032C\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331" +
		"\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0337\x03\x02" +
		"\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0336\x07\x13\x02\x02\u0335" +
		"\u0334\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337\u0335\x03\x02" +
		"\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u033A\x03\x02\x02\x02\u0339" +
		"\u0337\x03\x02\x02\x02\u033A\u033B\x07\b\x02\x02\u033Bq\x03\x02\x02\x02" +
		"\u033C\u033E\x07Z\x02\x02\u033D\u033C\x03\x02\x02\x02\u033D\u033E\x03" +
		"\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0340\x07q\x02\x02\u0340" +
		"\u0341\x07\x06\x02\x02\u0341\u0342\x05\x80A\x02\u0342s\x03\x02\x02\x02" +
		"\u0343\u0349\x05r:\x02\u0344\u034A\x05\x82B\x02\u0345\u0347\x05\x82B\x02" +
		"\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0348\x03" +
		"\x02\x02\x02\u0348\u034A\x05\x8EH\x02\u0349\u0344\x03\x02\x02\x02\u0349" +
		"\u0346\x03\x02\x02\x02\u034Au\x03\x02\x02\x02\u034B\u0351\x05r:\x02\u034C" +
		"\u0352\x05\x82B\x02\u034D\u034F\x05\x82B\x02\u034E\u034D\x03\x02\x02\x02" +
		"\u034E\u034F\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0352\x05" +
		"\x8EH\x02\u0351\u034C\x03\x02\x02\x02\u0351\u034E\x03\x02\x02\x02\u0351" +
		"\u0352\x03\x02\x02\x02\u0352w\x03\x02\x02\x02\u0353\u0357\x07\n\x02\x02" +
		"\u0354\u0356\x07\x13\x02\x02\u0355\u0354\x03\x02\x02\x02\u0356\u0359\x03" +
		"\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358" +
		"\u0361\x03\x02\x02\x02\u0359\u0357\x03\x02\x02\x02\u035A\u035C\x05t;\x02" +
		"\u035B\u035A\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02\u035D\u035B\x03" +
		"\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0360\x03\x02\x02\x02\u035F" +
		"\u035D\x03\x02\x02\x02\u0360\u0362\x05v<\x02\u0361\u035D\x03\x02\x02\x02" +
		"\u0361\u0362\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0364\x07" +
		"\v\x02\x02\u0364y\x03\x02\x02\x02\u0365\u036A\x07q\x02\x02\u0366\u0367" +
		"\x07\f\x02\x02\u0367\u0369\x07q\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369" +
		"\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02" +
		"\x02\x02\u036B{\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D\u036E" +
		"\t\x07\x02\x02\u036E}\x03\x02\x02\x02\u036F\u0376\t\b\x02\x02\u0370\u0373" +
		"\x07c\x02\x02\u0371\u0372\x07a\x02\x02\u0372\u0374\x07\x1B\x02\x02\u0373" +
		"\u0371\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0376\x03\x02" +
		"\x02\x02\u0375\u036F\x03\x02\x02\x02\u0375\u0370\x03\x02\x02\x02\u0376" +
		"\x7F\x03\x02\x02\x02\u0377\u037A\x05~@\x02\u0378\u037A\x05z>\x02\u0379" +
		"\u0377\x03\x02\x02\x02\u0379\u0378\x03\x02\x02\x02\u037A\x81\x03\x02\x02" +
		"\x02\u037B\u037F\x07\r\x02\x02\u037C\u037E\x07\x13\x02\x02\u037D\u037C" +
		"\x03\x02\x02\x02\u037E\u0381\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02" +
		"\u037F\u0380\x03\x02\x02\x02\u0380\u0388\x03\x02\x02\x02\u0381\u037F\x03" +
		"\x02\x02\x02\u0382\u0384\x07\x13\x02\x02\u0383\u0382\x03\x02\x02\x02\u0384" +
		"\u0385\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02\u0385\u0386\x03\x02" +
		"\x02\x02\u0386\u0388\x03\x02\x02\x02\u0387\u037B\x03\x02\x02\x02\u0387" +
		"\u0383\x03\x02\x02\x02\u0388\x83\x03\x02\x02\x02\u0389\u038D\x07\x0E\x02" +
		"\x02\u038A\u038C\x07\x13\x02\x02\u038B\u038A\x03\x02\x02\x02\u038C\u038F" +
		"\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02" +
		"\u038E\u0396\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0392\x07" +
		"\x13\x02\x02\u0391\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393" +
		"\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0396\x03\x02" +
		"\x02\x02\u0395\u0389\x03\x02\x02\x02\u0395\u0391\x03\x02\x02\x02\u0396" +
		"\x85\x03\x02\x02\x02\u0397\u039B\x07\x04\x02\x02\u0398\u039A\x07\x13\x02" +
		"\x02\u0399\u0398\x03\x02\x02\x02\u039A\u039D\x03\x02\x02\x02\u039B\u0399" +
		"\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u03A7\x03\x02\x02\x02" +
		"\u039D\u039B\x03\x02\x02\x02\u039E\u03A4\x05\x8CG\x02\u039F\u03A0\x05" +
		"\x82B\x02\u03A0\u03A1\x05\x8CG\x02\u03A1\u03A3\x03\x02\x02\x02\u03A2\u039F" +
		"\x03\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02" +
		"\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A8\x03\x02\x02\x02\u03A6\u03A4\x03" +
		"\x02\x02\x02\u03A7\u039E\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8" +
		"\u03A9\x03\x02\x02\x02\u03A9\u03AA\x07\x05\x02\x02\u03AA\x87\x03\x02\x02" +
		"\x02\u03AB\u03AC\x07q\x02\x02\u03AC\u03AD\x07\x03\x02\x02\u03AD\u03AE" +
		"\x05\x8CG\x02\u03AE\x89\x03\x02\x02\x02\u03AF\u03B3\x07\x07\x02\x02\u03B0" +
		"\u03B2\x07\x13\x02\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B5\x03\x02" +
		"\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4" +
		"\u03C2\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03BC\x05\x88" +
		"E\x02\u03B7\u03B8\x05\x82B\x02\u03B8\u03B9\x05\x88E\x02\u03B9\u03BB\x03" +
		"\x02\x02\x02\u03BA\u03B7\x03\x02\x02\x02\u03BB\u03BE\x03\x02\x02\x02\u03BC" +
		"\u03BA\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03C0\x03\x02" +
		"\x02\x02\u03BE\u03BC\x03\x02\x02\x02\u03BF\u03C1\x05\x82B\x02\u03C0\u03BF" +
		"\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C3\x03\x02\x02\x02" +
		"\u03C2\u03B6\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03" +
		"\x02\x02\x02\u03C4\u03C5\x07\b\x02\x02\u03C5\x8B\x03\x02\x02\x02\u03C6" +
		"\u03C7\bG\x01\x02\u03C7\u03C8\x07\x0F\x02\x02\u03C8\u03D5\x05\x8CG\r\u03C9" +
		"\u03D5\x05\x86D\x02\u03CA\u03D5\x05\x8AF\x02\u03CB\u03D5\x05z>\x02\u03CC" +
		"\u03D5\x07\x18\x02\x02\u03CD\u03D5\x07\x1A\x02\x02\u03CE\u03D5\x07\x1B" +
		"\x02\x02\u03CF\u03D5\x07\x19\x02\x02\u03D0\u03D1\x07\n\x02\x02\u03D1\u03D2" +
		"\x05\x8CG\x02\u03D2\u03D3\x07\v\x02\x02\u03D3\u03D5\x03\x02\x02\x02\u03D4" +
		"\u03C6\x03\x02\x02\x02\u03D4\u03C9\x03\x02\x02\x02\u03D4\u03CA\x03\x02" +
		"\x02\x02\u03D4\u03CB\x03\x02\x02\x02\u03D4\u03CC\x03\x02\x02\x02\u03D4" +
		"\u03CD\x03\x02\x02\x02\u03D4\u03CE\x03\x02\x02\x02\u03D4\u03CF\x03\x02" +
		"\x02\x02\u03D4\u03D0\x03\x02\x02\x02\u03D5\u03DE\x03\x02\x02\x02\u03D6" +
		"\u03D7\f\f\x02\x02\u03D7\u03D8\t\t\x02\x02\u03D8\u03DD\x05\x8CG\r\u03D9" +
		"\u03DA\f\v\x02\x02\u03DA\u03DB\t\n\x02\x02\u03DB\u03DD\x05\x8CG\f\u03DC" +
		"\u03D6\x03\x02\x02\x02\u03DC\u03D9\x03\x02\x02\x02\u03DD\u03E0\x03\x02" +
		"\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF" +
		"\x8D\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E1\u03E3\t\v\x02\x02" +
		"\u03E2\u03E1\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E2\x03" +
		"\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\x8F\x03\x02\x02\x02\x85" +
		"\x93\x99\x9D\xA3\xAB\xB1\xB5\xBB\xC3\xC9\xCD\xD3\xE4\xE8\xF5\xFA\xFF\u0102" +
		"\u0107\u010A\u0112\u0118\u011C\u0121\u012B\u012F\u0133\u0136\u013E\u0142" +
		"\u0147\u014C\u0155\u0167\u016B\u0175\u017A\u017D\u018C\u0195\u0199\u019B" +
		"\u01A2\u01AA\u01AE\u01B2\u01B6\u01BA\u01BF\u01C4\u01C7\u01CC\u01CF\u01D5" +
		"\u01DB\u01E1\u01E5\u01EA\u01F7\u01FC\u0202\u0208\u0216\u021A\u021D\u0220" +
		"\u022F\u0233\u0238\u023D\u0241\u0245\u024B\u0253\u0259\u025D\u026F\u0272" +
		"\u027D\u0285\u028B\u0293\u0297\u029A\u02A4\u02B0\u02B8\u02BE\u02CB\u02D3" +
		"\u02D7\u02DE\u02E8\u02EB\u02F5\u02FD\u0303\u031C\u031F\u0329\u0331\u0337" +
		"\u033D\u0346\u0349\u034E\u0351\u0357\u035D\u0361\u036A\u0373\u0375\u0379" +
		"\u037F\u0385\u0387\u038D\u0393\u0395\u039B\u03A4\u03A7\u03B3\u03BC\u03C0" +
		"\u03C2\u03D4\u03DC\u03DE\u03E4";
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
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


export class AnnotationContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FppParser.RULE_annotation; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


