/**
 * Removes the specified CSS property or properties from a CSS declaration block.
 *
 * **Syntax**: `S(targets).removeCss(propertyName | [propertyName, ...])`
 *
 * @param {(String|Array.<String>)} propertyName
 *
 * @returns `Void`
 *
 */
export function removeCss(propertyName) {
  for (let i = 0; i < this.element.length; i++) {
    if (typeof propertyName === "object") {
      propertyName.forEach((e) => {
        this.element[i]["style"].removeProperty(e);
      });
    } else {
      this.element[i]["style"].removeProperty(propertyName);
    }
  }
  return this; 
}
