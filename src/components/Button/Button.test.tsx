import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import { Button } from ".";

it("renders as a submit button when isSubmit is set", () => {
  render(<Button label="Button" isSubmit />);
  expect(screen.getByRole("button")).toHaveProperty("type", "submit");
});

/**
 * Type isSubmit does not need an onClick and can be used
 * with an onClick as well
 */
<Button label="Foo" isSubmit />;
<Button label="Foo" isSubmit onClick={() => undefined} />;
