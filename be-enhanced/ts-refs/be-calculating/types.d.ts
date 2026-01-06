import {BEAllProps, EventListenerOrFn, IEnhancement} from '../trans-render/be/types';
import {StringWithAutocompleteOptions} from '../trans-render/types';
import { Specifier } from '../trans-render/dss/types';
import {AbsorbingObject} from '../trans-render/asmr/types';
import {Handlers} from '../be-hive/types';

export interface EndUserProps extends IEnhancement<HTMLElement>{
    forAttr?: string,
    handler: string
    eventArg: string,
    js: string,
}

export interface AllProps extends EndUserProps{
    //calculator: {new: () => EventListenerObject},
    // value: any;
    // isParsed: boolean;
    // attrExpr?: string | null;
    //publishEventType: 'input' | 'change' | 'load',
    handlerObj?: EventListenerOrFn,
    defaultEventType: StringWithAutocompleteOptions<
        | 'input'
        | 'change'
    >,
    forArgs: string[],
    remoteSpecifiers: Array<Specifier>,
    isAttached?: boolean,
    isOutputEl?: boolean,
    enhElLocalName: string,
    enhKey: string,
    categorized?: boolean,
    remSpecifierLen?: number,
    propToAO: {[key: string] : AbsorbingObject},
    checkedRegistry: boolean,
    notYetParsedJS: boolean,
} 

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps & Handlers;

export interface Actions{
    categorizeEl(self: BAP): PAP;
    getEvtHandler(self: BAP): PAP;
    parseForAttr(self: BAP): PAP;
    getDefltEvtType(self: BAP): PAP;
    // findScriptEl(self: BAP): PAP;
    // importSymbols(self: BAP): ProPAP;
    genRemoteSpecifiers(self: BAP): PAP;
    seek(self: BAP): ProPAP;
    hydrate(self: BAP): ProPAP;
    parseJS(self: BAP): ProPAP;
}