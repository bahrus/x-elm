import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import { USL } from '../trans-render/XV/types';

export interface EndUserProps extends IEnhancement {
    //params?: PersistenceParams | Array<PersistenceParams>;
    rules: Array<PersistenceRule>
}
export interface AllProps extends EndUserProps{
    noAttrs: boolean,
    //isParsed?: boolean,
    //persistenceParams?: Array<PersistenceParams>
}


export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{

    hydrate(self: BAP): ProPAP;
    noAttrs(self: BAP): ProPAP;
    // parameterize(self: this): ProPAP
}

export interface PersistenceRule {
    localProp?: string,
    localEvent?: string,
    usl?: USL,
}

// export interface PersistenceParams<TObjectToPersist = any, TEventMap = any>{
//     what?: {[key in keyof TObjectToPersist]: boolean | string  | WhatToPersistCriteria},
//     where: PersistenceStorage,
//     when?: {[key in keyof TEventMap]: boolean | EventCriteria},
//     nudge?: boolean,
//     persistOnUnload?: boolean,
//     restoreIf: RestoreCriteria,
//     eventToFire?: {
//         type: string,
//         bubbles: boolean,
//         cancelable: boolean,
//         composed: boolean,
//     }
// }

// export interface PersistenceStorage{
//     sessionStorage?: boolean,
//     idb?: boolean,
//     autoGenId?: boolean,
//     hash?: boolean,
// }

// export interface EventCriteria{}

// export interface RestoreCriteria{
//     always?: boolean,
// }

// export interface WhatToPersistCriteria {
//     //beBeatified: boolean
// }