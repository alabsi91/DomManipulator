/**
 * Remove an HTML element from document
 *
 * **Syntax**: `S(targets).remove()`
 *
 */
export function remove() {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].remove();
  }
  return this;
}
