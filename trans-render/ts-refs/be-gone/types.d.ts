import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    whenMissing: string
    onDefined: Array<string>
    whenDef: string
}

export interface AllProps extends EndUserProps{
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    onOnDefined(self: BAP): ProPAP
    hydrateOnMissing(self: BAP): ProPAP
    parseWhenDef(self: BAP): PAP
}