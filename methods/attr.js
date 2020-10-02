/**
 * Set Attribute for an HTML element
 *
 * **Syntax**: `S(targets).attr(attribute, value)`
 *
 * @param {"autocomplete" | "async" | "alt" | "class" | "contenteditable" | "dir" | "draggable" | "hidden" | "id" | "lang" | "style" | "src" | "title" | "translate"| "value"} attribute attribute name
 * @param {String} value attribute value
 *
 */
export function attr(attribute, value) {
  for (let i = 0; i < this.element.length; i++) {
    this.element[i].setAttribute(attribute, value);
  }
  return this;
}
