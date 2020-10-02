/**
 * Get the style value of an HTML element
 *
 * **Syntax**: `S(targets).getStyle(property, toNumber)`
 *
 * @param {String} property CSS property name
 * @param {Boolean} [toNumber]
 *
 * determine the return value type `(string|number)`
 *
 *  **Initial Value** `False`
 *
 * @returns the value of CSS property
 *
 */
export function getStyle(property, toNumber = false) {
  if (property && !toNumber) {
    return window.getComputedStyle(this.element[0]).getPropertyValue(property);
  } else if (toNumber && property) {
    return parseFloat(window.getComputedStyle(this.element[0]).getPropertyValue(property));
  } else {
    return window.getComputedStyle(this.element[0]);
  }
}
