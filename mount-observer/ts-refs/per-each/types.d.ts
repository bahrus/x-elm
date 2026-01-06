import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { HasIshList } from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement{
    each: string;
    

    mapIdxTo: string;
    idxStart: number;
    idleTimeout: number;
    options: Partial<EndUserProps>;
    // parsedStatements: Array<LoopingStatement>,
    // rawStatements?: Array<string>,
}

export interface AllProps extends EndUserProps{
    listScope: string;
    //itemProp: string;
    itemScopes: Array<string>;
    itemTemplates: Array<HTMLTemplateElement>;
    emc: any;
    //loopingParameters: Array<LoopingParameters>,
    ish: any;
    ishContainer: Element;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    parse(self: BAP): PAP;
    init(self: BAP): ProPAP;
    hydrate(self: BAP)
}

// export interface LoopingStatement {
//     listProp?: string;
//     itemProp: string;
// }

// export interface LoopingParameters extends LoopingStatement {
//     listProp: string;
//     ish: any;
//     ishContainer: Element;
// }

