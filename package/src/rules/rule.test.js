import makeRule from "./rule";

describe("makeRule", () => {
  it("skips when condition returns false", () => {
    const spyValidate = jest.fn();
    const validate = makeRule(spyValidate);

    validate(null, null, null, { id: "test", condition (formState) { return false; } }, null);

    expect(spyValidate).not.toHaveBeenCalled();
  });

  it("validates when condition returns true", () => {
    const spyValidate = jest.fn().mockImplementation(() => undefined);
    const validate = makeRule(spyValidate);

    const rule = { id: "test", condition (formState) { return true; } };
    const error = validate("name", "Name", "Luffy", rule, null);

    expect(error).toBeUndefined();

    expect(spyValidate).toHaveBeenCalledTimes(1);
    expect(spyValidate).toHaveBeenCalledWith("name", "Name", "Luffy", rule);
  });

  it("returns default error", () => {
    const spyValidate = jest.fn().mockImplementation(() => "Error");
    const validate = makeRule(spyValidate);

    const rule = { id: "test" };
    const error = validate("name", "Name", "Luffy", rule, null);

    expect(error).toBe("Error");

    expect(spyValidate).toHaveBeenCalledTimes(1);
    expect(spyValidate).toHaveBeenCalledWith("name", "Name", "Luffy", rule);
  });

  it("returns custom error", () => {
    const spyValidate = jest.fn().mockImplementation(() => "Error");
    const validate = makeRule(spyValidate);

    const rule = { id: "test", message: "Custom error" };
    const error = validate("name", "Name", "Luffy", rule, null);

    expect(error).toBe("Custom error");

    expect(spyValidate).toHaveBeenCalledTimes(1);
    expect(spyValidate).toHaveBeenCalledWith("name", "Name", "Luffy", rule);
  });
});
