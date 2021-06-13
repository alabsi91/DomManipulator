import "./CSSProprties";
import { animate } from "./methods/animate";
import { append } from "./methods/append";
import { attr } from "./methods/attr";
import { blur } from "./methods/blur";
import { clone } from "./methods/clone";
import { css } from "./methods/css";
import { focus } from "./methods/focus";
import { getCssVar } from "./methods/getCssVar";
import { getStyle } from "./methods/getStyle";
import { keyframes } from "./methods/keyframes";
import { off } from "./methods/off";
import { on } from "./methods/on";
import { pan } from "./methods/pan";
import { prepend } from "./methods/prepend";
import { progress } from "./methods/progress";
import { removeAttr } from "./methods/removeAttr";
import { removeCss } from "./methods/removeCss";
import { remove } from "./methods/removeEl";
import { scrollTo } from "./methods/scrollTo";
import { setCssVar } from "./methods/setCssVar";
import { text } from "./methods/text";
import { val } from "./methods/val";
import { wait } from "./methods/wait";

export class domElement {
  constructor(targets) {
    this.element = typeof targets === "string" ? document.querySelectorAll(targets) : [targets];
  }
}

domElement.prototype.text = text;
domElement.prototype.css = css;
domElement.prototype.removeCss = removeCss;
domElement.prototype.prepend = prepend;
domElement.prototype.append = append;
domElement.prototype.clone = clone;
domElement.prototype.attr = attr;
domElement.prototype.removeAttr = removeAttr;
domElement.prototype.val = val;
domElement.prototype.on = on;
domElement.prototype.off = off;
domElement.prototype.remove = remove;
domElement.prototype.blur = blur;
domElement.prototype.focus = focus;
domElement.prototype.getStyle = getStyle;
domElement.prototype.getCssVar = getCssVar;
domElement.prototype.setCssVar = setCssVar;
domElement.prototype.wait = wait;
domElement.prototype.animate = animate;
domElement.prototype.scrollTo = scrollTo;
domElement.prototype.progress = progress;
domElement.prototype.pan = pan;
domElement.prototype.keyframes = keyframes;

/**
 *
 * @param {(String|Element)} targets - CssSelector | DomElement/s
 */
export const S = (targets) => new domElement(targets);

export { requestFrame } from "./methods/requestFrame";
export { colorToArr } from './methods/colorToRgbArray';