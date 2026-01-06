import {BEAllProps, IEnhancement} from '../trans-render/be/types';
import {AbsorbingObject} from '../trans-render/asmr/types';

export interface RenderingHTMLScriptElement extends HTMLScriptElement{
    renderer: (vm: any, html: any) => any,
}

export interface EndUserProps extends IEnhancement<RenderingHTMLScriptElement>{
    vm: any,
    with: Array<string>,
}

export type Renderer = (vm: any, html: any) => any;

export interface AP extends EndUserProps{
    renderer: Renderer,
    absorbingObject: AbsorbingObject
}

export type PAP = Partial<AP>;

export type BAP = AP & BEAllProps;

export type ProPAP = Promise<PAP>;

export interface Actions {
    getRenderer(self: BAP): BAP;
    doRender(self: BAP): void;
    observe(self: BAP): ProPAP;
    absorb(self: BAP, e?: Event): ProPAP;
}