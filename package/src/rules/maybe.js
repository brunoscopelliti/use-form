/**
 * @name runMaybe
 */
const runMaybe =
  (handler) => {
    /**
     * @name validateMaybe
     * @param {string} name
     * @param {string} label
     * @param {import("../index").FieldValue} value
     * @param {import("../index").Rule} rule
     * @param {import("../index").FormPayload} formState
     * @returns {undefined|string}
     */
    const validateMaybe =
      (name, label, value, rule, formState) => {
        let shouldRun = true;
        if (typeof rule.condition == "function") {
          shouldRun = rule.condition(formState);
        }
        if (shouldRun) {
          return handler(name, label, value, rule, formState);
        }
      };

    return validateMaybe;
  };

export default runMaybe;
