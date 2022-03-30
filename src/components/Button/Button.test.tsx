import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import { Button } from ".";

afterEach(cleanup);

it("renders the title text of a button", () => {
  render(<Button onClick={jest.fn()} title="Foo" />);

  expect(screen.queryByRole("button")).not.toBeNull();
  expect(screen.getByText("Foo")).toBeInstanceOf(HTMLSpanElement);
});

it("renders the icon when set", () => {
  render(<Button onClick={jest.fn()} icon="Activity" />);

  expect(screen.getByTestId("icon-Activity")).toBeInstanceOf(SVGElement);
});

it("fires the onClick event when clicked", () => {
  const clickHandler = jest.fn();

  render(<Button onClick={clickHandler} title="Foo" />);
  const button = screen.getByText("Foo");

  fireEvent.click(button);

  expect(clickHandler).toHaveBeenCalled();
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
