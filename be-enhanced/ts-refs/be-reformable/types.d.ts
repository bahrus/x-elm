import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import {Specifier, DSS} from '../trans-render/dss/types';

export interface EndUserProps extends IEnhancement<HTMLFormElement>{
    baseLink: string,
    baseURL: string,
    path: string,
    headers: HeadersInit | undefined,
    updateOn: 'input' | 'change' | 'submit',
    submitOptions:{
        onlyAfter: Specifier,
        nudges: boolean,
        disableIfNotAllConditionsAreMet: boolean
    },
    headerFields: Array<DSS>
}

type BeforeToken = string;
type TokenKey = string | undefined

export interface IURLBuilder{
    readonly tokens: Array<[BeforeToken, TokenKey]>
}

export interface AllProps extends EndUserProps{
    updateCnt: number,
    readonly urlBuilder: IURLBuilder,
    readonly resolvedBaseURL: true,
    readonly fetchOptions: RequestInit,
    readonly isFetchReady: boolean,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions {
    resolveBaseLink(self: BAP): PAP;
    specifyDefaultBaseURL(self: BAP): PAP;
    hydrate(self: BAP): ProPAP;
    updateAction(self: BAP): ProPAP;
    parsePath(self: BAP): ProPAP;
    suggestFetch(self: BAP): PAP;
}