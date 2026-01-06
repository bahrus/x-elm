import {BEAllProps, IEnhancement} from '../trans-render/be/types';

export interface EndUserProps extends IEnhancement<HTMLFormElement> {
    triggerInsertPosition: InsertPosition;
    buttonContent: string;
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
    addFormalizeBtn(self: BAP): ProPAP;
    setBtnContent(self: BAP): void;
    openDialog(self: BAP): Promise<void>
}

export interface IFormDialog{
    openDialog();
}