/**
 * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
 *
 * **Syntax**: `S(targets).clone(deep)`
 *
 * @param {boolean} [deep=false]
 *
 */
export function clone(deep) {
  return this.element[0].cloneNode(deep);
}
