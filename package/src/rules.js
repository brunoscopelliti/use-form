import date from "./rules/date";
import format from "./rules/format";
import maxlen from "./rules/max-length";
import minlen from "./rules/min-length";
import oneof from "./rules/one-of";
import range from "./rules/range";
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

registerRule("date", date);
registerRule("format", format);
registerRule("maxlen", maxlen);
registerRule("minlen", minlen);
registerRule("oneof", oneof);
registerRule("range", range);
registerRule("required", required);
