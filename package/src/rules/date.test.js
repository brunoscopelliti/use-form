import rule from "./date";

describe("date", () => {
  it("validates / ok", () => {
    expect(rule(null, "Birthday", "05/05/1997", { id: "date" }, null)).toBeUndefined();
  });

  it("validates / ok leap", () => {
    expect(rule(null, "Birthday", "29/02/2020", { id: "date" }, null)).toBeUndefined();
  });

  it("validates / ok empty", () => {
    expect(rule(null, "Birthday", "", { id: "date" }, null)).toBeUndefined();
  });

  it("validates / error 31/09/1997", () => {
    expect(rule(null, "Birthday", "31/09/1997", { id: "date" }, null))
      .toBe("Field \"Birthday\" contains invalid date.");
  });

  it("validates / error 32/05/1997", () => {
    expect(rule(null, "Birthday", "32/05/1997", { id: "date" }, null))
      .toBe("Field \"Birthday\" contains invalid date.");
  });

  it("validates / error 05/13/1997", () => {
    expect(rule(null, "Birthday", "05/13/1997", { id: "date" }, null))
      .toBe("Field \"Birthday\" contains invalid date.");
  });

  it("validates / error 29/02/1997", () => {
    expect(rule(null, "Birthday", "29/02/1997", { id: "date" }, null))
      .toBe("Field \"Birthday\" contains invalid date.");
  });
});
