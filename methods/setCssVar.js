/**
 * Set a Css style variable
 *
 * **Syntax**: `S().setCssVar(variable, value)`
 *
 * @param {String} variable CSS variable name
 * @param {String} value CSS variable value
 *
 */
export function setCssVar(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}
