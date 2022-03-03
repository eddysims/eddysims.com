import { render, cleanup } from "@testing-library/react";

import { Text } from ".";

afterEach(cleanup);

it("", () => {
  const { getByText } = render(<Text>Foo</Text>);

  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});
