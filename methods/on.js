/**
 * Add event listener to an HTML element
 *
 * **Syntax**: `S(targets).on(event, functionHandler)`
 *
 * @param {String} event event listener name
 * @param {Event} functionHandler HTML element value
 *
 */
export function on(event, functionHandler) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i]["addEventListener"](event, functionHandler);
  }
  return this;
}
