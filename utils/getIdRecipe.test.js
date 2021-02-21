import "@testing-library/jest-dom/extend-expect";

import getIdRecipe from "./getIdRecipe";

it("should clear url and return only the id", () => {
  const testVariable = getIdRecipe("455-teste_url_por_exemplo");

  expect(testVariable).toEqual("455");
});
