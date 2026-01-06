import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{

}

export interface AllProps extends EndUserProps{
    crudeDispatchRules: Array<CrudeDispatchRule>,
    dispatchRules: Array<DispatchRule>
}

export type DispatchStatement = string;

export interface CrudeDispatchRule{
    dispatchOn?: string,
    dispatchOnPropChange?: string,
    qualifiers: string,
    dispatch: string,
}

export interface DispatchRule extends CrudeDispatchRule{

    bubbles?: boolean,
    cancelable?: boolean,
    composed?: boolean,
    replace?: boolean,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    //onCamelized(self: this): ProPAP;
    finishParsing(self: BAP): PAP;
    hydrate(self: BAP): ProPAP;
}