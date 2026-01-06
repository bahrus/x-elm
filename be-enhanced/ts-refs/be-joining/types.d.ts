import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {AllProps as XPAsAllProps} from '../xp-as/types';

export interface EndUserProps extends IEnhancement{
    xpAsAttr: string;
}

export interface AllProps extends EndUserProps{
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions {
    hydrate(self: BAP): ProPAP;
}

export interface Factor{
    NameOfProp: string,
    xpAs: XPAsAllProps,
}