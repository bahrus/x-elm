
export interface JSONSerializableMountInit{
    readonly on?: CSSMatch,
    readonly outside?: CSSMatch,
    readonly observedAttrsWhenMounted?: (string | ObservedSourceOfTruthAttribute)[],
    readonly whereAttr?: WhereAttr,  
    readonly whereElementIntersectsWith?: IntersectionObserverInit,
    readonly whereMediaMatches?: MediaQuery,
    readonly import?: ImportString | [ImportString, ImportAssertions] | PipelineProcessor,

}

export interface ObservedSourceOfTruthAttribute<TProps = any>  {
    name: string,
    mapsTo?: keyof TProps & string,
    valIfNull?: any,
    valIfFalsy?: any,
    instanceOf?: any,
    customParser?: (newValue: string | null, oldValue: string | null, instance: Element) => any
}

export type Assigner = (target: any, source: any) => Promise<void> | void;

export interface MountInit extends JSONSerializableMountInit{
    
    readonly withTargetShadowRoot?: ShadowRoot, 
    readonly whereInstanceOf?: Array<{new(): Element}>,
    readonly whereSatisfies?: PipelineProcessor<boolean>,
    readonly do?: MountObserverCallbacks,
    readonly assigner?: Assigner,
    readonly idleTimeout?: number
    // /**
    //  * Purpose -- there are scenarios where we may only want to affect changes that occur after the initial 
    //  * server rendering, so we only want to mount elements that appear 
    //  */
    // readonly ignoreInitialMatches?: boolean,
}

export interface MountObserverOptions{
    leaveBreadcrumb?: boolean,
}

export interface MountObserverCallbacks{
    readonly mount?: PipelineProcessor,
    readonly dismount?: PipelineProcessor,
    readonly disconnect?: PipelineProcessor,
    readonly reconfirm?: PipelineProcessor,
    readonly exit?: PipelineProcessor,
}

export interface RootCnfg{
    start: string,
    context: 'BuiltIn' | 'CustomElement' | 'Both'
}

//export type RootAttrOptions = Array<string | RootCnfg>;
export type delimiter = string;
export interface WhereAttr{
    
    hasBase?: string | [delimiter, string],
    hasBranchIn?: Array<string> | [delimiter, Array<string>],
    hasRootIn?: Array<RootCnfg>,
    /**
     * Used by consumers to track the universal meaning of this combination
     * regardless of how the actual name values may be changed.
     */
    metadata?: any,
}
type CSSMatch = string;
type ImportString = string;
type MediaQuery = string;

export interface AttribMatch{
    names: string[],
    //for boolean, support true/false/mixed
    // type?: 'number' | 'string' | 'date' | 'json-object' | 'boolean',
    // valConverter?: (s: string) => any,
    // validator?: (v: any) => boolean;
}

export interface WeakDual<T extends Object>{
    weakSet: WeakSet<T>,
    setWeak: Set<WeakRef<T>>
}

export interface IMountObserver extends EventTarget {
    // readonly mountInit: MountInit,
    // readonly mountedRefs:  WeakRef<Element>[],
    // readonly dismountedRefs: WeakRef<Element>[],
    observe(within: Node): void;
    disconnect(within: Node): void;
    module?: any;
    mountedElements: WeakDual<Element>;
    readAttrs(match: Element, branchIndexes?: Set<number>) : AttrChangeInfo[];
    observedAttrs(): Promise<Array<string> | undefined>;
} 

export interface MountContext{
    stage?: PipelineStage,
    initializing?: boolean,
}

type PipelineStage = 'Inspecting' | 'PreImport' | 'PostImport' | 'Import' 
export type PipelineProcessor<ReturnType = void> = (matchingElement: Element, observer: IMountObserver, ctx: MountContext) => Promise<ReturnType> | ReturnType;

//#region mutation event
export type mutationEventName = 'mutation-event';
export interface MutationEvent{
    mutationRecords: Array<MutationRecord>
}
export type mutationEventHandler = (e: MutationEvent) => void;

export interface AddMutationEventListener {
    addEventListener(eventName: mutationEventName, handler: mutationEventHandler, options?: AddEventListenerOptions): void;
}
//#endregion

interface AttrParts{
    name: string,
    root?: string,
    base?: string,
    branch?: string,
    branchIdx: number,
    leaf?: string, //TODO
    leafIdx?: number, //TODO
    rootCnfg?: RootCnfg,
    metadata?: any,
}

interface AttrChangeInfo{
    oldValue: string | null,
    newValue: string | null,
    isSOfTAttr: boolean,
    idx?: number,
    name: string,
    parts?: AttrParts,
    mapsTo?: string,
}

//#region mount event
export type mountEventName = 'mount';
export interface IMountEvent extends Event{
    mountedElement: Element,
}
export type mountEventHandler = (e: IMountEvent) => void;

export interface AddMountEventListener {
    addEventListener(eventName: mountEventName, handler: mountEventHandler, options?: AddEventListenerOptions): void;
}
//#endregion

//#region dismount event
export type dismountEventName = 'dismount';
export interface IDismountEvent {
    dismountedElement: Element
}

export type dismountEventHandler = (e: IDismountEvent) => void;

export interface AddDismountEventListener {
    addEventListener(eventName: dismountEventName, handler: dismountEventHandler, options?: AddEventListenerOptions): void;
}
//#endregion

//#region disconnected event
export type disconnectedEventName = 'disconnect';
export interface IDisconnectEvent {
    disconnectedElement: Element
}

export type disconnectedEventHandler = (e: IDisconnectEvent) => void;

export interface AddDisconnectEventListener {
    addEventListener(eventName: disconnectedEventName, handler: disconnectedEventHandler, options?: AddEventListenerOptions): void;
}
//endregion

//#region attribute change event
export type attrChangeEventName = 'attrChange';
export interface IAttrChangeEvent extends IMountEvent {
    attrChangeInfos: Array<AttrChangeInfo>,
}
export type attrChangeEventHandler = (e: IAttrChangeEvent) => void;
export interface AddAttrChangeEventListener{
    addEventListener(eventName: attrChangeEventName, handler: attrChangeEventHandler, options?: AddEventListenerOptions): void;
}
//#endregion

//#region load event
export type loadEventName = 'load';
export interface ILoadEvent {
    clone: DocumentFragment
}
export type loadEventHandler = (e: ILoadEvent) => void;
export interface AddLoadEventListener{
    addEventListener(eventName: loadEventName, handler: loadEventHandler, options?: AddEventListenerOptions): void
}
//#endregion

//#region MountObserver Script Element
export interface MOSEAddedProps<TSynConfig=any>{
    init: JSONSerializableMountInit;
    observer: IMountObserver;
    do: MountObserverCallbacks;
    synConfig: TSynConfig;
}
export interface MOSE<TSynConfig=any> 
    extends HTMLScriptElement, MOSEAddedProps<TSynConfig>{

}

export interface BindishOptions{
    assigner?: Assigner,
    //waitFor?: string,
    /**
     * If derived from a template, set to true
     * to indicate that the initial 
     */
    csr?: boolean,
    ctr?: IshCtr,
    initPropVals?: any,
}

//TODO:  move to mount observer
export interface HasIsh {
    ish: any;
}

export interface Ishcycle{
    '<mount>'?(self: Ishcycle, el: Element & HasIsh, options: BindishOptions): Promise<void>;
    //'</dismount>'?(self: IshFace, el: Element): Promise<void>;
    '<inScope>'?(self: Ishcycle, el: Element & HasIsh, options: BindishOptions): Promise<void>;
    'arr=>'?(self: Ishcycle, arr: any[] | undefined, el: Element & HasIsh, options: BindishOptions): Promise<void | any[]>;
    //'</outOfScope>'?(self: IshFace, el: Element): Promise<void>;
}

export type IshCtr = ({new() : Ishcycle}) | (() => Promise<{new() : Ishcycle}>);

//#endregion

export type RefType = '#' | '!';

export interface TemplateWithRemoteContent extends HTMLTemplateElement {
    remoteContent?: DocumentFragment,
}



