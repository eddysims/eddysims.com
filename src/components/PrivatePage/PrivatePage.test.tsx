import { render, cleanup } from "@testing-library/react";
import { PrivatePage } from ".";

afterEach(cleanup);

it("hides private pages", () => {
  const { queryByText } = render(
    <PrivatePage visible={false}>Foo</PrivatePage>
  );

  expect(queryByText("Foo")).toBeNull();
});

it("shows visible content", () => {
  const { queryByText } = render(<PrivatePage visible={true}>Foo</PrivatePage>);

  expect(queryByText("Foo")).not.toBeNull();
});
