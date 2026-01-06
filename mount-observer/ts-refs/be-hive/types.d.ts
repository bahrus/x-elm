import { CustomHandlers} from '../trans-render/be/types';
import {StringWithAutocompleteOptions} from '../trans-render/types';
export type aggKeys = StringWithAutocompleteOptions<
    | '+'
    | '*'
    | 'max'
    | 'min'
    | 'nearlyEq'
    | 'eq'
    | '||'
    | '&&'
    | '{}'
>;

export interface Handlers{
    customHandlers: CustomHandlers;
}

