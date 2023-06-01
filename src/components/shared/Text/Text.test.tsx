import { render, screen } from "@testing-library/react";

import { Text } from ".";

it("should render the text as a paragraph", () => {
  render(<Text>Foo</Text>);

  expect(screen.getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});
