import React from "react";
import { screen, render } from "@testing-library/react";
import { Layout } from ".";

it("renders the content of the Layout", () => {
  render(<Layout>Foo</Layout>);

  expect(screen.getByText("Foo")).toBeInstanceOf(HTMLElement);
});
