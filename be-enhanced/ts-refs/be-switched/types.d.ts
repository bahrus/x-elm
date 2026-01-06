//import { ActionOnEventConfigs } from "../../trans-render/froop/types";
import {BEAllProps, EMC, IEnhancement} from '../trans-render/be/types';
//import {BVAAllProps} from '../../be-value-added/types';
//import {AP as BPAP, ISignal, Actions as BPActions} from '../../be-propagating/types';
//import {ElTypes, SignalRefType} from '../../be-linked/types';
//import { Propagator } from "../trans-render/froop/PropSvc";
import {Specifier} from '../trans-render/dss/types';

export interface Element{
    hostish(): Promise<any>
}

export interface EndUserProps extends IEnhancement<HTMLTemplateElement>{
    lhs?: any,
    rhs?: any,
    ifMediaMatches?: string,
    checkIfNonEmptyArray?: boolean;
    op?: '===';
    /**
     * If lhs and/or rhs is boolean, just check that truthiness matches.
     */
    beBoolish: boolean;
    displayDelay?: number;
    hiddenStyle?: string;
    toggleInert?: boolean;
    deferRendering?: boolean;
    /** delete content when condition evaluates to false */
    minMem?: boolean;
    /**
     * Works with beOosoom decorator, so becomes inert when out of view
     */
    beOosoom?: string;
    js?: string;
    transitional: boolean;
    idRefAttr: string;
    /**
     * Use comments rather a DOM element to wrap multiple elements
     */
    //cmtWrap?: boolean;
}

export interface AllProps extends EndUserProps{
    val: boolean,
    singleValSwitchesSatisfied?: boolean,
    singleValSwitchNoGo?: boolean,
    twoValSwitchesSatisfied?: boolean,
    twoValSwitchNoGo?: boolean,
    switchesSatisfied?: boolean,
    echoVal: boolean,
    singleValSwitches: Array<OneValueSwitch>,
    twoValueSwitches: Array<TwoValueSwitch>,
    offBinarySwitches?: Array<OneValueSwitch>,
    nValueSwitches?: Array<NValueScriptSwitch>
    rawStatements?: Array<string>,
    notProcessedJS?: boolean,
    emc: EMC<any, AllProps>,
    
}

export type SwitchStatement = string;


export interface OneValueSwitch{
    ifPart: string,
    specifier: Specifier,
    req?: boolean,
}

export type Op = 'equals' | 'eq' | 'lt' | 'gt';

export interface TwoPartOpStatement{
    lhsPart: string,
    op: Op,
    rhsPart: string,
    within: string,
}

export interface TwoValueSwitch{
    lhsSpecifier: Specifier,
    rhsSpecifier: Specifier,
    req?: boolean,
    op?: Op,
    lhs?: ISide,
    rhs?: ISide,
    onOrOff: 
        | 'on' 
        | 'On' 
        | 'off' 
        | 'Off',

}

export interface Dependency extends Specifier{}

export interface CanBeSwitchedOn {
    switchedOn?: boolean,
}

export interface NValueScriptSwitch extends CanBeSwitchedOn {
    dependsOn?: string,
    dependencies: Array<Dependency>,
    registeredHandler?: string,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    calcSwitchesSatisfied(self: BAP): PAP;
    calcVal(self: BAP): PAP;
    onTrue(self: BAP): Promise<void>;
    onFalse(self: BAP): Promise<void>;
    // addMediaListener(self: this): POA;
    // chkMedia(self: this, e: MediaQueryListEvent): PAP;
    
    // doOnBinarySwitches(self: this): Promise<void>;
    onSingleValSwitches(self: BAP): Promise<void>;
    onTwoValSwitches(self: BAP): Promise<void>;
    onNValSwitches(self: BAP): Promise<void>;
    onRawStatements(self: BAP): void;
    processJS(self: BAP): ProPAP;
}



// https://github.com/webcomponents-cg/community-protocols/issues/12#issuecomment-872415080
//export type loadEventName = 'load';
export type inputEventName = 'input';
//export type changeEventName = 'change';

export interface ISide {
    val: any
}

export interface Elevate {
    val: any,
    to: string
}

export interface EventForNValueSwitch {
    ctx: NValueScriptSwitch,
    factors: {[key: string] : any},
    switchOn?: boolean,
    elevate?: Elevate
}

// export interface SignalAndEvent {
//     signal?: WeakRef<SignalRefType>,
//     eventSuggestion?: string
// }
