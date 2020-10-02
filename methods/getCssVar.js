/**
 * Get the style variable from DOM Root
 *
 * **Syntax**: `S().getCssVar(variable, toNumber)`
 *
 * @param {String} variable CSS variable name
 * @param {Boolean} [toNumber]
 *
 * determine the return value type (string|number)
 *
 *  **Initial Value** `False`
 *
 * @returns the value of the CSS variable
 *
 */
export function getCssVar(variable, toNumber = false) {
  if (!toNumber) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variable);
  } else if (toNumber) {
    return parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue(variable));
  }
}
