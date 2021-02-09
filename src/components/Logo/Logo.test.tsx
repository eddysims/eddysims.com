import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Logo } from ".";

afterEach(cleanup);

it("renders a Logo", () => {
  const { container } = render(<Logo />);
  expect(container).toMatchSnapshot();
});
