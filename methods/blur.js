/**
 * Blur an HTML element
 *
 * **Syntax**: `S(targets).blur()`
 *
 */
export function blur() {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].blur();
  }
  return this;
}
