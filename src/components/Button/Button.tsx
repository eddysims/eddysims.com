"use client";

import clsx from "clsx";
import { MergeExclusive } from "type-fest";

type BaseButtonProps = {
  readonly label: string;
  readonly variation?: "primary" | "outline";
};

type ButtonButtonProps = BaseButtonProps & {
  readonly onClick: () => void;
};

type SubmitButtonProps = BaseButtonProps & {
  /**
   * Allows the button to be a `type="submit"`. Use when submitting
   * a form.
   */
  readonly isSubmit: boolean;
  readonly onClick?: () => void;
};

export type ButtonProps = MergeExclusive<ButtonButtonProps, SubmitButtonProps>;

export function Button({
  label,
  variation = "primary",
  onClick,
  isSubmit,
}: ButtonProps) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      className={styles(variation)}
      onClick={handleClick}
      type={isSubmit ? "submit" : "button"}
    >
      {label}
    </button>
  );
}

const styles = (variation: string) =>
  clsx("font-display uppercase text-lg tracking-wider", "rounded py-5 px-8 ", {
    "bg-primary text-text": variation === "primary",
    "bg-transparent text-primary border-shadow": variation === "outline",
  });
