import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    on: string[],
    props: string[],
}

export interface AllProps extends EndUserProps {}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;


export interface Actions{
    hydrate(self: BAP): void;
    //finale(proxy: Proxy, target: Element, beDecorProps: BeDecoratedProps): void;
}