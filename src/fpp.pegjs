{{
    let path = require('path');

    function buildBinaryExpression(head, tail) {
        return tail.reduce(function(result, element) {
            return {
                type: "BinaryExpr",
                operator: element[1],
                left: result,
                right: element[3]
            };
        }, head);
    }

    function buildPath(literal, location) {
        return {
            path: path.resolve(path.dirname(location.source), literal),
            location: location
        }
    }
}}

start = __ members:ModuleMember|.., SemiDeliminator| SemiDeliminator? __
    { return {
        type: "TranslationUnit",
        members: members
    }; };

// Whitespace that keeps us on the same line
noNL "whitespace" = [ \t\r]

// Comments and newlines both act like newlines
// Comments always absorb their inner newline
NL "whitespace" = noNL* (comment / "\n")

// Single line whitespace
// We have use backslash as a line continuation
_ "whitespace" = (noNL / [\\] NL)*

// Standard whitespace
__ "whitespace" = (noNL / NL)*

// Deliminators must include either the explicit deliminator
// or one (or more) newlines. Both can be included
CommaDeliminator =
    noNL* ","? NL+ __
    / noNL* "," __

SemiDeliminator =
    noNL* ";"? NL+ __
    / noNL* ";" __


eof = !.

// TODO(tumbar) Differentiate annotations from comments
comment =
    $([#][^\n]*([\n] / eof))
    / $([@][^\n]*([\n] / eof))

/////////////////////////
// Basic Token Definition
/////////////////////////

Identifier "Identifier"
  = !Keyword ident:$([a-zA-Z_][a-zA-Z_0-9]*) { return { value: ident, location: location() }; }
  / ident:($[$]Keyword) { return { value: ident[1], location: location() }; }

LiteralInt "Integer"
    = digits:$[0][Xx][0-9a-fA-F]+ { return parseInt(digits, 16); }
    / digits:$[0-9]+ { return parseInt(digits, 10); }

LiteralFloat "Float"
    = digits:$([0-9]+[Ee][+-]?[0-9]+) { return parseFloat(digits); }
    / digits:$([0-9]*[\.][0-9]+([Ee][+-]?[0-9]+)?) { return parseFloat(digits); }

LiteralString "String"
  = '"""' chars:TripleStringCharacter* '"""'    { return chars.join(''); }
  / '"' chars:DoubleStringCharacter* '"'        { return chars.join(''); }
  // / "'" chars:singleStringCharacter* "'" { return chars.join(''); }

Literal =
    LiteralInt
    / LiteralFloat
    / LiteralString

// Match string escape sequences differently by filling in the escape sequence
TripleStringCharacter =
    !('"""' / "\\") char:. { return char; }
    / "\\" sequence:EscapeSequence { return sequence; }
DoubleStringCharacter
    = !('"' / "\\") char:. { return char; }
    / "\\" sequence:EscapeSequence { return sequence; }

// singleStringCharacter
//    = !("'" / "\\") char:. { return char; }
//    / "\\" sequence:escapeSequence { return sequence; }

// Supported string escape sequences
EscapeSequence
    = "'"
    / '"'
    / "\\"
    / "b"  { return "\b";   }
    / "f"  { return "\f";   }
    / "n"  { return "\n";   }
    / "r"  { return "\r";   }
    / "t"  { return "\t";   }
    / "v"  { return "\x0B"; }


/////////////////////////
// Type Definition
/////////////////////////

// Divided as much as possible in case we need something specific
IntegralType "IntegralType" =
    v:("U8"
    / "I8"
    / "I16"
    / "U16"
    / "U32"
    / "I32"
    / "I64"
    / "U64") !IdentfierStart { return v; }
FloatingType "FloatingType" = v:("F32" / "F64") !IdentfierStart { return v; }

NumericType "NumericType" = IntegralType / FloatingType
PrimitiveType "PrimitiveType" = NumericType / BoolKeyword

TypeName =
    t:PrimitiveType     { return { type: t, complex: false }; }
    / StringKeyword size:(_ SizeKeyword _ @Expression)?
        { return { type: "string", complex: false, size: size }; }
    / t:QualifiedIdentifier      { return { type: t, complex: true }; }


//////////////////////
// Keyword Definition
//////////////////////
Keyword
    = ActiveKeyword
    / ActivityKeyword
    / AlwaysKeyword
    / ArrayKeyword
    / AssertKeyword
    / AsyncKeyword
    / AtKeyword
    / BaseKeyword
    / BlockKeyword
    / BoolKeyword
    / ChangeKeyword
    / CommandKeyword
    / ComponentKeyword
    / ConnectionsKeyword
    / ConstantKeyword
    / CpuKeyword
    / DefaultKeyword
    / DiagnosticKeyword
    / DropKeyword
    / EnumKeyword
    / EventKeyword
    / FalseKeyword
    / FatalKeyword
    / FormatKeyword
    / GetKeyword
    / GuardedKeyword
    / HealthKeyword
    / HighKeyword
    / IdKeyword
    / ImportKeyword
    / IncludeKeyword
    / InputKeyword
    / InstanceKeyword
    / InternalKeyword
    / LocateKeyword
    / LowKeyword
    / MatchKeyword
    / ModuleKeyword
    / OnKeyword
    / OpcodeKeyword
    / OrangeKeyword
    / OutputKeyword
    / ParamKeyword
    / PassiveKeyword
    / PhaseKeyword
    / PortKeyword
    / PriorityKeyword
    / PrivateKeyword
    / QueuedKeyword
    / QueueKeyword
    / RecvKeyword
    / RedKeyword
    / RefKeyword
    / RegKeyword
    / RespKeyword
    / SaveKeyword
    / SetKeyword
    / SeverityKeyword
    / SizeKeyword
    / StackKeyword
    / StringKeyword
    / StructKeyword
    / SyncKeyword
    / TelemetryKeyword
    / TextKeyword
    / ThrottleKeyword
    / TimeKeyword
    / TopologyKeyword
    / TrueKeyword
    / TypeKeyword
    / UpdateKeyword
    / WarningKeyword
    / WithKeyword
    / YellowKeyword

IdentfierStart
    = [a-zA-Z]
    / "_"
    / "$"

ActiveKeyword   = "active"          !IdentfierStart { return "active"; }
ActivityKeyword = "activity"        !IdentfierStart { return "activity"; }
AlwaysKeyword   = "always"          !IdentfierStart { return "always"; }
ArrayKeyword    = "array"           !IdentfierStart { return "array"; }
AssertKeyword   = "assert"          !IdentfierStart { return "assert"; }
AsyncKeyword    = "async"           !IdentfierStart { return "async"; }
AtKeyword       = "at"              !IdentfierStart { return "at"; }
BaseKeyword     = "base"            !IdentfierStart { return "base"; }
BlockKeyword    = "block"           !IdentfierStart { return "block"; }
BoolKeyword     = "bool"            !IdentfierStart { return "bool"; }
ChangeKeyword   = "change"          !IdentfierStart { return "change"; }
CommandKeyword  = "command"         !IdentfierStart { return "command"; }
ComponentKeyword= "component"       !IdentfierStart { return "component"; }
ConnectionsKeyword = "connections"  !IdentfierStart { return "connections"; }
ConstantKeyword = "constant"        !IdentfierStart { return "constant"; }
CpuKeyword      = "cpu"             !IdentfierStart { return "cpu"; }
DefaultKeyword  = "default"         !IdentfierStart { return "default"; }
DiagnosticKeyword = "diagnostic"    !IdentfierStart { return "diagnostic"; }
DropKeyword     = "drop"            !IdentfierStart { return "drop"; }
EnumKeyword     = "enum"            !IdentfierStart { return "enum"; }
EventKeyword    = "event"           !IdentfierStart { return "event"; }
FalseKeyword    = "false"           !IdentfierStart { return "false"; }
FatalKeyword    = "fatal"           !IdentfierStart { return "fatal"; }
FormatKeyword   = "format"          !IdentfierStart { return "format"; }
GetKeyword      = "get"             !IdentfierStart { return "get"; }
GuardedKeyword  = "guarded"         !IdentfierStart { return "guarded"; }
HealthKeyword   = "health"          !IdentfierStart { return "health"; }
HighKeyword     = "high"            !IdentfierStart { return "high"; }
IdKeyword       = "id"              !IdentfierStart { return "id"; }
ImportKeyword   = "import"          !IdentfierStart { return "import"; }
IncludeKeyword  = "include"         !IdentfierStart { return "include"; }
InputKeyword    = "input"           !IdentfierStart { return "input"; }
InstanceKeyword = "instance"        !IdentfierStart { return "instance"; }
InternalKeyword = "internal"        !IdentfierStart { return "internal"; }
LocateKeyword   = "locate"          !IdentfierStart { return "locate"; }
LowKeyword      = "low"             !IdentfierStart { return "low"; }
MatchKeyword    = "match"           !IdentfierStart { return "match"; }
ModuleKeyword   = "module"          !IdentfierStart { return "module"; }
OnKeyword       = "on"              !IdentfierStart { return "on"; }
OpcodeKeyword   = "opcode"          !IdentfierStart { return "opcode"; }
OrangeKeyword   = "orange"          !IdentfierStart { return "orange"; }
OutputKeyword   = "output"          !IdentfierStart { return "output"; }
ParamKeyword    = "param"           !IdentfierStart { return "param"; }
PassiveKeyword  = "passive"         !IdentfierStart { return "passive"; }
PhaseKeyword    = "phase"           !IdentfierStart { return "phase"; }
PortKeyword     = "port"            !IdentfierStart { return "port"; }
PriorityKeyword = "priority"        !IdentfierStart { return "priority"; }
PrivateKeyword  = "private"         !IdentfierStart { return "private"; }
QueueKeyword    = "queue"           !IdentfierStart { return "queue"; }
QueuedKeyword   = "queued"          !IdentfierStart { return "queued"; }
RecvKeyword     = "recv"            !IdentfierStart { return "recv"; }
RedKeyword      = "red"             !IdentfierStart { return "red"; }
RefKeyword      = "ref"             !IdentfierStart { return "ref"; }
RegKeyword      = "reg"             !IdentfierStart { return "reg"; }
RespKeyword     = "resp"            !IdentfierStart { return "resp"; }
SaveKeyword     = "save"            !IdentfierStart { return "save"; }
SerialKeyword   = "serial"          !IdentfierStart { return "serial"; }
SetKeyword      = "set"             !IdentfierStart { return "set"; }
SeverityKeyword = "severity"        !IdentfierStart { return "severity"; }
SizeKeyword     = "size"            !IdentfierStart { return "size"; }
StackKeyword    = "stack"           !IdentfierStart { return "stack"; }
StringKeyword   = "string"          !IdentfierStart { return "string"; }
StructKeyword   = "struct"          !IdentfierStart { return "struct"; }
SyncKeyword     = "sync"            !IdentfierStart { return "sync"; }
TelemetryKeyword= "telemetry"       !IdentfierStart { return "telemetry"; }
TextKeyword     = "text"            !IdentfierStart { return "text"; }
ThrottleKeyword = "throttle"        !IdentfierStart { return "throttle"; }
TimeKeyword     = "time"            !IdentfierStart { return "time"; }
TopologyKeyword = "topology"        !IdentfierStart { return "topology"; }
TrueKeyword     = "true"            !IdentfierStart { return "true"; }
TypeKeyword     = "type"            !IdentfierStart { return "type"; }
UpdateKeyword   = "update"          !IdentfierStart { return "update"; }
WarningKeyword  = "warning"         !IdentfierStart { return "warning"; }
WithKeyword     = "with"            !IdentfierStart { return "with"; }
YellowKeyword   = "yellow"          !IdentfierStart { return "yellow"; }


/////////////////////
// Declarations
/////////////////////

AbstractTypeDecl =
    TypeKeyword _ id:Identifier
        { return { type: "AbstractTypeDecl", name: id }; }

ArrayDecl =
    ArrayKeyword _ name:Identifier _ "=" _ "[" _ size:Expression _ "]"
    _ type:TypeName
    default_:( _ DefaultKeyword _ @ArrayExpression )?
    format:( _ FormatKeyword _ @LiteralString )?
        { return {
            type: "ArrayDecl",
            name: name,
            arrayType: type,
            default_: default_,
            size: size,
            format: format
        }; }

ConstantDecl =
    ConstantKeyword _ name:Identifier _ "=" _ value:Expression
        { return {
            type: "ConstantDecl",
            name: name,
            value:value
        }; }

StructDeclMember =
    member:Identifier _ ":" size:( _ "[" _ @Expression _ "]")?
    _ type:TypeName
    format:(_ FormatKeyword _ @LiteralString)?
        { return {
            name: member,
            size: size,
            type: type,
            format: format
        }; }

StructDecl =
    StructKeyword _ name:Identifier
    __ "{" __
    members:StructDeclMember|.., CommaDeliminator|
    CommaDeliminator? __ "}"
    default_:( _  DefaultKeyword _ @StructExpression)?
    { return {
        type: "StructDecl",
        name: name,
        members: members,
        default_: default_
    }; }

QueueFullBehavior = AssertKeyword / BlockKeyword / DropKeyword
CommandKind = AsyncKeyword / GuardedKeyword / SyncKeyword
CommandDecl =
    kind:CommandKind _ CommandKeyword _ name:Identifier
    params:(_ "(" __ @FormalParameterList __ ")")?
    opcode:(_ OpcodeKeyword _ @Expression)?
    priority:(_ PriorityKeyword _ @Expression)?
    queueFull:(_ @QueueFullBehavior)?
    { return {
        type: "CommandDecl",
        name: name,
        kind: kind,
        params: params || [],
        opcode: opcode,
        priority: priority,
        queueFull: queueFull
    }; }

ParamDecl =
    ParamKeyword _ name:Identifier _ ":" _ type:TypeName
    default_:(_ DefaultKeyword _ @Expression)?
    id:(_ IdKeyword _ @Expression)?
    setOpcode:(_ SetKeyword _ OpcodeKeyword _ @Expression )?
    saveOpcode:(_ SaveKeyword _ OpcodeKeyword _ @Expression )?
    { return {
        type: "ParamDecl",
        name: name,
        paramType: type,
        default_: default_,
        id: id,
        setOpcode: setOpcode,
        saveOpcode: saveOpcode
    }; }

GeneralPortKind =
    AsyncKeyword noNL InputKeyword     { return { direction: "input", kind: "async" }; }
    / GuardedKeyword noNL InputKeyword { return { direction: "input", kind: "guarded" }; }
    / OutputKeyword                 { return { direction: "output" }; }
    / SyncKeyword noNL InputKeyword    { return { direction: "input", kind: "sync" }; }
SpecialPortKindBase =
    CommandKeyword noNL RecvKeyword    { return { direction: "input", kind: "commandRecv" }; }
    / CommandKeyword noNL RegKeyword   { return { direction: "output", kind: "commandReg" }; }
    / CommandKeyword noNL RespKeyword  { return { direction: "output", kind: "commandResp" }; }
    / EventKeyword                  { return { direction: "output", kind: "event" }; }
    / ParamKeyword noNL GetKeyword     { return { direction: "output", kind: "paramGet" }; }
    / ParamKeyword noNL SetKeyword     { return { direction: "output", kind: "paramSet" }; }
    / TelemetryKeyword              { return { direction: "output", kind: "telemetry" }; }
    / TextKeyword noNL EventKeyword    { return { direction: "output", kind: "textEvent" }; }
    / TimeKeyword noNL GetKeyword      { return { direction: "output", kind: "timeGet" }; }

SpecialPortKind = t:SpecialPortKindBase { return { location: location(), ...t }; }

PortInstanceDecl =
    kind:GeneralPortKind _ PortKeyword _ name:Identifier
    _ ":" _ n:(_ "[" _ @Expression _ "]")?
    _ type:( SerialKeyword / QualifiedIdentifier )
    priority:(_ PriorityKeyword _ @Expression)?
    queueFullBehavior:(_ @QueueFullBehavior)?
        { return {
            type: "GeneralPortInstanceDecl",
            name: name,
            kind: { ...kind, special: false },
            portType: type,
            n: n,
            priority: priority,
            queueFullBehavior: queueFullBehavior
        }; }
    / kind:SpecialPortKind _ PortKeyword _ name:Identifier
        { return {
            type: "SpecialPortInstanceDecl",
            name: name,
            kind: { ...kind, special: true }
        }; }

TelemetryLimit =
    type:(RedKeyword / OrangeKeyword / YellowKeyword) _ v:Expression { return { type: type, value: v }; }

TelemetryUpdate =
    AlwaysKeyword { return "always"; }
    / OnKeyword _ ChangeKeyword { return "onChange"; }

TelemetryChannelDecl =
    TelemetryKeyword _ name:Identifier _ ":" _ type:TypeName
    id:(_ IdKeyword _ @Expression)?
    update:(_ UpdateKeyword _ @TelemetryUpdate)?
    format:(_ FormatKeyword _ @LiteralString)?
    lowLimits:(_ LowKeyword _ "{" __ @TelemetryLimit|..,CommaDeliminator| CommaDeliminator? __ "}")?
    highLimits:(_ HighKeyword _ "{" __ @TelemetryLimit|..,CommaDeliminator| CommaDeliminator? __ "}")?
    { return {
        type: "TelemetryChannelDecl",
        name: name,
        chanType: type,
        id: id,
        update: update,
        format: format,
        lowLimits: lowLimits,
        highLimits: highLimits
    }; }

EnumConstant = name:Identifier value:(_ "=" _ @Expression)?
    { return { name: name, value: value }; }
EnumDecl =
    EnumKeyword _ name:Identifier
    type:(_ ":" _ @IntegralType)?
    __ "{" __
    members:EnumConstant|.., CommaDeliminator|
    CommaDeliminator? __ "}"
    default_:(_ DefaultKeyword _ @Expression)?
        { return {
            type: "EnumDecl",
            name: name,
            enumType: type,
            members: members,
            default_: default_
        }; }

Severity =
    ActivityKeyword _ HighKeyword { return "activityHigh"; }
    / ActivityKeyword _ LowKeyword { return "activityLow"; }
    / CommandKeyword { return "command"; }
    / DiagnosticKeyword { return "diagnostic"; }
    / FatalKeyword { return "fatal"; }
    / WarningKeyword _ HighKeyword { return "warningHigh"; }
    / WarningKeyword _ LowKeyword { return "warningLow"; }
EventDecl =
    EventKeyword _ name:Identifier
    params:(_ "(" __ @FormalParameterList __ ")")?
    _ SeverityKeyword _ severity:Severity
    id:(_ IdKeyword _ @Expression)?
    _ FormatKeyword _ format:LiteralString
    throttle:(_ ThrottleKeyword _ @Expression)?
        { return {
            type: "EventDecl",
            name: name,
            params: params ?? [],
            severity: severity,
            id: id,
            format: format,
            throttle: throttle
        }; }

IncludeStmt = IncludeKeyword _ include:Path
    { return { type: "IncludeStmt", include: include }; }

MatchStmt = MatchKeyword _ match:Identifier _ WithKeyword _ with_:Identifier
    { return { type: "MatchStmt", match: match, with: with_ }; }

InternalPortDecl =
    InternalKeyword _ PortKeyword _ name:Identifier
    params:(_ "(" __ @FormalParameterList __ ")")?
    priority:(_ PriorityKeyword _ @Expression)?
    queueFullBehavior:(_ @QueueFullBehavior)?
        { return {
            type: "InternalPortDecl",
            name: name,
            params: params ?? [],
            priority: priority,
            queueFullBehavior: queueFullBehavior
        }; }

InitSpecifier = PhaseKeyword _ phase:Expression _ code:LiteralString
    { return {
        phase: phase,
        code: code
    }; }

ComponentInstanceDecl =
    InstanceKeyword _ name:Identifier _ ":" _ fppType:QualifiedIdentifier
    _ BaseKeyword _ IdKeyword _ baseId:Expression
    cppType:(_ TypeKeyword _ @LiteralString)?
    at:(_ AtKeyword _ @LiteralString)?
    queueSize:(_ QueueKeyword _ SizeKeyword _ @Expression)?
    stackSize:(_ StackKeyword _ SizeKeyword _ @Expression)?
    priority:(_ PriorityKeyword _ @Expression)?
    cpu:(_ CpuKeyword _ @Expression)?
    init:(_ "{" __ @InitSpecifier|..,SemiDeliminator| SemiDeliminator? __ "}")?
        { return {
            type: "ComponentInstanceDecl",
            name: name,
            fppType: fppType,
            cppType: cppType,
            at: at,
            queueSize: queueSize,
            stackSize: stackSize,
            priority: priority,
            cpu: cpu,
            init: init ?? []
        }; }


ComponentKind = ActiveKeyword / PassiveKeyword / QueuedKeyword
ComponentMember =
    AbstractTypeDecl
    / ArrayDecl
    / ConstantDecl
    / StructDecl
    / CommandDecl
    / ParamDecl
    / PortInstanceDecl
    / TelemetryChannelDecl
    / EnumDecl
    / EventDecl
    / IncludeStmt
    / InternalPortDecl
    / MatchStmt
ComponentDecl =
    kind:ComponentKind _ ComponentKeyword _ name:Identifier __ "{" __
        members:ComponentMember|.., SemiDeliminator|
    SemiDeliminator? __ "}"
        { return {
            type: "ComponentDecl",
            kind: kind,
            name: name,
            members: members
        }; }

PortDecl =
    PortKeyword _ name:Identifier
    params:(_ "(" __ @FormalParameterList __ ")")?
    returnType:(_ "->" _ @TypeName)?
        { return {
            type: "PortDecl",
            name: name,
            params: params ?? [],
            returnType: returnType
        }; }

ComponentInstanceSpec =
    priv:(@PrivateKeyword _)? InstanceKeyword _ name:QualifiedIdentifier
        { return {
            type: "ComponentInstanceSpec",
            name: name,
            isPrivate: !!priv
        }; }

ConnectionNode =
    node:QualifiedIdentifier index:(_ "[" _ @Expression _ "]")?
        { return { node: node, index: index }; }
Connection =
    source:ConnectionNode _ "->" _ destination:ConnectionNode
        { return { source: source, destination: destination }; }
DirectGraphDecl =
    ConnectionsKeyword _ name:Identifier __ "{" __
        connections:Connection|..,CommaDeliminator|
    CommaDeliminator? __ "}"
        { return {
            type: "DirectGraphDecl",
            name: name,
            connections: connections
        }; }

PatternKind =
    CommandKeyword
    / EventKeyword
    / TextKeyword _ EventKeyword
    / HealthKeyword
    / ParamKeyword
    / TelemetryKeyword
    / TimeKeyword
PatternGraphStmt =
    kind:PatternKind _ ConnectionsKeyword _ InstanceKeyword
    _ target:QualifiedIdentifier
    sources:(_ @QualifiedIdentifier|.., CommaDeliminator|)?
        { return {
            type: "PatternGraphStmt",
            kind: kind,
            target: target,
            sources: sources ?? []
        }; }
ConnectionGraphStmt =
    DirectGraphDecl
    / PatternGraphStmt

TopologyImportStmt =
    ImportKeyword _ topology:QualifiedIdentifier
        { return {
            type: "TopologyImportStmt",
            topology: topology
        }; }

TopologyMember =
    ComponentInstanceSpec
    / ConnectionGraphStmt
    / TopologyImportStmt
    / IncludeStmt

TopologyDecl =
    TopologyKeyword _ name:Identifier __ "{" __
        members:TopologyMember|..,SemiDeliminator|
    SemiDeliminator? __ "}"
        { return {
            type: "TopologyDecl",
            name: name,
            members: members
        }; }

Path = lit:LiteralString { return buildPath(lit, location()); }

LocationKind =
    InstanceKeyword
    / ComponentKeyword
    / ConstantKeyword
    / PortKeyword
    / TopologyKeyword
    / TypeKeyword
LocationStmt =
    LocateKeyword _ kind:LocationKind _ name:QualifiedIdentifier _ AtKeyword _ location:Path
        { return {
            type: "LocationStmt",
            kind: kind,
            name: name,
            location: location
        }; }

ModuleMember =
    AbstractTypeDecl
    / ArrayDecl
    / ComponentDecl
    / ComponentInstanceDecl
    / ConstantDecl
    / ModuleDecl
    / PortDecl
    / StructDecl
    / TopologyDecl
    / LocationStmt
    / EnumDecl
    / IncludeStmt
ModuleDecl =
    ModuleKeyword _ name:Identifier __ "{" __
        members:ModuleMember|.., SemiDeliminator|
     SemiDeliminator? __ "}"
        { return {
            type: "ModuleDecl",
            name: name,
            members: members
        }; }

////////////////////
// Expressions
////////////////////

PrimaryExpression =
      t:QualifiedIdentifier    { return { value: t, type: "Identifier", location: location() }; }
    / t:LiteralFloat  { return { value: t, type: "FloatLiteral", location: location() }; }
    / t:LiteralInt    { return { value: t, type: "IntLiteral", location: location() }; }
    / t:LiteralString { return { value: t, type: "StringLiteral", location: location() }; }
    / "(" __ expression:Expression __ ")" { return { ...expression, location: location() }; }

ArrayExpression =
    "[" __ elements:Expression|.., CommaDeliminator| CommaDeliminator? __ "]"
        { return { type: "ArrayExpr", elements: elements, location: location() }; }

UnaryExpression =
    "-" _ v:PrimaryExpression { return { type: "NegExpr", value: v }; }
    / PrimaryExpression

MultiplicativeExpression
  = head:UnaryExpression
    tail:(_ MultiplicativeOperator _ UnaryExpression)*
    { return buildBinaryExpression(head, tail); }

MultiplicativeOperator
  = $("*" !"=")
  / $("/" !"=")

AdditiveExpression
  = head:MultiplicativeExpression
    tail:(_ AdditiveOperator _ MultiplicativeExpression)*
    { return buildBinaryExpression(head, tail); }

AdditiveOperator
  = $("+" ![+=])
  / $("-" ![-=])

BooleanExpression =
    FalseKeyword { return { type: "BooleanExpr", value: false, location: location() }; }
    / TrueKeyword { return { type: "BooleanExpr", value: true, location: location() }; }

StructAssignment = name:Identifier _ "=" _ value:Expression { return { name:name, value: value }; }

StructExpression =
    "{" __ elements:StructAssignment|.., CommaDeliminator| CommaDeliminator? __ "}"
        { return {
            type: "StructExpr",
            value: elements
        }; }

Expression "Expression" =
    AdditiveExpression
    / BooleanExpression
    / StructExpression
    / ArrayExpression

QualifiedIdentifier = Identifier|1..,"."|

FormalParameter "Format Parameter" =
    ref:RefKeyword? _ name:Identifier _ ":" _ type:TypeName
    { return { ref: !!ref, name: name, type: type }; }

FormalParameterList "Formal Parameter List" =
    parameters:FormalParameter|.., CommaDeliminator| __ ","? { return parameters; }
