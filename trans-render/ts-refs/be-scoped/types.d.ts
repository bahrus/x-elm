import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    names: string;
}

export interface AllProps extends EndUserProps{
    parsedNames: string[];
    emc: EMC<any, AllProps>;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    parse(self: BAP): ProPAP;
    hydrate(self: BAP): ProPAP;
    retire(self: BAP): void;
}