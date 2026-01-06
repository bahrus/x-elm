import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {Specifier} from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement<HTMLTemplateElement>{

}

export interface AllProps extends EndUserProps{
    nodesToImbue: Element[],
    imbueRules: Array<ImbueRule>,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): Promise<PAP>;
    imbue(self: BAP): void;
}

export interface ImbueRule {
    remoteSpecifierString?: string,
    remoteSpecifier: Specifier,
}

