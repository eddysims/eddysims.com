import { render, cleanup } from "@testing-library/react";
import { Text } from ".";

afterEach(cleanup);

it("renders the text", () => {
  const { getByText } = render(<Text>Foo</Text>);

  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});

it("adds the classname for size", () => {
  const { getByText } = render(<Text size="small">Foo</Text>);

  expect(getByText("Foo").classList).toContain("small");
});

it("adds the classname for weight", () => {
  const { getByText } = render(<Text weight="bold">Foo</Text>);

  expect(getByText("Foo").classList).toContain("bold");
});
