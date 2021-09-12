import rule from "./format";

describe("format", () => {
  it("validates / ok", () => {
    expect(rule(null, "First name", "Luffy", { id: "format", attrs: { regexp: "^[\\w]+$" } }, null)).toBeUndefined();
  });

  it("validates / ok empty", () => {
    expect(rule(null, "First name", "", { id: "format", attrs: { regexp: "^[\\w]+$" } }, null)).toBeUndefined();
  });

  it("validates / error", () => {
    expect(rule(null, "First name", "Luffy", { id: "format", attrs: { regexp: "^[a-z]+$" } }, null))
      .toBe("Field \"First name\" contains one, or more invalid characters.");
  });
});
