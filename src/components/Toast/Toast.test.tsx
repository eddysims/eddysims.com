import {
  render,
  fireEvent,
  cleanup,
  act,
  waitFor,
} from "@testing-library/react";
import { showToast } from ".";

const successMessage = "Success Message";
const errorMessage = "Error message";

jest.useFakeTimers();

afterEach(() => {
  cleanup();
  act(() => {
    jest.clearAllTimers();
  });
  document.body.innerHTML = ``;
});

it("creates the placeholder div on showToast call", () => {
  const { getByText } = render(<MockToast />);

  expect(document.querySelector(`#rdw-toast`)).not.toBeInstanceOf(
    HTMLDivElement
  );

  fireEvent.click(getByText("Success"));

  expect(document.querySelector(`#rdw-toast`)).toBeInstanceOf(HTMLDivElement);
});

it("shows a Toast when we use the showToast function", async () => {
  const { getByText } = render(<MockToast />);

  fireEvent.click(getByText("Success"));

  await waitFor(() => {
    expect(getByText(successMessage)).toBeInstanceOf(HTMLDivElement);
  });
});

const MockToast = () => {
  const buttons = [
    {
      label: "Success",
      onClick: () => {
        showToast({
          message: successMessage,
        });
      },
    },
    {
      label: "Error",
      onClick: () => {
        showToast({
          message: errorMessage,
          variation: "error",
        });
      },
    },
  ];

  return (
    <>
      {buttons.map(({ label, onClick }) => (
        <button key={label} onClick={onClick}>
          {label}
        </button>
      ))}
    </>
  );
};
