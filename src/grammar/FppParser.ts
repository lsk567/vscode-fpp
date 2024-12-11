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
	public static readonly F32 = 26;
	public static readonly F64 = 27;
	public static readonly I16 = 28;
	public static readonly I32 = 29;
	public static readonly I64 = 30;
	public static readonly I8 = 31;
	public static readonly U16 = 32;
	public static readonly U32 = 33;
	public static readonly U64 = 34;
	public static readonly U8 = 35;
	public static readonly ACTION = 36;
	public static readonly ACTIVE = 37;
	public static readonly ACTIVITY = 38;
	public static readonly ALWAYS = 39;
	public static readonly ARRAY = 40;
	public static readonly ASSERT = 41;
	public static readonly ASYNC = 42;
	public static readonly AT = 43;
	public static readonly BASE = 44;
	public static readonly BLOCK = 45;
	public static readonly BOOL = 46;
	public static readonly CHANGE = 47;
	public static readonly CHOICE = 48;
	public static readonly COMMAND = 49;
	public static readonly COMPONENT = 50;
	public static readonly CONNECTIONS = 51;
	public static readonly CONSTANT = 52;
	public static readonly CONTAINER = 53;
	public static readonly CPU = 54;
	public static readonly DEFAULT = 55;
	public static readonly DIAGNOSTIC = 56;
	public static readonly DO = 57;
	public static readonly DROP = 58;
	public static readonly ELSE = 59;
	public static readonly ENTER = 60;
	public static readonly ENTRY = 61;
	public static readonly ENUM = 62;
	public static readonly EVENT = 63;
	public static readonly EXIT = 64;
	public static readonly FALSE = 65;
	public static readonly FATAL = 66;
	public static readonly FORMAT = 67;
	public static readonly GET = 68;
	public static readonly GUARD = 69;
	public static readonly GUARDED = 70;
	public static readonly HEALTH = 71;
	public static readonly HIGH = 72;
	public static readonly HOOK = 73;
	public static readonly ID = 74;
	public static readonly IF = 75;
	public static readonly IMPORT = 76;
	public static readonly INCLUDE = 77;
	public static readonly INITIAL = 78;
	public static readonly INPUT = 79;
	public static readonly INSTANCE = 80;
	public static readonly INTERNAL = 81;
	public static readonly LOCATE = 82;
	public static readonly LOW = 83;
	public static readonly MACHINE = 84;
	public static readonly MATCH = 85;
	public static readonly MODULE = 86;
	public static readonly ON = 87;
	public static readonly OPCODE = 88;
	public static readonly ORANGE = 89;
	public static readonly OUTPUT = 90;
	public static readonly PARAM = 91;
	public static readonly PASSIVE = 92;
	public static readonly PHASE = 93;
	public static readonly PORT = 94;
	public static readonly PRIORITY = 95;
	public static readonly PRIVATE = 96;
	public static readonly PRODUCT = 97;
	public static readonly QUEUE = 98;
	public static readonly QUEUED = 99;
	public static readonly RECORD = 100;
	public static readonly RECV = 101;
	public static readonly RED = 102;
	public static readonly REF = 103;
	public static readonly REG = 104;
	public static readonly REQUEST = 105;
	public static readonly RESP = 106;
	public static readonly SAVE = 107;
	public static readonly SEND = 108;
	public static readonly SERIAL = 109;
	public static readonly SET = 110;
	public static readonly SEVERITY = 111;
	public static readonly SIGNAL = 112;
	public static readonly SIZE = 113;
	public static readonly STACK = 114;
	public static readonly STATE = 115;
	public static readonly STRING = 116;
	public static readonly STRUCT = 117;
	public static readonly SYNC = 118;
	public static readonly TELEMETRY = 119;
	public static readonly TEXT = 120;
	public static readonly THROTTLE = 121;
	public static readonly TIME = 122;
	public static readonly TOPOLOGY = 123;
	public static readonly TRUE = 124;
	public static readonly TYPE = 125;
	public static readonly UNMATCHED = 126;
	public static readonly UPDATE = 127;
	public static readonly WARNING = 128;
	public static readonly WITH = 129;
	public static readonly YELLOW = 130;
	public static readonly IDENTIFIER = 131;
	public static readonly RULE_prog = 0;
	public static readonly RULE_progTopology = 1;
	public static readonly RULE_progComponent = 2;
	public static readonly RULE_abstractTypeDecl = 3;
	public static readonly RULE_aliasTypeDecl = 4;
	public static readonly RULE_actionDecl = 5;
	public static readonly RULE_arrayDecl = 6;
	public static readonly RULE_constantDecl = 7;
	public static readonly RULE_structMember = 8;
	public static readonly RULE_structMemberN = 9;
	public static readonly RULE_structMemberL = 10;
	public static readonly RULE_structDecl = 11;
	public static readonly RULE_queueFullBehavior = 12;
	public static readonly RULE_commandKind = 13;
	public static readonly RULE_commandDecl = 14;
	public static readonly RULE_paramDecl = 15;
	public static readonly RULE_generalPortKind = 16;
	public static readonly RULE_specialPortKind = 17;
	public static readonly RULE_generalPortInstanceType = 18;
	public static readonly RULE_generalPortInstanceDecl = 19;
	public static readonly RULE_specialPortInstanceDecl = 20;
	public static readonly RULE_telemetryLimitKind = 21;
	public static readonly RULE_telemetryLimitExpr = 22;
	public static readonly RULE_telemetryLimit = 23;
	public static readonly RULE_telemetryUpdate = 24;
	public static readonly RULE_telemetryChannelDecl = 25;
	public static readonly RULE_actionDef = 26;
	public static readonly RULE_choiceDef = 27;
	public static readonly RULE_guardDef = 28;
	public static readonly RULE_signalDef = 29;
	public static readonly RULE_doExpr = 30;
	public static readonly RULE_transitionExpr = 31;
	public static readonly RULE_initialTransition = 32;
	public static readonly RULE_transitionOrDoExpr = 33;
	public static readonly RULE_stateTransition = 34;
	public static readonly RULE_stateEntry = 35;
	public static readonly RULE_stateExit = 36;
	public static readonly RULE_stateMemberTempl = 37;
	public static readonly RULE_stateMember = 38;
	public static readonly RULE_stateDef = 39;
	public static readonly RULE_stateMachineMemberTempl = 40;
	public static readonly RULE_stateMachineMember = 41;
	public static readonly RULE_stateMachineDef = 42;
	public static readonly RULE_stateMachineInstance = 43;
	public static readonly RULE_enumMember = 44;
	public static readonly RULE_enumMemberN = 45;
	public static readonly RULE_enumMemberL = 46;
	public static readonly RULE_enumDecl = 47;
	public static readonly RULE_eventSeverity = 48;
	public static readonly RULE_eventDecl = 49;
	public static readonly RULE_includeStmt = 50;
	public static readonly RULE_matchStmt = 51;
	public static readonly RULE_internalPortDecl = 52;
	public static readonly RULE_recordSpecifierDecl = 53;
	public static readonly RULE_containerSpecifierDecl = 54;
	public static readonly RULE_initSpecifier = 55;
	public static readonly RULE_componentInstanceDecl = 56;
	public static readonly RULE_componentKind = 57;
	public static readonly RULE_componentMemberTempl = 58;
	public static readonly RULE_componentMember = 59;
	public static readonly RULE_componentDecl = 60;
	public static readonly RULE_portDecl = 61;
	public static readonly RULE_componentInstanceSpec = 62;
	public static readonly RULE_connectionNode = 63;
	public static readonly RULE_connection = 64;
	public static readonly RULE_directGraphDecl = 65;
	public static readonly RULE_patternKind = 66;
	public static readonly RULE_patternGraphSources = 67;
	public static readonly RULE_patternGraphStmt = 68;
	public static readonly RULE_topologyImportStmt = 69;
	public static readonly RULE_topologyMemberTempl = 70;
	public static readonly RULE_topologyMember = 71;
	public static readonly RULE_topologyDecl = 72;
	public static readonly RULE_locationKind = 73;
	public static readonly RULE_locationStmt = 74;
	public static readonly RULE_moduleMemberTempl = 75;
	public static readonly RULE_moduleMember = 76;
	public static readonly RULE_moduleDecl = 77;
	public static readonly RULE_formalParameter = 78;
	public static readonly RULE_formalParameterN = 79;
	public static readonly RULE_formalParamaterL = 80;
	public static readonly RULE_formalParameterList = 81;
	public static readonly RULE_qualIdent = 82;
	public static readonly RULE_intType = 83;
	public static readonly RULE_primitiveType = 84;
	public static readonly RULE_typeName = 85;
	public static readonly RULE_commaDelim = 86;
	public static readonly RULE_semiDelim = 87;
	public static readonly RULE_arrayExpr = 88;
	public static readonly RULE_structAssignment = 89;
	public static readonly RULE_structExpr = 90;
	public static readonly RULE_expr = 91;
	public static readonly RULE_postAnnotation = 92;
	public static readonly RULE_postMultiAnnotation = 93;
	public static readonly RULE_preAnnotation = 94;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "progTopology", "progComponent", "abstractTypeDecl", "aliasTypeDecl", 
		"actionDecl", "arrayDecl", "constantDecl", "structMember", "structMemberN", 
		"structMemberL", "structDecl", "queueFullBehavior", "commandKind", "commandDecl", 
		"paramDecl", "generalPortKind", "specialPortKind", "generalPortInstanceType", 
		"generalPortInstanceDecl", "specialPortInstanceDecl", "telemetryLimitKind", 
		"telemetryLimitExpr", "telemetryLimit", "telemetryUpdate", "telemetryChannelDecl", 
		"actionDef", "choiceDef", "guardDef", "signalDef", "doExpr", "transitionExpr", 
		"initialTransition", "transitionOrDoExpr", "stateTransition", "stateEntry", 
		"stateExit", "stateMemberTempl", "stateMember", "stateDef", "stateMachineMemberTempl", 
		"stateMachineMember", "stateMachineDef", "stateMachineInstance", "enumMember", 
		"enumMemberN", "enumMemberL", "enumDecl", "eventSeverity", "eventDecl", 
		"includeStmt", "matchStmt", "internalPortDecl", "recordSpecifierDecl", 
		"containerSpecifierDecl", "initSpecifier", "componentInstanceDecl", "componentKind", 
		"componentMemberTempl", "componentMember", "componentDecl", "portDecl", 
		"componentInstanceSpec", "connectionNode", "connection", "directGraphDecl", 
		"patternKind", "patternGraphSources", "patternGraphStmt", "topologyImportStmt", 
		"topologyMemberTempl", "topologyMember", "topologyDecl", "locationKind", 
		"locationStmt", "moduleMemberTempl", "moduleMember", "moduleDecl", "formalParameter", 
		"formalParameterN", "formalParamaterL", "formalParameterList", "qualIdent", 
		"intType", "primitiveType", "typeName", "commaDelim", "semiDelim", "arrayExpr", 
		"structAssignment", "structExpr", "expr", "postAnnotation", "postMultiAnnotation", 
		"preAnnotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "':'", "'['", "']'", "','", "'{'", "'}'", "'->'", "'('", 
		"')'", "'.'", "';'", "'-'", "'*'", "'/'", "'+'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'F32'", "'F64'", "'I16'", "'I32'", "'I64'", "'I8'", "'U16'", "'U32'", 
		"'U64'", "'U8'", "'action'", "'active'", "'activity'", "'always'", "'array'", 
		"'assert'", "'async'", "'at'", "'base'", "'block'", "'bool'", "'change'", 
		"'choice'", "'command'", "'component'", "'connections'", "'constant'", 
		"'container'", "'cpu'", "'default'", "'diagnostic'", "'do'", "'drop'", 
		"'else'", "'enter'", "'entry'", "'enum'", "'event'", "'exit'", "'false'", 
		"'fatal'", "'format'", "'get'", "'guard'", "'guarded'", "'health'", "'high'", 
		"'hook'", "'id'", "'if'", "'import'", "'include'", "'initial'", "'input'", 
		"'instance'", "'internal'", "'locate'", "'low'", "'machine'", "'match'", 
		"'module'", "'on'", "'opcode'", "'orange'", "'output'", "'param'", "'passive'", 
		"'phase'", "'port'", "'priority'", "'private'", "'product'", "'queue'", 
		"'queued'", "'record'", "'recv'", "'red'", "'ref'", "'reg'", "'request'", 
		"'resp'", "'save'", "'send'", "'serial'", "'set'", "'severity'", "'signal'", 
		"'size'", "'stack'", "'state'", "'string'", "'struct'", "'sync'", "'telemetry'", 
		"'text'", "'throttle'", "'time'", "'topology'", "'true'", "'type'", "'unmatched'", 
		"'update'", "'warning'", "'with'", "'yellow'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NL", "WS", "WS_NL", "COMMENT", "ANNOTATION", 
		"LIT_BOOLEAN", "LIT_STRING", "LIT_FLOAT", "LIT_INT", "F32", "F64", "I16", 
		"I32", "I64", "I8", "U16", "U32", "U64", "U8", "ACTION", "ACTIVE", "ACTIVITY", 
		"ALWAYS", "ARRAY", "ASSERT", "ASYNC", "AT", "BASE", "BLOCK", "BOOL", "CHANGE", 
		"CHOICE", "COMMAND", "COMPONENT", "CONNECTIONS", "CONSTANT", "CONTAINER", 
		"CPU", "DEFAULT", "DIAGNOSTIC", "DO", "DROP", "ELSE", "ENTER", "ENTRY", 
		"ENUM", "EVENT", "EXIT", "FALSE", "FATAL", "FORMAT", "GET", "GUARD", "GUARDED", 
		"HEALTH", "HIGH", "HOOK", "ID", "IF", "IMPORT", "INCLUDE", "INITIAL", 
		"INPUT", "INSTANCE", "INTERNAL", "LOCATE", "LOW", "MACHINE", "MATCH", 
		"MODULE", "ON", "OPCODE", "ORANGE", "OUTPUT", "PARAM", "PASSIVE", "PHASE", 
		"PORT", "PRIORITY", "PRIVATE", "PRODUCT", "QUEUE", "QUEUED", "RECORD", 
		"RECV", "RED", "REF", "REG", "REQUEST", "RESP", "SAVE", "SEND", "SERIAL", 
		"SET", "SEVERITY", "SIGNAL", "SIZE", "STACK", "STATE", "STRING", "STRUCT", 
		"SYNC", "TELEMETRY", "TEXT", "THROTTLE", "TIME", "TOPOLOGY", "TRUE", "TYPE", 
		"UNMATCHED", "UPDATE", "WARNING", "WITH", "YELLOW", "IDENTIFIER",
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
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ACTIVE - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (FppParser.ENUM - 62)) | (1 << (FppParser.INCLUDE - 62)) | (1 << (FppParser.INSTANCE - 62)) | (1 << (FppParser.LOCATE - 62)) | (1 << (FppParser.MODULE - 62)) | (1 << (FppParser.PASSIVE - 62)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (FppParser.PORT - 94)) | (1 << (FppParser.QUEUED - 94)) | (1 << (FppParser.STATE - 94)) | (1 << (FppParser.STRUCT - 94)) | (1 << (FppParser.TOPOLOGY - 94)) | (1 << (FppParser.TYPE - 94)))) !== 0)) {
				{
				{
				this.state = 196;
				this.moduleMember();
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
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public progTopology(): ProgTopologyContext {
		let _localctx: ProgTopologyContext = new ProgTopologyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FppParser.RULE_progTopology);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 214;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.ANNOTATION || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (FppParser.COMMAND - 49)) | (1 << (FppParser.CONNECTIONS - 49)) | (1 << (FppParser.EVENT - 49)) | (1 << (FppParser.HEALTH - 49)) | (1 << (FppParser.IMPORT - 49)) | (1 << (FppParser.INCLUDE - 49)) | (1 << (FppParser.INSTANCE - 49)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (FppParser.PARAM - 91)) | (1 << (FppParser.PRIVATE - 91)) | (1 << (FppParser.TELEMETRY - 91)) | (1 << (FppParser.TEXT - 91)) | (1 << (FppParser.TIME - 91)))) !== 0)) {
				{
				{
				this.state = 220;
				this.topologyMember();
				this.state = 223;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FppParser.T__11:
				case FppParser.NL:
					{
					this.state = 221;
					this.semiDelim();
					}
					break;
				case FppParser.EOF:
					{
					this.state = 222;
					this.match(FppParser.EOF);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 230;
				this.match(FppParser.NL);
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 236;
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
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 238;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.ASYNC - 21)) | (1 << (FppParser.COMMAND - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (FppParser.ENUM - 62)) | (1 << (FppParser.EVENT - 62)) | (1 << (FppParser.GUARDED - 62)) | (1 << (FppParser.INCLUDE - 62)) | (1 << (FppParser.INTERNAL - 62)) | (1 << (FppParser.MATCH - 62)) | (1 << (FppParser.OUTPUT - 62)) | (1 << (FppParser.PARAM - 62)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (FppParser.PRODUCT - 97)) | (1 << (FppParser.STATE - 97)) | (1 << (FppParser.STRUCT - 97)) | (1 << (FppParser.SYNC - 97)) | (1 << (FppParser.TELEMETRY - 97)) | (1 << (FppParser.TEXT - 97)) | (1 << (FppParser.TIME - 97)) | (1 << (FppParser.TYPE - 97)))) !== 0)) {
				{
				{
				this.state = 244;
				this.componentMember();
				this.state = 247;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FppParser.T__11:
				case FppParser.NL:
					{
					this.state = 245;
					this.semiDelim();
					}
					break;
				case FppParser.EOF:
					{
					this.state = 246;
					this.match(FppParser.EOF);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 254;
				this.match(FppParser.NL);
				}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 260;
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
			this.state = 262;
			this.match(FppParser.TYPE);
			this.state = 263;
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
	public aliasTypeDecl(): AliasTypeDeclContext {
		let _localctx: AliasTypeDeclContext = new AliasTypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FppParser.RULE_aliasTypeDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(FppParser.TYPE);
			this.state = 266;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 267;
			this.match(FppParser.T__0);
			this.state = 268;
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
	public actionDecl(): ActionDeclContext {
		let _localctx: ActionDeclContext = new ActionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FppParser.RULE_actionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(FppParser.ACTION);
			this.state = 271;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 272;
				this.match(FppParser.T__1);
				this.state = 273;
				_localctx._type = this.typeName();
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
	public arrayDecl(): ArrayDeclContext {
		let _localctx: ArrayDeclContext = new ArrayDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FppParser.RULE_arrayDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(FppParser.ARRAY);
			this.state = 277;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 278;
			this.match(FppParser.T__0);
			this.state = 279;
			this.match(FppParser.T__2);
			this.state = 280;
			_localctx._size = this.expr(0);
			this.state = 281;
			this.match(FppParser.T__3);
			this.state = 282;
			_localctx._type = this.typeName();
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 283;
				this.match(FppParser.DEFAULT);
				this.state = 284;
				_localctx._default_ = this.arrayExpr();
				}
			}

			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 287;
				this.match(FppParser.FORMAT);
				this.state = 288;
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
		this.enterRule(_localctx, 14, FppParser.RULE_constantDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(FppParser.CONSTANT);
			this.state = 292;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 293;
			this.match(FppParser.T__0);
			this.state = 294;
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
		this.enterRule(_localctx, 16, FppParser.RULE_structMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 297;
			this.match(FppParser.T__1);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__2) {
				{
				this.state = 298;
				this.match(FppParser.T__2);
				this.state = 299;
				_localctx._size = this.expr(0);
				this.state = 300;
				this.match(FppParser.T__3);
				}
			}

			this.state = 304;
			_localctx._type = this.typeName();
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 305;
				this.match(FppParser.FORMAT);
				this.state = 306;
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
		this.enterRule(_localctx, 18, FppParser.RULE_structMemberN);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 309;
				this.preAnnotation();
				}
			}

			this.state = 312;
			this.structMember();
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 313;
					this.match(FppParser.T__4);
					}
				}

				this.state = 316;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 317;
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
		this.enterRule(_localctx, 20, FppParser.RULE_structMemberL);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 320;
				this.preAnnotation();
				}
			}

			this.state = 323;
			this.structMember();
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 324;
					this.match(FppParser.T__4);
					}
				}

				this.state = 327;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 328;
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
		this.enterRule(_localctx, 22, FppParser.RULE_structDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(FppParser.STRUCT);
			this.state = 332;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 333;
			this.match(FppParser.T__5);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 334;
				this.match(FppParser.NL);
				}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION || _la === FppParser.IDENTIFIER) {
				{
				this.state = 343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 340;
						this.structMemberN();
						}
						}
					}
					this.state = 345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				this.state = 346;
				this.structMemberL();
				}
			}

			this.state = 349;
			this.match(FppParser.T__6);
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 350;
				this.match(FppParser.DEFAULT);
				this.state = 351;
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
		this.enterRule(_localctx, 24, FppParser.RULE_queueFullBehavior);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (FppParser.ASSERT - 41)) | (1 << (FppParser.BLOCK - 41)) | (1 << (FppParser.DROP - 41)))) !== 0))) {
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
		this.enterRule(_localctx, 26, FppParser.RULE_commandKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
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
		this.enterRule(_localctx, 28, FppParser.RULE_commandDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			_localctx._kind = this.commandKind();
			this.state = 359;
			this.match(FppParser.COMMAND);
			this.state = 360;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 361;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.OPCODE) {
				{
				this.state = 364;
				this.match(FppParser.OPCODE);
				this.state = 365;
				_localctx._opcode = this.expr(0);
				}
			}

			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 368;
				this.match(FppParser.PRIORITY);
				this.state = 369;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (FppParser.ASSERT - 41)) | (1 << (FppParser.BLOCK - 41)) | (1 << (FppParser.DROP - 41)))) !== 0)) {
				{
				this.state = 372;
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
		this.enterRule(_localctx, 30, FppParser.RULE_paramDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.match(FppParser.PARAM);
			this.state = 376;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 377;
			this.match(FppParser.T__1);
			this.state = 378;
			_localctx._type = this.typeName();
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 379;
				this.match(FppParser.DEFAULT);
				this.state = 380;
				_localctx._default_ = this.expr(0);
				}
			}

			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 383;
				this.match(FppParser.ID);
				this.state = 384;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SET) {
				{
				this.state = 387;
				this.match(FppParser.SET);
				this.state = 388;
				this.match(FppParser.OPCODE);
				this.state = 389;
				_localctx._setOpcode = this.expr(0);
				}
			}

			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.SAVE) {
				{
				this.state = 392;
				this.match(FppParser.SAVE);
				this.state = 393;
				this.match(FppParser.OPCODE);
				this.state = 394;
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
		this.enterRule(_localctx, 32, FppParser.RULE_generalPortKind);
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ASYNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 397;
				this.match(FppParser.ASYNC);
				this.state = 398;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.GUARDED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.match(FppParser.GUARDED);
				this.state = 400;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.SYNC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 401;
				this.match(FppParser.SYNC);
				this.state = 402;
				this.match(FppParser.INPUT);
				}
				break;
			case FppParser.OUTPUT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 403;
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
		this.enterRule(_localctx, 34, FppParser.RULE_specialPortKind);
		let _la: number;
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.match(FppParser.COMMAND);
				this.state = 407;
				this.match(FppParser.RECV);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 408;
				this.match(FppParser.COMMAND);
				this.state = 409;
				this.match(FppParser.REG);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 410;
				this.match(FppParser.COMMAND);
				this.state = 411;
				this.match(FppParser.RESP);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 412;
				this.match(FppParser.EVENT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 413;
				this.match(FppParser.PARAM);
				this.state = 414;
				this.match(FppParser.GET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 415;
				this.match(FppParser.PARAM);
				this.state = 416;
				this.match(FppParser.SET);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 417;
				this.match(FppParser.TELEMETRY);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 418;
				this.match(FppParser.TEXT);
				this.state = 419;
				this.match(FppParser.EVENT);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 420;
				this.match(FppParser.TIME);
				this.state = 421;
				this.match(FppParser.GET);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 422;
				this.match(FppParser.PRODUCT);
				this.state = 423;
				this.match(FppParser.GET);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 424;
				this.match(FppParser.PRODUCT);
				this.state = 425;
				this.match(FppParser.REQUEST);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.ASYNC) {
					{
					this.state = 426;
					this.match(FppParser.ASYNC);
					}
				}

				this.state = 429;
				this.match(FppParser.PRODUCT);
				this.state = 430;
				this.match(FppParser.RECV);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 431;
				this.match(FppParser.PRODUCT);
				this.state = 432;
				this.match(FppParser.SEND);
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
		this.enterRule(_localctx, 36, FppParser.RULE_generalPortInstanceType);
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.SERIAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 435;
				this.match(FppParser.SERIAL);
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 436;
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
		this.enterRule(_localctx, 38, FppParser.RULE_generalPortInstanceDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			_localctx._kind = this.generalPortKind();
			this.state = 440;
			this.match(FppParser.PORT);
			this.state = 441;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 442;
			this.match(FppParser.T__1);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__2) {
				{
				this.state = 443;
				this.match(FppParser.T__2);
				this.state = 444;
				_localctx._n = this.expr(0);
				this.state = 445;
				this.match(FppParser.T__3);
				}
			}

			this.state = 449;
			_localctx._type = this.generalPortInstanceType();
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 450;
				this.match(FppParser.PRIORITY);
				this.state = 451;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (FppParser.ASSERT - 41)) | (1 << (FppParser.BLOCK - 41)) | (1 << (FppParser.DROP - 41)))) !== 0)) {
				{
				this.state = 454;
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
		this.enterRule(_localctx, 40, FppParser.RULE_specialPortInstanceDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.specialPortKind();
			this.state = 458;
			this.match(FppParser.PORT);
			this.state = 459;
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
		this.enterRule(_localctx, 42, FppParser.RULE_telemetryLimitKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
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
		this.enterRule(_localctx, 44, FppParser.RULE_telemetryLimitExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			_localctx._kind = this.telemetryLimitKind();
			this.state = 464;
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
		this.enterRule(_localctx, 46, FppParser.RULE_telemetryLimit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(FppParser.T__5);
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 467;
				this.match(FppParser.NL);
				}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ORANGE || _la === FppParser.RED || _la === FppParser.YELLOW) {
				{
				this.state = 473;
				this.telemetryLimitExpr();
				this.state = 479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 474;
						this.commaDelim();
						this.state = 475;
						this.telemetryLimitExpr();
						}
						}
					}
					this.state = 481;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					this.state = 482;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 487;
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
		this.enterRule(_localctx, 48, FppParser.RULE_telemetryUpdate);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.ALWAYS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.match(FppParser.ALWAYS);
				}
				break;
			case FppParser.ON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.match(FppParser.ON);
				this.state = 491;
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
		this.enterRule(_localctx, 50, FppParser.RULE_telemetryChannelDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(FppParser.TELEMETRY);
			this.state = 495;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 496;
			this.match(FppParser.T__1);
			this.state = 497;
			_localctx._type = this.typeName();
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 498;
				this.match(FppParser.ID);
				this.state = 499;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.UPDATE) {
				{
				this.state = 502;
				this.match(FppParser.UPDATE);
				this.state = 503;
				_localctx._update = this.telemetryUpdate();
				}
			}

			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.FORMAT) {
				{
				this.state = 506;
				this.match(FppParser.FORMAT);
				this.state = 507;
				_localctx._format = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.LOW) {
				{
				this.state = 510;
				this.match(FppParser.LOW);
				this.state = 511;
				_localctx._low = this.telemetryLimit();
				}
			}

			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.HIGH) {
				{
				this.state = 514;
				this.match(FppParser.HIGH);
				this.state = 515;
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
	public actionDef(): ActionDefContext {
		let _localctx: ActionDefContext = new ActionDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FppParser.RULE_actionDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(FppParser.ACTION);
			this.state = 519;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 520;
				this.match(FppParser.T__1);
				this.state = 521;
				_localctx._type = this.typeName();
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
	public choiceDef(): ChoiceDefContext {
		let _localctx: ChoiceDefContext = new ChoiceDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FppParser.RULE_choiceDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(FppParser.CHOICE);
			this.state = 525;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 526;
			this.match(FppParser.T__5);
			this.state = 527;
			this.match(FppParser.IF);
			this.state = 528;
			_localctx._guard = this.match(FppParser.IDENTIFIER);
			this.state = 529;
			_localctx._then = this.transitionExpr();
			this.state = 530;
			this.match(FppParser.ELSE);
			this.state = 531;
			_localctx._else = this.transitionExpr();
			this.state = 532;
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
	public guardDef(): GuardDefContext {
		let _localctx: GuardDefContext = new GuardDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FppParser.RULE_guardDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(FppParser.GUARD);
			this.state = 535;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 536;
				this.match(FppParser.T__1);
				this.state = 537;
				_localctx._type = this.typeName();
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
	public signalDef(): SignalDefContext {
		let _localctx: SignalDefContext = new SignalDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FppParser.RULE_signalDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(FppParser.SIGNAL);
			this.state = 541;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 542;
				this.match(FppParser.T__1);
				this.state = 543;
				_localctx._type = this.typeName();
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
	public doExpr(): DoExprContext {
		let _localctx: DoExprContext = new DoExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FppParser.RULE_doExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(FppParser.DO);
			this.state = 547;
			this.match(FppParser.T__5);
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 548;
				this.match(FppParser.NL);
				}
				}
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 554;
				this.match(FppParser.IDENTIFIER);
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					{
					this.state = 555;
					this.commaDelim();
					this.state = 556;
					this.match(FppParser.IDENTIFIER);
					}
					}
					this.state = 562;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 565;
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
	public transitionExpr(): TransitionExprContext {
		let _localctx: TransitionExprContext = new TransitionExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FppParser.RULE_transitionExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DO) {
				{
				this.state = 567;
				_localctx._do = this.doExpr();
				}
			}

			this.state = 570;
			this.match(FppParser.ENTER);
			this.state = 571;
			_localctx._state = this.qualIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initialTransition(): InitialTransitionContext {
		let _localctx: InitialTransitionContext = new InitialTransitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FppParser.RULE_initialTransition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.match(FppParser.INITIAL);
			this.state = 574;
			_localctx._transition = this.transitionExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transitionOrDoExpr(): TransitionOrDoExprContext {
		let _localctx: TransitionOrDoExprContext = new TransitionOrDoExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FppParser.RULE_transitionOrDoExpr);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.transitionExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.doExpr();
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
	public stateTransition(): StateTransitionContext {
		let _localctx: StateTransitionContext = new StateTransitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FppParser.RULE_stateTransition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.match(FppParser.ON);
			this.state = 581;
			_localctx._signal = this.match(FppParser.IDENTIFIER);
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IF) {
				{
				this.state = 582;
				this.match(FppParser.IF);
				this.state = 583;
				_localctx._guard = this.match(FppParser.IDENTIFIER);
				}
			}

			this.state = 586;
			_localctx._transition = this.transitionOrDoExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateEntry(): StateEntryContext {
		let _localctx: StateEntryContext = new StateEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FppParser.RULE_stateEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(FppParser.ENTRY);
			this.state = 589;
			_localctx._do = this.doExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateExit(): StateExitContext {
		let _localctx: StateExitContext = new StateExitContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FppParser.RULE_stateExit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(FppParser.EXIT);
			this.state = 592;
			_localctx._do = this.doExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateMemberTempl(): StateMemberTemplContext {
		let _localctx: StateMemberTemplContext = new StateMemberTemplContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FppParser.RULE_stateMemberTempl);
		try {
			this.state = 600;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.INITIAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 594;
				this.initialTransition();
				}
				break;
			case FppParser.CHOICE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 595;
				this.choiceDef();
				}
				break;
			case FppParser.STATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 596;
				this.stateDef();
				}
				break;
			case FppParser.ON:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 597;
				this.stateTransition();
				}
				break;
			case FppParser.ENTRY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 598;
				this.stateEntry();
				}
				break;
			case FppParser.EXIT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 599;
				this.stateExit();
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
	public stateMember(): StateMemberContext {
		let _localctx: StateMemberContext = new StateMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FppParser.RULE_stateMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 602;
				this.preAnnotation();
				}
			}

			this.state = 605;
			this.stateMemberTempl();
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 606;
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
	public stateDef(): StateDefContext {
		let _localctx: StateDefContext = new StateDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FppParser.RULE_stateDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.match(FppParser.STATE);
			this.state = 610;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__5) {
				{
				this.state = 611;
				this.match(FppParser.T__5);
				this.state = 615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 612;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 617;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.ANNOTATION || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (FppParser.CHOICE - 48)) | (1 << (FppParser.ENTRY - 48)) | (1 << (FppParser.EXIT - 48)) | (1 << (FppParser.INITIAL - 48)))) !== 0) || _la === FppParser.ON || _la === FppParser.STATE) {
					{
					{
					this.state = 618;
					this.stateMember();
					this.state = 619;
					this.semiDelim();
					}
					}
					this.state = 625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.NL) {
					{
					{
					this.state = 626;
					this.match(FppParser.NL);
					}
					}
					this.state = 631;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 632;
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
	public stateMachineMemberTempl(): StateMachineMemberTemplContext {
		let _localctx: StateMachineMemberTemplContext = new StateMachineMemberTemplContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, FppParser.RULE_stateMachineMemberTempl);
		try {
			this.state = 641;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.CHOICE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 635;
				this.choiceDef();
				}
				break;
			case FppParser.GUARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 636;
				this.guardDef();
				}
				break;
			case FppParser.INITIAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 637;
				this.initialTransition();
				}
				break;
			case FppParser.SIGNAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 638;
				this.signalDef();
				}
				break;
			case FppParser.STATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 639;
				this.stateDef();
				}
				break;
			case FppParser.ACTION:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 640;
				this.actionDef();
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
	public stateMachineMember(): StateMachineMemberContext {
		let _localctx: StateMachineMemberContext = new StateMachineMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FppParser.RULE_stateMachineMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 643;
				this.preAnnotation();
				}
			}

			this.state = 646;
			this.stateMachineMemberTempl();
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 647;
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
	public stateMachineDef(): StateMachineDefContext {
		let _localctx: StateMachineDefContext = new StateMachineDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, FppParser.RULE_stateMachineDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.match(FppParser.STATE);
			this.state = 651;
			this.match(FppParser.MACHINE);
			this.state = 652;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__5) {
				{
				this.state = 653;
				this.match(FppParser.T__5);
				this.state = 657;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 654;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 659;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				}
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ACTION - 21)) | (1 << (FppParser.CHOICE - 21)))) !== 0) || _la === FppParser.GUARD || _la === FppParser.INITIAL || _la === FppParser.SIGNAL || _la === FppParser.STATE) {
					{
					{
					this.state = 660;
					this.stateMachineMember();
					this.state = 661;
					this.semiDelim();
					}
					}
					this.state = 667;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.NL) {
					{
					{
					this.state = 668;
					this.match(FppParser.NL);
					}
					}
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 674;
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
	public stateMachineInstance(): StateMachineInstanceContext {
		let _localctx: StateMachineInstanceContext = new StateMachineInstanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, FppParser.RULE_stateMachineInstance);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.match(FppParser.STATE);
			this.state = 678;
			this.match(FppParser.MACHINE);
			this.state = 679;
			this.match(FppParser.INSTANCE);
			this.state = 680;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 681;
			this.match(FppParser.T__1);
			this.state = 682;
			_localctx._stateMachine = this.qualIdent();
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 683;
				this.match(FppParser.PRIORITY);
				this.state = 684;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (FppParser.ASSERT - 41)) | (1 << (FppParser.BLOCK - 41)) | (1 << (FppParser.DROP - 41)))) !== 0)) {
				{
				this.state = 687;
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
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, FppParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__0) {
				{
				this.state = 691;
				this.match(FppParser.T__0);
				this.state = 692;
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
		this.enterRule(_localctx, 90, FppParser.RULE_enumMemberN);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 695;
				this.preAnnotation();
				}
			}

			this.state = 698;
			this.enumMember();
			this.state = 704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 699;
					this.match(FppParser.T__4);
					}
				}

				this.state = 702;
				this.postAnnotation();
				}
				break;

			case 2:
				{
				this.state = 703;
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
		this.enterRule(_localctx, 92, FppParser.RULE_enumMemberL);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 706;
				this.preAnnotation();
				}
			}

			this.state = 709;
			this.enumMember();
			this.state = 715;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 710;
					this.match(FppParser.T__4);
					}
				}

				this.state = 713;
				this.postAnnotation();
				}
				break;

			case 2:
				{
				this.state = 714;
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
		this.enterRule(_localctx, 94, FppParser.RULE_enumDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.match(FppParser.ENUM);
			this.state = 718;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__1) {
				{
				this.state = 719;
				this.match(FppParser.T__1);
				this.state = 720;
				_localctx._type = this.intType();
				}
			}

			this.state = 723;
			this.match(FppParser.T__5);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 724;
				this.match(FppParser.NL);
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION || _la === FppParser.IDENTIFIER) {
				{
				this.state = 733;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 730;
						this.enumMemberN();
						}
						}
					}
					this.state = 735;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				}
				this.state = 736;
				this.enumMemberL();
				}
			}

			this.state = 739;
			this.match(FppParser.T__6);
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 740;
				this.match(FppParser.DEFAULT);
				this.state = 741;
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
		this.enterRule(_localctx, 96, FppParser.RULE_eventSeverity);
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 744;
				this.match(FppParser.ACTIVITY);
				this.state = 745;
				this.match(FppParser.HIGH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 746;
				this.match(FppParser.ACTIVITY);
				this.state = 747;
				this.match(FppParser.LOW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 748;
				this.match(FppParser.COMMAND);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 749;
				this.match(FppParser.DIAGNOSTIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 750;
				this.match(FppParser.FATAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 751;
				this.match(FppParser.WARNING);
				this.state = 752;
				this.match(FppParser.HIGH);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 753;
				this.match(FppParser.WARNING);
				this.state = 754;
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
		this.enterRule(_localctx, 98, FppParser.RULE_eventDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.match(FppParser.EVENT);
			this.state = 758;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 759;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 762;
			this.match(FppParser.SEVERITY);
			this.state = 763;
			this.eventSeverity();
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 764;
				this.match(FppParser.ID);
				this.state = 765;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 768;
			this.match(FppParser.FORMAT);
			this.state = 769;
			_localctx._format = this.match(FppParser.LIT_STRING);
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.THROTTLE) {
				{
				this.state = 770;
				this.match(FppParser.THROTTLE);
				this.state = 771;
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
		this.enterRule(_localctx, 100, FppParser.RULE_includeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this.match(FppParser.INCLUDE);
			this.state = 775;
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
		this.enterRule(_localctx, 102, FppParser.RULE_matchStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.match(FppParser.MATCH);
			this.state = 778;
			_localctx._match = this.match(FppParser.IDENTIFIER);
			this.state = 779;
			this.match(FppParser.WITH);
			this.state = 780;
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
		this.enterRule(_localctx, 104, FppParser.RULE_internalPortDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.match(FppParser.INTERNAL);
			this.state = 783;
			this.match(FppParser.PORT);
			this.state = 784;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 785;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 788;
				this.match(FppParser.PRIORITY);
				this.state = 789;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (FppParser.ASSERT - 41)) | (1 << (FppParser.BLOCK - 41)) | (1 << (FppParser.DROP - 41)))) !== 0)) {
				{
				this.state = 792;
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
	public recordSpecifierDecl(): RecordSpecifierDeclContext {
		let _localctx: RecordSpecifierDeclContext = new RecordSpecifierDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FppParser.RULE_recordSpecifierDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(FppParser.PRODUCT);
			this.state = 796;
			this.match(FppParser.RECORD);
			this.state = 797;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 798;
			this.match(FppParser.T__1);
			this.state = 799;
			_localctx._fppType = this.typeName();
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ARRAY) {
				{
				this.state = 800;
				this.match(FppParser.ARRAY);
				}
			}

			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 803;
				this.match(FppParser.ID);
				this.state = 804;
				_localctx._id = this.expr(0);
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
	public containerSpecifierDecl(): ContainerSpecifierDeclContext {
		let _localctx: ContainerSpecifierDeclContext = new ContainerSpecifierDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, FppParser.RULE_containerSpecifierDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(FppParser.PRODUCT);
			this.state = 808;
			this.match(FppParser.CONTAINER);
			this.state = 809;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ID) {
				{
				this.state = 810;
				this.match(FppParser.ID);
				this.state = 811;
				_localctx._id = this.expr(0);
				}
			}

			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.DEFAULT) {
				{
				this.state = 814;
				this.match(FppParser.DEFAULT);
				this.state = 815;
				this.match(FppParser.PRIORITY);
				this.state = 816;
				_localctx._priority = this.expr(0);
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
		this.enterRule(_localctx, 110, FppParser.RULE_initSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 819;
				this.preAnnotation();
				}
			}

			this.state = 822;
			this.match(FppParser.PHASE);
			this.state = 823;
			_localctx._phaseExpr = this.expr(0);
			this.state = 824;
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
		this.enterRule(_localctx, 112, FppParser.RULE_componentInstanceDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this.match(FppParser.INSTANCE);
			this.state = 827;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 828;
			this.match(FppParser.T__1);
			this.state = 829;
			_localctx._fppType = this.qualIdent();
			this.state = 830;
			this.match(FppParser.BASE);
			this.state = 831;
			this.match(FppParser.ID);
			this.state = 832;
			_localctx._base_id = this.expr(0);
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.TYPE) {
				{
				this.state = 833;
				this.match(FppParser.TYPE);
				this.state = 834;
				_localctx._cppType = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.AT) {
				{
				this.state = 837;
				this.match(FppParser.AT);
				this.state = 838;
				_localctx._at = this.match(FppParser.LIT_STRING);
				}
			}

			this.state = 844;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.QUEUE) {
				{
				this.state = 841;
				this.match(FppParser.QUEUE);
				this.state = 842;
				this.match(FppParser.SIZE);
				this.state = 843;
				_localctx._queueSize = this.expr(0);
				}
			}

			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.STACK) {
				{
				this.state = 846;
				this.match(FppParser.STACK);
				this.state = 847;
				this.match(FppParser.SIZE);
				this.state = 848;
				_localctx._stackSize = this.expr(0);
				}
			}

			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIORITY) {
				{
				this.state = 851;
				this.match(FppParser.PRIORITY);
				this.state = 852;
				_localctx._priority = this.expr(0);
				}
			}

			this.state = 857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.CPU) {
				{
				this.state = 855;
				this.match(FppParser.CPU);
				this.state = 856;
				_localctx._cpu = this.expr(0);
				}
			}

			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__5) {
				{
				this.state = 859;
				this.match(FppParser.T__5);
				this.state = 863;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 860;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 865;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				}
				this.state = 871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.ANNOTATION || _la === FppParser.PHASE) {
					{
					{
					this.state = 866;
					this.initSpecifier();
					this.state = 867;
					this.semiDelim();
					}
					}
					this.state = 873;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.NL) {
					{
					{
					this.state = 874;
					this.match(FppParser.NL);
					}
					}
					this.state = 879;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 880;
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
		this.enterRule(_localctx, 114, FppParser.RULE_componentKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
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
		this.enterRule(_localctx, 116, FppParser.RULE_componentMemberTempl);
		try {
			this.state = 903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 885;
				this.abstractTypeDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 886;
				this.aliasTypeDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 887;
				this.arrayDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 888;
				this.constantDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 889;
				this.structDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 890;
				this.commandDecl();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 891;
				this.paramDecl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 892;
				this.generalPortInstanceDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 893;
				this.specialPortInstanceDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 894;
				this.telemetryChannelDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 895;
				this.enumDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 896;
				this.eventDecl();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 897;
				this.includeStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 898;
				this.internalPortDecl();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 899;
				this.matchStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 900;
				this.recordSpecifierDecl();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 901;
				this.containerSpecifierDecl();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 902;
				this.stateMachineInstance();
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
		this.enterRule(_localctx, 118, FppParser.RULE_componentMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 905;
				this.preAnnotation();
				}
			}

			this.state = 908;
			this.componentMemberTempl();
			this.state = 910;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 909;
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
		this.enterRule(_localctx, 120, FppParser.RULE_componentDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			_localctx._kind = this.componentKind();
			this.state = 913;
			this.match(FppParser.COMPONENT);
			this.state = 914;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 915;
			this.match(FppParser.T__5);
			this.state = 919;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 916;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 921;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.ASYNC - 21)) | (1 << (FppParser.COMMAND - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (FppParser.ENUM - 62)) | (1 << (FppParser.EVENT - 62)) | (1 << (FppParser.GUARDED - 62)) | (1 << (FppParser.INCLUDE - 62)) | (1 << (FppParser.INTERNAL - 62)) | (1 << (FppParser.MATCH - 62)) | (1 << (FppParser.OUTPUT - 62)) | (1 << (FppParser.PARAM - 62)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (FppParser.PRODUCT - 97)) | (1 << (FppParser.STATE - 97)) | (1 << (FppParser.STRUCT - 97)) | (1 << (FppParser.SYNC - 97)) | (1 << (FppParser.TELEMETRY - 97)) | (1 << (FppParser.TEXT - 97)) | (1 << (FppParser.TIME - 97)) | (1 << (FppParser.TYPE - 97)))) !== 0)) {
				{
				{
				this.state = 922;
				this.componentMember();
				this.state = 923;
				this.semiDelim();
				}
				}
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 930;
				this.match(FppParser.NL);
				}
				}
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 936;
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
		this.enterRule(_localctx, 122, FppParser.RULE_portDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
			this.match(FppParser.PORT);
			this.state = 939;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__8) {
				{
				this.state = 940;
				_localctx._params = this.formalParameterList();
				}
			}

			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__7) {
				{
				this.state = 943;
				this.match(FppParser.T__7);
				this.state = 944;
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
		this.enterRule(_localctx, 124, FppParser.RULE_componentInstanceSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.PRIVATE) {
				{
				this.state = 947;
				this.match(FppParser.PRIVATE);
				}
			}

			this.state = 950;
			this.match(FppParser.INSTANCE);
			this.state = 951;
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
		this.enterRule(_localctx, 126, FppParser.RULE_connectionNode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 953;
			_localctx._node = this.qualIdent();
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.T__2) {
				{
				this.state = 954;
				this.match(FppParser.T__2);
				this.state = 955;
				_localctx._index = this.expr(0);
				this.state = 956;
				this.match(FppParser.T__3);
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
		this.enterRule(_localctx, 128, FppParser.RULE_connection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			_localctx._source = this.connectionNode();
			this.state = 961;
			this.match(FppParser.T__7);
			this.state = 962;
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
		this.enterRule(_localctx, 130, FppParser.RULE_directGraphDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.match(FppParser.CONNECTIONS);
			this.state = 965;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 966;
			this.match(FppParser.T__5);
			this.state = 970;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 967;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 972;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			}
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.IDENTIFIER) {
				{
				{
				this.state = 973;
				this.connection();
				this.state = 974;
				this.commaDelim();
				}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 981;
				this.match(FppParser.NL);
				}
				}
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 987;
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
		this.enterRule(_localctx, 132, FppParser.RULE_patternKind);
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.COMMAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 989;
				this.match(FppParser.COMMAND);
				}
				break;
			case FppParser.EVENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 990;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.TEXT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 991;
				this.match(FppParser.TEXT);
				this.state = 992;
				this.match(FppParser.EVENT);
				}
				break;
			case FppParser.HEALTH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 993;
				this.match(FppParser.HEALTH);
				}
				break;
			case FppParser.PARAM:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 994;
				this.match(FppParser.PARAM);
				}
				break;
			case FppParser.TELEMETRY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 995;
				this.match(FppParser.TELEMETRY);
				}
				break;
			case FppParser.TIME:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 996;
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
		this.enterRule(_localctx, 134, FppParser.RULE_patternGraphSources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 999;
			this.qualIdent();
			this.state = 1005;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1000;
					this.commaDelim();
					this.state = 1001;
					this.qualIdent();
					}
					}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1008;
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
		this.enterRule(_localctx, 136, FppParser.RULE_patternGraphStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			_localctx._kind = this.patternKind();
			this.state = 1012;
			this.match(FppParser.CONNECTIONS);
			this.state = 1013;
			this.match(FppParser.INSTANCE);
			this.state = 1014;
			_localctx._target = this.qualIdent();
			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 1015;
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
		this.enterRule(_localctx, 138, FppParser.RULE_topologyImportStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this.match(FppParser.IMPORT);
			this.state = 1019;
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
		this.enterRule(_localctx, 140, FppParser.RULE_topologyMemberTempl);
		try {
			this.state = 1026;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.INSTANCE:
			case FppParser.PRIVATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1021;
				this.componentInstanceSpec();
				}
				break;
			case FppParser.CONNECTIONS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1022;
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
				this.state = 1023;
				this.patternGraphStmt();
				}
				break;
			case FppParser.IMPORT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1024;
				this.topologyImportStmt();
				}
				break;
			case FppParser.INCLUDE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1025;
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
		this.enterRule(_localctx, 142, FppParser.RULE_topologyMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 1028;
				this.preAnnotation();
				}
			}

			this.state = 1031;
			this.topologyMemberTempl();
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 1032;
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
		this.enterRule(_localctx, 144, FppParser.RULE_topologyDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.match(FppParser.TOPOLOGY);
			this.state = 1036;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 1037;
			this.match(FppParser.T__5);
			this.state = 1041;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1038;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 1043;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			}
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.ANNOTATION || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (FppParser.COMMAND - 49)) | (1 << (FppParser.CONNECTIONS - 49)) | (1 << (FppParser.EVENT - 49)) | (1 << (FppParser.HEALTH - 49)) | (1 << (FppParser.IMPORT - 49)) | (1 << (FppParser.INCLUDE - 49)) | (1 << (FppParser.INSTANCE - 49)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (FppParser.PARAM - 91)) | (1 << (FppParser.PRIVATE - 91)) | (1 << (FppParser.TELEMETRY - 91)) | (1 << (FppParser.TEXT - 91)) | (1 << (FppParser.TIME - 91)))) !== 0)) {
				{
				{
				this.state = 1044;
				this.topologyMember();
				this.state = 1045;
				this.semiDelim();
				}
				}
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 1052;
				this.match(FppParser.NL);
				}
				}
				this.state = 1057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1058;
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
		this.enterRule(_localctx, 146, FppParser.RULE_locationKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1060;
			_la = this._input.LA(1);
			if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (FppParser.COMPONENT - 50)) | (1 << (FppParser.CONSTANT - 50)) | (1 << (FppParser.INSTANCE - 50)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (FppParser.PORT - 94)) | (1 << (FppParser.TOPOLOGY - 94)) | (1 << (FppParser.TYPE - 94)))) !== 0))) {
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
		this.enterRule(_localctx, 148, FppParser.RULE_locationStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1062;
			this.match(FppParser.LOCATE);
			this.state = 1063;
			_localctx._kind = this.locationKind();
			this.state = 1064;
			_localctx._name = this.qualIdent();
			this.state = 1065;
			this.match(FppParser.AT);
			this.state = 1066;
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
		this.enterRule(_localctx, 150, FppParser.RULE_moduleMemberTempl);
		try {
			this.state = 1082;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1068;
				this.abstractTypeDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1069;
				this.aliasTypeDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1070;
				this.arrayDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1071;
				this.componentDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1072;
				this.componentInstanceDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1073;
				this.constantDecl();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1074;
				this.moduleDecl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1075;
				this.portDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1076;
				this.structDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1077;
				this.locationStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1078;
				this.enumDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1079;
				this.includeStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1080;
				this.topologyDecl();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1081;
				this.stateMachineDef();
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
	public moduleMember(): ModuleMemberContext {
		let _localctx: ModuleMemberContext = new ModuleMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, FppParser.RULE_moduleMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 1084;
				this.preAnnotation();
				}
			}

			this.state = 1087;
			this.moduleMemberTempl();
			this.state = 1089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 1088;
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
		this.enterRule(_localctx, 154, FppParser.RULE_moduleDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.match(FppParser.MODULE);
			this.state = 1092;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 1093;
			this.match(FppParser.T__5);
			this.state = 1097;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1094;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 1099;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			this.state = 1105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (FppParser.ANNOTATION - 21)) | (1 << (FppParser.ACTIVE - 21)) | (1 << (FppParser.ARRAY - 21)) | (1 << (FppParser.CONSTANT - 21)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (FppParser.ENUM - 62)) | (1 << (FppParser.INCLUDE - 62)) | (1 << (FppParser.INSTANCE - 62)) | (1 << (FppParser.LOCATE - 62)) | (1 << (FppParser.MODULE - 62)) | (1 << (FppParser.PASSIVE - 62)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (FppParser.PORT - 94)) | (1 << (FppParser.QUEUED - 94)) | (1 << (FppParser.STATE - 94)) | (1 << (FppParser.STRUCT - 94)) | (1 << (FppParser.TOPOLOGY - 94)) | (1 << (FppParser.TYPE - 94)))) !== 0)) {
				{
				{
				this.state = 1100;
				this.moduleMember();
				this.state = 1101;
				this.semiDelim();
				}
				}
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 1108;
				this.match(FppParser.NL);
				}
				}
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1114;
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
		this.enterRule(_localctx, 156, FppParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.REF) {
				{
				this.state = 1116;
				this.match(FppParser.REF);
				}
			}

			this.state = 1119;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 1120;
			this.match(FppParser.T__1);
			this.state = 1121;
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
		this.enterRule(_localctx, 158, FppParser.RULE_formalParameterN);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 1123;
				this.preAnnotation();
				}
			}

			this.state = 1126;
			this.formalParameter();
			this.state = 1132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 1127;
					this.match(FppParser.T__4);
					}
				}

				this.state = 1130;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 1131;
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
		this.enterRule(_localctx, 160, FppParser.RULE_formalParamaterL);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION) {
				{
				this.state = 1134;
				this.preAnnotation();
				}
			}

			this.state = 1137;
			this.formalParameter();
			this.state = 1143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4) {
					{
					this.state = 1138;
					this.match(FppParser.T__4);
					}
				}

				this.state = 1141;
				this.postMultiAnnotation();
				}
				break;

			case 2:
				{
				this.state = 1142;
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
		this.enterRule(_localctx, 162, FppParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this.match(FppParser.T__8);
			this.state = 1149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 1146;
				this.match(FppParser.NL);
				}
				}
				this.state = 1151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.ANNOTATION || _la === FppParser.REF || _la === FppParser.IDENTIFIER) {
				{
				this.state = 1155;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1152;
						this.formalParameterN();
						}
						}
					}
					this.state = 1157;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				}
				this.state = 1158;
				this.formalParamaterL();
				}
			}

			this.state = 1161;
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
		this.enterRule(_localctx, 164, FppParser.RULE_qualIdent);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1163;
			this.match(FppParser.IDENTIFIER);
			this.state = 1168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1164;
					this.match(FppParser.T__10);
					this.state = 1165;
					this.match(FppParser.IDENTIFIER);
					}
					}
				}
				this.state = 1170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
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
		this.enterRule(_localctx, 166, FppParser.RULE_intType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1171;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (FppParser.I16 - 28)) | (1 << (FppParser.I32 - 28)) | (1 << (FppParser.I64 - 28)) | (1 << (FppParser.I8 - 28)) | (1 << (FppParser.U16 - 28)) | (1 << (FppParser.U32 - 28)) | (1 << (FppParser.U64 - 28)) | (1 << (FppParser.U8 - 28)))) !== 0))) {
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
		this.enterRule(_localctx, 168, FppParser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.F32:
			case FppParser.F64:
			case FppParser.I16:
			case FppParser.I32:
			case FppParser.I64:
			case FppParser.I8:
			case FppParser.U16:
			case FppParser.U32:
			case FppParser.U64:
			case FppParser.U8:
			case FppParser.BOOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1173;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (FppParser.F32 - 26)) | (1 << (FppParser.F64 - 26)) | (1 << (FppParser.I16 - 26)) | (1 << (FppParser.I32 - 26)) | (1 << (FppParser.I64 - 26)) | (1 << (FppParser.I8 - 26)) | (1 << (FppParser.U16 - 26)) | (1 << (FppParser.U32 - 26)) | (1 << (FppParser.U64 - 26)) | (1 << (FppParser.U8 - 26)) | (1 << (FppParser.BOOL - 26)))) !== 0))) {
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
				this.state = 1174;
				_localctx._type = this.match(FppParser.STRING);
				this.state = 1177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.SIZE) {
					{
					this.state = 1175;
					this.match(FppParser.SIZE);
					this.state = 1176;
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
		this.enterRule(_localctx, 170, FppParser.RULE_typeName);
		try {
			this.state = 1183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.F32:
			case FppParser.F64:
			case FppParser.I16:
			case FppParser.I32:
			case FppParser.I64:
			case FppParser.I8:
			case FppParser.U16:
			case FppParser.U32:
			case FppParser.U64:
			case FppParser.U8:
			case FppParser.BOOL:
			case FppParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1181;
				this.primitiveType();
				}
				break;
			case FppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1182;
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
		this.enterRule(_localctx, 172, FppParser.RULE_commaDelim);
		try {
			let _alt: number;
			this.state = 1197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1185;
				this.match(FppParser.T__4);
				this.state = 1189;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1186;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 1191;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1193;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1192;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1195;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
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
		this.enterRule(_localctx, 174, FppParser.RULE_semiDelim);
		try {
			let _alt: number;
			this.state = 1211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1199;
				this.match(FppParser.T__11);
				this.state = 1203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1200;
						this.match(FppParser.NL);
						}
						}
					}
					this.state = 1205;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				}
				}
				break;
			case FppParser.NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1207;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1206;
						this.match(FppParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1209;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
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
		this.enterRule(_localctx, 176, FppParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1213;
			this.match(FppParser.T__2);
			this.state = 1217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 1214;
				this.match(FppParser.NL);
				}
				}
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FppParser.T__2) | (1 << FppParser.T__5) | (1 << FppParser.T__8) | (1 << FppParser.T__12) | (1 << FppParser.LIT_BOOLEAN) | (1 << FppParser.LIT_STRING) | (1 << FppParser.LIT_FLOAT) | (1 << FppParser.LIT_INT))) !== 0) || _la === FppParser.IDENTIFIER) {
				{
				this.state = 1220;
				this.expr(0);
				this.state = 1226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					{
					this.state = 1221;
					this.commaDelim();
					this.state = 1222;
					this.expr(0);
					}
					}
					this.state = 1228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1231;
			this.match(FppParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 178, FppParser.RULE_structAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			_localctx._name = this.match(FppParser.IDENTIFIER);
			this.state = 1234;
			this.match(FppParser.T__0);
			this.state = 1235;
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
		this.enterRule(_localctx, 180, FppParser.RULE_structExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1237;
			this.match(FppParser.T__5);
			this.state = 1241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FppParser.NL) {
				{
				{
				this.state = 1238;
				this.match(FppParser.NL);
				}
				}
				this.state = 1243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FppParser.IDENTIFIER) {
				{
				this.state = 1244;
				this.structAssignment();
				this.state = 1250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1245;
						this.commaDelim();
						this.state = 1246;
						this.structAssignment();
						}
						}
					}
					this.state = 1252;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				}
				this.state = 1254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FppParser.T__4 || _la === FppParser.NL) {
					{
					this.state = 1253;
					this.commaDelim();
					}
				}

				}
			}

			this.state = 1258;
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
		let _startState: number = 182;
		this.enterRecursionRule(_localctx, 182, FppParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FppParser.T__12:
				{
				this.state = 1261;
				this.match(FppParser.T__12);
				this.state = 1262;
				_localctx._unary = this.expr(11);
				}
				break;
			case FppParser.T__2:
				{
				this.state = 1263;
				this.arrayExpr();
				}
				break;
			case FppParser.T__5:
				{
				this.state = 1264;
				this.structExpr();
				}
				break;
			case FppParser.IDENTIFIER:
				{
				this.state = 1265;
				this.qualIdent();
				}
				break;
			case FppParser.LIT_BOOLEAN:
				{
				this.state = 1266;
				this.match(FppParser.LIT_BOOLEAN);
				}
				break;
			case FppParser.LIT_FLOAT:
				{
				this.state = 1267;
				this.match(FppParser.LIT_FLOAT);
				}
				break;
			case FppParser.LIT_INT:
				{
				this.state = 1268;
				this.match(FppParser.LIT_INT);
				}
				break;
			case FppParser.LIT_STRING:
				{
				this.state = 1269;
				this.match(FppParser.LIT_STRING);
				}
				break;
			case FppParser.T__8:
				{
				this.state = 1270;
				this.match(FppParser.T__8);
				this.state = 1271;
				_localctx._p = this.expr(0);
				this.state = 1272;
				this.match(FppParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1282;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 1276;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1277;
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
						this.state = 1278;
						_localctx._right = this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FppParser.RULE_expr);
						this.state = 1279;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1280;
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
						this.state = 1281;
						_localctx._right = this.expr(10);
						}
						break;
					}
					}
				}
				this.state = 1286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
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
		this.enterRule(_localctx, 184, FppParser.RULE_postAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this.match(FppParser.ANNOTATION);
			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1288;
				this.match(FppParser.NL);
				}
				}
				this.state = 1291;
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
		this.enterRule(_localctx, 186, FppParser.RULE_postMultiAnnotation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1293;
					this.match(FppParser.ANNOTATION);
					this.state = 1294;
					this.match(FppParser.NL);
					}
					}
				}
				this.state = 1299;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
			}
			this.state = 1300;
			this.match(FppParser.ANNOTATION);
			this.state = 1302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1301;
				this.match(FppParser.NL);
				}
				}
				this.state = 1304;
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
		this.enterRule(_localctx, 188, FppParser.RULE_preAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1306;
				this.match(FppParser.ANNOTATION);
				this.state = 1307;
				this.match(FppParser.NL);
				}
				}
				this.state = 1310;
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
		case 91:
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

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x85\u0523\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x03\x02\x07\x02\xC2\n\x02\f\x02\x0E\x02\xC5\v\x02\x03\x02\x03\x02\x03" +
		"\x02\x05\x02\xCA\n\x02\x07\x02\xCC\n\x02\f\x02\x0E\x02\xCF\v\x02\x03\x02" +
		"\x07\x02\xD2\n\x02\f\x02\x0E\x02\xD5\v\x02\x03\x02\x03\x02\x03\x03\x07" +
		"\x03\xDA\n\x03\f\x03\x0E\x03\xDD\v\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\xE2\n\x03\x07\x03\xE4\n\x03\f\x03\x0E\x03\xE7\v\x03\x03\x03\x07\x03\xEA" +
		"\n\x03\f\x03\x0E\x03\xED\v\x03\x03\x03\x03\x03\x03\x04\x07\x04\xF2\n\x04" +
		"\f\x04\x0E\x04\xF5\v\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFA\n\x04\x07" +
		"\x04\xFC\n\x04\f\x04\x0E\x04\xFF\v\x04\x03\x04\x07\x04\u0102\n\x04\f\x04" +
		"\x0E\x04\u0105\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0115" +
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0120" +
		"\n\b\x03\b\x03\b\x05\b\u0124\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0131\n\n\x03\n\x03\n\x03\n\x05\n\u0136" +
		"\n\n\x03\v\x05\v\u0139\n\v\x03\v\x03\v\x05\v\u013D\n\v\x03\v\x03\v\x05" +
		"\v\u0141\n\v\x03\f\x05\f\u0144\n\f\x03\f\x03\f\x05\f\u0148\n\f\x03\f\x03" +
		"\f\x05\f\u014C\n\f\x03\r\x03\r\x03\r\x03\r\x07\r\u0152\n\r\f\r\x0E\r\u0155" +
		"\v\r\x03\r\x07\r\u0158\n\r\f\r\x0E\r\u015B\v\r\x03\r\x05\r\u015E\n\r\x03" +
		"\r\x03\r\x03\r\x05\r\u0163\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u016D\n\x10\x03\x10\x03\x10\x05\x10\u0171" +
		"\n\x10\x03\x10\x03\x10\x05\x10\u0175\n\x10\x03\x10\x05\x10\u0178\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0180\n\x11\x03" +
		"\x11\x03\x11\x05\x11\u0184\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0189" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u018E\n\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0197\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x05\x13\u01AE\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01B4" +
		"\n\x13\x03\x14\x03\x14\x05\x14\u01B8\n\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01C2\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u01C7\n\x15\x03\x15\x05\x15\u01CA\n\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x07\x19\u01D7\n\x19\f\x19\x0E\x19\u01DA\v\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x07\x19\u01E0\n\x19\f\x19\x0E\x19\u01E3\v\x19\x03\x19\x05\x19" +
		"\u01E6\n\x19\x05\x19\u01E8\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u01EF\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u01F7\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01FB\n\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u01FF\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0203\n\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u0207\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u020D\n\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u021D\n\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u0223\n\x1F\x03 \x03 \x03 \x07 \u0228\n \f \x0E" +
		" \u022B\v \x03 \x03 \x03 \x03 \x07 \u0231\n \f \x0E \u0234\v \x05 \u0236" +
		"\n \x03 \x03 \x03!\x05!\u023B\n!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03" +
		"#\x03#\x05#\u0245\n#\x03$\x03$\x03$\x03$\x05$\u024B\n$\x03$\x03$\x03%" +
		"\x03%\x03%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u025B" +
		"\n\'\x03(\x05(\u025E\n(\x03(\x03(\x05(\u0262\n(\x03)\x03)\x03)\x03)\x07" +
		")\u0268\n)\f)\x0E)\u026B\v)\x03)\x03)\x03)\x07)\u0270\n)\f)\x0E)\u0273" +
		"\v)\x03)\x07)\u0276\n)\f)\x0E)\u0279\v)\x03)\x05)\u027C\n)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x05*\u0284\n*\x03+\x05+\u0287\n+\x03+\x03+\x05+\u028B" +
		"\n+\x03,\x03,\x03,\x03,\x03,\x07,\u0292\n,\f,\x0E,\u0295\v,\x03,\x03," +
		"\x03,\x07,\u029A\n,\f,\x0E,\u029D\v,\x03,\x07,\u02A0\n,\f,\x0E,\u02A3" +
		"\v,\x03,\x05,\u02A6\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u02B0" +
		"\n-\x03-\x05-\u02B3\n-\x03.\x03.\x03.\x05.\u02B8\n.\x03/\x05/\u02BB\n" +
		"/\x03/\x03/\x05/\u02BF\n/\x03/\x03/\x05/\u02C3\n/\x030\x050\u02C6\n0\x03" +
		"0\x030\x050\u02CA\n0\x030\x030\x050\u02CE\n0\x031\x031\x031\x031\x051" +
		"\u02D4\n1\x031\x031\x071\u02D8\n1\f1\x0E1\u02DB\v1\x031\x071\u02DE\n1" +
		"\f1\x0E1\u02E1\v1\x031\x051\u02E4\n1\x031\x031\x031\x051\u02E9\n1\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x052\u02F6\n2\x03" +
		"3\x033\x033\x053\u02FB\n3\x033\x033\x033\x033\x053\u0301\n3\x033\x033" +
		"\x033\x033\x053\u0307\n3\x034\x034\x034\x035\x035\x035\x035\x035\x036" +
		"\x036\x036\x036\x056\u0315\n6\x036\x036\x056\u0319\n6\x036\x056\u031C" +
		"\n6\x037\x037\x037\x037\x037\x037\x057\u0324\n7\x037\x037\x057\u0328\n" +
		"7\x038\x038\x038\x038\x038\x058\u032F\n8\x038\x038\x038\x058\u0334\n8" +
		"\x039\x059\u0337\n9\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:" +
		"\x03:\x03:\x03:\x05:\u0346\n:\x03:\x03:\x05:\u034A\n:\x03:\x03:\x03:\x05" +
		":\u034F\n:\x03:\x03:\x03:\x05:\u0354\n:\x03:\x03:\x05:\u0358\n:\x03:\x03" +
		":\x05:\u035C\n:\x03:\x03:\x07:\u0360\n:\f:\x0E:\u0363\v:\x03:\x03:\x03" +
		":\x07:\u0368\n:\f:\x0E:\u036B\v:\x03:\x07:\u036E\n:\f:\x0E:\u0371\v:\x03" +
		":\x05:\u0374\n:\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u038A\n<\x03=\x05" +
		"=\u038D\n=\x03=\x03=\x05=\u0391\n=\x03>\x03>\x03>\x03>\x03>\x07>\u0398" +
		"\n>\f>\x0E>\u039B\v>\x03>\x03>\x03>\x07>\u03A0\n>\f>\x0E>\u03A3\v>\x03" +
		">\x07>\u03A6\n>\f>\x0E>\u03A9\v>\x03>\x03>\x03?\x03?\x03?\x05?\u03B0\n" +
		"?\x03?\x03?\x05?\u03B4\n?\x03@\x05@\u03B7\n@\x03@\x03@\x03@\x03A\x03A" +
		"\x03A\x03A\x03A\x05A\u03C1\nA\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C" +
		"\x07C\u03CB\nC\fC\x0EC\u03CE\vC\x03C\x03C\x03C\x07C\u03D3\nC\fC\x0EC\u03D6" +
		"\vC\x03C\x07C\u03D9\nC\fC\x0EC\u03DC\vC\x03C\x03C\x03D\x03D\x03D\x03D" +
		"\x03D\x03D\x03D\x03D\x05D\u03E8\nD\x03E\x03E\x03E\x03E\x07E\u03EE\nE\f" +
		"E\x0EE\u03F1\vE\x03E\x05E\u03F4\nE\x03F\x03F\x03F\x03F\x03F\x05F\u03FB" +
		"\nF\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x05H\u0405\nH\x03I\x05I\u0408" +
		"\nI\x03I\x03I\x05I\u040C\nI\x03J\x03J\x03J\x03J\x07J\u0412\nJ\fJ\x0EJ" +
		"\u0415\vJ\x03J\x03J\x03J\x07J\u041A\nJ\fJ\x0EJ\u041D\vJ\x03J\x07J\u0420" +
		"\nJ\fJ\x0EJ\u0423\vJ\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x05M\u043D\nM\x03N\x05N\u0440\nN\x03N\x03N\x05N\u0444\nN\x03O\x03O\x03" +
		"O\x03O\x07O\u044A\nO\fO\x0EO\u044D\vO\x03O\x03O\x03O\x07O\u0452\nO\fO" +
		"\x0EO\u0455\vO\x03O\x07O\u0458\nO\fO\x0EO\u045B\vO\x03O\x03O\x03P\x05" +
		"P\u0460\nP\x03P\x03P\x03P\x03P\x03Q\x05Q\u0467\nQ\x03Q\x03Q\x05Q\u046B" +
		"\nQ\x03Q\x03Q\x05Q\u046F\nQ\x03R\x05R\u0472\nR\x03R\x03R\x05R\u0476\n" +
		"R\x03R\x03R\x05R\u047A\nR\x03S\x03S\x07S\u047E\nS\fS\x0ES\u0481\vS\x03" +
		"S\x07S\u0484\nS\fS\x0ES\u0487\vS\x03S\x05S\u048A\nS\x03S\x03S\x03T\x03" +
		"T\x03T\x07T\u0491\nT\fT\x0ET\u0494\vT\x03U\x03U\x03V\x03V\x03V\x03V\x05" +
		"V\u049C\nV\x05V\u049E\nV\x03W\x03W\x05W\u04A2\nW\x03X\x03X\x07X\u04A6" +
		"\nX\fX\x0EX\u04A9\vX\x03X\x06X\u04AC\nX\rX\x0EX\u04AD\x05X\u04B0\nX\x03" +
		"Y\x03Y\x07Y\u04B4\nY\fY\x0EY\u04B7\vY\x03Y\x06Y\u04BA\nY\rY\x0EY\u04BB" +
		"\x05Y\u04BE\nY\x03Z\x03Z\x07Z\u04C2\nZ\fZ\x0EZ\u04C5\vZ\x03Z\x03Z\x03" +
		"Z\x03Z\x07Z\u04CB\nZ\fZ\x0EZ\u04CE\vZ\x05Z\u04D0\nZ\x03Z\x03Z\x03[\x03" +
		"[\x03[\x03[\x03\\\x03\\\x07\\\u04DA\n\\\f\\\x0E\\\u04DD\v\\\x03\\\x03" +
		"\\\x03\\\x03\\\x07\\\u04E3\n\\\f\\\x0E\\\u04E6\v\\\x03\\\x05\\\u04E9\n" +
		"\\\x05\\\u04EB\n\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x03]\x03]\x03]\x05]\u04FD\n]\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x07]\u0505\n]\f]\x0E]\u0508\v]\x03^\x03^\x06^\u050C\n^\r^\x0E^" +
		"\u050D\x03_\x03_\x07_\u0512\n_\f_\x0E_\u0515\v_\x03_\x03_\x06_\u0519\n" +
		"_\r_\x0E_\u051A\x03`\x03`\x06`\u051F\n`\r`\x0E`\u0520\x03`\x02\x02\x03" +
		"\xB8a\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
		"\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\x02\v\x05\x02++/" +
		"/<<\x05\x02,,HHxx\x05\x02[[hh\x84\x84\x05\x02\'\'^^ee\b\x024466RR``}}" +
		"\x7F\x7F\x03\x02\x1E%\x04\x02\x1C%00\x03\x02\x10\x11\x04\x02\x0F\x0F\x12" +
		"\x12\x02\u05B9\x02\xC3\x03\x02\x02\x02\x04\xDB\x03\x02\x02\x02\x06\xF3" +
		"\x03\x02\x02\x02\b\u0108\x03\x02\x02\x02\n\u010B\x03\x02\x02\x02\f\u0110" +
		"\x03\x02\x02\x02\x0E\u0116\x03\x02\x02\x02\x10\u0125\x03\x02\x02\x02\x12" +
		"\u012A\x03\x02\x02\x02\x14\u0138\x03\x02\x02\x02\x16\u0143\x03\x02\x02" +
		"\x02\x18\u014D\x03\x02\x02\x02\x1A\u0164\x03\x02\x02\x02\x1C\u0166\x03" +
		"\x02\x02\x02\x1E\u0168\x03\x02\x02\x02 \u0179\x03\x02\x02\x02\"\u0196" +
		"\x03\x02\x02\x02$\u01B3\x03\x02\x02\x02&\u01B7\x03\x02\x02\x02(\u01B9" +
		"\x03\x02\x02\x02*\u01CB\x03\x02\x02\x02,\u01CF\x03\x02\x02\x02.\u01D1" +
		"\x03\x02\x02\x020\u01D4\x03\x02\x02\x022\u01EE\x03\x02\x02\x024\u01F0" +
		"\x03\x02\x02\x026\u0208\x03\x02\x02\x028\u020E\x03\x02\x02\x02:\u0218" +
		"\x03\x02\x02\x02<\u021E\x03\x02\x02\x02>\u0224\x03\x02\x02\x02@\u023A" +
		"\x03\x02\x02\x02B\u023F\x03\x02\x02\x02D\u0244\x03\x02\x02\x02F\u0246" +
		"\x03\x02\x02\x02H\u024E\x03\x02\x02\x02J\u0251\x03\x02\x02\x02L\u025A" +
		"\x03\x02\x02\x02N\u025D\x03\x02\x02\x02P\u0263\x03\x02\x02\x02R\u0283" +
		"\x03\x02\x02\x02T\u0286\x03\x02\x02\x02V\u028C\x03\x02\x02\x02X\u02A7" +
		"\x03\x02\x02\x02Z\u02B4\x03\x02\x02\x02\\\u02BA\x03\x02\x02\x02^\u02C5" +
		"\x03\x02\x02\x02`\u02CF\x03\x02\x02\x02b\u02F5\x03\x02\x02\x02d\u02F7" +
		"\x03\x02\x02\x02f\u0308\x03\x02\x02\x02h\u030B\x03\x02\x02\x02j\u0310" +
		"\x03\x02\x02\x02l\u031D\x03\x02\x02\x02n\u0329\x03\x02\x02\x02p\u0336" +
		"\x03\x02\x02\x02r\u033C\x03\x02\x02\x02t\u0375\x03\x02\x02\x02v\u0389" +
		"\x03\x02\x02\x02x\u038C\x03\x02\x02\x02z\u0392\x03\x02\x02\x02|\u03AC" +
		"\x03\x02\x02\x02~\u03B6\x03\x02\x02\x02\x80\u03BB\x03\x02\x02\x02\x82" +
		"\u03C2\x03\x02\x02\x02\x84\u03C6\x03\x02\x02\x02\x86\u03E7\x03\x02\x02" +
		"\x02\x88\u03E9\x03\x02\x02\x02\x8A\u03F5\x03\x02\x02\x02\x8C\u03FC\x03" +
		"\x02\x02\x02\x8E\u0404\x03\x02\x02\x02\x90\u0407\x03\x02\x02\x02\x92\u040D" +
		"\x03\x02\x02\x02\x94\u0426\x03\x02\x02\x02\x96\u0428\x03\x02\x02\x02\x98" +
		"\u043C\x03\x02\x02\x02\x9A\u043F\x03\x02\x02\x02\x9C\u0445\x03\x02\x02" +
		"\x02\x9E\u045F\x03\x02\x02\x02\xA0\u0466\x03\x02\x02\x02\xA2\u0471\x03" +
		"\x02\x02\x02\xA4\u047B\x03\x02\x02\x02\xA6\u048D\x03\x02\x02\x02\xA8\u0495" +
		"\x03\x02\x02\x02\xAA\u049D\x03\x02\x02\x02\xAC\u04A1\x03\x02\x02\x02\xAE" +
		"\u04AF\x03\x02\x02\x02\xB0\u04BD\x03\x02\x02\x02\xB2\u04BF\x03\x02\x02" +
		"\x02\xB4\u04D3\x03\x02\x02\x02\xB6\u04D7\x03\x02\x02\x02\xB8\u04FC\x03" +
		"\x02\x02\x02\xBA\u0509\x03\x02\x02\x02\xBC\u0513\x03\x02\x02\x02\xBE\u051E" +
		"\x03\x02\x02\x02\xC0\xC2\x07\x13\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC5" +
		"\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xCD" +
		"\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC9\x05\x9AN\x02\xC7\xCA" +
		"\x05\xB0Y\x02\xC8\xCA\x07\x02\x02\x03\xC9\xC7\x03\x02\x02\x02\xC9\xC8" +
		"\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB\xC6\x03\x02\x02\x02\xCC\xCF" +
		"\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD3" +
		"\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD2\x07\x13\x02\x02\xD1\xD0" +
		"\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4" +
		"\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD7" +
		"\x07\x02\x02\x03\xD7\x03\x03\x02\x02\x02\xD8\xDA\x07\x13\x02\x02\xD9\xD8" +
		"\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC" +
		"\x03\x02\x02\x02\xDC\xE5\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE1" +
		"\x05\x90I\x02\xDF\xE2\x05\xB0Y\x02\xE0\xE2\x07\x02\x02\x03\xE1\xDF\x03" +
		"\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE4\x03\x02\x02\x02\xE3\xDE\x03" +
		"\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03" +
		"\x02\x02\x02\xE6\xEB\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEA\x07" +
		"\x13\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03" +
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xEB\x03" +
		"\x02\x02\x02\xEE\xEF\x07\x02\x02\x03\xEF\x05\x03\x02\x02\x02\xF0\xF2\x07" +
		"\x13\x02\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03" +
		"\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xFD\x03\x02\x02\x02\xF5\xF3\x03" +
		"\x02\x02\x02\xF6\xF9\x05x=\x02\xF7\xFA\x05\xB0Y\x02\xF8\xFA\x07\x02\x02" +
		"\x03\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFC\x03\x02\x02" +
		"\x02\xFB\xF6\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0103\x03\x02\x02\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0102\x07\x13\x02\x02\u0101\u0100\x03\x02\x02\x02\u0102" +
		"\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02" +
		"\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106" +
		"\u0107\x07\x02\x02\x03\u0107\x07\x03\x02\x02\x02\u0108\u0109\x07\x7F\x02" +
		"\x02\u0109\u010A\x07\x85\x02\x02\u010A\t\x03\x02\x02\x02\u010B\u010C\x07" +
		"\x7F\x02\x02\u010C\u010D\x07\x85\x02\x02\u010D\u010E\x07\x03\x02\x02\u010E" +
		"\u010F\x05\xACW\x02\u010F\v\x03\x02\x02\x02\u0110\u0111\x07&\x02\x02\u0111" +
		"\u0114\x07\x85\x02\x02\u0112\u0113\x07\x04\x02\x02\u0113\u0115\x05\xAC" +
		"W\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\r" +
		"\x03\x02\x02\x02\u0116\u0117\x07*\x02\x02\u0117\u0118\x07\x85\x02\x02" +
		"\u0118\u0119\x07\x03\x02\x02\u0119\u011A\x07\x05\x02\x02\u011A\u011B\x05" +
		"\xB8]\x02\u011B\u011C\x07\x06\x02\x02\u011C\u011F\x05\xACW\x02\u011D\u011E" +
		"\x079\x02\x02\u011E\u0120\x05\xB2Z\x02\u011F\u011D\x03\x02\x02\x02\u011F" +
		"\u0120\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u0122\x07E\x02" +
		"\x02\u0122\u0124\x07\x19\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124" +
		"\x03\x02\x02\x02\u0124\x0F\x03\x02\x02\x02\u0125\u0126\x076\x02\x02\u0126" +
		"\u0127\x07\x85\x02\x02\u0127\u0128\x07\x03\x02\x02\u0128\u0129\x05\xB8" +
		"]\x02\u0129\x11\x03\x02\x02\x02\u012A\u012B\x07\x85\x02\x02\u012B\u0130" +
		"\x07\x04\x02\x02\u012C\u012D\x07\x05\x02\x02\u012D\u012E\x05\xB8]\x02" +
		"\u012E\u012F\x07\x06\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012C\x03" +
		"\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0135\x05\xACW\x02\u0133\u0134\x07E\x02\x02\u0134\u0136\x07\x19\x02\x02" +
		"\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\x13\x03" +
		"\x02\x02\x02\u0137\u0139\x05\xBE`\x02\u0138\u0137\x03\x02\x02\x02\u0138" +
		"\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u0140\x05\x12" +
		"\n\x02\u013B\u013D\x07\x07\x02\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D" +
		"\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0141\x05\xBC_\x02" +
		"\u013F\u0141\x05\xAEX\x02\u0140\u013C\x03\x02\x02\x02\u0140\u013F\x03" +
		"\x02\x02\x02\u0141\x15\x03\x02\x02\x02\u0142\u0144\x05\xBE`\x02\u0143" +
		"\u0142\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02" +
		"\x02\x02\u0145\u014B\x05\x12\n\x02\u0146\u0148\x07\x07\x02\x02\u0147\u0146" +
		"\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
		"\u0149\u014C\x05\xBC_\x02\u014A\u014C\x05\xAEX\x02\u014B\u0147\x03\x02" +
		"\x02\x02\u014B\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C" +
		"\x17\x03\x02\x02\x02\u014D\u014E\x07w\x02\x02\u014E\u014F\x07\x85\x02" +
		"\x02\u014F\u0153\x07\b\x02\x02\u0150\u0152\x07\x13\x02\x02\u0151\u0150" +
		"\x03\x02\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02" +
		"\u0153\u0154\x03\x02\x02\x02\u0154\u015D\x03\x02\x02\x02\u0155\u0153\x03" +
		"\x02\x02\x02\u0156\u0158\x05\x14\v\x02\u0157\u0156\x03\x02\x02\x02\u0158" +
		"\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02" +
		"\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015C" +
		"\u015E\x05\x16\f\x02\u015D\u0159\x03\x02\x02\x02\u015D\u015E\x03\x02\x02" +
		"\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0162\x07\t\x02\x02\u0160\u0161" +
		"\x079\x02\x02\u0161\u0163\x05\xB6\\\x02\u0162\u0160\x03\x02\x02\x02\u0162" +
		"\u0163\x03\x02\x02\x02\u0163\x19\x03\x02\x02\x02\u0164\u0165\t\x02\x02" +
		"\x02\u0165\x1B\x03\x02\x02\x02\u0166\u0167\t\x03\x02\x02\u0167\x1D\x03" +
		"\x02\x02\x02\u0168\u0169\x05\x1C\x0F\x02\u0169\u016A\x073\x02\x02\u016A" +
		"\u016C\x07\x85\x02\x02\u016B\u016D\x05\xA4S\x02\u016C\u016B\x03\x02\x02" +
		"\x02\u016C\u016D\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E\u016F" +
		"\x07Z\x02\x02\u016F\u0171\x05\xB8]\x02\u0170\u016E\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0173\x07a\x02" +
		"\x02\u0173\u0175\x05\xB8]\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175" +
		"\x03\x02\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0178\x05\x1A\x0E\x02" +
		"\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\x1F\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u0179\u017A\x07]\x02\x02\u017A\u017B\x07\x85\x02\x02\u017B" +
		"\u017C\x07\x04\x02\x02\u017C\u017F\x05\xACW\x02\u017D\u017E\x079\x02\x02" +
		"\u017E\u0180\x05\xB8]\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03" +
		"\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u0182\x07L\x02\x02\u0182" +
		"\u0184\x05\xB8]\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02" +
		"\x02\u0184\u0188\x03\x02\x02\x02\u0185\u0186\x07p\x02\x02\u0186\u0187" +
		"\x07Z\x02\x02\u0187\u0189\x05\xB8]\x02\u0188\u0185\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018D\x03\x02\x02\x02\u018A\u018B\x07m\x02" +
		"\x02\u018B\u018C\x07Z\x02\x02\u018C\u018E\x05\xB8]\x02\u018D\u018A\x03" +
		"\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E!\x03\x02\x02\x02\u018F" +
		"\u0190\x07,\x02\x02\u0190\u0197\x07Q\x02\x02\u0191\u0192\x07H\x02\x02" +
		"\u0192\u0197\x07Q\x02\x02\u0193\u0194\x07x\x02\x02\u0194\u0197\x07Q\x02" +
		"\x02\u0195\u0197\x07\\\x02\x02\u0196\u018F\x03\x02\x02\x02\u0196\u0191" +
		"\x03\x02\x02\x02\u0196\u0193\x03\x02\x02\x02\u0196\u0195\x03\x02\x02\x02" +
		"\u0197#\x03\x02\x02\x02\u0198\u0199\x073\x02\x02\u0199\u01B4\x07g\x02" +
		"\x02\u019A\u019B\x073\x02\x02\u019B\u01B4\x07j\x02\x02\u019C\u019D\x07" +
		"3\x02\x02\u019D\u01B4\x07l\x02\x02\u019E\u01B4\x07A\x02\x02\u019F\u01A0" +
		"\x07]\x02\x02\u01A0\u01B4\x07F\x02\x02\u01A1\u01A2\x07]\x02\x02\u01A2" +
		"\u01B4\x07p\x02\x02\u01A3\u01B4\x07y\x02\x02\u01A4\u01A5\x07z\x02\x02" +
		"\u01A5\u01B4\x07A\x02\x02\u01A6\u01A7\x07|\x02\x02\u01A7\u01B4\x07F\x02" +
		"\x02\u01A8\u01A9\x07c\x02\x02\u01A9\u01B4\x07F\x02\x02\u01AA\u01AB\x07" +
		"c\x02\x02\u01AB\u01B4\x07k\x02\x02\u01AC\u01AE\x07,\x02\x02\u01AD\u01AC" +
		"\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02" +
		"\u01AF\u01B0\x07c\x02\x02\u01B0\u01B4\x07g\x02\x02\u01B1\u01B2\x07c\x02" +
		"\x02\u01B2\u01B4\x07n\x02\x02\u01B3\u0198\x03\x02\x02\x02\u01B3\u019A" +
		"\x03\x02\x02\x02\u01B3\u019C\x03\x02\x02\x02\u01B3\u019E\x03\x02\x02\x02" +
		"\u01B3\u019F\x03\x02\x02\x02\u01B3\u01A1\x03\x02\x02\x02\u01B3\u01A3\x03" +
		"\x02\x02\x02\u01B3\u01A4\x03\x02\x02\x02\u01B3\u01A6\x03\x02\x02\x02\u01B3" +
		"\u01A8\x03\x02\x02\x02\u01B3\u01AA\x03\x02\x02\x02\u01B3\u01AD\x03\x02" +
		"\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4%\x03\x02\x02\x02\u01B5\u01B8" +
		"\x07o\x02\x02\u01B6\u01B8\x05\xA6T\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7" +
		"\u01B6\x03\x02\x02\x02\u01B8\'\x03\x02\x02\x02\u01B9\u01BA\x05\"\x12\x02" +
		"\u01BA\u01BB\x07`\x02\x02\u01BB\u01BC\x07\x85\x02\x02\u01BC\u01C1\x07" +
		"\x04\x02\x02\u01BD\u01BE\x07\x05\x02\x02\u01BE\u01BF\x05\xB8]\x02\u01BF" +
		"\u01C0\x07\x06\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01BD\x03\x02" +
		"\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3" +
		"\u01C6\x05&\x14\x02\u01C4\u01C5\x07a\x02\x02\u01C5\u01C7\x05\xB8]\x02" +
		"\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03" +
		"\x02\x02\x02\u01C8\u01CA\x05\x1A\x0E\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA)\x03\x02\x02\x02\u01CB\u01CC\x05$\x13\x02" +
		"\u01CC\u01CD\x07`\x02\x02\u01CD\u01CE\x07\x85\x02\x02\u01CE+\x03\x02\x02" +
		"\x02\u01CF\u01D0\t\x04\x02\x02\u01D0-\x03\x02\x02\x02\u01D1\u01D2\x05" +
		",\x17\x02\u01D2\u01D3\x05\xB8]\x02\u01D3/\x03\x02\x02\x02\u01D4\u01D8" +
		"\x07\b\x02\x02\u01D5\u01D7\x07\x13\x02\x02\u01D6\u01D5\x03\x02\x02\x02" +
		"\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03" +
		"\x02\x02\x02\u01D9\u01E7\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB" +
		"\u01E1\x05.\x18\x02\u01DC\u01DD\x05\xAEX\x02\u01DD\u01DE\x05.\x18\x02" +
		"\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01E0\u01E3\x03" +
		"\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2" +
		"\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E6\x05\xAE" +
		"X\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E8" +
		"\x03\x02\x02\x02\u01E7\u01DB\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02" +
		"\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x07\t\x02\x02\u01EA1\x03\x02" +
		"\x02\x02\u01EB\u01EF\x07)\x02\x02\u01EC\u01ED\x07Y\x02\x02\u01ED\u01EF" +
		"\x071\x02\x02\u01EE\u01EB\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02" +
		"\u01EF3\x03\x02\x02\x02\u01F0\u01F1\x07y\x02\x02\u01F1\u01F2\x07\x85\x02" +
		"\x02\u01F2\u01F3\x07\x04\x02\x02\u01F3\u01F6\x05\xACW\x02\u01F4\u01F5" +
		"\x07L\x02\x02\u01F5\u01F7\x05\xB8]\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6" +
		"\u01F7\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F9\x07\x81" +
		"\x02\x02\u01F9\u01FB\x052\x1A\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB" +
		"\x03\x02\x02\x02\u01FB\u01FE\x03\x02\x02\x02\u01FC\u01FD\x07E\x02\x02" +
		"\u01FD\u01FF\x07\x19\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03" +
		"\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200\u0201\x07U\x02\x02\u0201" +
		"\u0203\x050\x19\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02" +
		"\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0205\x07J\x02\x02\u0205\u0207" +
		"\x050\x19\x02\u0206\u0204\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02" +
		"\u02075\x03\x02\x02\x02\u0208\u0209\x07&\x02\x02\u0209\u020C\x07\x85\x02" +
		"\x02\u020A\u020B\x07\x04\x02\x02\u020B\u020D\x05\xACW\x02\u020C\u020A" +
		"\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D7\x03\x02\x02\x02\u020E" +
		"\u020F\x072\x02\x02\u020F\u0210\x07\x85\x02\x02\u0210\u0211\x07\b\x02" +
		"\x02\u0211\u0212\x07M\x02\x02\u0212\u0213\x07\x85\x02\x02\u0213\u0214" +
		"\x05@!\x02\u0214\u0215\x07=\x02\x02\u0215\u0216\x05@!\x02\u0216\u0217" +
		"\x07\t\x02\x02\u02179\x03\x02\x02\x02\u0218\u0219\x07G\x02\x02\u0219\u021C" +
		"\x07\x85\x02\x02\u021A\u021B\x07\x04\x02\x02\u021B\u021D\x05\xACW\x02" +
		"\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D;\x03\x02" +
		"\x02\x02\u021E\u021F\x07r\x02\x02\u021F\u0222\x07\x85\x02\x02\u0220\u0221" +
		"\x07\x04\x02\x02\u0221\u0223\x05\xACW\x02\u0222\u0220\x03\x02\x02\x02" +
		"\u0222\u0223\x03\x02\x02\x02\u0223=\x03\x02\x02\x02\u0224\u0225\x07;\x02" +
		"\x02\u0225\u0229\x07\b\x02\x02\u0226\u0228\x07\x13\x02\x02\u0227\u0226" +
		"\x03\x02\x02\x02\u0228\u022B\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02" +
		"\u0229\u022A\x03\x02\x02\x02\u022A\u0235\x03\x02\x02\x02\u022B\u0229\x03" +
		"\x02\x02\x02\u022C\u0232\x07\x85\x02\x02\u022D\u022E\x05\xAEX\x02\u022E" +
		"\u022F\x07\x85\x02\x02\u022F\u0231\x03\x02\x02\x02\u0230\u022D\x03\x02" +
		"\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232" +
		"\u0233\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02" +
		"\x02\x02\u0235\u022C\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236" +
		"\u0237\x03\x02\x02\x02\u0237\u0238\x07\t\x02\x02\u0238?\x03\x02\x02\x02" +
		"\u0239\u023B\x05> \x02\u023A\u0239\x03\x02\x02\x02\u023A\u023B\x03\x02" +
		"\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x07>\x02\x02\u023D\u023E" +
		"\x05\xA6T\x02\u023EA\x03\x02\x02\x02\u023F\u0240\x07P\x02\x02\u0240\u0241" +
		"\x05@!\x02\u0241C\x03\x02\x02\x02\u0242\u0245\x05@!\x02\u0243\u0245\x05" +
		"> \x02\u0244\u0242\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245E" +
		"\x03\x02\x02\x02\u0246\u0247\x07Y\x02\x02\u0247\u024A\x07\x85\x02\x02" +
		"\u0248\u0249\x07M\x02\x02\u0249\u024B\x07\x85\x02\x02\u024A\u0248\x03" +
		"\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
		"\u024D\x05D#\x02\u024DG\x03\x02\x02\x02\u024E\u024F\x07?\x02\x02\u024F" +
		"\u0250\x05> \x02\u0250I\x03\x02\x02\x02\u0251\u0252\x07B\x02\x02\u0252" +
		"\u0253\x05> \x02\u0253K\x03\x02\x02\x02\u0254\u025B\x05B\"\x02\u0255\u025B" +
		"\x058\x1D\x02\u0256\u025B\x05P)\x02\u0257\u025B\x05F$\x02\u0258\u025B" +
		"\x05H%\x02\u0259\u025B\x05J&\x02\u025A\u0254\x03\x02\x02\x02\u025A\u0255" +
		"\x03\x02\x02\x02\u025A\u0256\x03\x02\x02\x02\u025A\u0257\x03\x02\x02\x02" +
		"\u025A\u0258\x03\x02\x02\x02\u025A\u0259\x03\x02\x02\x02\u025BM\x03\x02" +
		"\x02\x02\u025C\u025E\x05\xBE`\x02\u025D\u025C\x03\x02\x02\x02\u025D\u025E" +
		"\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0261\x05L\'\x02\u0260" +
		"\u0262\x07\x17\x02\x02\u0261\u0260\x03\x02\x02\x02\u0261\u0262\x03\x02" +
		"\x02\x02\u0262O\x03\x02\x02\x02\u0263\u0264\x07u\x02\x02\u0264\u027B\x07" +
		"\x85\x02\x02\u0265\u0269\x07\b\x02\x02\u0266\u0268\x07\x13\x02\x02\u0267" +
		"\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267\x03\x02" +
		"\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u0271\x03\x02\x02\x02\u026B" +
		"\u0269\x03\x02\x02\x02\u026C\u026D\x05N(\x02\u026D\u026E\x05\xB0Y\x02" +
		"\u026E\u0270\x03\x02\x02\x02\u026F\u026C\x03\x02\x02\x02\u0270\u0273\x03" +
		"\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272" +
		"\u0277\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0276\x07\x13" +
		"\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277" +
		"\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x03\x02" +
		"\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027C\x07\t\x02\x02\u027B\u0265" +
		"\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027CQ\x03\x02\x02\x02\u027D" +
		"\u0284\x058\x1D\x02\u027E\u0284\x05:\x1E\x02\u027F\u0284\x05B\"\x02\u0280" +
		"\u0284\x05<\x1F\x02\u0281\u0284\x05P)\x02\u0282\u0284\x056\x1C\x02\u0283" +
		"\u027D\x03\x02\x02\x02\u0283\u027E\x03\x02\x02\x02\u0283\u027F\x03\x02" +
		"\x02\x02\u0283\u0280\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283" +
		"\u0282\x03\x02\x02\x02\u0284S\x03\x02\x02\x02\u0285\u0287\x05\xBE`\x02" +
		"\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0288\x03" +
		"\x02\x02\x02\u0288\u028A\x05R*\x02\u0289\u028B\x07\x17\x02\x02\u028A\u0289" +
		"\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028BU\x03\x02\x02\x02\u028C" +
		"\u028D\x07u\x02\x02\u028D\u028E\x07V\x02\x02\u028E\u02A5\x07\x85\x02\x02" +
		"\u028F\u0293\x07\b\x02\x02\u0290\u0292\x07\x13\x02\x02\u0291\u0290\x03" +
		"\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293" +
		"\u0294\x03\x02\x02\x02\u0294\u029B\x03\x02\x02\x02\u0295\u0293\x03\x02" +
		"\x02\x02\u0296\u0297\x05T+\x02\u0297\u0298\x05\xB0Y\x02\u0298\u029A\x03" +
		"\x02\x02\x02\u0299\u0296\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B" +
		"\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u02A1\x03\x02" +
		"\x02\x02\u029D\u029B\x03\x02\x02\x02\u029E\u02A0\x07\x13\x02\x02\u029F" +
		"\u029E\x03\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1\u029F\x03\x02" +
		"\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3" +
		"\u02A1\x03\x02\x02\x02\u02A4\u02A6\x07\t\x02\x02\u02A5\u028F\x03\x02\x02" +
		"\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6W\x03\x02\x02\x02\u02A7\u02A8\x07" +
		"u\x02\x02\u02A8\u02A9\x07V\x02\x02\u02A9\u02AA\x07R\x02\x02\u02AA\u02AB" +
		"\x07\x85\x02\x02\u02AB\u02AC\x07\x04\x02\x02\u02AC\u02AF\x05\xA6T\x02" +
		"\u02AD\u02AE\x07a\x02\x02\u02AE\u02B0\x05\xB8]\x02\u02AF\u02AD\x03\x02" +
		"\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1" +
		"\u02B3\x05\x1A\x0E\x02\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3\x03\x02" +
		"\x02\x02\u02B3Y\x03\x02\x02\x02\u02B4\u02B7\x07\x85\x02\x02\u02B5\u02B6" +
		"\x07\x03\x02\x02\u02B6\u02B8\x05\xB8]\x02\u02B7\u02B5\x03\x02\x02\x02" +
		"\u02B7\u02B8\x03\x02\x02\x02\u02B8[\x03\x02\x02\x02\u02B9\u02BB\x05\xBE" +
		"`\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC" +
		"\x03\x02\x02\x02\u02BC\u02C2\x05Z.\x02\u02BD\u02BF\x07\x07\x02\x02\u02BE" +
		"\u02BD\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02" +
		"\x02\x02\u02C0\u02C3\x05\xBA^\x02\u02C1\u02C3\x05\xAEX\x02\u02C2\u02BE" +
		"\x03\x02\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3]\x03\x02\x02\x02\u02C4" +
		"\u02C6\x05\xBE`\x02\u02C5\u02C4\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02" +
		"\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02CD\x05Z.\x02\u02C8\u02CA\x07" +
		"\x07\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA" +
		"\u02CB\x03\x02\x02\x02\u02CB\u02CE\x05\xBA^\x02\u02CC\u02CE\x05\xAEX\x02" +
		"\u02CD\u02C9\x03\x02\x02\x02\u02CD\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03" +
		"\x02\x02\x02\u02CE_\x03\x02\x02\x02\u02CF\u02D0\x07@\x02\x02\u02D0\u02D3" +
		"\x07\x85\x02\x02\u02D1\u02D2\x07\x04\x02\x02\u02D2\u02D4\x05\xA8U\x02" +
		"\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D5\x03" +
		"\x02\x02\x02\u02D5\u02D9\x07\b\x02\x02\u02D6\u02D8\x07\x13\x02\x02\u02D7" +
		"\u02D6\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02D7\x03\x02" +
		"\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02E3\x03\x02\x02\x02\u02DB" +
		"\u02D9\x03\x02\x02\x02\u02DC\u02DE\x05\\/\x02\u02DD\u02DC\x03\x02\x02" +
		"\x02\u02DE\u02E1\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02E0" +
		"\x03\x02\x02\x02\u02E0\u02E2\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02" +
		"\u02E2\u02E4\x05^0\x02\u02E3\u02DF\x03\x02\x02\x02\u02E3\u02E4\x03\x02" +
		"\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E8\x07\t\x02\x02\u02E6\u02E7" +
		"\x079\x02\x02\u02E7\u02E9\x05\xB8]\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8" +
		"\u02E9\x03\x02\x02\x02\u02E9a\x03\x02\x02\x02\u02EA\u02EB\x07(\x02\x02" +
		"\u02EB\u02F6\x07J\x02\x02\u02EC\u02ED\x07(\x02\x02\u02ED\u02F6\x07U\x02" +
		"\x02\u02EE\u02F6\x073\x02\x02\u02EF\u02F6\x07:\x02\x02\u02F0\u02F6\x07" +
		"D\x02\x02\u02F1\u02F2\x07\x82\x02\x02\u02F2\u02F6\x07J\x02\x02\u02F3\u02F4" +
		"\x07\x82\x02\x02\u02F4\u02F6\x07U\x02\x02\u02F5\u02EA\x03\x02\x02\x02" +
		"\u02F5\u02EC\x03\x02\x02\x02\u02F5\u02EE\x03\x02\x02\x02\u02F5\u02EF\x03" +
		"\x02\x02\x02\u02F5\u02F0\x03\x02\x02\x02\u02F5\u02F1\x03\x02\x02\x02\u02F5" +
		"\u02F3\x03\x02\x02\x02\u02F6c\x03\x02\x02\x02\u02F7\u02F8\x07A\x02\x02" +
		"\u02F8\u02FA\x07\x85\x02\x02\u02F9\u02FB\x05\xA4S\x02\u02FA\u02F9\x03" +
		"\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC" +
		"\u02FD\x07q\x02\x02\u02FD\u0300\x05b2\x02\u02FE\u02FF\x07L\x02\x02\u02FF" +
		"\u0301\x05\xB8]\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u0301\x03\x02\x02" +
		"\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x07E\x02\x02\u0303\u0306" +
		"\x07\x19\x02\x02\u0304\u0305\x07{\x02\x02\u0305\u0307\x05\xB8]\x02\u0306" +
		"\u0304\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307e\x03\x02\x02" +
		"\x02\u0308\u0309\x07O\x02\x02\u0309\u030A\x07\x19\x02\x02\u030Ag\x03\x02" +
		"\x02\x02\u030B\u030C\x07W\x02\x02\u030C\u030D\x07\x85\x02\x02\u030D\u030E" +
		"\x07\x83\x02\x02\u030E\u030F\x07\x85\x02\x02\u030Fi\x03\x02\x02\x02\u0310" +
		"\u0311\x07S\x02\x02\u0311\u0312\x07`\x02\x02\u0312\u0314\x07\x85\x02\x02" +
		"\u0313\u0315\x05\xA4S\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03" +
		"\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0317\x07a\x02\x02\u0317" +
		"\u0319\x05\xB8]\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0319\x03\x02\x02" +
		"\x02\u0319\u031B\x03\x02\x02\x02\u031A\u031C\x05\x1A\x0E\x02\u031B\u031A" +
		"\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031Ck\x03\x02\x02\x02\u031D" +
		"\u031E\x07c\x02\x02\u031E\u031F\x07f\x02\x02\u031F\u0320\x07\x85\x02\x02" +
		"\u0320\u0321\x07\x04\x02\x02\u0321\u0323\x05\xACW\x02\u0322\u0324\x07" +
		"*\x02\x02\u0323\u0322\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324" +
		"\u0327\x03\x02\x02\x02\u0325\u0326\x07L\x02\x02\u0326\u0328\x05\xB8]\x02" +
		"\u0327\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328m\x03\x02" +
		"\x02\x02\u0329\u032A\x07c\x02\x02\u032A\u032B\x077\x02\x02\u032B\u032E" +
		"\x07\x85\x02\x02\u032C\u032D\x07L\x02\x02\u032D\u032F\x05\xB8]\x02\u032E" +
		"\u032C\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0333\x03\x02" +
		"\x02\x02\u0330\u0331\x079\x02\x02\u0331\u0332\x07a\x02\x02\u0332\u0334" +
		"\x05\xB8]\x02\u0333\u0330\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02" +
		"\u0334o\x03\x02\x02\x02\u0335\u0337\x05\xBE`\x02\u0336\u0335\x03\x02\x02" +
		"\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u0339" +
		"\x07_\x02\x02\u0339\u033A\x05\xB8]\x02\u033A\u033B\x07\x19\x02\x02\u033B" +
		"q\x03\x02\x02\x02\u033C\u033D\x07R\x02\x02\u033D\u033E\x07\x85\x02\x02" +
		"\u033E\u033F\x07\x04\x02\x02\u033F\u0340\x05\xA6T\x02\u0340\u0341\x07" +
		".\x02\x02\u0341\u0342\x07L\x02\x02\u0342\u0345\x05\xB8]\x02\u0343\u0344" +
		"\x07\x7F\x02\x02\u0344\u0346\x07\x19\x02\x02\u0345\u0343\x03\x02\x02\x02" +
		"\u0345\u0346\x03\x02\x02\x02\u0346\u0349\x03\x02\x02\x02\u0347\u0348\x07" +
		"-\x02\x02\u0348\u034A\x07\x19\x02\x02\u0349\u0347\x03\x02\x02\x02\u0349" +
		"\u034A\x03\x02\x02\x02\u034A\u034E\x03\x02\x02\x02\u034B\u034C\x07d\x02" +
		"\x02\u034C\u034D\x07s\x02\x02\u034D\u034F\x05\xB8]\x02\u034E\u034B\x03" +
		"\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u0353\x03\x02\x02\x02\u0350" +
		"\u0351\x07t\x02\x02\u0351\u0352\x07s\x02\x02\u0352\u0354\x05\xB8]\x02" +
		"\u0353\u0350\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0357\x03" +
		"\x02\x02\x02\u0355\u0356\x07a\x02\x02\u0356\u0358\x05\xB8]\x02\u0357\u0355" +
		"\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035B\x03\x02\x02\x02" +
		"\u0359\u035A\x078\x02\x02\u035A\u035C\x05\xB8]\x02\u035B\u0359\x03\x02" +
		"\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u0373\x03\x02\x02\x02\u035D" +
		"\u0361\x07\b\x02\x02\u035E\u0360\x07\x13\x02\x02\u035F\u035E\x03\x02\x02" +
		"\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0362" +
		"\x03\x02\x02\x02\u0362\u0369\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02" +
		"\u0364\u0365\x05p9\x02\u0365\u0366\x05\xB0Y\x02\u0366\u0368\x03\x02\x02" +
		"\x02\u0367\u0364\x03\x02\x02\x02\u0368\u036B\x03\x02\x02\x02\u0369\u0367" +
		"\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036F\x03\x02\x02\x02" +
		"\u036B\u0369\x03\x02\x02\x02\u036C\u036E\x07\x13\x02\x02\u036D\u036C\x03" +
		"\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F" +
		"\u0370\x03\x02\x02\x02\u0370\u0372\x03\x02\x02\x02\u0371\u036F\x03\x02" +
		"\x02\x02\u0372\u0374\x07\t\x02\x02\u0373\u035D\x03\x02\x02\x02\u0373\u0374" +
		"\x03\x02\x02\x02\u0374s\x03\x02\x02\x02\u0375\u0376\t\x05\x02\x02\u0376" +
		"u\x03\x02\x02\x02\u0377\u038A\x05\b\x05\x02\u0378\u038A\x05\n\x06\x02" +
		"\u0379\u038A\x05\x0E\b\x02\u037A\u038A\x05\x10\t\x02\u037B\u038A\x05\x18" +
		"\r\x02\u037C\u038A\x05\x1E\x10\x02\u037D\u038A\x05 \x11\x02\u037E\u038A" +
		"\x05(\x15\x02\u037F\u038A\x05*\x16\x02\u0380\u038A\x054\x1B\x02\u0381" +
		"\u038A\x05`1\x02\u0382\u038A\x05d3\x02\u0383\u038A\x05f4\x02\u0384\u038A" +
		"\x05j6\x02\u0385\u038A\x05h5\x02\u0386\u038A\x05l7\x02\u0387\u038A\x05" +
		"n8\x02\u0388\u038A\x05X-\x02\u0389\u0377\x03\x02\x02\x02\u0389\u0378\x03" +
		"\x02\x02\x02\u0389\u0379\x03\x02\x02\x02\u0389\u037A\x03\x02\x02\x02\u0389" +
		"\u037B\x03\x02\x02\x02\u0389\u037C\x03\x02\x02\x02\u0389\u037D\x03\x02" +
		"\x02\x02\u0389\u037E\x03\x02\x02\x02\u0389\u037F\x03\x02\x02\x02\u0389" +
		"\u0380\x03\x02\x02\x02\u0389\u0381\x03\x02\x02\x02\u0389\u0382\x03\x02" +
		"\x02\x02\u0389\u0383\x03\x02\x02\x02\u0389\u0384\x03\x02\x02\x02\u0389" +
		"\u0385\x03\x02\x02\x02\u0389\u0386\x03\x02\x02\x02\u0389\u0387\x03\x02" +
		"\x02\x02\u0389\u0388\x03\x02\x02\x02\u038Aw\x03\x02\x02\x02\u038B\u038D" +
		"\x05\xBE`\x02\u038C\u038B\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02" +
		"\u038D\u038E\x03\x02\x02\x02\u038E\u0390\x05v<\x02\u038F\u0391\x07\x17" +
		"\x02\x02\u0390\u038F\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391" +
		"y\x03\x02\x02\x02\u0392\u0393\x05t;\x02\u0393\u0394\x074\x02\x02\u0394" +
		"\u0395\x07\x85\x02\x02\u0395\u0399\x07\b\x02\x02\u0396\u0398\x07\x13\x02" +
		"\x02\u0397\u0396\x03\x02\x02\x02\u0398\u039B\x03\x02\x02\x02\u0399\u0397" +
		"\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u03A1\x03\x02\x02\x02" +
		"\u039B\u0399\x03\x02\x02\x02\u039C\u039D\x05x=\x02\u039D\u039E\x05\xB0" +
		"Y\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u039C\x03\x02\x02\x02\u03A0\u03A3" +
		"\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02" +
		"\u03A2\u03A7\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u03A6\x07" +
		"\x13\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02\x02\u03A7" +
		"\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03AA\x03\x02" +
		"\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA\u03AB\x07\t\x02\x02\u03AB{" +
		"\x03\x02\x02\x02\u03AC\u03AD\x07`\x02\x02\u03AD\u03AF\x07\x85\x02\x02" +
		"\u03AE\u03B0\x05\xA4S\x02\u03AF\u03AE\x03\x02\x02\x02\u03AF\u03B0\x03" +
		"\x02\x02\x02\u03B0\u03B3\x03\x02\x02\x02\u03B1\u03B2\x07\n\x02\x02\u03B2" +
		"\u03B4\x05\xACW\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02" +
		"\x02\u03B4}\x03\x02\x02\x02\u03B5\u03B7\x07b\x02\x02\u03B6\u03B5\x03\x02" +
		"\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8" +
		"\u03B9\x07R\x02\x02\u03B9\u03BA\x05\xA6T\x02\u03BA\x7F\x03\x02\x02\x02" +
		"\u03BB\u03C0\x05\xA6T\x02\u03BC\u03BD\x07\x05\x02\x02\u03BD\u03BE\x05" +
		"\xB8]\x02\u03BE\u03BF\x07\x06\x02\x02\u03BF\u03C1\x03\x02\x02\x02\u03C0" +
		"\u03BC\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\x81\x03\x02\x02" +
		"\x02\u03C2\u03C3\x05\x80A\x02\u03C3\u03C4\x07\n\x02\x02\u03C4\u03C5\x05" +
		"\x80A\x02\u03C5\x83\x03\x02\x02\x02\u03C6\u03C7\x075\x02\x02\u03C7\u03C8" +
		"\x07\x85\x02\x02\u03C8\u03CC\x07\b\x02\x02\u03C9\u03CB\x07\x13\x02\x02" +
		"\u03CA\u03C9\x03\x02\x02\x02\u03CB\u03CE\x03\x02\x02\x02\u03CC\u03CA\x03" +
		"\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03D4\x03\x02\x02\x02\u03CE" +
		"\u03CC\x03\x02\x02\x02\u03CF\u03D0\x05\x82B\x02\u03D0\u03D1\x05\xAEX\x02" +
		"\u03D1\u03D3\x03\x02\x02\x02\u03D2\u03CF\x03\x02\x02\x02\u03D3\u03D6\x03" +
		"\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5" +
		"\u03DA\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03D9\x07\x13" +
		"\x02\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA" +
		"\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02" +
		"\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03DE\x07\t\x02\x02\u03DE\x85" +
		"\x03\x02\x02\x02\u03DF\u03E8\x073\x02\x02\u03E0\u03E8\x07A\x02\x02\u03E1" +
		"\u03E2\x07z\x02\x02\u03E2\u03E8\x07A\x02\x02\u03E3\u03E8\x07I\x02\x02" +
		"\u03E4\u03E8\x07]\x02\x02\u03E5\u03E8\x07y\x02\x02\u03E6\u03E8\x07|\x02" +
		"\x02\u03E7\u03DF\x03\x02\x02\x02\u03E7\u03E0\x03\x02\x02\x02\u03E7\u03E1" +
		"\x03\x02\x02\x02\u03E7\u03E3\x03\x02\x02\x02\u03E7\u03E4\x03\x02\x02\x02" +
		"\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E8\x87\x03" +
		"\x02\x02\x02\u03E9\u03EF\x05\xA6T\x02\u03EA\u03EB\x05\xAEX\x02\u03EB\u03EC" +
		"\x05\xA6T\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03EA\x03\x02\x02\x02" +
		"\u03EE\u03F1\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03" +
		"\x02\x02\x02\u03F0\u03F3\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2" +
		"\u03F4\x05\xAEX\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02" +
		"\x02\u03F4\x89\x03\x02\x02\x02\u03F5\u03F6\x05\x86D\x02\u03F6\u03F7\x07" +
		"5\x02\x02\u03F7\u03F8\x07R\x02\x02\u03F8\u03FA\x05\xA6T\x02\u03F9\u03FB" +
		"\x05\x88E\x02\u03FA\u03F9\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02" +
		"\u03FB\x8B\x03\x02\x02\x02\u03FC\u03FD\x07N\x02\x02\u03FD\u03FE\x05\xA6" +
		"T\x02\u03FE\x8D\x03\x02\x02\x02\u03FF\u0405\x05~@\x02\u0400\u0405\x05" +
		"\x84C\x02\u0401\u0405\x05\x8AF\x02\u0402\u0405\x05\x8CG\x02\u0403\u0405" +
		"\x05f4\x02\u0404\u03FF\x03\x02\x02\x02\u0404\u0400\x03\x02\x02\x02\u0404" +
		"\u0401\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0403\x03\x02" +
		"\x02\x02\u0405\x8F\x03\x02\x02\x02\u0406\u0408\x05\xBE`\x02\u0407\u0406" +
		"\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02" +
		"\u0409\u040B\x05\x8EH\x02\u040A\u040C\x07\x17\x02\x02\u040B\u040A\x03" +
		"\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\x91\x03\x02\x02\x02\u040D" +
		"\u040E\x07}\x02\x02\u040E\u040F\x07\x85\x02\x02\u040F\u0413\x07\b\x02" +
		"\x02\u0410\u0412\x07\x13\x02\x02\u0411\u0410\x03\x02\x02\x02\u0412\u0415" +
		"\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02" +
		"\u0414\u041B\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0416\u0417\x05" +
		"\x90I\x02\u0417\u0418\x05\xB0Y\x02\u0418\u041A\x03\x02\x02\x02\u0419\u0416" +
		"\x03\x02\x02\x02\u041A\u041D\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02" +
		"\u041B\u041C\x03\x02\x02\x02\u041C\u0421\x03\x02\x02\x02\u041D\u041B\x03" +
		"\x02\x02\x02\u041E\u0420\x07\x13\x02\x02\u041F\u041E\x03\x02\x02\x02\u0420" +
		"\u0423\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0421\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0424" +
		"\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0424\u0425\x07\t\x02\x02" +
		"\u0425\x93\x03\x02\x02\x02\u0426\u0427\t\x06\x02\x02\u0427\x95\x03\x02" +
		"\x02\x02\u0428\u0429\x07T\x02\x02\u0429\u042A\x05\x94K\x02\u042A\u042B" +
		"\x05\xA6T\x02\u042B\u042C\x07-\x02\x02\u042C\u042D\x07\x19\x02\x02\u042D" +
		"\x97\x03\x02\x02\x02\u042E\u043D\x05\b\x05\x02\u042F\u043D\x05\n\x06\x02" +
		"\u0430\u043D\x05\x0E\b\x02\u0431\u043D\x05z>\x02\u0432\u043D\x05r:\x02" +
		"\u0433\u043D\x05\x10\t\x02\u0434\u043D\x05\x9CO\x02\u0435\u043D\x05|?" +
		"\x02\u0436\u043D\x05\x18\r\x02\u0437\u043D\x05\x96L\x02\u0438\u043D\x05" +
		"`1\x02\u0439\u043D\x05f4\x02\u043A\u043D\x05\x92J\x02\u043B\u043D\x05" +
		"V,\x02\u043C\u042E\x03\x02\x02\x02\u043C\u042F\x03\x02\x02\x02\u043C\u0430" +
		"\x03\x02\x02\x02\u043C\u0431\x03\x02\x02\x02\u043C\u0432\x03\x02\x02\x02" +
		"\u043C\u0433\x03\x02\x02\x02\u043C\u0434\x03\x02\x02\x02\u043C\u0435\x03" +
		"\x02\x02\x02\u043C\u0436\x03\x02\x02\x02\u043C\u0437\x03\x02\x02\x02\u043C" +
		"\u0438\x03\x02\x02\x02\u043C\u0439\x03\x02\x02\x02\u043C\u043A\x03\x02" +
		"\x02\x02\u043C\u043B\x03\x02\x02\x02\u043D\x99\x03\x02\x02\x02\u043E\u0440" +
		"\x05\xBE`\x02\u043F\u043E\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02" +
		"\u0440\u0441\x03\x02\x02\x02\u0441\u0443\x05\x98M\x02\u0442\u0444\x07" +
		"\x17\x02\x02\u0443\u0442\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444" +
		"\x9B\x03\x02\x02\x02\u0445\u0446\x07X\x02\x02\u0446\u0447\x07\x85\x02" +
		"\x02\u0447\u044B\x07\b\x02\x02\u0448\u044A\x07\x13\x02\x02\u0449\u0448" +
		"\x03\x02\x02\x02\u044A\u044D\x03\x02\x02\x02\u044B\u0449\x03\x02\x02\x02" +
		"\u044B\u044C\x03\x02\x02\x02\u044C\u0453\x03\x02\x02\x02\u044D\u044B\x03" +
		"\x02\x02\x02\u044E\u044F\x05\x9AN\x02\u044F\u0450\x05\xB0Y\x02\u0450\u0452" +
		"\x03\x02\x02\x02\u0451\u044E\x03\x02\x02\x02\u0452\u0455\x03\x02\x02\x02" +
		"\u0453\u0451\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0459\x03" +
		"\x02\x02\x02\u0455\u0453\x03\x02\x02\x02\u0456\u0458\x07\x13\x02\x02\u0457" +
		"\u0456\x03\x02\x02\x02\u0458\u045B\x03\x02\x02\x02\u0459\u0457\x03\x02" +
		"\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045C\x03\x02\x02\x02\u045B" +
		"\u0459\x03\x02\x02\x02\u045C\u045D\x07\t\x02\x02\u045D\x9D\x03\x02\x02" +
		"\x02\u045E\u0460\x07i\x02\x02\u045F\u045E\x03\x02\x02\x02\u045F\u0460" +
		"\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0462\x07\x85\x02\x02" +
		"\u0462\u0463\x07\x04\x02\x02\u0463\u0464\x05\xACW\x02\u0464\x9F\x03\x02" +
		"\x02\x02\u0465\u0467\x05\xBE`\x02\u0466\u0465\x03\x02\x02\x02\u0466\u0467" +
		"\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468\u046E\x05\x9EP\x02" +
		"\u0469\u046B\x07\x07\x02\x02\u046A\u0469\x03\x02\x02\x02\u046A\u046B\x03" +
		"\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C\u046F\x05\xBC_\x02\u046D" +
		"\u046F\x05\xAEX\x02\u046E\u046A\x03\x02\x02\x02\u046E\u046D\x03\x02\x02" +
		"\x02\u046F\xA1\x03\x02\x02\x02\u0470\u0472\x05\xBE`\x02\u0471\u0470\x03" +
		"\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473" +
		"\u0479\x05\x9EP\x02\u0474\u0476\x07\x07\x02\x02\u0475\u0474\x03\x02\x02" +
		"\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u047A" +
		"\x05\xBC_\x02\u0478\u047A\x05\xAEX\x02\u0479\u0475\x03\x02\x02\x02\u0479" +
		"\u0478\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\xA3\x03\x02\x02" +
		"\x02\u047B\u047F\x07\v\x02\x02\u047C\u047E\x07\x13\x02\x02\u047D\u047C" +
		"\x03\x02\x02\x02\u047E\u0481\x03\x02\x02\x02\u047F\u047D\x03\x02\x02\x02" +
		"\u047F\u0480\x03\x02\x02\x02\u0480\u0489\x03\x02\x02\x02\u0481\u047F\x03" +
		"\x02\x02\x02\u0482\u0484\x05\xA0Q\x02\u0483\u0482\x03\x02\x02\x02\u0484" +
		"\u0487\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0485\u0486\x03\x02" +
		"\x02\x02\u0486\u0488\x03\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0488" +
		"\u048A\x05\xA2R\x02\u0489\u0485\x03\x02\x02\x02\u0489\u048A\x03\x02\x02" +
		"\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048C\x07\f\x02\x02\u048C\xA5\x03" +
		"\x02\x02\x02\u048D\u0492\x07\x85\x02\x02\u048E\u048F\x07\r\x02\x02\u048F" +
		"\u0491\x07\x85\x02\x02\u0490\u048E\x03\x02\x02\x02\u0491\u0494\x03\x02" +
		"\x02\x02\u0492\u0490\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493" +
		"\xA7\x03\x02\x02\x02\u0494\u0492\x03\x02\x02\x02\u0495\u0496\t\x07\x02" +
		"\x02\u0496\xA9\x03\x02\x02\x02\u0497\u049E\t\b\x02\x02\u0498\u049B\x07" +
		"v\x02\x02\u0499\u049A\x07s\x02\x02\u049A\u049C\x07\x1B\x02\x02\u049B\u0499" +
		"\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049E\x03\x02\x02\x02" +
		"\u049D\u0497\x03\x02\x02\x02\u049D\u0498\x03\x02\x02\x02\u049E\xAB\x03" +
		"\x02\x02\x02\u049F\u04A2\x05\xAAV\x02\u04A0\u04A2\x05\xA6T\x02\u04A1\u049F" +
		"\x03\x02\x02\x02\u04A1\u04A0\x03\x02\x02\x02\u04A2\xAD\x03\x02\x02\x02" +
		"\u04A3\u04A7\x07\x07\x02\x02\u04A4\u04A6\x07\x13\x02\x02\u04A5\u04A4\x03" +
		"\x02\x02\x02\u04A6\u04A9\x03\x02\x02\x02\u04A7\u04A5\x03\x02\x02\x02\u04A7" +
		"\u04A8\x03\x02\x02\x02\u04A8\u04B0\x03\x02\x02\x02\u04A9\u04A7\x03\x02" +
		"\x02\x02\u04AA\u04AC\x07\x13\x02\x02\u04AB\u04AA\x03\x02\x02\x02\u04AC" +
		"\u04AD\x03\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02" +
		"\x02\x02\u04AE\u04B0\x03\x02\x02\x02\u04AF\u04A3\x03\x02\x02\x02\u04AF" +
		"\u04AB\x03\x02\x02\x02\u04B0\xAF\x03\x02\x02\x02\u04B1\u04B5\x07\x0E\x02" +
		"\x02\u04B2\u04B4\x07\x13\x02\x02\u04B3\u04B2\x03\x02\x02\x02\u04B4\u04B7" +
		"\x03\x02\x02\x02\u04B5\u04B3\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02" +
		"\u04B6\u04BE\x03\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B8\u04BA\x07" +
		"\x13\x02\x02\u04B9\u04B8\x03\x02\x02\x02\u04BA\u04BB\x03\x02\x02\x02\u04BB" +
		"\u04B9\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BE\x03\x02" +
		"\x02\x02\u04BD\u04B1\x03\x02\x02\x02\u04BD\u04B9\x03\x02\x02\x02\u04BE" +
		"\xB1\x03\x02\x02\x02\u04BF\u04C3\x07\x05\x02\x02\u04C0\u04C2\x07\x13\x02" +
		"\x02\u04C1\u04C0\x03\x02\x02\x02\u04C2\u04C5\x03\x02\x02\x02\u04C3\u04C1" +
		"\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04CF\x03\x02\x02\x02" +
		"\u04C5\u04C3\x03\x02\x02\x02\u04C6\u04CC\x05\xB8]\x02\u04C7\u04C8\x05" +
		"\xAEX\x02\u04C8\u04C9\x05\xB8]\x02\u04C9\u04CB\x03\x02\x02\x02\u04CA\u04C7" +
		"\x03\x02\x02\x02\u04CB\u04CE\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02" +
		"\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE\u04CC\x03" +
		"\x02\x02\x02\u04CF\u04C6\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0" +
		"\u04D1\x03\x02\x02\x02\u04D1\u04D2\x07\x06\x02\x02\u04D2\xB3\x03\x02\x02" +
		"\x02\u04D3\u04D4\x07\x85\x02\x02\u04D4\u04D5\x07\x03\x02\x02\u04D5\u04D6" +
		"\x05\xB8]\x02\u04D6\xB5\x03\x02\x02\x02\u04D7\u04DB\x07\b\x02\x02\u04D8" +
		"\u04DA\x07\x13\x02\x02\u04D9\u04D8\x03\x02\x02\x02\u04DA\u04DD\x03\x02" +
		"\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC" +
		"\u04EA\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DE\u04E4\x05\xB4" +
		"[\x02\u04DF\u04E0\x05\xAEX\x02\u04E0\u04E1\x05\xB4[\x02\u04E1\u04E3\x03" +
		"\x02\x02\x02\u04E2\u04DF\x03\x02\x02\x02\u04E3\u04E6\x03\x02\x02\x02\u04E4" +
		"\u04E2\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E8\x03\x02" +
		"\x02\x02\u04E6\u04E4\x03\x02\x02\x02\u04E7\u04E9\x05\xAEX\x02\u04E8\u04E7" +
		"\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EB\x03\x02\x02\x02" +
		"\u04EA\u04DE\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04EC\x03" +
		"\x02\x02\x02\u04EC\u04ED\x07\t\x02\x02\u04ED\xB7\x03\x02\x02\x02\u04EE" +
		"\u04EF\b]\x01\x02\u04EF\u04F0\x07\x0F\x02\x02\u04F0\u04FD\x05\xB8]\r\u04F1" +
		"\u04FD\x05\xB2Z\x02\u04F2\u04FD\x05\xB6\\\x02\u04F3\u04FD\x05\xA6T\x02" +
		"\u04F4\u04FD\x07\x18\x02\x02\u04F5\u04FD\x07\x1A\x02\x02\u04F6\u04FD\x07" +
		"\x1B\x02\x02\u04F7\u04FD\x07\x19\x02\x02\u04F8\u04F9\x07\v\x02\x02\u04F9" +
		"\u04FA\x05\xB8]\x02\u04FA\u04FB\x07\f\x02\x02\u04FB\u04FD\x03\x02\x02" +
		"\x02\u04FC\u04EE\x03\x02\x02\x02\u04FC\u04F1\x03\x02\x02\x02\u04FC\u04F2" +
		"\x03\x02\x02\x02\u04FC\u04F3\x03\x02\x02\x02\u04FC\u04F4\x03\x02\x02\x02" +
		"\u04FC\u04F5\x03\x02\x02\x02\u04FC\u04F6\x03\x02\x02\x02\u04FC\u04F7\x03" +
		"\x02\x02\x02\u04FC\u04F8\x03\x02\x02\x02\u04FD\u0506\x03\x02\x02\x02\u04FE" +
		"\u04FF\f\f\x02\x02\u04FF\u0500\t\t\x02\x02\u0500\u0505\x05\xB8]\r\u0501" +
		"\u0502\f\v\x02\x02\u0502\u0503\t\n\x02\x02\u0503\u0505\x05\xB8]\f\u0504" +
		"\u04FE\x03\x02\x02\x02\u0504\u0501\x03\x02\x02\x02\u0505\u0508\x03\x02" +
		"\x02\x02\u0506\u0504\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507" +
		"\xB9\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050B\x07\x17\x02" +
		"\x02\u050A\u050C\x07\x13\x02\x02\u050B\u050A\x03\x02\x02\x02\u050C\u050D" +
		"\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02" +
		"\u050E\xBB\x03\x02\x02\x02\u050F\u0510\x07\x17\x02\x02\u0510\u0512\x07" +
		"\x13\x02\x02\u0511\u050F\x03\x02\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513" +
		"\u0511\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514\u0516\x03\x02" +
		"\x02\x02\u0515\u0513\x03\x02\x02\x02\u0516\u0518\x07\x17\x02\x02\u0517" +
		"\u0519\x07\x13\x02\x02\u0518\u0517\x03\x02\x02\x02\u0519\u051A\x03\x02" +
		"\x02\x02\u051A\u0518\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B" +
		"\xBD\x03\x02\x02\x02\u051C\u051D\x07\x17\x02\x02\u051D\u051F\x07\x13\x02" +
		"\x02\u051E\u051C\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u051E" +
		"\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\xBF\x03\x02\x02\x02" +
		"\xB0\xC3\xC9\xCD\xD3\xDB\xE1\xE5\xEB\xF3\xF9\xFD\u0103\u0114\u011F\u0123" +
		"\u0130\u0135\u0138\u013C\u0140\u0143\u0147\u014B\u0153\u0159\u015D\u0162" +
		"\u016C\u0170\u0174\u0177\u017F\u0183\u0188\u018D\u0196\u01AD\u01B3\u01B7" +
		"\u01C1\u01C6\u01C9\u01D8\u01E1\u01E5\u01E7\u01EE\u01F6\u01FA\u01FE\u0202" +
		"\u0206\u020C\u021C\u0222\u0229\u0232\u0235\u023A\u0244\u024A\u025A\u025D" +
		"\u0261\u0269\u0271\u0277\u027B\u0283\u0286\u028A\u0293\u029B\u02A1\u02A5" +
		"\u02AF\u02B2\u02B7\u02BA\u02BE\u02C2\u02C5\u02C9\u02CD\u02D3\u02D9\u02DF" +
		"\u02E3\u02E8\u02F5\u02FA\u0300\u0306\u0314\u0318\u031B\u0323\u0327\u032E" +
		"\u0333\u0336\u0345\u0349\u034E\u0353\u0357\u035B\u0361\u0369\u036F\u0373" +
		"\u0389\u038C\u0390\u0399\u03A1\u03A7\u03AF\u03B3\u03B6\u03C0\u03CC\u03D4" +
		"\u03DA\u03E7\u03EF\u03F3\u03FA\u0404\u0407\u040B\u0413\u041B\u0421\u043C" +
		"\u043F\u0443\u044B\u0453\u0459\u045F\u0466\u046A\u046E\u0471\u0475\u0479" +
		"\u047F\u0485\u0489\u0492\u049B\u049D\u04A1\u04A7\u04AD\u04AF\u04B5\u04BB" +
		"\u04BD\u04C3\u04CC\u04CF\u04DB\u04E4\u04E8\u04EA\u04FC\u0504\u0506\u050D" +
		"\u0513\u051A\u0520";
	public static readonly _serializedATN: string = Utils.join(
		[
			FppParser._serializedATNSegment0,
			FppParser._serializedATNSegment1,
			FppParser._serializedATNSegment2,
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


export class AliasTypeDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public TYPE(): TerminalNode { return this.getToken(FppParser.TYPE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_aliasTypeDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterAliasTypeDecl) {
			listener.enterAliasTypeDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitAliasTypeDecl) {
			listener.exitAliasTypeDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitAliasTypeDecl) {
			return visitor.visitAliasTypeDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public ACTION(): TerminalNode { return this.getToken(FppParser.ACTION, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_actionDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterActionDecl) {
			listener.enterActionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitActionDecl) {
			listener.exitActionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitActionDecl) {
			return visitor.visitActionDecl(this);
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
	public PRODUCT(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRODUCT, 0); }
	public REQUEST(): TerminalNode | undefined { return this.tryGetToken(FppParser.REQUEST, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(FppParser.ASYNC, 0); }
	public SEND(): TerminalNode | undefined { return this.tryGetToken(FppParser.SEND, 0); }
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


export class ActionDefContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public ACTION(): TerminalNode { return this.getToken(FppParser.ACTION, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_actionDef; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterActionDef) {
			listener.enterActionDef(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitActionDef) {
			listener.exitActionDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitActionDef) {
			return visitor.visitActionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceDefContext extends ParserRuleContext {
	public _name!: Token;
	public _guard!: Token;
	public _then!: TransitionExprContext;
	public _else!: TransitionExprContext;
	public CHOICE(): TerminalNode { return this.getToken(FppParser.CHOICE, 0); }
	public IF(): TerminalNode { return this.getToken(FppParser.IF, 0); }
	public ELSE(): TerminalNode { return this.getToken(FppParser.ELSE, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.IDENTIFIER);
		} else {
			return this.getToken(FppParser.IDENTIFIER, i);
		}
	}
	public transitionExpr(): TransitionExprContext[];
	public transitionExpr(i: number): TransitionExprContext;
	public transitionExpr(i?: number): TransitionExprContext | TransitionExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransitionExprContext);
		} else {
			return this.getRuleContext(i, TransitionExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_choiceDef; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterChoiceDef) {
			listener.enterChoiceDef(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitChoiceDef) {
			listener.exitChoiceDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitChoiceDef) {
			return visitor.visitChoiceDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GuardDefContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public GUARD(): TerminalNode { return this.getToken(FppParser.GUARD, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_guardDef; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterGuardDef) {
			listener.enterGuardDef(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitGuardDef) {
			listener.exitGuardDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitGuardDef) {
			return visitor.visitGuardDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignalDefContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: TypeNameContext;
	public SIGNAL(): TerminalNode { return this.getToken(FppParser.SIGNAL, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_signalDef; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterSignalDef) {
			listener.enterSignalDef(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitSignalDef) {
			listener.exitSignalDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitSignalDef) {
			return visitor.visitSignalDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoExprContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(FppParser.DO, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.NL);
		} else {
			return this.getToken(FppParser.NL, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.IDENTIFIER);
		} else {
			return this.getToken(FppParser.IDENTIFIER, i);
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
	public get ruleIndex(): number { return FppParser.RULE_doExpr; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterDoExpr) {
			listener.enterDoExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitDoExpr) {
			listener.exitDoExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitDoExpr) {
			return visitor.visitDoExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransitionExprContext extends ParserRuleContext {
	public _do!: DoExprContext;
	public _state!: QualIdentContext;
	public ENTER(): TerminalNode { return this.getToken(FppParser.ENTER, 0); }
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	public doExpr(): DoExprContext | undefined {
		return this.tryGetRuleContext(0, DoExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_transitionExpr; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTransitionExpr) {
			listener.enterTransitionExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTransitionExpr) {
			listener.exitTransitionExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTransitionExpr) {
			return visitor.visitTransitionExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitialTransitionContext extends ParserRuleContext {
	public _transition!: TransitionExprContext;
	public INITIAL(): TerminalNode { return this.getToken(FppParser.INITIAL, 0); }
	public transitionExpr(): TransitionExprContext {
		return this.getRuleContext(0, TransitionExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_initialTransition; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterInitialTransition) {
			listener.enterInitialTransition(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitInitialTransition) {
			listener.exitInitialTransition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitInitialTransition) {
			return visitor.visitInitialTransition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransitionOrDoExprContext extends ParserRuleContext {
	public transitionExpr(): TransitionExprContext | undefined {
		return this.tryGetRuleContext(0, TransitionExprContext);
	}
	public doExpr(): DoExprContext | undefined {
		return this.tryGetRuleContext(0, DoExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_transitionOrDoExpr; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterTransitionOrDoExpr) {
			listener.enterTransitionOrDoExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitTransitionOrDoExpr) {
			listener.exitTransitionOrDoExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitTransitionOrDoExpr) {
			return visitor.visitTransitionOrDoExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateTransitionContext extends ParserRuleContext {
	public _signal!: Token;
	public _guard!: Token;
	public _transition!: TransitionOrDoExprContext;
	public ON(): TerminalNode { return this.getToken(FppParser.ON, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FppParser.IDENTIFIER);
		} else {
			return this.getToken(FppParser.IDENTIFIER, i);
		}
	}
	public transitionOrDoExpr(): TransitionOrDoExprContext {
		return this.getRuleContext(0, TransitionOrDoExprContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(FppParser.IF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_stateTransition; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateTransition) {
			listener.enterStateTransition(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateTransition) {
			listener.exitStateTransition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateTransition) {
			return visitor.visitStateTransition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateEntryContext extends ParserRuleContext {
	public _do!: DoExprContext;
	public ENTRY(): TerminalNode { return this.getToken(FppParser.ENTRY, 0); }
	public doExpr(): DoExprContext {
		return this.getRuleContext(0, DoExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_stateEntry; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateEntry) {
			listener.enterStateEntry(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateEntry) {
			listener.exitStateEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateEntry) {
			return visitor.visitStateEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateExitContext extends ParserRuleContext {
	public _do!: DoExprContext;
	public EXIT(): TerminalNode { return this.getToken(FppParser.EXIT, 0); }
	public doExpr(): DoExprContext {
		return this.getRuleContext(0, DoExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_stateExit; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateExit) {
			listener.enterStateExit(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateExit) {
			listener.exitStateExit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateExit) {
			return visitor.visitStateExit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMemberTemplContext extends ParserRuleContext {
	public initialTransition(): InitialTransitionContext | undefined {
		return this.tryGetRuleContext(0, InitialTransitionContext);
	}
	public choiceDef(): ChoiceDefContext | undefined {
		return this.tryGetRuleContext(0, ChoiceDefContext);
	}
	public stateDef(): StateDefContext | undefined {
		return this.tryGetRuleContext(0, StateDefContext);
	}
	public stateTransition(): StateTransitionContext | undefined {
		return this.tryGetRuleContext(0, StateTransitionContext);
	}
	public stateEntry(): StateEntryContext | undefined {
		return this.tryGetRuleContext(0, StateEntryContext);
	}
	public stateExit(): StateExitContext | undefined {
		return this.tryGetRuleContext(0, StateExitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_stateMemberTempl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateMemberTempl) {
			listener.enterStateMemberTempl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateMemberTempl) {
			listener.exitStateMemberTempl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateMemberTempl) {
			return visitor.visitStateMemberTempl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMemberContext extends ParserRuleContext {
	public stateMemberTempl(): StateMemberTemplContext {
		return this.getRuleContext(0, StateMemberTemplContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
	}
	public ANNOTATION(): TerminalNode | undefined { return this.tryGetToken(FppParser.ANNOTATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_stateMember; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateMember) {
			listener.enterStateMember(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateMember) {
			listener.exitStateMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateMember) {
			return visitor.visitStateMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefContext extends ParserRuleContext {
	public _name!: Token;
	public STATE(): TerminalNode { return this.getToken(FppParser.STATE, 0); }
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
	public stateMember(): StateMemberContext[];
	public stateMember(i: number): StateMemberContext;
	public stateMember(i?: number): StateMemberContext | StateMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMemberContext);
		} else {
			return this.getRuleContext(i, StateMemberContext);
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
	public get ruleIndex(): number { return FppParser.RULE_stateDef; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateDef) {
			listener.enterStateDef(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateDef) {
			listener.exitStateDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateDef) {
			return visitor.visitStateDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMachineMemberTemplContext extends ParserRuleContext {
	public choiceDef(): ChoiceDefContext | undefined {
		return this.tryGetRuleContext(0, ChoiceDefContext);
	}
	public guardDef(): GuardDefContext | undefined {
		return this.tryGetRuleContext(0, GuardDefContext);
	}
	public initialTransition(): InitialTransitionContext | undefined {
		return this.tryGetRuleContext(0, InitialTransitionContext);
	}
	public signalDef(): SignalDefContext | undefined {
		return this.tryGetRuleContext(0, SignalDefContext);
	}
	public stateDef(): StateDefContext | undefined {
		return this.tryGetRuleContext(0, StateDefContext);
	}
	public actionDef(): ActionDefContext | undefined {
		return this.tryGetRuleContext(0, ActionDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_stateMachineMemberTempl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateMachineMemberTempl) {
			listener.enterStateMachineMemberTempl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateMachineMemberTempl) {
			listener.exitStateMachineMemberTempl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateMachineMemberTempl) {
			return visitor.visitStateMachineMemberTempl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMachineMemberContext extends ParserRuleContext {
	public stateMachineMemberTempl(): StateMachineMemberTemplContext {
		return this.getRuleContext(0, StateMachineMemberTemplContext);
	}
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
	}
	public ANNOTATION(): TerminalNode | undefined { return this.tryGetToken(FppParser.ANNOTATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_stateMachineMember; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateMachineMember) {
			listener.enterStateMachineMember(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateMachineMember) {
			listener.exitStateMachineMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateMachineMember) {
			return visitor.visitStateMachineMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMachineDefContext extends ParserRuleContext {
	public _name!: Token;
	public STATE(): TerminalNode { return this.getToken(FppParser.STATE, 0); }
	public MACHINE(): TerminalNode { return this.getToken(FppParser.MACHINE, 0); }
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
	public stateMachineMember(): StateMachineMemberContext[];
	public stateMachineMember(i: number): StateMachineMemberContext;
	public stateMachineMember(i?: number): StateMachineMemberContext | StateMachineMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMachineMemberContext);
		} else {
			return this.getRuleContext(i, StateMachineMemberContext);
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
	public get ruleIndex(): number { return FppParser.RULE_stateMachineDef; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateMachineDef) {
			listener.enterStateMachineDef(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateMachineDef) {
			listener.exitStateMachineDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateMachineDef) {
			return visitor.visitStateMachineDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMachineInstanceContext extends ParserRuleContext {
	public _name!: Token;
	public _stateMachine!: QualIdentContext;
	public _priority!: ExprContext;
	public _queueFull!: QueueFullBehaviorContext;
	public STATE(): TerminalNode { return this.getToken(FppParser.STATE, 0); }
	public MACHINE(): TerminalNode { return this.getToken(FppParser.MACHINE, 0); }
	public INSTANCE(): TerminalNode { return this.getToken(FppParser.INSTANCE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public qualIdent(): QualIdentContext {
		return this.getRuleContext(0, QualIdentContext);
	}
	public PRIORITY(): TerminalNode | undefined { return this.tryGetToken(FppParser.PRIORITY, 0); }
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
	public get ruleIndex(): number { return FppParser.RULE_stateMachineInstance; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterStateMachineInstance) {
			listener.enterStateMachineInstance(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitStateMachineInstance) {
			listener.exitStateMachineInstance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitStateMachineInstance) {
			return visitor.visitStateMachineInstance(this);
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


export class RecordSpecifierDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _fppType!: TypeNameContext;
	public _id!: ExprContext;
	public PRODUCT(): TerminalNode { return this.getToken(FppParser.PRODUCT, 0); }
	public RECORD(): TerminalNode { return this.getToken(FppParser.RECORD, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(FppParser.ARRAY, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(FppParser.ID, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_recordSpecifierDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterRecordSpecifierDecl) {
			listener.enterRecordSpecifierDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitRecordSpecifierDecl) {
			listener.exitRecordSpecifierDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitRecordSpecifierDecl) {
			return visitor.visitRecordSpecifierDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContainerSpecifierDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _id!: ExprContext;
	public _priority!: ExprContext;
	public PRODUCT(): TerminalNode { return this.getToken(FppParser.PRODUCT, 0); }
	public CONTAINER(): TerminalNode { return this.getToken(FppParser.CONTAINER, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(FppParser.IDENTIFIER, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(FppParser.ID, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FppParser.DEFAULT, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FppParser.RULE_containerSpecifierDecl; }
	// @Override
	public enterRule(listener: FppListener): void {
		if (listener.enterContainerSpecifierDecl) {
			listener.enterContainerSpecifierDecl(this);
		}
	}
	// @Override
	public exitRule(listener: FppListener): void {
		if (listener.exitContainerSpecifierDecl) {
			listener.exitContainerSpecifierDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FppVisitor<Result>): Result {
		if (visitor.visitContainerSpecifierDecl) {
			return visitor.visitContainerSpecifierDecl(this);
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
	public aliasTypeDecl(): AliasTypeDeclContext | undefined {
		return this.tryGetRuleContext(0, AliasTypeDeclContext);
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
	public recordSpecifierDecl(): RecordSpecifierDeclContext | undefined {
		return this.tryGetRuleContext(0, RecordSpecifierDeclContext);
	}
	public containerSpecifierDecl(): ContainerSpecifierDeclContext | undefined {
		return this.tryGetRuleContext(0, ContainerSpecifierDeclContext);
	}
	public stateMachineInstance(): StateMachineInstanceContext | undefined {
		return this.tryGetRuleContext(0, StateMachineInstanceContext);
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
	public aliasTypeDecl(): AliasTypeDeclContext | undefined {
		return this.tryGetRuleContext(0, AliasTypeDeclContext);
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
	public stateMachineDef(): StateMachineDefContext | undefined {
		return this.tryGetRuleContext(0, StateMachineDefContext);
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
	public preAnnotation(): PreAnnotationContext | undefined {
		return this.tryGetRuleContext(0, PreAnnotationContext);
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


