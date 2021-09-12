import rule from "./min-length";

describe("min-length", () => {
  it("validates / ok", () => {
    expect(rule(null, "First name", "Luffy", { id: "minlen", attrs: { size: 5 } }, null)).toBeUndefined();
  });

  it("validates / error", () => {
    expect(rule(null, "First name", "Luffy", { id: "minlen", attrs: { size: 6 } }, null))
      .toBe("Field \"First name\" exceeds min length of 6 characters.");
  });
});
