import { JSONObject } from '../trans-render/lib/types';
import { Specifier } from '../trans-render/dss/types';
import { URLBuilder } from '../../URLBuilder';
import {SimpleWCInfo} from '../wc-info/SimpleWCInfo';
import {EndUserProps} from './doc';
export {EndUserProps} from './doc';

declare class WeakRef<TProps = any>{}


export interface OverridableGetters{
    //request$: RequestInit,
    //accept$?: string,
    value?: any,
    //isAttrParsed?: boolean,
    targetSelf?: boolean
    targetSpecifier?: Specifier
    whenCount?: number,
    nextWhenCount?: number,


}

export type EventName = string;

export interface AllProps extends EndUserProps, OverridableGetters{

    readonly resolvedTarget?: Element | null,

    /**
     * @readonly
     * Weak references to input elements
     */
    readonly forRefs: Map<string, [WeakRef<HTMLInputElement>, EventName]>,
    readonly formData?: FormData,
    readonly formRef?: WeakRef<HTMLFormElement>,
    readonly formSpecifier?: Specifier,
    readonly urlBuilder?: URLBuilder,
}

export type PAP = Partial<AllProps>;

export type ProPP = Promise<PAP>;


/**
 * methods for fetch-for
 */
export interface Methods extends Actions{
    validateResp(resp: Response): boolean,
    validateOn(): boolean,
    setTargetProp(target: Element | null, data: any, shadow?: ShadowRootMode): void,
}

export interface Actions{
    do(self: this): Promise<void>;
    bindSrc(self)
    parseFor(self: this): ProPP;
    parseTarget(self: this): ProPP;
    // listenForInput(self: this): ProPP;
    // doInitialLoad(self: this): ProPP;
    initializeWhen(self: this): Promise<PAP | undefined>;
    // onForm(self: this): ProPP;
    // onFormSpecifier(self: this): ProPP;
    // onFormRef(self: this): Promise<void>,
}

// https://github.com/webcomponents-cg/community-protocols/issues/12#issuecomment-872415080
export type loadEventName = 'load';
export type inputEventName = 'input';
export type selectionChangeEventName = 'select';

export interface EventForFetch {
    href?: string;
    trigger?: Element,
    forData: ForData,
    formData: FormData,
    body?: string | JSONObject
}

export type ForData = {[key: string]: HTMLInputElement}


