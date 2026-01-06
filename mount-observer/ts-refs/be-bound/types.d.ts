import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { Specifier } from "../trans-render/dss/types";
import {AbsorbingObject, SharingObject} from '../trans-render/asmr/types';

export interface EndUserProps extends IEnhancement{
    With?: Array<WithStatement>,
    Between?: Array<BetweenStatement>,
    with?: Array<WithStatement>,
    between?: Array<BetweenStatement>,
}

export interface AllProps extends EndUserProps{
    bindingRules: Array<BindingRule>,
    bindings: Array<Binding>,
    isParsed?: boolean,
    rawStatements?: Array<string>
}

export type SignalEnhancement = 'be-value-added' | 'be-propagating' | undefined;

export interface BindingRule {
    
    localProp?: string,
    localEvent?: string,
    remoteSpecifierString?: string,
    remoteSpecifier?: Specifier,


}

export interface Binding {
    //new and improved
    localAbsObj: AbsorbingObject;
    localShareObj: SharingObject;
    remoteAbsObj: AbsorbingObject;
    remoteShareObj: SharingObject;
    //remoteRef: WeakRef<Element>;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;


export interface Actions{
    noAttrs(self: BAP): ProPAP;
    getBindings(self: BAP): ProPAP;
    hydrate(self: BAP): ProPAP;
    onRawStatements(self: BAP): void;
}

export type WithStatement = string;

export type BetweenStatement = string;

export type TriggerSource = 'local' | 'remote' | 'tie';

export interface SpecificityResult {
    val?: any,
    winner?: TriggerSource;
}
