/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return undefined;
  }

  let arr = Object.entries(obj);

  arr.map((item) => item.reverse());

  return Object.fromEntries(arr);
}
