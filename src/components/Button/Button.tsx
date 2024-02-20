"use client";

import clsx from "clsx";

export type ButtonProps = {
  readonly label: string;
  readonly onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
}

const buttonStyles = clsx(
  "font-display",
  "bg-primary rounded text-text uppercase text-lg py-5 px-8 tracking-wider",
);
