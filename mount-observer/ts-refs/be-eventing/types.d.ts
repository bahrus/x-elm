import {IEnhancement, BEAllProps} from '../trans-render/be/types';

// export interface EventHandlingScriptElement extends HTMLScriptElement{
//     on: {[key: string]: (e: Event) => void}
//     e: (e: Event) => void;
// }

export interface EndUserProps extends IEnhancement<HTMLScriptElement>{
    nudges: string,
    on: string,
    onNudges: string,
}

export interface AllProps extends EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    calcDefaults(self: BAP): ProPAP,
    hydrate(self: BAP): ProPAP,
}