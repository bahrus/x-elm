import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import { Specifier } from "../trans-render/dss/types";

export interface EndUserProps extends IEnhancement<HTMLElement>{

}

export interface AllProps extends EndUserProps{
    parsedStatements: Array<ObservantParameters>,
    rawStatements?: Array<string>,
}

export interface ObservantParameters{
    remoteSpecifiers: Array<Specifier>,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps<HTMLElement>;

export interface Actions{
    hydrate(self: BAP) : ProPAP;
}