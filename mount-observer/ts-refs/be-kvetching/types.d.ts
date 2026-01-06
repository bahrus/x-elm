import {BEAllProps, EventListenerOrFn, IEnhancement} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLElement>{

}

export interface AllProps extends EndUserProps{
    isParsed?: boolean,
}

export type WithStatement = string;

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;


export interface Actions{
    register(self: BAP): ProPAP;
}