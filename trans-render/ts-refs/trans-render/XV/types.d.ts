import { PropInfo } from "../froop/types";

export type storage = 'sessionStorage' | 'localStorage';

export type protocols = 
    |   storage
    |   'indexedDB' 
    |   'globalThis'
    |   'cookie'
    |   'locationHash'
;

export type db = string;
export type storeName = string;
export type key = string;
export type chainedAccessor = string;

export type idbUSP = `indexedDB://${db}/${storeName}/${key}`;
export type idbUSL = `${idbUSP}?.${chainedAccessor}`;

export type storageUSP = `${storage}://${key}`;
export type storageUSL = `${storageUSP}?.${chainedAccessor}`;

export type USP = 
    | idbUSP
    | storageUSP
;

export type USL = 
    | idbUSP
    | idbUSL
    | storageUSP
    | storageUSL
;

export interface ParsedUSL{
    protocol: protocols,
    accessorChain: string,
    usp: USP,
    uspParts: Array<string>
}

export interface WrapperConfig<TProps = any> extends PropInfo {
    USPProp: keyof TProps & string,
    accessor: string,
    cache: boolean,
    maxStaleness: number,
    //subscribe to window message
    beVigilant: boolean,
}

export type USLMapping = {[key: string | number | symbol]: USL}

export interface StowArgs {
    values: any,
    mapping: USLMapping
}

export interface SavingContext {
    USLs: Set<USL>
}

export interface CookieOptions {
    secure: boolean | undefined,
    'max-age': number | undefined,
    expires: Date | string | undefined,
    domain: string | undefined,
    path: string | undefined,
}