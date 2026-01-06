import {IEnhancement, BEAllProps} from '../trans-render/be/types';
import {StringWithAutocompleteOptions} from '../trans-render/types';

export interface EndUserProps extends IEnhancement{
    duration: number,
    attr: StringWithAutocompleteOptions<
        |'value'
        |'textContent'
        |'innerHTML'
        |'shadowRoot'
    >,
    css: string,
}

export interface AllProps extends EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): ProPAP;
}