"use client";

import clsx from "clsx";
import { MergeExclusive } from "type-fest";

type ButtonBaseProps = {
  readonly label: string;
};

type ButtonButtonProps = ButtonBaseProps & {
  readonly onClick: () => void;
};

type SubmitButtonProps = ButtonBaseProps & {
  readonly isSubmit: boolean;
  readonly onClick?: () => void;
};

type ButtonProps = MergeExclusive<ButtonButtonProps, SubmitButtonProps>;

export function Button({ label, isSubmit, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={handleClick}
      className={styles.button}
    >
      {label}
    </button>
  );
}

const styles = {
  button: clsx(
    "bg-primary rounded px-8 py-5",
    "text-text font-display tracking-wider uppercase font-bold",
  ),
};
