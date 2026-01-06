import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {AbsorbingObject, SharingObject} from '../trans-render/asmr/types';
import { Specifier } from "../trans-render/dss/types";

export interface EndUserProps extends IEnhancement{
    /**
     * abbrev for pass server-rendered value
     * This will pass the initial value from the enhanced element if applicable
     */
    passSRV: boolean
}

export interface AP extends EndUserProps {
    //parsedStatements?: Array<ElevatingParameters>,
    bindings: Array<Binding>,
    rawStatements?: Array<string>,
    bindingRules: Array<BindingRule>,
}

export type AllProps = AP;

export type BAP = AP & BEAllProps;

export type PAP = Partial<AP>

export type ProPAP  = Promise<PAP>

export interface Actions{
    noAttrs(self: BAP): ProPAP;
    hydrate(self: BAP): ProPAP;
    getBindings(self: BAP): ProPAP;
    onRawStatements(self: BAP): void;
}

// export interface ElevatingParameters {
//     localPropToElevate?: string,
//     remoteSpecifiers: Array<Specifier>,
//     localEventType?: string,
// }

export interface BindingRule {
    
    localPropToElevate?: string,
    localEventType?: string,
    dependencyPart?: string,
    remoteSpecifier?: Specifier,


}

export interface Binding {
    remoteShareObj: SharingObject,
    localAbsObj: AbsorbingObject,
}

