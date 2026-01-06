import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    level: 
        | 'log'
        | 'warn'
        | 'error',
    ignore: string[]
}

export interface AllProps extends EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions {
    hydrate(self: BAP): PAP;
}

export type dispatch = (event: Event) => boolean ;