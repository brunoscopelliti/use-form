import makeRule from "./rule";

/**
 * @name format
 * @param {string} _
 * @param {string} label
 * @param {string} value
 * @param {import("../index").Rule} rule
 * @returns {undefined|string}
 */
const format =
  (_, label, value, rule) => {
    if (!value) {
      return;
    }

    const rx = new RegExp(rule.attrs.regexp);

    if (rx.test(value)) {
      return;
    }

    return `Field "${label}" contains one, or more invalid characters.`;
  };

export default makeRule(format);
