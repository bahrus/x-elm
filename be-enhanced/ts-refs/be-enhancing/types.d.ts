import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { Specifier } from "../trans-render/dss/types";

export interface EndUserProps extends IEnhancement{
}

export interface AllProps extends EndUserProps{
    parsedStatements: Array<EnhancingParameters>,
    rawStatements?: Array<string>
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): ProPAP;
}

export interface EnhancingParameters{
    remoteSpecifierString: string;
    remoteSpecifier: Specifier;
    enhancementBase: string;
    localSpecifierString: string;
    localSpecifier: Specifier;
    remotePropertyPath: string;
}