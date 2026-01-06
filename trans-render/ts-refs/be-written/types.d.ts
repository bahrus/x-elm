import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {EndUserProps as BeBasedEndUserProps} from '../be-based/types';
import {Inserts} from '../../node_modules/stream-orator/types';

export interface EndUserProps extends IEnhancement{
    from?: string,
    to: string,
    shadowRootMode?: 'open' | 'closed',
    encoding: 'UTF-8' | 'UTF-16'
    reqInit: RequestInit,
    wrapper: string,
    beBased: boolean | BeBasedEndUserProps,
    beOosoom: string,
    defer: boolean,
    inProgressCss: string,
    inserts:Inserts,
    between: [lhs: string, rhs: string],
    once: boolean,
    onNavigate: OnNavigationProps
}

//https://www.npmjs.com/package/urlpattern-polyfill
interface URLPatternInit {
  baseURL?: string;
  username?: string;
  password?: string;
  protocol?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
}

export interface OnNavigationProps {
    whereSrcElementMatches: string,
    whereDestMatchesURLPattern: URLPatternInit,
    map: {[key: string]: string},
    minMem: boolean,
}

export interface AllProps extends EndUserProps{
    to: string,
    from: string,
}

export interface AllProps extends EndUserProps {}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;


export interface Actions{
    hydrate(self: AP & BEAllProps): ProPAP;
    write(self: AP & BEAllProps): ProPAP;
}