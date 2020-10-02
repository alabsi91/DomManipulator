/**
 * Focus an HTML element
 *
 * **Syntax**: `S(targets).focus()`
 *
 */
export function focus() {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].focus();
  }
  return this;
}
