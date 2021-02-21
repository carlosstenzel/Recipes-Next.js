import "@testing-library/jest-dom/extend-expect";

import isEmpty from "./isEmpty";

describe("should check if the variable is empty", () => {
  it("empty variable test", () => {
    const testVariable = isEmpty("  ");

    expect(testVariable).toEqual(true);
  });
  it("variable test not empty", () => {
    const testVariable = isEmpty("teste");

    expect(testVariable).toEqual(false);
  });
});
