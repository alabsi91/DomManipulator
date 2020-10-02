/**
 * Sets or returns the HTML content (inner HTML) of an element or array of elements
 *
 * **Syntax**: `S(targets).text(String)`
 *
 * @param {String} [text]
 *
 * @returns `Array of Strings | String | Void`
 *
 */
 export function text (text) {
    if (text) {
      for (let i = 0; i < this.element.length; i++) {
        this.element[i]["innerHTML"] = text;
      }
    } else {
      let results = [];
      for (let i = 0; i < this.element.length; i++) {
        results.push(this.element[i]["innerHTML"]);
      }
      return results.length === 1 ? results[0] : results;
    }
  };