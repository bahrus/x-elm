import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';
import { Specifier } from "../trans-render/dss/types";

export interface EndUserProps extends IEnhancement{
    soakUpRules: SoakUpRule[]
}

export interface AllProps extends EndUserProps{

    fullyParsed?: boolean
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    fullyParse(self: BAP): PAP;
    hydrate(self: BAP): ProPAP;
}

export interface PropMap  {
    srcProp: string,
    destProp?: string
}

export interface SoakUpRule {
    propMap: string
    sourceSpecifier: Specifier
    sourceSpecifierString: string
    parsedPropMap: PropMap[]
}