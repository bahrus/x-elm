export type ID = `#${string}`;
export type Host = `:host()`;
export type Hostish = ``;
export type Target = ID | Host | Hostish;

export type MindReadProp = ``;
export type PropPath = `?.${string}`;

export type Prop = string;
export type ConstVal = `\`${string}\``;

export type asOptions = 
    | 'number'
    | 'boolean'
    | 'string' 
    | 'object'
    | 'regexp' 
    | 'urlpattern'
    | 'boolean|number'
;
export type MindReadType = ``;
export type TypeQualifier = `-as-${asOptions}`;

export type ValExpression = `${Prop | PropPath | ConstVal | MindReadProp}${TypeQualifier | MindReadType}`;

export type MindReadEvent = ``;

export type EventSpecifier = `::${string}`;

export type EventPart = MindReadEvent | EventSpecifier;

export type DSS = `${Target}${ValExpression}${EventPart}`;


export interface Specifier {
    id?: string,
    prop?: string,
    path?: SubPropPath,
    evtName?: EventName,
    as?: asOptions,
    constVal?: any;
    enhKey?: string;
    ish?: boolean;
    //element to observe must be a shadowed custom element host.
    host?: boolean;
    self?: boolean;
}



/**
 * can contain dot (.) for sub property access and pipes (|) for method invocations
 */
export type SubPropPath = string;

export type EventName = string;

