import { PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./Heading.module.css";

type HeadingProps = {
  readonly as?: "h1" | "h2";
};

export function Heading({
  children,
  as = "h2",
}: PropsWithChildren<HeadingProps>) {
  const Element = as;
  const className = classnames(styles.heading);

  return <Element className={className}>{children}</Element>;
}
