import rule from "./range";

describe("range", () => {
  it("validates / ok", () => {
    expect(rule(null, "Age", "18", { id: "range", attrs: { range: [18, 24] } }, null)).toBeUndefined();
    expect(rule(null, "Age", "20", { id: "range", attrs: { range: [18, 24] } }, null)).toBeUndefined();
    expect(rule(null, "Age", "24", { id: "range", attrs: { range: [18, 24] } }, null)).toBeUndefined();
  });

  it("validates / ok 0", () => {
    expect(rule(null, "Age", "0", { id: "range", attrs: { range: [-1, 1] } }, null)).toBeUndefined();
  });

  it("validates / ok empty", () => {
    expect(rule(null, "Age", "", { id: "range", attrs: { range: [18, 24] } }, null)).toBeUndefined();
  });

  it("validates / error 0", () => {
    expect(rule(null, "Age", "0", { id: "range", attrs: { range: [18, 24] } }, null))
      .toBe("Field \"Age\" is out of range <18, 24>.");
  });

  it("validates / error lower", () => {
    expect(rule(null, "Age", "16", { id: "range", attrs: { range: [18, 24] } }, null))
      .toBe("Field \"Age\" is out of range <18, 24>.");
  });

  it("validates / error upper", () => {
    expect(rule(null, "Age", "25", { id: "range", attrs: { range: [18, 24] } }, null))
      .toBe("Field \"Age\" is out of range <18, 24>.");
  });
});
