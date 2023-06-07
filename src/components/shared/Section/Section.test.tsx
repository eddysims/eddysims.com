import { render, screen } from "@testing-library/react";

import { Section } from ".";

it("renders the children", () => {
  render(<Section>Foo</Section>);

  expect(screen.getByText("Foo")).toBeInstanceOf(HTMLDivElement);
});

it("is full height by default", () => {
  render(<Section>Foo</Section>);

  expect(screen.getByTestId("section").classList).toContain("min-h-screen");
  expect(screen.getByTestId("section").classList).toContain("justify-center");
});
