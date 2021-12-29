import makeRule from "./rule";

/**
 * @name minLength
 * @param {string} _
 * @param {string} label
 * @param {import("../index").FieldValue} value
 * @param {import("../index").Rule} rule
 * @returns {undefined|string}
 */
const minLength =
  (_, label, value, rule) => {
    if (value?.length < rule.attrs.size) {
      return `Field "${label}" exceeds min length of ${rule.attrs.size} characters.`;
    }
  };

export default makeRule(minLength);
