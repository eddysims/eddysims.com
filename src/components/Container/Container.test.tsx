import { cleanup, render } from "@testing-library/react";
import { Container } from ".";

afterEach(cleanup);

it("renders the children", () => {
  const { getByText } = render(<Container>Foo</Container>);

  expect(getByText("Foo")).toBeInstanceOf(HTMLDivElement);
});

it("applies a classname", () => {
  const { getByText } = render(<Container className="eddy">Foo</Container>);

  expect(getByText("Foo").classList).toContain("eddy");
});

it("applies a small class when small", () => {
  const { getByText } = render(<Container size="small">Foo</Container>);

  expect(getByText("Foo").classList).toContain("small");
});
