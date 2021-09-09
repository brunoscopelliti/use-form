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
    if (typeof value == "string") {
      if (value && value.trim() !== "") {
        return undefined;
      }
    }

    if (value?.length > 0) {
      return undefined;
    }

    /**
     * Is it possible to move somewhere else?
     */
    return rule.message || `Field ${label} is mandatory.`;
  };

export default runMaybe(required);
