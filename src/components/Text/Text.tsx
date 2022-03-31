import { PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Text.module.css";

type TextProps = {
  readonly size?: "base" | "small";
  readonly weight?: "normal" | "bold";
};

export function Text({
  size = "base",
  weight = "normal",
  children,
}: PropsWithChildren<TextProps>) {
  const textClasses = classNames(styles.text, styles[size], styles[weight]);

  return <p className={textClasses}>{children}</p>;
}
