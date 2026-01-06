import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import { RoundaboutReady } from '../trans-render/froop/types';

export interface EndUserProps extends IEnhancement{
    to: string;
    nudges: boolean;
    on: string;
}

export interface AllProps extends EndUserProps {
    //isParsed?: boolean;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AllProps & BEAllProps & RoundaboutReady;

export interface Actions{
    hydrate(self: BAP): ProPAP;
    // findTarget(self: this): Promise<void>;
    // handleCommit(self: this, e: KeyboardEvent): Promise<void>;
}