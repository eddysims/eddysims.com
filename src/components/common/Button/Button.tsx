"use client";

import clsx from "clsx";
import { MergeExclusive } from "type-fest";

type ButtonVariations = "primary" | "outline";

type ButtonBaseProps = {
  /**
   * The text to display inside the button.
   */
  readonly label: string;
  /**
   * The variantion of the button.
   */
  readonly variantion?: ButtonVariations;
};

type ButtonButtonProps = ButtonBaseProps & {
  /**
   * Click handler
   */
  readonly onClick: () => void;
};

type SubmitButtonProps = ButtonBaseProps & {
  /**
   * If true, the button will be a submit button.
   */
  readonly isSubmit: boolean;
  readonly onClick?: () => void;
};

type ButtonProps = MergeExclusive<ButtonButtonProps, SubmitButtonProps>;

export function Button({
  label,
  variantion = "primary",
  isSubmit,
  onClick,
}: ButtonProps) {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={handleClick}
      className={styles.button(variantion)}
    >
      {label}
    </button>
  );
}

const styles = {
  button: (variation: ButtonVariations) =>
    clsx(
      "rounded px-8 py-5",
      "font-display tracking-wider uppercase font-bold",
      {
        "bg-primary text-text": variation === "primary",
        "shadow-border text-primary": variation === "outline",
      },
    ),
};
