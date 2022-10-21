import { PropsWithChildren } from "react";
import classnames from "clsx";

import styles from "./Text.module.css";

interface TextProps {
  readonly size?: "small" | "base" | "large";
}

export function Text({
  size = "base",
  children,
}: PropsWithChildren<TextProps>) {
  const textClass = classnames(styles.text, styles[size]);

  return <p className={textClass}>{children}</p>;
}
