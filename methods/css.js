/**
 * Set a specific style of an element/s using different CSS properties.
 *
 * **Syntax**: `S(targets).css({CSSPropertiy:`Value`, ...})`
 *
 * @param {CssObject} CSSObjectOfProprties
 *
 * @returns `Void`
 *
 * */
export function css(CSSObjectOfProprties) {
  for (let i = 0; i < this.element.length; i++) {
    for (const key in CSSObjectOfProprties) {
      this.element[i].style[key] = CSSObjectOfProprties[key];
    }
  }
  return this;
}
