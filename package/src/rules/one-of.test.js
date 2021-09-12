import rule from "./one-of";

describe("one-of", () => {
  it("validates / ok", () => {
    expect(rule(null, "Country", "Italy", { id: "oneof", attrs: { options: ["France", "Italy", "Germany"] } }, null)).toBeUndefined();
  });

  it("validates / ok empty", () => {
    expect(rule(null, "Country", "", { id: "oneof", attrs: { options: ["France", "Italy", "Germany"] } }, null)).toBeUndefined();
  });

  it("validates / error", () => {
    expect(rule(null, "Country", "United States", { id: "oneof", attrs: { options: ["France", "Italy", "Germany"] } }, null))
      .toBe("Selected value of \"Country\" is not valid.");
  });
});
