import makeRule from "./rule";

/**
 * @name required
 * @param {string} _
 * @param {string} label
 * @param {import("../index").FieldValue} value
 * @returns {undefined|string}
 */
const required =
  (_, label, value) => {
    if (typeof value == "string") {
      if (value && value.trim() !== "") {
        return undefined;
      }
    }

    if (value?.length > 0) {
      return undefined;
    }

    return `Field "${label}" is mandatory.`;
  };

export default makeRule(required);
