import { asOptions } from '../dss/types';
import {StringWithAutocompleteOptions, ZeroOrMore} from '../types';

export type ValueProp = StringWithAutocompleteOptions<
    | 'value' 
    | 'checked' 
    | 'href'
    | 'ariaValueNow'
    | 'ariaChecked'
    | 'valueAsNumber'
    | 'valueAsDate'
    | 'textContent'
    | 'innerHTML'
>

export type DisplayProp = StringWithAutocompleteOptions<
    | 'textContent'
    | 'ariaValueText'
>;

export type ValueType = StringWithAutocompleteOptions<
    | 'Boolean'
    | 'String'
    | 'Number'
    | 'NumericRange'
>;

export type TrueText = StringWithAutocompleteOptions<
    | 'Yes'
    | 'On'
>;

export type FalseText = StringWithAutocompleteOptions<
    | 'No'
    | 'Off'
>;

export type TrueStringValue = StringWithAutocompleteOptions<
    | 'https://schema.org/True'
    
>;

export type FalseStringValue = StringWithAutocompleteOptions<
    | 'https://schema.org/False'
>;

export type StdEventNames = StringWithAutocompleteOptions<
    | 'input'
    | 'change'
    | 'click'
    | 'slotchange'
>;

export type BuiltInEditables = StringWithAutocompleteOptions<
    | 'input'
    | 'select'
    | 'textarea'
    
>;

export interface ASMROptions<TProp = any>{
    valueProp?: ValueProp;
    valueType?: ValueType;
    displayProp?: DisplayProp;
    trueText?: TrueText;
    falseText?: FalseText;
    trueValue?: TrueStringValue;
    falseValue?: FalseStringValue;
    path?: string;
}

export interface SetOptions<TProp = any> extends ASMROptions<TProp>{
    valToDisplay?: (v: TProp) => string;
    allowUnsafe?: boolean;
    action?: 
        |'set' 
        |'toggle' 
        |'increment' 
        |'decrement' 
        |'set-class'
        |'set-part'
    ;
}

export interface AbsOptions<TProp = any> {
    /**
     * source of truth attribute
     */
    sota?: string;

    /**
     * name of property corresponding to source of truth attribute
     * if different from source of truth attribute
     */
    sotaProp?: string;

    /**
     * Is Roundabout ready
     */
    isRAR?: boolean;

    /**
     * Is Roundabout Emulating
     */
    isRAE?: boolean;

    /**
     * Is User Editable
     */
    isUE?: boolean;

    /**
     * User Edit Event Name
     */
    evt?: StdEventNames;

    propToAbsorb?: ValueProp;

    propToAbsorbValueType?: ValueType;

    selfIsVal?: boolean;

    as?: asOptions | undefined;
}

// export interface Setter<TProp = any> {
//     setValue(nv: TProp);
// }

export interface SharingObject<TProp = any>{
    setValue(val: TProp);
    pureValue: TProp;
}

export interface AbsorbingObject<TProp = any> extends EventTarget{
    getValue(): Promise<TProp>;

}