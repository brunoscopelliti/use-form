import makeRule from "./rule";

/**
 * @name maxLength
 * @param {string} _
 * @param {string} label
 * @param {import("../index").FieldValue} value
 * @param {import("../index").Rule} rule
 * @returns {undefined|string}
 */
const maxLength =
  (_, label, value, rule) => {
    if (value?.length > rule.attrs.size) {
      return `Field "${label}" exceeds max length of ${rule.attrs.size} characters.`;
    }
  };

export default makeRule(maxLength);
