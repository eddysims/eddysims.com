import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Icon } from ".";

afterEach(cleanup);

it("renders the correct icon", () => {
  const { getByTestId } = render(<Icon icon="Coffee" />);

  expect(getByTestId("icon-Coffee")).toBeInstanceOf(SVGElement);
});

it("renders a custom icon", () => {
  const { getByTestId } = render(<Icon icon="Google" />);

  expect(getByTestId("icon-Google")).toBeInstanceOf(SVGElement);
});

it("renders at a smaller size", () => {
  const { getByTestId } = render(<Icon icon="Coffee" size="small" />);

  expect(getByTestId("icon-Coffee")).toHaveAttribute("height", "16");
});
