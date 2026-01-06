import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';
import { Specifier } from '../trans-render/dss/types';

interface FetchReadyEvent {
    url: string
    options: RequestInit
}

export interface EndUserProps extends IEnhancement{
    
    
}

export interface AllProps extends EndUserProps{
    //evtCount: number,
    fetchReadyEvent: FetchReadyEvent
    rawStatements: Array<string>
    fetchForParams: Array<FetchForParameters>

}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): PAP;
    doFetch(self: BAP): void;
}

export interface FetchForParameters {
    remoteSpecifier: Specifier
}