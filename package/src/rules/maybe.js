/**
 * @name runMaybe
 */
const runMaybe =
  (handler) => {
    /**
     * @name validateMaybe
     * @param {string} label
     * @param {import("../index").FieldValue} value
     * @param {import("../index").Rule} rule
     * @param {import("../index").FormPayload} formState
     * @returns {undefined|string}
     */
    const validateMaybe =
      (label, value, rule, formState) => {
        let shouldRun = true;
        if (typeof rule.condition == "function") {
          shouldRun = rule.condition(formState);
        }
        if (shouldRun) {
          return handler(label, value, rule, formState);
        }
      };

    return validateMaybe;
  };

export default runMaybe;
