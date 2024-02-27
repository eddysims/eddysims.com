import clsx from "clsx";
import { PropsWithChildren } from "react";

type TextProps = {
  /**
   * The size of the text to display.
   */
  readonly size?: "base" | "sm" | "xs";
};

export function Text({
  size = "base",
  children,
}: PropsWithChildren<TextProps>) {
  return <p className={styles.text(size)}>{children}</p>;
}

const styles = {
  text: (size: TextProps["size"]) =>
    clsx("font-body", {
      "text-lg md:text-xl": size === "base",
      "text-md": size === "sm",
      "text-sm": size === "xs",
    }),
};
