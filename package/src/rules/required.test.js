import rule from "./required";

describe("required", () => {
  it("validates / ok", () => {
    expect(rule(null, "First name", "Luffy", { id: "required" }, null)).toBeUndefined();
  });

  it("validates / error", () => {
    expect(rule(null, "First name", "", { id: "required" }, null))
      .toBe("Field \"First name\" is mandatory.");
  });
});
