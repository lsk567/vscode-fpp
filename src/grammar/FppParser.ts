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
	public static readonly RULE_postMultiAnnotation = 71;
	public static readonly RULE_preAnnotation = 72;
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
		"structAssignment", "structExpr", "expr", "postAnnotation", "postMultiAnnotation", 
		"preAnnotation",
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
			this.state = 149;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 146;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ACTIVE - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (FppParser.ENUM - 55)) | (1 << (FppParser.INCLUDE - 55)) | (1 << (FppParser.INSTANCE - 55)) | (1 << (FppParser.LOCATE - 55)) | (1 << (FppParser.MODULE - 55)) | (1 << (FppParser.PASSIVE - 55)) | (1 << (FppParser.PORT - 55)) | (1 << (FppParser.QUEUED - 55)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (FppParser.STRUCT - 98)) | (1 << (FppParser.TOPOLOGY - 98)) | (1 << (FppParser.TYPE - 98)))) !== 0)) {
				{
				{
				this.state = 152;
				this.moduleMember();
				this.state = 155;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FppParser.T__11:
				case FppParser.NL:
					{
					this.state = 153;
					this.semiDelim();
					}
					break;
				case FppParser.EOF:
					{
					this.state = 154;
					this.match(FppParser.EOF);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 162;
				this.match(FppParser.NL);
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 168;
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
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 170;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.ANNOTATION || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (FppParser.COMMAND - 47)) | (1 << (FppParser.CONNECTIONS - 47)) | (1 << (FppParser.EVENT - 47)) | (1 << (FppParser.HEALTH - 47)) | (1 << (FppParser.IMPORT - 47)) | (1 << (FppParser.INCLUDE - 47)) | (1 << (FppParser.INSTANCE - 47)) | (1 << (FppParser.PARAM - 47)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (FppParser.PRIVATE - 83)) | (1 << (FppParser.TELEMETRY - 83)) | (1 << (FppParser.TEXT - 83)) | (1 << (FppParser.TIME - 83)))) !== 0)) {
				{
				{
				this.state = 176;
				this.topologyMember();
				this.state = 179;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FppParser.T__11:
				case FppParser.NL:
					{
					this.state = 177;
					this.semiDelim();
					}
					break;
				case FppParser.EOF:
					{
					this.state = 178;
					this.match(FppParser.EOF);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 186;
				this.match(FppParser.NL);
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
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
			this.state = 197;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 194;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.ASYNC - 21)) | (1 << (FppParser.COMMAND - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (FppParser.ENUM - 55)) | (1 << (FppParser.EVENT - 55)) | (1 << (FppParser.GUARDED - 55)) | (1 << (FppParser.INCLUDE - 55)) | (1 << (FppParser.INTERNAL - 55)) | (1 << (FppParser.MATCH - 55)) | (1 << (FppParser.OUTPUT - 55)) | (1 << (FppParser.PARAM - 55)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (FppParser.STRUCT - 98)) | (1 << (FppParser.SYNC - 98)) | (1 << (FppParser.TELEMETRY - 98)) | (1 << (FppParser.TEXT - 98)) | (1 << (FppParser.TIME - 98)) | (1 << (FppParser.TYPE - 98)))) !== 0)) {
				{
				{
				this.state = 200;
				this.componentMember();
				this.state = 203;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FppParser.T__11:
				case FppParser.NL:
					{
					this.state = 201;
					this.semiDelim();
					}
					break;
				case FppParser.EOF:
					{
					this.state = 202;
					this.match(FppParser.EOF);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 210;
				this.match(FppParser.NL);
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 216;
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
			this.state = 218;
			this.match(FppParser.TYPE);
			this.state = 219;
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
			this.state = 221;
			this.match(FppParser.ARRAY);
			this.state = 222;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 223;
			this.match(FppParser.T__0);
			this.state = 224;
			this.match(FppParser.T__1);
			this.state = 225;
			_localctx._size = this.expr(0);
			this.state = 226;
			this.match(FppParser.T__2);
			this.state = 227;
			_localctx._type = this.typeName();
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 228;
				this.match(FppParser.DEFAULT);
				this.state = 229;
				_localctx._default_ = this.arrayExpr();
				}
			}

			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 232;
				this.match(FppParser.FORMAT);
				this.state = 233;
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
			this.state = 236;
			this.match(FppParser.CONSTANT);
			this.state = 237;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 238;
			this.match(FppParser.T__0);
			this.state = 239;
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
			this.state = 241;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 242;
			this.match(FppParser.T__3);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 243;
				this.match(FppParser.T__1);
				this.state = 244;
				_localctx._size = this.expr(0);
				this.state = 245;
				this.match(FppParser.T__2);
				}
			}

			this.state = 249;
			_localctx._type = this.typeName();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 250;
				this.match(FppParser.FORMAT);
				this.state = 251;
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
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 254;
				this.preAnnotation();
				}
			}

			this.state = 257;
			this.structMember();
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 258;
					this.match(FppParser.T__4);
					}
				}

				this.state = 261;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 262;
				this.commaDelim();
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
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 265;
				this.preAnnotation();
				}
			}

			this.state = 268;
			this.structMember();
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 269;
					this.match(FppParser.T__4);
					}
				}

				this.state = 272;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 273;
				this.commaDelim();
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
			this.state = 276;
			this.match(FppParser.STRUCT);
			this.state = 277;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 278;
			this.match(FppParser.T__5);
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 279;
				this.match(FppParser.NL);
				}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION || _la === FppParser.IDENTIFIER) {
				{
				this.state = 288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 285;
						this.structMemberN();
						}
						}
					}
					this.state = 290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				this.state = 291;
				this.structMemberL();
				}
			}

			this.state = 294;
			this.match(FppParser.T__6);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 295;
				this.match(FppParser.DEFAULT);
				this.state = 296;
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
			this.state = 299;
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
			this.state = 301;
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
			this.state = 303;
			_localctx._kind = this.commandKind();
			this.state = 304;
			this.match(FppParser.COMMAND);
			this.state = 305;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 306;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.OPCODE) {
				{
				this.state = 309;
				this.match(FppParser.OPCODE);
				this.state = 310;
				_localctx._opcode = this.expr(0);
				}
			}

			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 313;
				this.match(FppParser.PRIORITY);
				this.state = 314;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 317;
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
			this.state = 320;
			this.match(FppParser.PARAM);
			this.state = 321;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 322;
			this.match(FppParser.T__3);
			this.state = 323;
			_localctx._type = this.typeName();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 324;
				this.match(FppParser.DEFAULT);
				this.state = 325;
				_localctx._default_ = this.expr(0);
				}
			}

			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 328;
				this.match(FppParser.ID);
				this.state = 329;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SET) {
				{
				this.state = 332;
				this.match(FppParser.SET);
				this.state = 333;
				this.match(FppParser.OPCODE);
				this.state = 334;
				_localctx._setOpcode = this.expr(0);
				}
			}

			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SAVE) {
				{
				this.state = 337;
				this.match(FppParser.SAVE);
				this.state = 338;
				this.match(FppParser.OPCODE);
				this.state = 339;
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
			this.state = 349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ASYNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 342;
				this.match(FppParser.ASYNC);
				this.state = 343;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.GUARDED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.match(FppParser.GUARDED);
				this.state = 345;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.SYNC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 346;
				this.match(FppParser.SYNC);
				this.state = 347;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.OUTPUT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 348;
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
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.match(FppParser.COMMAND);
				this.state = 352;
				this.match(FppParser.RECV);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 353;
				this.match(FppParser.COMMAND);
				this.state = 354;
				this.match(FppParser.REG);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 355;
				this.match(FppParser.COMMAND);
				this.state = 356;
				this.match(FppParser.RESP);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 357;
				this.match(FppParser.EVENT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 358;
				this.match(FppParser.PARAM);
				this.state = 359;
				this.match(FppParser.GET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 360;
				this.match(FppParser.PARAM);
				this.state = 361;
				this.match(FppParser.SET);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 362;
				this.match(FppParser.TELEMETRY);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 363;
				this.match(FppParser.TEXT);
				this.state = 364;
				this.match(FppParser.EVENT);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 365;
				this.match(FppParser.TIME);
				this.state = 366;
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
			this.state = 371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.SERIAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 369;
				this.match(FppParser.SERIAL);
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 370;
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
			this.state = 373;
			_localctx._kind = this.generalPortKind();
			this.state = 374;
			this.match(FppParser.PORT);
			this.state = 375;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 376;
			this.match(FppParser.T__3);
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 377;
				this.match(FppParser.T__1);
				this.state = 378;
				_localctx._n = this.expr(0);
				this.state = 379;
				this.match(FppParser.T__2);
				}
			}

			this.state = 383;
			_localctx._type = this.generalPortInstanceType();
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 384;
				this.match(FppParser.PRIORITY);
				this.state = 385;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 388;
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
			this.state = 391;
			this.specialPortKind();
			this.state = 392;
			this.match(FppParser.PORT);
			this.state = 393;
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
			this.state = 395;
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
			this.state = 397;
			_localctx._kind = this.telemetryLimitKind();
			this.state = 398;
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
			this.state = 400;
			this.match(FppParser.T__5);
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 401;
				this.match(FppParser.NL);
				}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ORANGE || _la === FppParser.RED || _la === FppParser.YELLOW) {
				{
				this.state = 407;
				this.telemetryLimitExpr();
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 408;
						this.commaDelim();
						this.state = 409;
						this.telemetryLimitExpr();
						}
						}
					}
					this.state = 415;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					this.state = 416;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 421;
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
			this.state = 426;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ALWAYS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.match(FppParser.ALWAYS);
				}
				break;
			case FppParser.ON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.match(FppParser.ON);
				this.state = 425;
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
			this.state = 428;
			this.match(FppParser.TELEMETRY);
			this.state = 429;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 430;
			this.match(FppParser.T__3);
			this.state = 431;
			_localctx._type = this.typeName();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 432;
				this.match(FppParser.ID);
				this.state = 433;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.UPDATE) {
				{
				this.state = 436;
				this.match(FppParser.UPDATE);
				this.state = 437;
				_localctx._update = this.telemetryUpdate();
				}
			}

			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 440;
				this.match(FppParser.FORMAT);
				this.state = 441;
				_localctx._format = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.LOW) {
				{
				this.state = 444;
				this.match(FppParser.LOW);
				this.state = 445;
				_localctx._low = this.telemetryLimit();
				}
			}

			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.HIGH) {
				{
				this.state = 448;
				this.match(FppParser.HIGH);
				this.state = 449;
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
			this.state = 452;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__0) {
				{
				this.state = 453;
				this.match(FppParser.T__0);
				this.state = 454;
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
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 457;
				this.preAnnotation();
				}
			}

			this.state = 460;
			this.enumMember();
			this.state = 466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 461;
					this.match(FppParser.T__4);
					}
				}

				this.state = 464;
				this.postAnnotation();
				}
				break;

			case 2:
				{
				this.state = 465;
				this.commaDelim();
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
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 468;
				this.preAnnotation();
				}
			}

			this.state = 471;
			this.enumMember();
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 472;
					this.match(FppParser.T__4);
					}
				}

				this.state = 475;
				this.postAnnotation();
				}
				break;

			case 2:
				{
				this.state = 476;
				this.commaDelim();
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
			this.state = 479;
			this.match(FppParser.ENUM);
			this.state = 480;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__3) {
				{
				this.state = 481;
				this.match(FppParser.T__3);
				this.state = 482;
				_localctx._type = this.intType();
				}
			}

			this.state = 485;
			this.match(FppParser.T__5);
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 486;
				this.match(FppParser.NL);
				}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION || _la === FppParser.IDENTIFIER) {
				{
				this.state = 495;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 492;
						this.enumMemberN();
						}
						}
					}
					this.state = 497;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 498;
				this.enumMemberL();
				}
			}

			this.state = 501;
			this.match(FppParser.T__6);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 502;
				this.match(FppParser.DEFAULT);
				this.state = 503;
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
			this.state = 517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.match(FppParser.ACTIVITY);
				this.state = 507;
				this.match(FppParser.HIGH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.match(FppParser.ACTIVITY);
				this.state = 509;
				this.match(FppParser.LOW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 510;
				this.match(FppParser.COMMAND);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 511;
				this.match(FppParser.DIAGNOSTIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 512;
				this.match(FppParser.FATAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 513;
				this.match(FppParser.WARNING);
				this.state = 514;
				this.match(FppParser.HIGH);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 515;
				this.match(FppParser.WARNING);
				this.state = 516;
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
			this.state = 519;
			this.match(FppParser.EVENT);
			this.state = 520;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 521;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 524;
			this.match(FppParser.SEVERITY);
			this.state = 525;
			this.eventSeverity();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 526;
				this.match(FppParser.ID);
				this.state = 527;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 530;
			this.match(FppParser.FORMAT);
			this.state = 531;
			_localctx._format = this.match(FppParser.LIT_STRING);
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.THROTTLE) {
				{
				this.state = 532;
				this.match(FppParser.THROTTLE);
				this.state = 533;
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
			this.state = 536;
			this.match(FppParser.INCLUDE);
			this.state = 537;
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
			this.state = 539;
			this.match(FppParser.MATCH);
			this.state = 540;
			_localctx._match = this.match(FppParser.IDENTIFIER);
			this.state = 541;
			this.match(FppParser.WITH);
			this.state = 542;
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
			this.state = 544;
			this.match(FppParser.INTERNAL);
			this.state = 545;
			this.match(FppParser.PORT);
			this.state = 546;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 547;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 550;
				this.match(FppParser.PRIORITY);
				this.state = 551;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (FppParser.ASSERT - 40)) | (1 << (FppParser.BLOCK - 40)) | (1 << (FppParser.DROP - 40)))) !== 0)) {
				{
				this.state = 554;
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
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 557;
				this.preAnnotation();
				}
			}

			this.state = 560;
			this.match(FppParser.PHASE);
			this.state = 561;
			_localctx._phaseExpr = this.expr(0);
			this.state = 562;
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
			this.state = 564;
			this.match(FppParser.INSTANCE);
			this.state = 565;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 566;
			this.match(FppParser.T__3);
			this.state = 567;
			_localctx._fppType = this.qualIdent();
			this.state = 568;
			this.match(FppParser.BASE);
			this.state = 569;
			this.match(FppParser.ID);
			this.state = 570;
			_localctx._base_id = this.expr(0);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.TYPE) {
				{
				this.state = 571;
				this.match(FppParser.TYPE);
				this.state = 572;
				_localctx._cppType = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.AT) {
				{
				this.state = 575;
				this.match(FppParser.AT);
				this.state = 576;
				_localctx._at = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.QUEUE) {
				{
				this.state = 579;
				this.match(FppParser.QUEUE);
				this.state = 580;
				this.match(FppParser.SIZE);
				this.state = 581;
				_localctx._queueSize = this.expr(0);
				}
			}

			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.STACK) {
				{
				this.state = 584;
				this.match(FppParser.STACK);
				this.state = 585;
				this.match(FppParser.SIZE);
				this.state = 586;
				_localctx._stackSize = this.expr(0);
				}
			}

			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 589;
				this.match(FppParser.PRIORITY);
				this.state = 590;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.CPU) {
				{
				this.state = 593;
				this.match(FppParser.CPU);
				this.state = 594;
				_localctx._cpu = this.expr(0);
				}
			}

			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__5) {
				{
				this.state = 597;
				this.match(FppParser.T__5);
				this.state = 601;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 598;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 603;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				}
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.ANNOTATION || _la === FppParser.PHASE) {
					{
					{
					this.state = 604;
					this.initSpecifier();
					this.state = 605;
					this.semiDelim();
					}
					}
					this.state = 611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.NL) {
					{
					{
					this.state = 612;
					this.match(FppParser.NL);
					}
					}
					this.state = 617;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 618;
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
			this.state = 621;
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
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 623;
				this.abstractTypeDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 624;
				this.arrayDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 625;
				this.constantDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 626;
				this.structDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 627;
				this.commandDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 628;
				this.paramDecl();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 629;
				this.generalPortInstanceDecl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 630;
				this.specialPortInstanceDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 631;
				this.telemetryChannelDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 632;
				this.enumDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 633;
				this.eventDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 634;
				this.includeStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 635;
				this.internalPortDecl();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 636;
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
			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 639;
				this.preAnnotation();
				}
			}

			this.state = 642;
			this.componentMemberTempl();
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 643;
				this.match(FppParser.ANNOTATION);
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
	public componentDecl(): ComponentDeclContext {
		let _localctx: ComponentDeclContext = new ComponentDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FppParser.RULE_componentDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			_localctx._kind = this.componentKind();
			this.state = 647;
			this.match(FppParser.COMPONENT);
			this.state = 648;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 649;
			this.match(FppParser.T__5);
			this.state = 653;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 650;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			}
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.ASYNC - 21)) | (1 << (FppParser.COMMAND - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (FppParser.ENUM - 55)) | (1 << (FppParser.EVENT - 55)) | (1 << (FppParser.GUARDED - 55)) | (1 << (FppParser.INCLUDE - 55)) | (1 << (FppParser.INTERNAL - 55)) | (1 << (FppParser.MATCH - 55)) | (1 << (FppParser.OUTPUT - 55)) | (1 << (FppParser.PARAM - 55)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (FppParser.STRUCT - 98)) | (1 << (FppParser.SYNC - 98)) | (1 << (FppParser.TELEMETRY - 98)) | (1 << (FppParser.TEXT - 98)) | (1 << (FppParser.TIME - 98)) | (1 << (FppParser.TYPE - 98)))) !== 0)) {
				{
				{
				this.state = 656;
				this.componentMember();
				this.state = 657;
				this.semiDelim();
				}
				}
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 664;
				this.match(FppParser.NL);
				}
				}
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 670;
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
			this.state = 672;
			this.match(FppParser.PORT);
			this.state = 673;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 674;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 677;
				this.match(FppParser.T__7);
				this.state = 678;
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
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIVATE) {
				{
				this.state = 681;
				this.match(FppParser.PRIVATE);
				}
			}

			this.state = 684;
			this.match(FppParser.INSTANCE);
			this.state = 685;
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
			this.state = 687;
			_localctx._node = this.qualIdent();
			this.state = 692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 688;
				this.match(FppParser.T__1);
				this.state = 689;
				_localctx._index = this.expr(0);
				this.state = 690;
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
			this.state = 694;
			_localctx._source = this.connectionNode();
			this.state = 695;
			this.match(FppParser.T__7);
			this.state = 696;
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
			this.state = 698;
			this.match(FppParser.CONNECTIONS);
			this.state = 699;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 700;
			this.match(FppParser.T__5);
			this.state = 704;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 701;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 706;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.IDENTIFIER) {
				{
				{
				this.state = 707;
				this.connection();
				this.state = 708;
				this.commaDelim();
				}
				}
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 715;
				this.match(FppParser.NL);
				}
				}
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 721;
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
			this.state = 731;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.COMMAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 723;
				this.match(FppParser.COMMAND);
				}
				break;
			case FppParser.EVENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 724;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.TEXT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 725;
				this.match(FppParser.TEXT);
				this.state = 726;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.HEALTH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 727;
				this.match(FppParser.HEALTH);
				}
				break;
			case FppParser.PARAM:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 728;
				this.match(FppParser.PARAM);
				}
				break;
			case FppParser.TELEMETRY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 729;
				this.match(FppParser.TELEMETRY);
				}
				break;
			case FppParser.TIME:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 730;
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
			this.state = 733;
			this.qualIdent();
			this.state = 739;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 734;
					this.commaDelim();
					this.state = 735;
					this.qualIdent();
					}
					}
				}
				this.state = 741;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 743;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 742;
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
			this.state = 745;
			_localctx._kind = this.patternKind();
			this.state = 746;
			this.match(FppParser.CONNECTIONS);
			this.state = 747;
			this.match(FppParser.INSTANCE);
			this.state = 748;
			_localctx._target = this.qualIdent();
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 749;
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
			this.state = 752;
			this.match(FppParser.IMPORT);
			this.state = 753;
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
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.INSTANCE:
			case FppParser.PRIVATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.componentInstanceSpec();
				}
				break;
			case FppParser.CONNECTIONS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
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
				this.state = 757;
				this.patternGraphStmt();
				}
				break;
			case FppParser.IMPORT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 758;
				this.topologyImportStmt();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 759;
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
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 762;
				this.preAnnotation();
				}
			}

			this.state = 765;
			this.topologyMemberTempl();
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 766;
				this.match(FppParser.ANNOTATION);
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
	public topologyDecl(): TopologyDeclContext {
		let _localctx: TopologyDeclContext = new TopologyDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, FppParser.RULE_topologyDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(FppParser.TOPOLOGY);
			this.state = 770;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 771;
			this.match(FppParser.T__5);
			this.state = 775;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 772;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 777;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.ANNOTATION || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (FppParser.COMMAND - 47)) | (1 << (FppParser.CONNECTIONS - 47)) | (1 << (FppParser.EVENT - 47)) | (1 << (FppParser.HEALTH - 47)) | (1 << (FppParser.IMPORT - 47)) | (1 << (FppParser.INCLUDE - 47)) | (1 << (FppParser.INSTANCE - 47)) | (1 << (FppParser.PARAM - 47)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (FppParser.PRIVATE - 83)) | (1 << (FppParser.TELEMETRY - 83)) | (1 << (FppParser.TEXT - 83)) | (1 << (FppParser.TIME - 83)))) !== 0)) {
				{
				{
				this.state = 778;
				this.topologyMember();
				this.state = 779;
				this.semiDelim();
				}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 786;
				this.match(FppParser.NL);
				}
				}
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 792;
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
			this.state = 794;
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
			this.state = 796;
			this.match(FppParser.LOCATE);
			this.state = 797;
			_localctx._kind = this.locationKind();
			this.state = 798;
			_localctx._name = this.qualIdent();
			this.state = 799;
			this.match(FppParser.AT);
			this.state = 800;
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
			this.state = 814;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.abstractTypeDecl();
				}
				break;
			case FppParser.ARRAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 803;
				this.arrayDecl();
				}
				break;
			case FppParser.ACTIVE:
			case FppParser.PASSIVE:
			case FppParser.QUEUED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 804;
				this.componentDecl();
				}
				break;
			case FppParser.INSTANCE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 805;
				this.componentInstanceDecl();
				}
				break;
			case FppParser.CONSTANT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 806;
				this.constantDecl();
				}
				break;
			case FppParser.MODULE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 807;
				this.moduleDecl();
				}
				break;
			case FppParser.PORT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 808;
				this.portDecl();
				}
				break;
			case FppParser.STRUCT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 809;
				this.structDecl();
				}
				break;
			case FppParser.LOCATE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 810;
				this.locationStmt();
				}
				break;
			case FppParser.ENUM:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 811;
				this.enumDecl();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 812;
				this.includeStmt();
				}
				break;
			case FppParser.TOPOLOGY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 813;
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
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 816;
				this.preAnnotation();
				}
			}

			this.state = 819;
			this.moduleMemberTempl();
			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 820;
				this.match(FppParser.ANNOTATION);
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
	public moduleDecl(): ModuleDeclContext {
		let _localctx: ModuleDeclContext = new ModuleDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, FppParser.RULE_moduleDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.match(FppParser.MODULE);
			this.state = 824;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 825;
			this.match(FppParser.T__5);
			this.state = 829;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 826;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 831;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			}
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ACTIVE - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (FppParser.ENUM - 55)) | (1 << (FppParser.INCLUDE - 55)) | (1 << (FppParser.INSTANCE - 55)) | (1 << (FppParser.LOCATE - 55)) | (1 << (FppParser.MODULE - 55)) | (1 << (FppParser.PASSIVE - 55)) | (1 << (FppParser.PORT - 55)) | (1 << (FppParser.QUEUED - 55)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (FppParser.STRUCT - 98)) | (1 << (FppParser.TOPOLOGY - 98)) | (1 << (FppParser.TYPE - 98)))) !== 0)) {
				{
				{
				this.state = 832;
				this.moduleMember();
				this.state = 833;
				this.semiDelim();
				}
				}
				this.state = 839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 840;
				this.match(FppParser.NL);
				}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 846;
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
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF) {
				{
				this.state = 848;
				this.match(FppParser.REF);
				}
			}

			this.state = 851;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 852;
			this.match(FppParser.T__3);
			this.state = 853;
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
			this.state = 855;
			this.formalParameter();
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 856;
					this.match(FppParser.T__4);
					}
				}

				this.state = 859;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 860;
				this.commaDelim();
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
			this.state = 863;
			this.formalParameter();
			this.state = 869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 864;
					this.match(FppParser.T__4);
					}
				}

				this.state = 867;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 868;
				this.commaDelim();
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
			this.state = 871;
			this.match(FppParser.T__8);
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 872;
				this.match(FppParser.NL);
				}
				}
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF || _la === FppParser.IDENTIFIER) {
				{
				this.state = 881;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 878;
						this.formalParameterN();
						}
						}
					}
					this.state = 883;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
				}
				this.state = 884;
				this.formalParamaterL();
				}
			}

			this.state = 887;
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
			this.state = 889;
			this.match(FppParser.IDENTIFIER);
			this.state = 894;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 890;
					this.match(FppParser.T__10);
					this.state = 891;
					this.match(FppParser.IDENTIFIER);
					}
					}
				}
				this.state = 896;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
			this.state = 897;
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
			this.state = 905;
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
				this.state = 899;
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
				this.state = 900;
				_localctx._type = this.match(FppParser.STRING);
				this.state = 903;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.SIZE) {
					{
					this.state = 901;
					this.match(FppParser.SIZE);
					this.state = 902;
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
			this.state = 909;
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
				this.state = 907;
				this.primitiveType();
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 908;
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
			this.state = 923;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 911;
				this.match(FppParser.T__4);
				this.state = 915;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 912;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 917;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 919;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 918;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 921;
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
	public semiDelim(): SemiDelimContext {
		let _localctx: SemiDelimContext = new SemiDelimContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, FppParser.RULE_semiDelim);
		try {
			let _alt: number;
			this.state = 937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 925;
				this.match(FppParser.T__11);
				this.state = 929;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 926;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 931;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 932;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 935;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
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
			this.state = 939;
			this.match(FppParser.T__1);
			this.state = 943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 940;
				this.match(FppParser.NL);
				}
				}
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 955;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FppParser.T__1) | (1 << FppParser.T__5) | (1 << FppParser.T__8) | (1 << FppParser.T__12) | (1 << FppParser.LIT_BOOLEAN) | (1 << FppParser.LIT_STRING) | (1 << FppParser.LIT_FLOAT) | (1 << FppParser.LIT_INT))) !== 0) || _la === FppParser.IDENTIFIER) {
				{
				this.state = 946;
				this.expr(0);
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					{
					this.state = 947;
					this.commaDelim();
					this.state = 948;
					this.expr(0);
					}
					}
					this.state = 954;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 957;
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
			this.state = 959;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 960;
			this.match(FppParser.T__0);
			this.state = 961;
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
			this.state = 963;
			this.match(FppParser.T__5);
			this.state = 967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 964;
				this.match(FppParser.NL);
				}
				}
				this.state = 969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 982;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 970;
				this.structAssignment();
				this.state = 976;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 971;
						this.commaDelim();
						this.state = 972;
						this.structAssignment();
						}
						}
					}
					this.state = 978;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
				}
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					this.state = 979;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 984;
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
			this.state = 1000;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__12:
				{
				this.state = 987;
				this.match(FppParser.T__12);
				this.state = 988;
				_localctx._unary = this.expr(11);
				}
				break;
			case FppParser.T__1:
				{
				this.state = 989;
				this.arrayExpr();
				}
				break;
			case FppParser.T__5:
				{
				this.state = 990;
				this.structExpr();
				}
				break;
			case FppParser.IDENTIFIER:
				{
				this.state = 991;
				this.qualIdent();
				}
				break;
			case FppParser.LIT_BOOLEAN:
				{
				this.state = 992;
				this.match(FppParser.LIT_BOOLEAN);
				}
				break;
			case FppParser.LIT_FLOAT:
				{
				this.state = 993;
				this.match(FppParser.LIT_FLOAT);
				}
				break;
			case FppParser.LIT_INT:
				{
				this.state = 994;
				this.match(FppParser.LIT_INT);
				}
				break;
			case FppParser.LIT_STRING:
				{
				this.state = 995;
				this.match(FppParser.LIT_STRING);
				}
				break;
			case FppParser.T__8:
				{
				this.state = 996;
				this.match(FppParser.T__8);
				this.state = 997;
				_localctx._p = this.expr(0);
				this.state = 998;
				this.match(FppParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1010;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1008;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 1002;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1003;
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
						this.state = 1004;
						_localctx._right = this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 1005;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1006;
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
						this.state = 1007;
						_localctx._right = this.expr(10);
						}
						break;
					}
					}
				}
				this.state = 1012;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1013;
			this.match(FppParser.ANNOTATION);
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1014;
				this.match(FppParser.NL);
				}
				}
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FppParser.NL);
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
	public postMultiAnnotation(): PostMultiAnnotationContext {
		let _localctx: PostMultiAnnotationContext = new PostMultiAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, FppParser.RULE_postMultiAnnotation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1019;
					this.match(FppParser.ANNOTATION);
					this.state = 1020;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 1025;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			this.state = 1026;
			this.match(FppParser.ANNOTATION);
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1027;
				this.match(FppParser.NL);
				}
				}
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FppParser.NL);
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
		this.enterRule(_localctx, 144, FppParser.RULE_preAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1032;
				this.match(FppParser.ANNOTATION);
				this.state = 1033;
				this.match(FppParser.NL);
				}
				}
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FppParser.ANNOTATION);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u0411\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x03\x02\x07\x02\x96\n\x02\f\x02\x0E" +
		"\x02\x99\v\x02\x03\x02\x03\x02\x03\x02\x05\x02\x9E\n\x02\x07\x02\xA0\n" +
		"\x02\f\x02\x0E\x02\xA3\v\x02\x03\x02\x07\x02\xA6\n\x02\f\x02\x0E\x02\xA9" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\xAE\n\x03\f\x03\x0E\x03\xB1\v\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\xB6\n\x03\x07\x03\xB8\n\x03\f\x03\x0E" +
		"\x03\xBB\v\x03\x03\x03\x07\x03\xBE\n\x03\f\x03\x0E\x03\xC1\v\x03\x03\x03" +
		"\x03\x03\x03\x04\x07\x04\xC6\n\x04\f\x04\x0E\x04\xC9\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04\xCE\n\x04\x07\x04\xD0\n\x04\f\x04\x0E\x04\xD3\v\x04" +
		"\x03\x04\x07\x04\xD6\n\x04\f\x04\x0E\x04\xD9\v\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xE9\n\x06\x03\x06\x03\x06\x05\x06\xED\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\b\xFA\n\b\x03\b\x03\b\x03\b\x05\b\xFF\n\b\x03\t\x05\t\u0102" +
		"\n\t\x03\t\x03\t\x05\t\u0106\n\t\x03\t\x03\t\x05\t\u010A\n\t\x03\n\x05" +
		"\n\u010D\n\n\x03\n\x03\n\x05\n\u0111\n\n\x03\n\x03\n\x05\n\u0115\n\n\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\u011B\n\v\f\v\x0E\v\u011E\v\v\x03\v\x07\v\u0121" +
		"\n\v\f\v\x0E\v\u0124\v\v\x03\v\x05\v\u0127\n\v\x03\v\x03\v\x03\v\x05\v" +
		"\u012C\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0136\n\x0E\x03\x0E\x03\x0E\x05\x0E\u013A\n\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u013E\n\x0E\x03\x0E\x05\x0E\u0141\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u0149\n\x0F\x03\x0F\x03\x0F\x05\x0F\u014D" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0152\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0157\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u0160\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u0172\n\x11\x03\x12\x03\x12\x05\x12\u0176\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0180" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0185\n\x13\x03\x13\x05\x13\u0188" +
		"\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x07\x17\u0195\n\x17\f\x17\x0E\x17\u0198\v\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u019E\n\x17\f\x17\x0E\x17\u01A1" +
		"\v\x17\x03\x17\x05\x17\u01A4\n\x17\x05\x17\u01A6\n\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u01AD\n\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x05\x19\u01B5\n\x19\x03\x19\x03\x19\x05\x19\u01B9" +
		"\n\x19\x03\x19\x03\x19\x05\x19\u01BD\n\x19\x03\x19\x03\x19\x05\x19\u01C1" +
		"\n\x19\x03\x19\x03\x19\x05\x19\u01C5\n\x19\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u01CA\n\x1A\x03\x1B\x05\x1B\u01CD\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01D1" +
		"\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01D5\n\x1B\x03\x1C\x05\x1C\u01D8\n\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u01DC\n\x1C\x03\x1C\x03\x1C\x05\x1C\u01E0\n\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01E6\n\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\u01EA\n\x1D\f\x1D\x0E\x1D\u01ED\v\x1D\x03\x1D\x07\x1D\u01F0\n\x1D" +
		"\f\x1D\x0E\x1D\u01F3\v\x1D\x03\x1D\x05\x1D\u01F6\n\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u01FB\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0208\n\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u020D\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u0213\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0219\n\x1F\x03" +
		" \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\u0227" +
		"\n\"\x03\"\x03\"\x05\"\u022B\n\"\x03\"\x05\"\u022E\n\"\x03#\x05#\u0231" +
		"\n#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05" +
		"$\u0240\n$\x03$\x03$\x05$\u0244\n$\x03$\x03$\x03$\x05$\u0249\n$\x03$\x03" +
		"$\x03$\x05$\u024E\n$\x03$\x03$\x05$\u0252\n$\x03$\x03$\x05$\u0256\n$\x03" +
		"$\x03$\x07$\u025A\n$\f$\x0E$\u025D\v$\x03$\x03$\x03$\x07$\u0262\n$\f$" +
		"\x0E$\u0265\v$\x03$\x07$\u0268\n$\f$\x0E$\u026B\v$\x03$\x05$\u026E\n$" +
		"\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x05&\u0280\n&\x03\'\x05\'\u0283\n\'\x03\'\x03\'\x05\'\u0287" +
		"\n\'\x03(\x03(\x03(\x03(\x03(\x07(\u028E\n(\f(\x0E(\u0291\v(\x03(\x03" +
		"(\x03(\x07(\u0296\n(\f(\x0E(\u0299\v(\x03(\x07(\u029C\n(\f(\x0E(\u029F" +
		"\v(\x03(\x03(\x03)\x03)\x03)\x05)\u02A6\n)\x03)\x03)\x05)\u02AA\n)\x03" +
		"*\x05*\u02AD\n*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x05+\u02B7\n+" +
		"\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u02C1\n-\f-\x0E-\u02C4\v" +
		"-\x03-\x03-\x03-\x07-\u02C9\n-\f-\x0E-\u02CC\v-\x03-\x07-\u02CF\n-\f-" +
		"\x0E-\u02D2\v-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05." +
		"\u02DE\n.\x03/\x03/\x03/\x03/\x07/\u02E4\n/\f/\x0E/\u02E7\v/\x03/\x05" +
		"/\u02EA\n/\x030\x030\x030\x030\x030\x050\u02F1\n0\x031\x031\x031\x032" +
		"\x032\x032\x032\x032\x052\u02FB\n2\x033\x053\u02FE\n3\x033\x033\x053\u0302" +
		"\n3\x034\x034\x034\x034\x074\u0308\n4\f4\x0E4\u030B\v4\x034\x034\x034" +
		"\x074\u0310\n4\f4\x0E4\u0313\v4\x034\x074\u0316\n4\f4\x0E4\u0319\v4\x03" +
		"4\x034\x035\x035\x036\x036\x036\x036\x036\x036\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x057\u0331\n7\x038\x058\u0334\n8" +
		"\x038\x038\x058\u0338\n8\x039\x039\x039\x039\x079\u033E\n9\f9\x0E9\u0341" +
		"\v9\x039\x039\x039\x079\u0346\n9\f9\x0E9\u0349\v9\x039\x079\u034C\n9\f" +
		"9\x0E9\u034F\v9\x039\x039\x03:\x05:\u0354\n:\x03:\x03:\x03:\x03:\x03;" +
		"\x03;\x05;\u035C\n;\x03;\x03;\x05;\u0360\n;\x03<\x03<\x05<\u0364\n<\x03" +
		"<\x03<\x05<\u0368\n<\x03=\x03=\x07=\u036C\n=\f=\x0E=\u036F\v=\x03=\x07" +
		"=\u0372\n=\f=\x0E=\u0375\v=\x03=\x05=\u0378\n=\x03=\x03=\x03>\x03>\x03" +
		">\x07>\u037F\n>\f>\x0E>\u0382\v>\x03?\x03?\x03@\x03@\x03@\x03@\x05@\u038A" +
		"\n@\x05@\u038C\n@\x03A\x03A\x05A\u0390\nA\x03B\x03B\x07B\u0394\nB\fB\x0E" +
		"B\u0397\vB\x03B\x06B\u039A\nB\rB\x0EB\u039B\x05B\u039E\nB\x03C\x03C\x07" +
		"C\u03A2\nC\fC\x0EC\u03A5\vC\x03C\x06C\u03A8\nC\rC\x0EC\u03A9\x05C\u03AC" +
		"\nC\x03D\x03D\x07D\u03B0\nD\fD\x0ED\u03B3\vD\x03D\x03D\x03D\x03D\x07D" +
		"\u03B9\nD\fD\x0ED\u03BC\vD\x05D\u03BE\nD\x03D\x03D\x03E\x03E\x03E\x03" +
		"E\x03F\x03F\x07F\u03C8\nF\fF\x0EF\u03CB\vF\x03F\x03F\x03F\x03F\x07F\u03D1" +
		"\nF\fF\x0EF\u03D4\vF\x03F\x05F\u03D7\nF\x05F\u03D9\nF\x03F\x03F\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03EB" +
		"\nG\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u03F3\nG\fG\x0EG\u03F6\vG\x03H" +
		"\x03H\x06H\u03FA\nH\rH\x0EH\u03FB\x03I\x03I\x07I\u0400\nI\fI\x0EI\u0403" +
		"\vI\x03I\x03I\x06I\u0407\nI\rI\x0EI\u0408\x03J\x03J\x06J\u040D\nJ\rJ\x0E" +
		"J\u040E\x03J\x02\x02\x03\x8CK\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x02\v\x05\x02**..88\x05\x02+" +
		"+??ee\x05\x02NNYYpp\x05\x02&&QQWW\b\x022244FFSSjjll\x03\x02\x1C#\x04\x02" +
		"\x1C%//\x03\x02\x10\x11\x04\x02\x0F\x0F\x12\x12\x02\u048A\x02\x97\x03" +
		"\x02\x02\x02\x04\xAF\x03\x02\x02\x02\x06\xC7\x03\x02\x02\x02\b\xDC\x03" +
		"\x02\x02\x02\n\xDF\x03\x02\x02\x02\f\xEE\x03\x02\x02\x02\x0E\xF3\x03\x02" +
		"\x02\x02\x10\u0101\x03\x02\x02\x02\x12\u010C\x03\x02\x02\x02\x14\u0116" +
		"\x03\x02\x02\x02\x16\u012D\x03\x02\x02\x02\x18\u012F\x03\x02\x02\x02\x1A" +
		"\u0131\x03\x02\x02\x02\x1C\u0142\x03\x02\x02\x02\x1E\u015F\x03\x02\x02" +
		"\x02 \u0171\x03\x02\x02\x02\"\u0175\x03\x02\x02\x02$\u0177\x03\x02\x02" +
		"\x02&\u0189\x03\x02\x02\x02(\u018D\x03\x02\x02\x02*\u018F\x03\x02\x02" +
		"\x02,\u0192\x03\x02\x02\x02.\u01AC\x03\x02\x02\x020\u01AE\x03\x02\x02" +
		"\x022\u01C6\x03\x02\x02\x024\u01CC\x03\x02\x02\x026\u01D7\x03\x02\x02" +
		"\x028\u01E1\x03\x02\x02\x02:\u0207\x03\x02\x02\x02<\u0209\x03\x02\x02" +
		"\x02>\u021A\x03\x02\x02\x02@\u021D\x03\x02\x02\x02B\u0222\x03\x02\x02" +
		"\x02D\u0230\x03\x02\x02\x02F\u0236\x03\x02\x02\x02H\u026F\x03\x02\x02" +
		"\x02J\u027F\x03\x02\x02\x02L\u0282\x03\x02\x02\x02N\u0288\x03\x02\x02" +
		"\x02P\u02A2\x03\x02\x02\x02R\u02AC\x03\x02\x02\x02T\u02B1\x03\x02\x02" +
		"\x02V\u02B8\x03\x02\x02\x02X\u02BC\x03\x02\x02\x02Z\u02DD\x03\x02\x02" +
		"\x02\\\u02DF\x03\x02\x02\x02^\u02EB\x03\x02\x02\x02`\u02F2\x03\x02\x02" +
		"\x02b\u02FA\x03\x02\x02\x02d\u02FD\x03\x02\x02\x02f\u0303\x03\x02\x02" +
		"\x02h\u031C\x03\x02\x02\x02j\u031E\x03\x02\x02\x02l\u0330\x03\x02\x02" +
		"\x02n\u0333\x03\x02\x02\x02p\u0339\x03\x02\x02\x02r\u0353\x03\x02\x02" +
		"\x02t\u0359\x03\x02\x02\x02v\u0361\x03\x02\x02\x02x\u0369\x03\x02\x02" +
		"\x02z\u037B\x03\x02\x02\x02|\u0383\x03\x02\x02\x02~\u038B\x03\x02\x02" +
		"\x02\x80\u038F\x03\x02\x02\x02\x82\u039D\x03\x02\x02\x02\x84\u03AB\x03" +
		"\x02\x02\x02\x86\u03AD\x03\x02\x02\x02\x88\u03C1\x03\x02\x02\x02\x8A\u03C5" +
		"\x03\x02\x02\x02\x8C\u03EA\x03\x02\x02\x02\x8E\u03F7\x03\x02\x02\x02\x90" +
		"\u0401\x03\x02\x02\x02\x92\u040C\x03\x02\x02\x02\x94\x96\x07\x13\x02\x02" +
		"\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02" +
		"\x97\x98\x03\x02\x02\x02\x98\xA1\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02" +
		"\x9A\x9D\x05n8\x02\x9B\x9E\x05\x84C\x02\x9C\x9E\x07\x02\x02\x03\x9D\x9B" +
		"\x03\x02\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F\x9A" +
		"\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2" +
		"\x03\x02\x02\x02\xA2\xA7\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA6" +
		"\x07\x13\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5" +
		"\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA7" +
		"\x03\x02\x02\x02\xAA\xAB\x07\x02\x02\x03\xAB\x03\x03\x02\x02\x02\xAC\xAE" +
		"\x07\x13\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD" +
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB9\x03\x02\x02\x02\xB1\xAF" +
		"\x03\x02\x02\x02\xB2\xB5\x05d3\x02\xB3\xB6\x05\x84C\x02\xB4\xB6\x07\x02" +
		"\x02\x03\xB5\xB3\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB8\x03\x02" +
		"\x02\x02\xB7\xB2\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02" +
		"\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBF\x03\x02\x02\x02\xBB\xB9\x03\x02" +
		"\x02\x02\xBC\xBE\x07\x13\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC1\x03\x02" +
		"\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02" +
		"\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC3\x07\x02\x02\x03\xC3\x05\x03\x02" +
		"\x02\x02\xC4\xC6\x07\x13\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02" +
		"\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xD1\x03\x02" +
		"\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCD\x05L\'\x02\xCB\xCE\x05\x84C\x02" +
		"\xCC\xCE\x07\x02\x02\x03\xCD\xCB\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02" +
		"\xCE\xD0\x03\x02\x02\x02\xCF\xCA\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02" +
		"\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD7\x03\x02\x02\x02" +
		"\xD3\xD1\x03\x02\x02\x02\xD4\xD6\x07\x13\x02\x02\xD5\xD4\x03\x02\x02\x02" +
		"\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02" +
		"\xD8\xDA\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\x07\x02\x02\x03" +
		"\xDB\x07\x03\x02\x02\x02\xDC\xDD\x07l\x02\x02\xDD\xDE\x07q\x02\x02\xDE" +
		"\t\x03\x02\x02\x02\xDF\xE0\x07)\x02\x02\xE0\xE1\x07q\x02\x02\xE1\xE2\x07" +
		"\x03\x02\x02\xE2\xE3\x07\x04\x02\x02\xE3\xE4\x05\x8CG\x02\xE4\xE5\x07" +
		"\x05\x02\x02\xE5\xE8\x05\x80A\x02\xE6\xE7\x076\x02\x02\xE7\xE9\x05\x86" +
		"D\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC\x03\x02" +
		"\x02\x02\xEA\xEB\x07=\x02\x02\xEB\xED\x07\x19\x02\x02\xEC\xEA\x03\x02" +
		"\x02\x02\xEC\xED\x03\x02\x02\x02\xED\v\x03\x02\x02\x02\xEE\xEF\x074\x02" +
		"\x02\xEF\xF0\x07q\x02\x02\xF0\xF1\x07\x03\x02\x02\xF1\xF2\x05\x8CG\x02" +
		"\xF2\r\x03\x02\x02\x02\xF3\xF4\x07q\x02\x02\xF4\xF9\x07\x06\x02\x02\xF5" +
		"\xF6\x07\x04\x02\x02\xF6\xF7\x05\x8CG\x02\xF7\xF8\x07\x05\x02\x02\xF8" +
		"\xFA\x03\x02\x02\x02\xF9\xF5\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA" +
		"\xFB\x03\x02\x02\x02\xFB\xFE\x05\x80A\x02\xFC\xFD\x07=\x02\x02\xFD\xFF" +
		"\x07\x19\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\x0F" +
		"\x03\x02\x02\x02\u0100\u0102\x05\x92J\x02\u0101\u0100\x03\x02\x02\x02" +
		"\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0109\x05" +
		"\x0E\b\x02\u0104\u0106\x07\x07\x02\x02\u0105\u0104\x03\x02\x02\x02\u0105" +
		"\u0106\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010A\x05\x90" +
		"I\x02\u0108\u010A\x05\x82B\x02\u0109\u0105\x03\x02\x02\x02\u0109\u0108" +
		"\x03\x02\x02\x02\u010A\x11\x03\x02\x02\x02\u010B\u010D\x05\x92J\x02\u010C" +
		"\u010B\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02" +
		"\x02\x02\u010E\u0114\x05\x0E\b\x02\u010F\u0111\x07\x07\x02\x02\u0110\u010F" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112\u0115\x05\x90I\x02\u0113\u0115\x05\x82B\x02\u0114\u0110\x03\x02" +
		"\x02\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
		"\x13\x03\x02\x02\x02\u0116\u0117\x07d\x02\x02\u0117\u0118\x07q\x02\x02" +
		"\u0118\u011C\x07\b\x02\x02\u0119\u011B\x07\x13\x02\x02\u011A\u0119\x03" +
		"\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u0126\x03\x02\x02\x02\u011E\u011C\x03\x02" +
		"\x02\x02\u011F\u0121\x05\x10\t\x02\u0120\u011F\x03\x02\x02\x02\u0121\u0124" +
		"\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02" +
		"\u0123\u0125\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0127\x05" +
		"\x12\n\x02\u0126\u0122\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127" +
		"\u0128\x03\x02\x02\x02\u0128\u012B\x07\t\x02\x02\u0129\u012A\x076\x02" +
		"\x02\u012A\u012C\x05\x8AF\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C" +
		"\x03\x02\x02\x02\u012C\x15\x03\x02\x02\x02\u012D\u012E\t\x02\x02\x02\u012E" +
		"\x17\x03\x02\x02\x02\u012F\u0130\t\x03\x02\x02\u0130\x19\x03\x02\x02\x02" +
		"\u0131\u0132\x05\x18\r\x02\u0132\u0133\x071\x02\x02\u0133\u0135\x07q\x02" +
		"\x02\u0134\u0136\x05x=\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03" +
		"\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0138\x07M\x02\x02\u0138" +
		"\u013A\x05\x8CG\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02" +
		"\x02\u013A\u013D\x03\x02\x02\x02\u013B\u013C\x07T\x02\x02\u013C\u013E" +
		"\x05\x8CG\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02" +
		"\u013E\u0140\x03\x02\x02\x02\u013F\u0141\x05\x16\f\x02\u0140\u013F\x03" +
		"\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\x1B\x03\x02\x02\x02\u0142" +
		"\u0143\x07P\x02\x02\u0143\u0144\x07q\x02\x02\u0144\u0145\x07\x06\x02\x02" +
		"\u0145\u0148\x05\x80A\x02\u0146\u0147\x076\x02\x02\u0147\u0149\x05\x8C" +
		"G\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014C" +
		"\x03\x02\x02\x02\u014A\u014B\x07B\x02\x02\u014B\u014D\x05\x8CG\x02\u014C" +
		"\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u0151\x03\x02" +
		"\x02\x02\u014E\u014F\x07_\x02\x02\u014F\u0150\x07M\x02\x02\u0150\u0152" +
		"\x05\x8CG\x02\u0151\u014E\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
		"\u0152\u0156\x03\x02\x02\x02\u0153\u0154\x07]\x02\x02\u0154\u0155\x07" +
		"M\x02\x02\u0155\u0157\x05\x8CG\x02\u0156\u0153\x03\x02\x02\x02\u0156\u0157" +
		"\x03\x02\x02\x02\u0157\x1D\x03\x02\x02\x02\u0158\u0159\x07+\x02\x02\u0159" +
		"\u0160\x07E\x02\x02\u015A\u015B\x07?\x02\x02\u015B\u0160\x07E\x02\x02" +
		"\u015C\u015D\x07e\x02\x02\u015D\u0160\x07E\x02\x02\u015E\u0160\x07O\x02" +
		"\x02\u015F\u0158\x03\x02\x02\x02\u015F\u015A\x03\x02\x02\x02\u015F\u015C" +
		"\x03\x02\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160\x1F\x03\x02\x02\x02" +
		"\u0161\u0162\x071\x02\x02\u0162\u0172\x07X\x02\x02\u0163\u0164\x071\x02" +
		"\x02\u0164\u0172\x07[\x02\x02\u0165\u0166\x071\x02\x02\u0166\u0172\x07" +
		"\\\x02\x02\u0167\u0172\x07:\x02\x02\u0168\u0169\x07P\x02\x02\u0169\u0172" +
		"\x07>\x02\x02\u016A\u016B\x07P\x02\x02\u016B\u0172\x07_\x02\x02\u016C" +
		"\u0172\x07f\x02\x02\u016D\u016E\x07g\x02\x02\u016E\u0172\x07:\x02\x02" +
		"\u016F\u0170\x07i\x02\x02\u0170\u0172\x07>\x02\x02\u0171\u0161\x03\x02" +
		"\x02\x02\u0171\u0163\x03\x02\x02\x02\u0171\u0165\x03\x02\x02\x02\u0171" +
		"\u0167\x03\x02\x02\x02\u0171\u0168\x03\x02\x02\x02\u0171\u016A\x03\x02" +
		"\x02\x02\u0171\u016C\x03\x02\x02\x02\u0171\u016D\x03\x02\x02\x02\u0171" +
		"\u016F\x03\x02\x02\x02\u0172!\x03\x02\x02\x02\u0173\u0176\x07^\x02\x02" +
		"\u0174\u0176\x05z>\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0174\x03\x02" +
		"\x02\x02\u0176#\x03\x02\x02\x02\u0177\u0178\x05\x1E\x10\x02\u0178\u0179" +
		"\x07S\x02\x02\u0179\u017A\x07q\x02\x02\u017A\u017F\x07\x06\x02\x02\u017B" +
		"\u017C\x07\x04\x02\x02\u017C\u017D\x05\x8CG\x02\u017D\u017E\x07\x05\x02" +
		"\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017B\x03\x02\x02\x02\u017F\u0180" +
		"\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0184\x05\"\x12\x02" +
		"\u0182\u0183\x07T\x02\x02\u0183\u0185\x05\x8CG\x02\u0184\u0182\x03\x02" +
		"\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0187\x03\x02\x02\x02\u0186" +
		"\u0188\x05\x16\f\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02" +
		"\x02\u0188%\x03\x02\x02\x02\u0189\u018A\x05 \x11\x02\u018A\u018B\x07S" +
		"\x02\x02\u018B\u018C\x07q\x02\x02\u018C\'\x03\x02\x02\x02\u018D\u018E" +
		"\t\x04\x02\x02\u018E)\x03\x02\x02\x02\u018F\u0190\x05(\x15\x02\u0190\u0191" +
		"\x05\x8CG\x02\u0191+\x03\x02\x02\x02\u0192\u0196\x07\b\x02\x02\u0193\u0195" +
		"\x07\x13\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02" +
		"\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u01A5\x03" +
		"\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019F\x05*\x16\x02\u019A" +
		"\u019B\x05\x82B\x02\u019B\u019C\x05*\x16\x02\u019C\u019E\x03\x02\x02\x02" +
		"\u019D\u019A\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03" +
		"\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1" +
		"\u019F\x03\x02\x02\x02\u01A2\u01A4\x05\x82B\x02\u01A3\u01A2\x03\x02\x02" +
		"\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u0199" +
		"\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02" +
		"\u01A7\u01A8\x07\t\x02\x02\u01A8-\x03\x02\x02\x02\u01A9\u01AD\x07(\x02" +
		"\x02\u01AA\u01AB\x07L\x02\x02\u01AB\u01AD\x070\x02\x02\u01AC\u01A9\x03" +
		"\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD/\x03\x02\x02\x02\u01AE" +
		"\u01AF\x07f\x02\x02\u01AF\u01B0\x07q\x02\x02\u01B0\u01B1\x07\x06\x02\x02" +
		"\u01B1\u01B4\x05\x80A\x02\u01B2\u01B3\x07B\x02\x02\u01B3\u01B5\x05\x8C" +
		"G\x02\u01B4\u01B2\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B7\x07" +
		"m\x02\x02\u01B7\u01B9\x05.\x18\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9" +
		"\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01BB\x07=\x02\x02" +
		"\u01BB\u01BD\x07\x19\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BF\x07I\x02\x02\u01BF" +
		"\u01C1\x05,\x17\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02" +
		"\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C3\x07A\x02\x02\u01C3\u01C5" +
		"\x05,\x17\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02" +
		"\u01C51\x03\x02\x02\x02\u01C6\u01C9\x07q\x02\x02\u01C7\u01C8\x07\x03\x02" +
		"\x02\u01C8\u01CA\x05\x8CG\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA" +
		"\x03\x02\x02\x02\u01CA3\x03\x02\x02\x02\u01CB\u01CD\x05\x92J\x02\u01CC" +
		"\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
		"\x02\x02\u01CE\u01D4\x052\x1A\x02\u01CF\u01D1\x07\x07\x02\x02\u01D0\u01CF" +
		"\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
		"\u01D2\u01D5\x05\x8EH\x02\u01D3\u01D5\x05\x82B\x02\u01D4\u01D0\x03\x02" +
		"\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D55\x03\x02\x02\x02\u01D6\u01D8" +
		"\x05\x92J\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
		"\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DF\x052\x1A\x02\u01DA\u01DC\x07" +
		"\x07\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
		"\u01DD\x03\x02\x02\x02\u01DD\u01E0\x05\x8EH\x02\u01DE\u01E0\x05\x82B\x02" +
		"\u01DF\u01DB\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03" +
		"\x02\x02\x02\u01E07\x03\x02\x02\x02\u01E1\u01E2\x079\x02\x02\u01E2\u01E5" +
		"\x07q\x02\x02\u01E3\u01E4\x07\x06\x02\x02\u01E4\u01E6\x05|?\x02\u01E5" +
		"\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02" +
		"\x02\x02\u01E7\u01EB\x07\b\x02\x02\u01E8\u01EA\x07\x13\x02\x02\u01E9\u01E8" +
		"\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02" +
		"\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01F5\x03\x02\x02\x02\u01ED\u01EB\x03" +
		"\x02\x02\x02\u01EE\u01F0\x054\x1B\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0" +
		"\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02" +
		"\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
		"\u01F6\x056\x1C\x02\u01F5\u01F1\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02" +
		"\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01FA\x07\t\x02\x02\u01F8\u01F9" +
		"\x076\x02\x02\u01F9\u01FB\x05\x8CG\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA" +
		"\u01FB\x03\x02\x02\x02\u01FB9\x03\x02\x02\x02\u01FC\u01FD\x07\'\x02\x02" +
		"\u01FD\u0208\x07A\x02\x02\u01FE\u01FF\x07\'\x02\x02\u01FF\u0208\x07I\x02" +
		"\x02\u0200\u0208\x071\x02\x02\u0201\u0208\x077\x02\x02\u0202\u0208\x07" +
		"<\x02\x02\u0203\u0204\x07n\x02\x02\u0204\u0208\x07A\x02\x02\u0205\u0206" +
		"\x07n\x02\x02\u0206\u0208\x07I\x02\x02\u0207\u01FC\x03\x02\x02\x02\u0207" +
		"\u01FE\x03\x02\x02\x02\u0207\u0200\x03\x02\x02\x02\u0207\u0201\x03\x02" +
		"\x02\x02\u0207\u0202\x03\x02\x02\x02\u0207\u0203\x03\x02\x02\x02\u0207" +
		"\u0205\x03\x02\x02\x02\u0208;\x03\x02\x02\x02\u0209\u020A\x07:\x02\x02" +
		"\u020A\u020C\x07q\x02\x02\u020B\u020D\x05x=\x02\u020C\u020B\x03\x02\x02" +
		"\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F" +
		"\x07`\x02\x02\u020F\u0212\x05:\x1E\x02\u0210\u0211\x07B\x02\x02\u0211" +
		"\u0213\x05\x8CG\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02" +
		"\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x07=\x02\x02\u0215\u0218" +
		"\x07\x19\x02\x02\u0216\u0217\x07h\x02\x02\u0217\u0219\x05\x8CG\x02\u0218" +
		"\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219=\x03\x02\x02" +
		"\x02\u021A\u021B\x07D\x02\x02\u021B\u021C\x07\x19\x02\x02\u021C?\x03\x02" +
		"\x02\x02\u021D\u021E\x07J\x02\x02\u021E\u021F\x07q\x02\x02\u021F\u0220" +
		"\x07o\x02\x02\u0220\u0221\x07q\x02\x02\u0221A\x03\x02\x02\x02\u0222\u0223" +
		"\x07G\x02\x02\u0223\u0224\x07S\x02\x02\u0224\u0226\x07q\x02\x02\u0225" +
		"\u0227\x05x=\x02\u0226\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02" +
		"\u0227\u022A\x03\x02\x02\x02\u0228\u0229\x07T\x02\x02\u0229\u022B\x05" +
		"\x8CG\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B" +
		"\u022D\x03\x02\x02\x02\u022C\u022E\x05\x16\f\x02\u022D\u022C\x03\x02\x02" +
		"\x02\u022D\u022E\x03\x02\x02\x02\u022EC\x03\x02\x02\x02\u022F\u0231\x05" +
		"\x92J\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231" +
		"\u0232\x03\x02\x02\x02\u0232\u0233\x07R\x02\x02\u0233\u0234\x05\x8CG\x02" +
		"\u0234\u0235\x07\x19\x02\x02\u0235E\x03\x02\x02\x02\u0236\u0237\x07F\x02" +
		"\x02\u0237\u0238\x07q\x02\x02\u0238\u0239\x07\x06\x02\x02\u0239\u023A" +
		"\x05z>\x02\u023A\u023B\x07-\x02\x02\u023B\u023C\x07B\x02\x02\u023C\u023F" +
		"\x05\x8CG\x02\u023D\u023E\x07l\x02\x02\u023E\u0240\x07\x19\x02\x02\u023F" +
		"\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0243\x03\x02" +
		"\x02\x02\u0241\u0242\x07,\x02\x02\u0242\u0244\x07\x19\x02\x02\u0243\u0241" +
		"\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0248\x03\x02\x02\x02" +
		"\u0245\u0246\x07V\x02\x02\u0246\u0247\x07a\x02\x02\u0247\u0249\x05\x8C" +
		"G\x02\u0248\u0245\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024D" +
		"\x03\x02\x02\x02\u024A\u024B\x07b\x02\x02\u024B\u024C\x07a\x02\x02\u024C" +
		"\u024E\x05\x8CG\x02\u024D\u024A\x03\x02\x02\x02\u024D\u024E\x03\x02\x02" +
		"\x02\u024E\u0251\x03\x02\x02\x02\u024F\u0250\x07T\x02\x02\u0250\u0252" +
		"\x05\x8CG\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02" +
		"\u0252\u0255\x03\x02\x02\x02\u0253\u0254\x075\x02\x02\u0254\u0256\x05" +
		"\x8CG\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256" +
		"\u026D\x03\x02\x02\x02\u0257\u025B\x07\b\x02\x02\u0258\u025A\x07\x13\x02" +
		"\x02\u0259\u0258\x03\x02\x02\x02\u025A\u025D\x03\x02\x02\x02\u025B\u0259" +
		"\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u0263\x03\x02\x02\x02" +
		"\u025D\u025B\x03\x02\x02\x02\u025E\u025F\x05D#\x02\u025F\u0260\x05\x84" +
		"C\x02\u0260\u0262\x03\x02\x02\x02\u0261\u025E\x03\x02\x02\x02\u0262\u0265" +
		"\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02" +
		"\u0264\u0269\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u0268\x07" +
		"\x13\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269" +
		"\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03\x02" +
		"\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u026E\x07\t\x02\x02\u026D\u0257" +
		"\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026EG\x03\x02\x02\x02\u026F" +
		"\u0270\t\x05\x02\x02\u0270I\x03\x02\x02\x02\u0271\u0280\x05\b\x05\x02" +
		"\u0272\u0280\x05\n\x06\x02\u0273\u0280\x05\f\x07\x02\u0274\u0280\x05\x14" +
		"\v\x02\u0275\u0280\x05\x1A\x0E\x02\u0276\u0280\x05\x1C\x0F\x02\u0277\u0280" +
		"\x05$\x13\x02\u0278\u0280\x05&\x14\x02\u0279\u0280\x050\x19\x02\u027A" +
		"\u0280\x058\x1D\x02\u027B\u0280\x05<\x1F\x02\u027C\u0280\x05> \x02\u027D" +
		"\u0280\x05B\"\x02\u027E\u0280\x05@!\x02\u027F\u0271\x03\x02\x02\x02\u027F" +
		"\u0272\x03\x02\x02\x02\u027F\u0273\x03\x02\x02\x02\u027F\u0274\x03\x02" +
		"\x02\x02\u027F\u0275\x03\x02\x02\x02\u027F\u0276\x03\x02\x02\x02\u027F" +
		"\u0277\x03\x02\x02\x02\u027F\u0278\x03\x02\x02\x02\u027F\u0279\x03\x02" +
		"\x02\x02\u027F\u027A\x03\x02\x02\x02\u027F\u027B\x03\x02\x02\x02\u027F" +
		"\u027C\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F\u027E\x03\x02" +
		"\x02\x02\u0280K\x03\x02\x02\x02\u0281\u0283\x05\x92J\x02\u0282\u0281\x03" +
		"\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284" +
		"\u0286\x05J&\x02\u0285\u0287\x07\x17\x02\x02\u0286\u0285\x03\x02\x02\x02" +
		"\u0286\u0287\x03\x02\x02\x02\u0287M\x03\x02\x02\x02\u0288\u0289\x05H%" +
		"\x02\u0289\u028A\x072\x02\x02\u028A\u028B\x07q\x02\x02\u028B\u028F\x07" +
		"\b\x02\x02\u028C\u028E\x07\x13\x02\x02\u028D\u028C\x03\x02\x02\x02\u028E" +
		"\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02" +
		"\x02\x02\u0290\u0297\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292" +
		"\u0293\x05L\'\x02\u0293\u0294\x05\x84C\x02\u0294\u0296\x03\x02\x02\x02" +
		"\u0295\u0292\x03\x02\x02\x02\u0296\u0299\x03\x02\x02\x02\u0297\u0295\x03" +
		"\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029D\x03\x02\x02\x02\u0299" +
		"\u0297\x03\x02\x02\x02\u029A\u029C\x07\x13\x02\x02\u029B\u029A\x03\x02" +
		"\x02\x02\u029C\u029F\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D" +
		"\u029E\x03\x02\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u029D\x03\x02" +
		"\x02\x02\u02A0\u02A1\x07\t\x02\x02\u02A1O\x03\x02\x02\x02\u02A2\u02A3" +
		"\x07S\x02\x02\u02A3\u02A5\x07q\x02\x02\u02A4\u02A6\x05x=\x02\u02A5\u02A4" +
		"\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02" +
		"\u02A7\u02A8\x07\n\x02\x02\u02A8\u02AA\x05\x80A\x02\u02A9\u02A7\x03\x02" +
		"\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AAQ\x03\x02\x02\x02\u02AB\u02AD" +
		"\x07U\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02" +
		"\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x07F\x02\x02\u02AF\u02B0\x05" +
		"z>\x02\u02B0S\x03\x02\x02\x02\u02B1\u02B6\x05z>\x02\u02B2\u02B3\x07\x04" +
		"\x02\x02\u02B3\u02B4\x05\x8CG\x02\u02B4\u02B5\x07\x05\x02\x02\u02B5\u02B7" +
		"\x03\x02\x02\x02\u02B6\u02B2\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02" +
		"\u02B7U\x03\x02\x02\x02\u02B8\u02B9\x05T+\x02\u02B9\u02BA\x07\n\x02\x02" +
		"\u02BA\u02BB\x05T+\x02\u02BBW\x03\x02\x02\x02\u02BC\u02BD\x073\x02\x02" +
		"\u02BD\u02BE\x07q\x02\x02\u02BE\u02C2\x07\b\x02\x02\u02BF\u02C1\x07\x13" +
		"\x02\x02\u02C0\u02BF\x03\x02\x02\x02\u02C1\u02C4\x03\x02\x02\x02\u02C2" +
		"\u02C0\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02CA\x03\x02" +
		"\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C5\u02C6\x05V,\x02\u02C6\u02C7" +
		"\x05\x82B\x02\u02C7\u02C9\x03\x02\x02\x02\u02C8\u02C5\x03\x02\x02\x02" +
		"\u02C9\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03" +
		"\x02\x02\x02\u02CB\u02D0\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD" +
		"\u02CF\x07\x13\x02\x02\u02CE\u02CD\x03\x02\x02\x02\u02CF\u02D2\x03\x02" +
		"\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1" +
		"\u02D3\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D4\x07\t\x02" +
		"\x02\u02D4Y\x03\x02\x02\x02\u02D5\u02DE\x071\x02\x02\u02D6\u02DE\x07:" +
		"\x02\x02\u02D7\u02D8\x07g\x02\x02\u02D8\u02DE\x07:\x02\x02\u02D9\u02DE" +
		"\x07@\x02\x02\u02DA\u02DE\x07P\x02\x02\u02DB\u02DE\x07f\x02\x02\u02DC" +
		"\u02DE\x07i\x02\x02\u02DD\u02D5\x03\x02\x02\x02\u02DD\u02D6\x03\x02\x02" +
		"\x02\u02DD\u02D7\x03\x02\x02\x02\u02DD\u02D9\x03\x02\x02\x02\u02DD\u02DA" +
		"\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DC\x03\x02\x02\x02" +
		"\u02DE[\x03\x02\x02\x02\u02DF\u02E5\x05z>\x02\u02E0\u02E1\x05\x82B\x02" +
		"\u02E1\u02E2\x05z>\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3\u02E0\x03\x02" +
		"\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5" +
		"\u02E6\x03\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03\x02" +
		"\x02\x02\u02E8\u02EA\x05\x82B\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9\u02EA" +
		"\x03\x02\x02\x02\u02EA]\x03\x02\x02\x02\u02EB\u02EC\x05Z.\x02\u02EC\u02ED" +
		"\x073\x02\x02\u02ED\u02EE\x07F\x02\x02\u02EE\u02F0\x05z>\x02\u02EF\u02F1" +
		"\x05\\/\x02\u02F0\u02EF\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1" +
		"_\x03\x02\x02\x02\u02F2\u02F3\x07C\x02\x02\u02F3\u02F4\x05z>\x02\u02F4" +
		"a\x03\x02\x02\x02\u02F5\u02FB\x05R*\x02\u02F6\u02FB\x05X-\x02\u02F7\u02FB" +
		"\x05^0\x02\u02F8\u02FB\x05`1\x02\u02F9\u02FB\x05> \x02\u02FA\u02F5\x03" +
		"\x02\x02\x02\u02FA\u02F6\x03\x02\x02\x02\u02FA\u02F7\x03\x02\x02\x02\u02FA" +
		"\u02F8\x03\x02\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FBc\x03\x02\x02" +
		"\x02\u02FC\u02FE\x05\x92J\x02\u02FD\u02FC\x03\x02\x02\x02\u02FD\u02FE" +
		"\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0301\x05b2\x02\u0300" +
		"\u0302\x07\x17\x02\x02\u0301\u0300\x03\x02\x02\x02\u0301\u0302\x03\x02" +
		"\x02\x02\u0302e\x03\x02\x02\x02\u0303\u0304\x07j\x02\x02\u0304\u0305\x07" +
		"q\x02\x02\u0305\u0309\x07\b\x02\x02\u0306\u0308\x07\x13\x02\x02\u0307" +
		"\u0306\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02" +
		"\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u0311\x03\x02\x02\x02\u030B" +
		"\u0309\x03\x02\x02\x02\u030C\u030D\x05d3\x02\u030D\u030E\x05\x84C\x02" +
		"\u030E\u0310\x03\x02\x02\x02\u030F\u030C\x03\x02\x02\x02\u0310\u0313\x03" +
		"\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312" +
		"\u0317\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0314\u0316\x07\x13" +
		"\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0319\x03\x02\x02\x02\u0317" +
		"\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u031A\x03\x02" +
		"\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u031B\x07\t\x02\x02\u031Bg" +
		"\x03\x02\x02\x02\u031C\u031D\t\x06\x02\x02\u031Di\x03\x02\x02\x02\u031E" +
		"\u031F\x07H\x02\x02\u031F\u0320\x05h5\x02\u0320\u0321\x05z>\x02\u0321" +
		"\u0322\x07,\x02\x02\u0322\u0323\x07\x19\x02\x02\u0323k\x03\x02\x02\x02" +
		"\u0324\u0331\x05\b\x05\x02\u0325\u0331\x05\n\x06\x02\u0326\u0331\x05N" +
		"(\x02\u0327\u0331\x05F$\x02\u0328\u0331\x05\f\x07\x02\u0329\u0331\x05" +
		"p9\x02\u032A\u0331\x05P)\x02\u032B\u0331\x05\x14\v\x02\u032C\u0331\x05" +
		"j6\x02\u032D\u0331\x058\x1D\x02\u032E\u0331\x05> \x02\u032F\u0331\x05" +
		"f4\x02\u0330\u0324\x03\x02\x02\x02\u0330\u0325\x03\x02\x02\x02\u0330\u0326" +
		"\x03\x02\x02\x02\u0330\u0327\x03\x02\x02\x02\u0330\u0328\x03\x02\x02\x02" +
		"\u0330\u0329\x03\x02\x02\x02\u0330\u032A\x03\x02\x02\x02\u0330\u032B\x03" +
		"\x02\x02\x02\u0330\u032C\x03\x02\x02\x02\u0330\u032D\x03\x02\x02\x02\u0330" +
		"\u032E\x03\x02\x02\x02\u0330\u032F\x03\x02\x02\x02\u0331m\x03\x02\x02" +
		"\x02\u0332\u0334\x05\x92J\x02\u0333\u0332\x03\x02\x02\x02\u0333\u0334" +
		"\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0337\x05l7\x02\u0336" +
		"\u0338\x07\x17\x02\x02\u0337\u0336\x03\x02\x02\x02\u0337\u0338\x03\x02" +
		"\x02\x02\u0338o\x03\x02\x02\x02\u0339\u033A\x07K\x02\x02\u033A\u033B\x07" +
		"q\x02\x02\u033B\u033F\x07\b\x02\x02\u033C\u033E\x07\x13\x02\x02\u033D" +
		"\u033C\x03\x02\x02\x02\u033E\u0341\x03\x02\x02\x02\u033F\u033D\x03\x02" +
		"\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0347\x03\x02\x02\x02\u0341" +
		"\u033F\x03\x02\x02\x02\u0342\u0343\x05n8\x02\u0343\u0344\x05\x84C\x02" +
		"\u0344\u0346\x03\x02\x02\x02\u0345\u0342\x03\x02\x02\x02\u0346\u0349\x03" +
		"\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348" +
		"\u034D\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034C\x07\x13" +
		"\x02\x02\u034B\u034A\x03\x02\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D" +
		"\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u0350\x03\x02" +
		"\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0351\x07\t\x02\x02\u0351q" +
		"\x03\x02\x02\x02\u0352\u0354\x07Z\x02\x02\u0353\u0352\x03\x02\x02\x02" +
		"\u0353\u0354\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0356\x07" +
		"q\x02\x02\u0356\u0357\x07\x06\x02\x02\u0357\u0358\x05\x80A\x02\u0358s" +
		"\x03\x02\x02\x02\u0359\u035F\x05r:\x02\u035A\u035C\x07\x07\x02\x02\u035B" +
		"\u035A\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x03\x02" +
		"\x02\x02\u035D\u0360\x05\x90I\x02\u035E\u0360\x05\x82B\x02\u035F\u035B" +
		"\x03\x02\x02\x02\u035F\u035E\x03\x02\x02\x02\u0360u\x03\x02\x02\x02\u0361" +
		"\u0367\x05r:\x02\u0362\u0364\x07\x07\x02\x02\u0363\u0362\x03\x02\x02\x02" +
		"\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0368\x05" +
		"\x90I\x02\u0366\u0368\x05\x82B\x02\u0367\u0363\x03\x02\x02\x02\u0367\u0366" +
		"\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368w\x03\x02\x02\x02\u0369" +
		"\u036D\x07\v\x02\x02\u036A\u036C\x07\x13\x02\x02\u036B\u036A\x03\x02\x02" +
		"\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036E" +
		"\x03\x02\x02\x02\u036E\u0377\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02" +
		"\u0370\u0372\x05t;\x02\u0371\u0370\x03\x02\x02\x02\u0372\u0375\x03\x02" +
		"\x02\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374" +
		"\u0376\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0376\u0378\x05v<\x02" +
		"\u0377\u0373\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u0379\x03" +
		"\x02\x02\x02\u0379\u037A\x07\f\x02\x02\u037Ay\x03\x02\x02\x02\u037B\u0380" +
		"\x07q\x02\x02\u037C\u037D\x07\r\x02\x02\u037D\u037F\x07q\x02\x02\u037E" +
		"\u037C\x03\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02" +
		"\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381{\x03\x02\x02\x02\u0382\u0380" +
		"\x03\x02\x02\x02\u0383\u0384\t\x07\x02\x02\u0384}\x03\x02\x02\x02\u0385" +
		"\u038C\t\b\x02\x02\u0386\u0389\x07c\x02\x02\u0387\u0388\x07a\x02\x02\u0388" +
		"\u038A\x07\x1B\x02\x02\u0389\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02" +
		"\x02\x02\u038A\u038C\x03\x02\x02\x02\u038B\u0385\x03\x02\x02\x02\u038B" +
		"\u0386\x03\x02\x02\x02\u038C\x7F\x03\x02\x02\x02\u038D\u0390\x05~@\x02" +
		"\u038E\u0390\x05z>\x02\u038F\u038D\x03\x02\x02\x02\u038F\u038E\x03\x02" +
		"\x02\x02\u0390\x81\x03\x02\x02\x02\u0391\u0395\x07\x07\x02\x02\u0392\u0394" +
		"\x07\x13\x02\x02\u0393\u0392\x03\x02\x02\x02\u0394\u0397\x03\x02\x02\x02" +
		"\u0395\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u039E\x03" +
		"\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0398\u039A\x07\x13\x02\x02\u0399" +
		"\u0398\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u0399\x03\x02" +
		"\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039E\x03\x02\x02\x02\u039D" +
		"\u0391\x03\x02\x02\x02\u039D\u0399\x03\x02\x02\x02\u039E\x83\x03\x02\x02" +
		"\x02\u039F\u03A3\x07\x0E\x02\x02\u03A0\u03A2\x07\x13\x02\x02\u03A1\u03A0" +
		"\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02" +
		"\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03AC\x03\x02\x02\x02\u03A5\u03A3\x03" +
		"\x02\x02\x02\u03A6\u03A8\x07\x13\x02\x02\u03A7\u03A6\x03\x02\x02\x02\u03A8" +
		"\u03A9\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02" +
		"\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB\u039F\x03\x02\x02\x02\u03AB" +
		"\u03A7\x03\x02\x02\x02\u03AC\x85\x03\x02\x02\x02\u03AD\u03B1\x07\x04\x02" +
		"\x02\u03AE\u03B0\x07\x13\x02\x02\u03AF\u03AE\x03\x02\x02\x02\u03B0\u03B3" +
		"\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02" +
		"\u03B2\u03BD\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B4\u03BA\x05" +
		"\x8CG\x02\u03B5\u03B6\x05\x82B\x02\u03B6\u03B7\x05\x8CG\x02\u03B7\u03B9" +
		"\x03\x02\x02\x02\u03B8\u03B5\x03\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02" +
		"\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BE\x03" +
		"\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD\u03B4\x03\x02\x02\x02\u03BD" +
		"\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C0\x07\x05" +
		"\x02\x02\u03C0\x87\x03\x02\x02\x02\u03C1\u03C2\x07q\x02\x02\u03C2\u03C3" +
		"\x07\x03\x02\x02\u03C3\u03C4\x05\x8CG\x02\u03C4\x89\x03\x02\x02\x02\u03C5" +
		"\u03C9\x07\b\x02\x02\u03C6\u03C8\x07\x13\x02\x02\u03C7\u03C6\x03\x02\x02" +
		"\x02\u03C8\u03CB\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9\u03CA" +
		"\x03\x02\x02\x02\u03CA\u03D8\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02" +
		"\u03CC\u03D2\x05\x88E\x02\u03CD\u03CE\x05\x82B\x02\u03CE\u03CF\x05\x88" +
		"E\x02\u03CF\u03D1\x03\x02\x02\x02\u03D0\u03CD\x03\x02\x02\x02\u03D1\u03D4" +
		"\x03\x02\x02\x02\u03D2\u03D0\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02" +
		"\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D5\u03D7\x05" +
		"\x82B\x02\u03D6\u03D5\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7" +
		"\u03D9\x03\x02\x02\x02\u03D8\u03CC\x03\x02\x02\x02\u03D8\u03D9\x03\x02" +
		"\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03DB\x07\t\x02\x02\u03DB\x8B" +
		"\x03\x02\x02\x02\u03DC\u03DD\bG\x01\x02\u03DD\u03DE\x07\x0F\x02\x02\u03DE" +
		"\u03EB\x05\x8CG\r\u03DF\u03EB\x05\x86D\x02\u03E0\u03EB\x05\x8AF\x02\u03E1" +
		"\u03EB\x05z>\x02\u03E2\u03EB\x07\x18\x02\x02\u03E3\u03EB\x07\x1A\x02\x02" +
		"\u03E4\u03EB\x07\x1B\x02\x02\u03E5\u03EB\x07\x19\x02\x02\u03E6\u03E7\x07" +
		"\v\x02\x02\u03E7\u03E8\x05\x8CG\x02\u03E8\u03E9\x07\f\x02\x02\u03E9\u03EB" +
		"\x03\x02\x02\x02\u03EA\u03DC\x03\x02\x02\x02\u03EA\u03DF\x03\x02\x02\x02" +
		"\u03EA\u03E0\x03\x02\x02\x02\u03EA\u03E1\x03\x02\x02\x02\u03EA\u03E2\x03" +
		"\x02\x02\x02\u03EA\u03E3\x03\x02\x02\x02\u03EA\u03E4\x03\x02\x02\x02\u03EA" +
		"\u03E5\x03\x02\x02\x02\u03EA\u03E6\x03\x02\x02\x02\u03EB\u03F4\x03\x02" +
		"\x02\x02\u03EC\u03ED\f\f\x02\x02\u03ED\u03EE\t\t\x02\x02\u03EE\u03F3\x05" +
		"\x8CG\r\u03EF\u03F0\f\v\x02\x02\u03F0\u03F1\t\n\x02\x02\u03F1\u03F3\x05" +
		"\x8CG\f\u03F2\u03EC\x03\x02\x02\x02\u03F2\u03EF\x03\x02\x02\x02\u03F3" +
		"\u03F6\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4\u03F5\x03\x02" +
		"\x02\x02\u03F5\x8D\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7\u03F9" +
		"\x07\x17\x02\x02\u03F8\u03FA\x07\x13\x02\x02\u03F9\u03F8\x03\x02\x02\x02" +
		"\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03" +
		"\x02\x02\x02\u03FC\x8F\x03\x02\x02\x02\u03FD\u03FE\x07\x17\x02\x02\u03FE" +
		"\u0400\x07\x13\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u0400\u0403\x03\x02" +
		"\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402" +
		"\u0404\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0404\u0406\x07\x17" +
		"\x02\x02\u0405\u0407\x07\x13\x02\x02\u0406\u0405\x03\x02\x02\x02\u0407" +
		"\u0408\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02" +
		"\x02\x02\u0409\x91\x03\x02\x02\x02\u040A\u040B\x07\x17\x02\x02\u040B\u040D" +
		"\x07\x13\x02\x02\u040C\u040A\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02" +
		"\u040E\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\x93\x03" +
		"\x02\x02\x02\x8F\x97\x9D\xA1\xA7\xAF\xB5\xB9\xBF\xC7\xCD\xD1\xD7\xE8\xEC" +
		"\xF9\xFE\u0101\u0105\u0109\u010C\u0110\u0114\u011C\u0122\u0126\u012B\u0135" +
		"\u0139\u013D\u0140\u0148\u014C\u0151\u0156\u015F\u0171\u0175\u017F\u0184" +
		"\u0187\u0196\u019F\u01A3\u01A5\u01AC\u01B4\u01B8\u01BC\u01C0\u01C4\u01C9" +
		"\u01CC\u01D0\u01D4\u01D7\u01DB\u01DF\u01E5\u01EB\u01F1\u01F5\u01FA\u0207" +
		"\u020C\u0212\u0218\u0226\u022A\u022D\u0230\u023F\u0243\u0248\u024D\u0251" +
		"\u0255\u025B\u0263\u0269\u026D\u027F\u0282\u0286\u028F\u0297\u029D\u02A5" +
		"\u02A9\u02AC\u02B6\u02C2\u02CA\u02D0\u02DD\u02E5\u02E9\u02F0\u02FA\u02FD" +
		"\u0301\u0309\u0311\u0317\u0330\u0333\u0337\u033F\u0347\u034D\u0353\u035B" +
		"\u035F\u0363\u0367\u036D\u0373\u0377\u0380\u0389\u038B\u038F\u0395\u039B" +
		"\u039D\u03A3\u03A9\u03AB\u03B1\u03BA\u03BD\u03C9\u03D2\u03D6\u03D8\u03EA" +
		"\u03F2\u03F4\u03FB\u0401\u0408\u040E";
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
	public postMultiAnnotation(): PostMultiAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostMultiAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
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
	public postMultiAnnotation(): PostMultiAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostMultiAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
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
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
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
	public postAnnotation(): PostAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
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
	public ANNOTATION(): TerminalNode | undefined { return this.tryGetToken(FppParser.ANNOTATION, 0); }
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
	public ANNOTATION(): TerminalNode | undefined { return this.tryGetToken(FppParser.ANNOTATION, 0); }
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
	public ANNOTATION(): TerminalNode | undefined { return this.tryGetToken(FppParser.ANNOTATION, 0); }
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
	public postMultiAnnotation(): PostMultiAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostMultiAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
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
	public postMultiAnnotation(): PostMultiAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PostMultiAnnotationContext);
	}
	public commaDelim(): CommaDelimContext | undefined {
		return this.tryGetRuleContext(0, CommaDelimContext);
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


export class PostMultiAnnotationContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FppParser.RULE_postMultiAnnotation; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterPostMultiAnnotation) {
			listener.enterPostMultiAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitPostMultiAnnotation) {
			listener.exitPostMultiAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitPostMultiAnnotation) {
			return visitor.visitPostMultiAnnotation(this);
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


