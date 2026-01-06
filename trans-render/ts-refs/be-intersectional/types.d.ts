import {IEnhancement, BEAllProps} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    options: IntersectionObserverInit;
    rootClosest?: string;
    observeClosest?: string;
    enterDelay?: number;
    exitDelay?: number;
}

export interface AP extends EndUserProps{
    isIntersecting: boolean;
    isIntersectingEcho: boolean;
    isNotIntersecting: boolean;
    isNotIntersectingEcho: boolean;
}
export type PAP = Partial<AP>;
export type ProPAP = Promise<PAP>;
export type BAP = AP & BEAllProps;

export interface IntersectionalActions {
    onOptions(self: AP & BEAllProps): PAP;
    // onIntersectingChange(self: AP & BEAllProps): void;
    // onNonIntersectingEcho(self: AP & BEAllProps)
}

export interface Actions extends IntersectionalActions{
    
    
    onIntersecting(self: this): void;

    onNotIntersecting(self: this): void;

    

    //onNotIntersectingEcho(self: this): void;
}