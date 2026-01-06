import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { Specifier } from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement{}

export interface AP extends EndUserProps{
    parsedStatements: Array<IncParameters>,
    rawStatements: Array<string>,
}

export type AllProps = AP;

export type PAP = Partial<AP>;

export type ProPAP  = Promise<PAP>

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP & BEAllProps): ProPAP;
    
}

export interface IncParameters {
    targetSpecifier: Specifier,
    sourceSpecifier: Specifier,
    localEventType?: string,
}