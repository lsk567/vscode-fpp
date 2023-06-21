export const implicitLocation: Location = {
    source: "",
    start: { line: -1, column: -1 },
    end: { line: -1, column: -1 },
};

export function isIntegral(type: string): boolean {
    switch (type) {
        case "U8":
        case "I8":
        case "U16":
        case "I16":
        case "U32":
        case "I32":
        case "U64":
        case "I64":
            return true;
        default:
            return false;
    }
}

export function isFloating(type: string): boolean {
    switch (type) {
        case "F32":
        case "F64":
            return true;
        default:
            return false;
    }
}

export function isNumeric(type: string): boolean {
    return isIntegral(type) || isFloating(type);
}

export type IntegralTypeKey = (
    "U8" |
    "I8" |
    "U16" |
    "I16" |
    "U32" |
    "I32" |
    "U64" |
    "I64"
);
export type FloatingTypeKey = "F32" | "F64";
export type NumericTypeKey = IntegralTypeKey | FloatingTypeKey;
export type PrimitiveTypeKey = NumericTypeKey | "bool" | "string";

interface TypeBase extends Ast {
    complex: boolean;
    type: unknown;
}

export interface PrimitiveType extends TypeBase {
    complex: false;
    type: PrimitiveTypeKey;
}

export interface StringPrimitiveType extends PrimitiveType {
    type: "string";
    size?: number;
}

export interface ComplexType extends TypeBase {
    complex: true;
    type: QualifiedIdentifier;
}

export type TypeName = (
    PrimitiveType
    | StringPrimitiveType
    | ComplexType
);

export interface Identifier extends Ast {
    value: string;
}

export interface Range {
    line: number;
    column: number;
}

export interface Location {
    source: string;
    start: Range;
    end: Range;
}

export interface Ast {
    location: Location;
    isError?: boolean;
}

export interface Annotatable extends Ast {
    annotation?: string;
}

export interface Error extends Ast {
    isError: true;
}

export interface StringLiteral extends Ast {
    value: string;
}

export interface Decl extends Annotatable {
    scope?: QualifiedIdentifier;
    type: string;
    fppType?: TypeName;
    name: Identifier;
}

export interface AbstractTypeDecl extends Decl {
    type: "AbstractTypeDecl";
    fppType: undefined;
}

export interface ArrayDecl extends Decl {
    type: "ArrayDecl";
    fppType: TypeName;
    default_?: ArrayExpr;
    size: Expr;
    format?: StringLiteral;
}

export interface ConstantDecl extends Decl {
    type: "ConstantDecl";
    value: Expr;
}

export interface StructMember extends Decl {
    type: "StructMemberDecl";
    fppType: TypeName,
    name: Identifier;
    size?: Expr;
    format?: StringLiteral;
}

export interface StructDecl extends Decl {
    type: "StructDecl";
    fppType: undefined;
    members: StructMember[];
    default_: StructExpr;
}

export interface FormalParameter extends Annotatable {
    ref: boolean;
    name: Identifier;
    type: TypeName;
}

export interface Keyword<T extends string> extends Ast {
    value: T;
}

export type CommandKind = Keyword<"async" | "guarded" | "sync">;
export type QueueFullBehavior = Keyword<"assert" | "block" | "drop">;

export interface CommandDecl extends Decl {
    type: "CommandDecl";
    kind: CommandKind;
    fppType: undefined;
    params: FormalParameter[];
    opcode?: Expr;
    priority?: Expr;
    queueFull?: QueueFullBehavior;
}

export interface ParamDecl extends Decl {
    type: "ParamDecl";
    fppType: TypeName;
    default_?: Expr;
    id?: Expr;
    setOpcode?: Expr;
    saveOpcode?: Expr;
}

export interface PortInstance extends Ast {
    isOutput: boolean;
    isSpecial: boolean;
}

export interface GeneralOutputPortInstance extends PortInstance {
    direction: Keyword<"output">;
    isOutput: true;
    isSpecial: false;
}

export interface GeneralInputPortInstance extends PortInstance {
    direction: Keyword<"input">;
    kind: Keyword<"async" | "guarded" | "sync">;
    isOutput: false;
    isSpecial: false;
}

export interface SpecialOutputPortInstance extends PortInstance {
    isOutput: true;
    isSpecial: true;
    kind: Keyword<
        "commandReg" |
        "commandResp" |
        "event" |
        "paramGet" |
        "paramSet" |
        "telemetry" |
        "textEvent" |
        "timeGet"
    >;
}

export interface CommandRecvPortInstance extends PortInstance {
    isOutput: false;
    isSpecial: true;
    kind: Keyword<"commandRecv">;
}

export type GeneralPortKind = (
    GeneralInputPortInstance |
    GeneralOutputPortInstance
);
export type SpecialPortKind = (
    CommandRecvPortInstance |
    SpecialOutputPortInstance
);

export interface GeneralPortInstanceDecl extends Decl {
    type: "GeneralPortInstanceDecl";
    kind: GeneralPortKind;
    n?: Expr;
    // Undefined fppType means the port is a serial port
    fppType?: ComplexType;
    priority?: Expr;
    queueFullBehavior?: QueueFullBehavior;
}

export interface SpecialPortInstanceDecl extends Decl {
    type: "SpecialPortInstanceDecl";
    kind: SpecialPortKind;
    fppType: undefined;
}

export type PortInstanceDecl = GeneralPortInstanceDecl | SpecialPortInstanceDecl;

export type ComponentMember = (
    AbstractTypeDecl |
    ArrayDecl |
    ConstantDecl |
    StructDecl |
    CommandDecl |
    ParamDecl |
    PortInstanceDecl |
    TelemetryChannelDecl |
    EnumDecl |
    EventDecl |
    IncludeStmt<ComponentMember> |
    MatchStmt |
    InternalPortDecl
);
export type ComponentKind = Keyword<"active" | "passive" | "queued">;
export interface ComponentDecl extends Decl {
    type: "ComponentDecl";
    kind: ComponentKind;
    members: ComponentMember[];
    fppType: undefined;
}

export type TelemetryLimitKind = Keyword<"red" | "orange" | "yellow">;
export interface TelemetryLimitExpr extends Ast {
    type: TelemetryLimitKind;
    value: Expr;
}

export interface TelemetryChannelDecl extends Decl {
    type: "TelemetryChannelDecl";
    fppType: TypeName;
    id?: Expr;
    update?: Keyword<"always" | "onChange">;
    format?: StringLiteral;
    lowLimits?: TelemetryLimitExpr[];
    highLimits?: TelemetryLimitExpr[];
}

export interface EnumMember extends Annotatable {
    name: Identifier;
    value?: Expr;
}

export interface EnumDecl extends Decl {
    type: "EnumDecl";
    fppType?: TypeName;
    members: EnumMember[];
    default_?: Expr;
}

export type EventSeverity = Keyword<
    "activityHigh" |
    "activityLow" |
    "command" |
    "diagnostic" |
    "fatal" |
    "warningHigh" |
    "warningLow"
>;
export interface EventDecl extends Decl {
    type: "EventDecl",
    fppType: undefined;
    params: FormalParameter[];
    severity: EventSeverity;
    id?: Expr;
    format?: StringLiteral;
    throttle?: Expr;
}

export interface IncludeStmt<T> extends Annotatable {
    type: "IncludeStmt";
    include: StringLiteral;

    // The imported file is resolved asynchronously
    // If this ends up undefined, it failed to parse/read file
    resolved?: TranslationUnit<T>;
}

export interface MatchStmt extends Annotatable {
    type: "MatchStmt";
    match: Identifier;
    with: Identifier;
}

export interface InternalPortDecl extends Decl {
    type: "InternalPortDecl";
    fppType: undefined;
    params: FormalParameter[];
    priority?: Expr;
    queueFullBehavior?: QueueFullBehavior;
}

export interface InitSpecifier extends Annotatable {
    phase: Expr;
    code: StringLiteral;
}

export interface ComponentInstanceDecl extends Decl {
    type: "ComponentInstanceDecl";
    fppType: ComplexType;
    baseId: Expr;
    cppType?: StringLiteral;
    at?: StringLiteral;
    queueSize?: Expr;
    stackSize?: Expr;
    priority?: Expr;
    cpu?: Expr;
    init: InitSpecifier[];
}

export interface PortDecl extends Decl {
    type: "PortDecl",
    fppType: undefined;
    params: FormalParameter[],
    returnType?: TypeName;
}

export interface ComponentInstanceSpec extends Annotatable {
    type: "ComponentInstanceSpec";
    name: QualifiedIdentifier;
    isPrivate: boolean;
}

export interface ConnectionNode extends Ast {
    node: QualifiedIdentifier;
    index?: Expr;
}

export interface Connection extends Annotatable {
    source: ConnectionNode;
    destination: ConnectionNode;
}

export interface DirectGraphDecl extends Decl {
    type: "DirectGraphDecl";
    fppType: undefined;
    connections: Connection[];
}

export type PatternKind = Keyword<
    "command" |
    "event" |
    "health" |
    "param" |
    "telemetry" |
    "time"
>;
export interface PatternGraphStmt extends Annotatable {
    type: "PatternGraphStmt";
    kind: PatternKind;
    target: QualifiedIdentifier;
    sources: QualifiedIdentifier[];
}

export interface TopologyImportStmt extends Annotatable {
    type: "TopologyImportStmt";
    topology: QualifiedIdentifier;
}

export type TopologyMember = (
    ComponentInstanceSpec |
    DirectGraphDecl |
    PatternGraphStmt |
    TopologyImportStmt |
    IncludeStmt<TopologyMember>
);

export interface TopologyDecl extends Decl {
    type: "TopologyDecl";
    fppType: undefined;
    members: TopologyMember[];
}

export type LocationKind = Keyword<
    "instance" |
    "component" |
    "constant" |
    "port" |
    "topology" |
    "type"
>;

export interface LocationStmt extends Annotatable {
    type: "LocationStmt";
    name: QualifiedIdentifier;
    kind: LocationKind;
    path: StringLiteral;
}

export type ModuleMember = (
    AbstractTypeDecl |
    ArrayDecl |
    ComponentDecl |
    ComponentInstanceDecl |
    ConstantDecl |
    ModuleDecl |
    PortDecl |
    StructDecl |
    TopologyDecl |
    LocationStmt |
    EnumDecl |
    IncludeStmt<ModuleMember>
);
export interface ModuleDecl extends Decl {
    type: "ModuleDecl";
    fppType: undefined;
    members: ModuleMember[];
}

export interface BasicExpr extends Ast {
    type: string;
}
export interface IdentifierExpr extends BasicExpr {
    type: "Identifier";
    value: QualifiedIdentifier;
}
export interface LiteralIntExpr extends BasicExpr {
    type: "IntLiteral";
    value: number;
}
export interface LiteralFloatExpr extends BasicExpr {
    type: "FloatLiteral";
    value: number;
}
export interface LiteralStringExpr extends BasicExpr {
    type: "StringLiteral";
    value: string;
}

export interface ArrayExpr extends BasicExpr {
    type: "ArrayExpr";
    value: Expr[];
};

export type PrimaryExpr = (
    IdentifierExpr |
    LiteralIntExpr |
    LiteralFloatExpr |
    LiteralStringExpr
);

export interface NegExpr extends BasicExpr {
    type: "NegExpr";
    value: Expr;
}

export type BinaryOperator = Keyword<"+" | "-" | "*" | "/">;
export interface BinaryExpr extends BasicExpr {
    type: "BinaryExpr";
    operator: BinaryOperator;
    left: Expr;
    right: Expr;
}

export interface BooleanExpr extends BasicExpr {
    type: "BooleanExpr";
    value: boolean;
}

export interface StructAssignment extends Ast {
    name: Identifier;
    value: Expr;
}

export interface StructExpr extends BasicExpr {
    type: "StructExpr";
    value: StructAssignment[];
};

export type Expr = (
    BinaryExpr |
    NegExpr |
    BooleanExpr |
    StructExpr |
    ArrayExpr |
    PrimaryExpr
);

export type QualifiedIdentifier = Identifier[];


export type Member = ( ModuleMember | TopologyMember | ComponentMember );
export interface TranslationUnit<T = ModuleMember> extends Ast {
    type: "TranslationUnit";
    members: T[];
};
