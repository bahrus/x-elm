import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { Specifier } from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement{
    invokeParamSets: Array<InvokingParameters>,
}

export interface AP extends EndUserProps{
    
    rawStatements: Array<string>,
}

export type AllProps = AP;

export type PAP = Partial<AP>;

export type ProPAP  = Promise<PAP>

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): ProPAP;
}

export interface InvokingParameters {
    remoteSpecifier: Specifier,
    localEventType?: string,
}