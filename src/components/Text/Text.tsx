import clsx from "clsx";
import { PropsWithChildren } from "react";

type TextProps = {
  readonly size?: "sm" | "base";
};

export function Text({
  size = "base",
  children,
}: PropsWithChildren<TextProps>) {
  const sizeMap = {
    sm: "text-sm",
    base: "text-xl",
  };

  return <p className={clsx(sizeMap[size], "font-body")}>{children}</p>;
}
