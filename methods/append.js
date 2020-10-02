/**
 * Inserts nodes after the last child of node.
 *
 * **Syntax**: `S(targets).append(element)`
 *
 * @param {Element} element
 *
 */
export function append(element) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].append(element);
  }
  return this;
}
