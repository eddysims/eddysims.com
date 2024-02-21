"use client";

import clsx from "clsx";

export type ButtonProps = {
  readonly label: string;
  readonly variation?: "primary" | "outline";
  readonly onClick: () => void;
};

export function Button({ label, variation = "primary", onClick }: ButtonProps) {
  return (
    <button className={styles(variation)} onClick={onClick}>
      {label}
    </button>
  );
}

const styles = (variation: string) =>
  clsx("font-display uppercase text-lg tracking-wider", "rounded py-5 px-8 ", {
    "bg-primary text-text": variation === "primary",
    "bg-transparent text-primary border-shadow": variation === "outline",
  });
