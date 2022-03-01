import { render, fireEvent } from "@testing-library/react";
import { useColorMode } from "./useColorMode";

it("defaults to dark theme", () => {
  const { getByText } = render(<MockComponent />);

  expect(getByText("theme: dark")).toBeInstanceOf(HTMLDivElement);
});

it("toggles themes when the toggle function is called", () => {
  const { getByText } = render(<MockComponent />);

  fireEvent.click(getByText("click me"));
  expect(getByText("theme: light")).toBeInstanceOf(HTMLDivElement);
});

const MockComponent = () => {
  const { toggle, theme } = useColorMode();

  return (
    <div>
      <button onClick={toggle}>click me</button>
      <div>theme: {theme}</div>
    </div>
  );
};
