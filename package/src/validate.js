import { getRule } from "./rules";

/**
 * @name validate
 * @param {string} name
 * @param {import("./index").Field} field
 * @param {import("./index").FormPayload} formState
 * @returns {undefined|string}
 */
const validate =
  (name, field, formState) => {
    if (field.schema == null) {
      return;
    }

    for (const rule of field.schema) {
      /**
       * It's possible to define
       * custom validators inline.
       */
      const checkFn = typeof rule.validate == "function"
        ? rule.validate
        : getRule(rule.id);

      const result = checkFn(name, field.label, field.value, rule, formState);

      if (result) {
        return result;
      }
    }
  };

export default validate;
