import runMaybe from "./maybe";

/**
 * @name required
 * @param {string} name
 * @param {string} label
 * @param {import("../index").FieldValue} value
 * @param {import("../index").Rule} rule
 * @param {import("../index").FormPayload} formState
 * @returns {undefined|string}
 */
const required =
  (name, label, value, rule, formState) => {
    /**
     * TODO: what if value is array (eg. checkbox).
     */

    if (typeof value == "string") {
      if (value && value.trim() !== "") {
        return undefined;
      }
    }

    return rule.message || `Field ${label} is mandatory.`;
  };

export default runMaybe(required);
