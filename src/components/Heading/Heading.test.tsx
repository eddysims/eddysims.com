import { render, cleanup } from "@testing-library/react";
import { Heading } from ".";

afterEach(cleanup);

it("renders h2 by default", () => {
  const { container } = render(<Heading>Foo</Heading>);
  const heading = container.querySelector("h2");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});

it("renders correct `as`", () => {
  const { container } = render(<Heading as="h1">Foo</Heading>);
  const heading = container.querySelector("h1");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});
