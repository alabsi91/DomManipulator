/**
 * Remove event listener from an HTML element
 *
 * **Syntax**: `S(targets).off(event, functionHandler)`
 *
 * @param {String} event event listener name
 * @param {Function} functionHandler HTML element value
 *
 */
export function off(event, functionHandler) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i]["removeEventListener"](event, functionHandler);
  }
  return this;
}
