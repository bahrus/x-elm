import {BEAllProps, IEnhancement, IW} from '../trans-render/be/types';
import { Specifier } from "../trans-render/dss/types";
import {aggKeys, Handlers} from '../be-hive/types';
import { StringWithAutocompleteOptions } from '../trans-render/types';
import {AbsorbingObject} from '../trans-render/asmr/types';
export interface EndUserProps extends IEnhancement{
    
} 

export interface AllProps extends EndUserProps{
    parsedStatements: Array<ObservingParameters>,
    rawStatements?: Array<string>,
    didInferring?: boolean,
    ws?: Array<IW>,
    //enhancementInfo: EnhancementInfo,
    enhKey: string,
}




export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps & Handlers;

export interface Actions{
    noAttrs(self: BAP): ProPAP;
    infer(self: BAP) : ProPAP;
    seek(self: BAP): ProPAP;
    // hydrate(self: this): ProPAP;
    warn(...data: any[]): void;
}

export interface AndIfThen{
    ifCondition: string,
    passValue: string,
}

export interface ObservingParameters{
    localPropToSet?: string,
    remoteSpecifiers: Array<Specifier>,
    punt: boolean,
    mappings?: Array<AndIfThen>,
    aggKey: StringWithAutocompleteOptions<aggKeys>,
    interpolatingExpr: string,
    JSExpr: string,
    ONExpr: string,
    action: 
        | 'set' 
        | 'toggle' 
        | 'increment' 
        | 'decrement'
        | 'set-class' 
        | 'set-part'
    //aggregateRemoteVals?: 'Union' | 'Conjunction' | 'ObjectAssign' | 'Sum' | 'Product' | 'ArrayPush'
}


 



// export interface ObserverOptions{
//     abortControllers: Array<AbortController>,
//     remoteEl?: Element,
// }

export type LoadEventName = 'load';

export interface EventForObserver{
    factors: {[key: string | number] : any},
    setProps?: {[key: string]: any};
    enh: string,
}

// export interface ObserverEventModel{
//     factors: {[key: string] : any},
//     vals: any[],
    
// }