import {IEnhancement, BEAllProps, EMC} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    nudges: boolean
}

export interface AllProps extends EndUserProps{
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    //do(self: BAP): Promise<void>;
}

export interface AttrInfo {
    instanceOf:
        | String
        | 'String'
        | Object
        | 'Object'
        | Number
        | 'Number'
        | Boolean
        | 'Boolean'
    mapsTo: string
}

export type RHS = string | AttrInfo;

export type ItemPropMap = {[key: string]: RHS}