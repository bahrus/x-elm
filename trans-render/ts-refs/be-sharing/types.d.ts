import { BEAllProps, IEnhancement } from './ts-refs/be-enhanced/types';

export interface EndUserProps extends IEnhancement {

}

export interface AllProps extends EndUserProps {}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;


export interface Actions{
}