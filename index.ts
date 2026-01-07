import {def} from './trans-render/lib/def.js';
import {XElm} from './x-elm.js';
export {XElm} from './x-elm.js';
export {Mount} from './trans-render/Mount.js';

await XElm.bootUp();
def('x-elm', XElm);