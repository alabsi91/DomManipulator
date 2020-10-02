/**
 * Set or Return the value attribute from an HTML element
 *
 * **Syntax**: `S(targets).val(value)`
 *
 * @param {Object} value HTML element value
 *
 * @returns Value attribute | Void
 *
 */
export function val(value) {
  if (value || value === 0) {
    this.element[0].value = value;
  } else {
    return this.element[0].value;
  }
}
