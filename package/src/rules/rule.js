/**
 * Wraps logic shared by all different validators;
 * eg. whether the rule should be executed, or if
 * the error message should be overridden.
 * @name makeRule
 */
const makeRule =
  (handler) => {
    /**
     * @name validate
     * @param {string} name
     * @param {string} label
     * @param {import("../index").FieldValue} value
     * @param {import("../index").Rule} rule
     * @param {import("../index").FormPayload} formState
     * @returns {undefined|string}
     */
    const validate =
      (name, label, value, rule, formState) => {
        let shouldRun = true;
        if (typeof rule.condition == "function") {
          shouldRun = rule.condition(formState);
        }
        if (shouldRun) {
          const result = handler(name, label, value, rule);
          if (result) {
            return rule.message || result;
          }
        }
      };

    return validate;
  };

export default makeRule;
