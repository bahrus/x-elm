import {IEnhancement, BEAllProps} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    doEval: boolean;
}

export interface AllProps extends EndUserProps{
    //enhKey: string;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): ProPAP;
}