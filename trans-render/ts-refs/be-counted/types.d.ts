import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import { Specifier } from "../trans-render/dss/types";
import { RoundaboutReady } from '../trans-render/froop/types';

export interface EndUserPropsBasic extends IEnhancement{
    /**
     * How much to increment on each event
     */
    step: number;
    /**
     * Don't allow count to exceed this number
     */
    ltOrEq?: number;
    /** Don't allow count to reach this number. */
    lt?: number;
    /**
     * Starting value of count, including after looping
     */
    min?: number;
    /**
     * Make count loop back to min value after hitting the ceiling set by ltOrEq or lt
     */
    loop?: boolean;

    /**
     * Slowly "awakens" a disabled element.  If the disabled attribute is not set to a number, or is set to "1", removes the disabled attribute.  If it is a larger number, decrements the number by 1. 
     */
    nudges?: boolean;
    /**
     * Event name to trigger count increment
     */
    incOn: string;
    /**
     * Property to subscribe to trigger count increment
     * [TODO]
     */
    incOnSet?: string;
    /**
     * Disable on max
     */
    disableOnMax?: boolean;
    /**
     * set lt = 1
     * and min = 0
     * and step = 1
     * and disableOnMax = true
     */
    once?: boolean
}
export interface EndUserProps extends EndUserPropsBasic, IEnhancement {

}

export interface AllProps extends EndUserProps{
    count: number;
    value: number;
    parsedStatements?: Array<SharingParameters>;
    //checked: boolean;
    isMaxedOut?: boolean;
    //isParsed?: boolean;
    //transformer?: ITransformer<EndUserPropsBasic, Actions, {}>
}

export interface SharingParameters{
    localProp: string,
    remoteSpecifiers: Array<Specifier>
}


export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>

export type BAP = AllProps & BEAllProps & RoundaboutReady;

 export interface Actions{
    hydrate(self: BAP): ProPAP;
    onCount(self: BAP): PAP;
    //shareValue(self: BAP): ProPAP;
    onOnce(self: BAP): PAP
    // inc(self: this): PAP;
    // disableInc(self: this): POA;
    // check(self: this, allGood: PAP): PAP;
    // hydrateTransform(self: this): ProPAP;
}

