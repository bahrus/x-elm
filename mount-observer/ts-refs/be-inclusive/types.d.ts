import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {Specifier} from '../trans-render/dss/types';

export interface EndUserProps<TProps, TMethods, TElement = {}> extends IEnhancement{
    
}

export interface AllProps<TProps, TMethods, TElement = {}> extends EndUserProps<TProps, TMethods, TElement>{
    includeRules: Array<IncludeRule>;
    nodesToInclude: Array<Element>;
}

export type AP = AllProps<any, any, any>;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;


export interface Actions{
    hydrate(self: BAP): Promise<PAP>;
    include(self: BAP): void;
}

export interface IncludeRule {
    remoteSpecifierString?: string,
    remoteSpecifier: Specifier,
}
