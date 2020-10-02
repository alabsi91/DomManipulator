/**
 * inserts nodes before the first child of node.
 *
 * **Syntax**: `S(targets).prepend(element)`
 *
 * @param {Element} element
 *
 */
export function prepend(element) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].prepend(element);
  }
  return this;
}
