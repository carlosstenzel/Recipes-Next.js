import "@testing-library/jest-dom/extend-expect";

import formatStringUrl from "./formatStringUrl";

it("should format text for url", () => {
  const testVariable = formatStringUrl("titulo de exemplo de uma receita");

  expect(testVariable).toEqual("titulo_de_exemplo_de_uma_receita");
});
