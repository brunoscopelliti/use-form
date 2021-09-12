import rule from "./max-length";

describe("max-length", () => {
  it("validates / ok", () => {
    expect(rule(null, "First name", "Luffy", { id: "maxlen", attrs: { size: 5 } }, null)).toBeUndefined();
  });

  it("validates / error", () => {
    expect(rule(null, "First name", "Luffy", { id: "maxlen", attrs: { size: 4 } }, null))
      .toBe("Field \"First name\" exceeds max length of 4 characters.");
  });
});
