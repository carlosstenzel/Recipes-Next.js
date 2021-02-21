import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "./index";

it("should render Logo", () => {
  const { getByText } = render(<Logo />);
  expect(getByText("Recipes")).toBeInTheDocument();
});
