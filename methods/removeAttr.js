/**
 * Remove Attribute/s from an HTML element
 *
 * **Syntax**: `S(targets).removeAttr(attribute | [attribute, ...])`
 *
 * @param {("autocomplete" | "async" | "alt" | "class" | "contenteditable" | "dir" | "draggable" | "hidden" | "id" | "lang" | "style" | "src" | "title" | "translate"| "value" | Array.<String>)} attribute attribute name
 *
 */
export function removeAttr(attribute) {
  for (let i = 0; i < this.element.length; i++) {
    if (typeof attribute === "object") {
      attribute.forEach((e) => this.element[i].removeAttribute(e));
    } else {
      this.element[i].removeAttribute(attribute);
    }
  }
  return this;
}
