import required from "./rules/required";

export const registerRule =
  (ruleId, rule) => {
    if (ValidationRules.has(ruleId)) {
      throw new Error(`The rule ${ruleId} is already registered.`);
    }

    ValidationRules.set(ruleId, rule);
  };

export const getRule =
  (ruleId) => {
    return ValidationRules.get(ruleId);
  };

const ValidationRules = new Map();

registerRule("required", required);
