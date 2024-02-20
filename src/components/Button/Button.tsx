"use client";

import clsx from "clsx";

type ButtonProps = {
  readonly label: string;
  readonly onClick?: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  const handleClick = () => {
    alert("clicked");
    onClick && onClick();
  };

  return (
    <button className={buttonStyles} onClick={handleClick}>
      {label}
    </button>
  );
}

const buttonStyles = clsx(
  "font-display",
  "bg-primary rounded text-text uppercase text-lg py-5 px-8 tracking-wider",
);
