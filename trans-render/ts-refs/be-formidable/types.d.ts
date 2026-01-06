import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLFormElement>{
    invalidIf: Array<FormCriteria>,
    checkValidityOn: string | Array<(string | CheckEventMonitor)>,
    checkValidityOnInit: boolean;
}

export interface AllProps extends EndUserProps{
    invalidClassesToApply: Array<string>,
    invalidClassesToRemove: Array<string>,
    isValid: boolean,
    updateCnt: number,
}

export interface FormCriteria{
    noneOf?: Array<(string | FieldOptions)>,
    //instructions?: string,
    invalidCssClass: string,
}

export interface FieldIdentifierOptions {
    name?: string,
    prop: string,
    find?: string,

}

export interface FieldValidationOptions{
    enabled?: boolean,
    required?: boolean,
    min?: number | Date | string,
    max?: number | Date | string,
    pattern?: string,
    type?: string,
}

export interface FieldOptions extends FieldIdentifierOptions, FieldValidationOptions{}

export interface CheckEventMonitor{
    type: string,
    options: AddEventListenerOptions,
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;



export interface Actions{
    hydrate(self: BAP): ProPAP,
    markStatus(self: BAP): void,
    checkValidity(self: BAP): void,
    applyInvalidClsses(self: BAP): void,
    removeInvalidClasses(self: BAP): void,
    // onInvalidIf(self: this): Promise<void>;
    // onCheckValidityOn(self: this): void;
    // onCheckValidityOnInit(self: this): void;
}