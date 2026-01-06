import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLLabelElement> {
    triggerInsertPosition: InsertPosition;
    labelTextContainer: string;
    buttonContent: string;
    nudge?: boolean;
}

export interface AllProps extends EndUserProps{
    byob?: boolean;
    trigger: WeakRef<HTMLButtonElement>
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type BAP = AP & BEAllProps

export type ProPAP = Promise<PAP>;



export interface Actions{
    addTypeBtn(self: BAP): ProPAP;
    setBtnContent(self: BAP): void;
    openDialog(self: BAP): Promise<void>
    // beTyped(self: this): void;
    // finale(): void;
}

export interface ITyper{
    showDialog(): void;
    dispose(): void;
}