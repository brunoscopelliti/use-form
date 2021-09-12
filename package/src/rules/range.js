import makeRule from "./rule";

/**
 * @name range
 * @param {string} _
 * @param {string} label
 * @param {string} value
 * @param {import("../index").Rule} rule
 * @returns {undefined|string}
 */
const range =
  (_, label, value, rule) => {
    if (!value) {
      return;
    }

    const n = Number(value);

    const [from, to] = rule.attrs.range;

    if (Number.isNaN(n) === false) {
      if (n >= from && n <= to) {
        return;
      }
    }

    return `Field "${label}" is out of range <${from}, ${to}>.`;
  };

export default makeRule(range);
