import React from "react";
import { screen, render } from "@testing-library/react";
import { LayoutCentered } from ".";

it("renders the content of the Layout", () => {
  render(<LayoutCentered>Foo</LayoutCentered>);

  expect(screen.getByText("Foo")).toBeInstanceOf(HTMLElement);
});
