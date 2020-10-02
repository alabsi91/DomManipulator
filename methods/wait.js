/**
 * A wait function to be used only inside async functions
 *
 * **Syntax**: `await S().wait(time)`
 *
 * @param {Number} time time in milliseconds
 *
 */
export function wait(time) {
  return new Promise((e) => setTimeout(e, time));
}
