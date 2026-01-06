import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {Specifier} from '../trans-render/dss/types';
import { CSSQuery } from '../trans-render/types';

export interface EndUserProps extends IEnhancement{
}

export interface AllProps extends EndUserProps{
    parsedStatements: Array<MediatingParams>,
    rawStatements?: Array<string>,
    mediator?: (x: any) => any,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    warn(...data: any[]): void;
    parseJS(self: BAP): ProPAP;
    hydrate(self: BAP): ProPAP;
    
}

export interface MediatingParams{
    originPart: string,
    targetPart: string,
    originSpecifiers: Array<Specifier>,
    targetCSS: CSSQuery,
}