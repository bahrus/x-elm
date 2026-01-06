import { 
    EndUserProps as BeIntersectiontalEndUserProps, 
    AP as BeIntersectionalAllProps,
    BeIntersectionalActions,
} from '../../node_modules/be-intersectional/types';
import { BEAllProps } from '../be-enhanced/types';


export interface EndUserProps extends BeIntersectiontalEndUserProps{
    //transform?: {[key: string]: MatchRHS};
    //host: any;
    //ctx: RenderContext;
}

export interface AllProps extends BeIntersectionalAllProps, EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;


export interface BeLazyActions extends BeIntersectionalActions{
    onIntersecting(self: AP & BEAllProps): void
    onOptions(self: AP & BEAllProps): PAP;
}