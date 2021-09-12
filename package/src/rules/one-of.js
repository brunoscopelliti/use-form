import makeRule from "./rule";

/**
 * @name oneOf
 * @param {string} _
 * @param {string} label
 * @param {string} value
 * @param {import("../index").Rule} rule
 * @returns {undefined|string}
 */
const oneOf =
  (_, label, value, rule) => {
    if (!value) {
      return;
    }

    if (rule.attrs.options.includes(value)) {
      return;
    }

    return `Selected value of "${label}" is not valid.`;
  };

export default makeRule(oneOf);
