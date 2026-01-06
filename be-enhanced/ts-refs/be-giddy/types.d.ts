import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    idString: string;
}

export interface AllProps extends EndUserProps{
    ids: string[];
    emc: EMC<any, AllProps>,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    parseIdString(self: AP & BEAllProps): PAP;

    autoGen(self: AP & BEAllProps): PAP;

    retire(self: AP & BEAllProps): void;
}