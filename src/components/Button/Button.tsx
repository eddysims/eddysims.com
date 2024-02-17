import clsx from "clsx";

import { display } from "@/styles/fonts";

type ButtonProps = {
  readonly label: string;
  readonly onClick?: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
}

const buttonStyles = clsx(
  display.className,
  "bg-primary rounded text-text uppercase text-lg py-5 px-8 tracking-wider",
);
