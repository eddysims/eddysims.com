import { PropsWithChildren } from "react";
import classnames from "clsx";

import styles from "./Heading.module.css";

interface HeadingProps {
  readonly as: "h1";
}

export function Heading({
  as,
  children,
}: PropsWithChildren<HeadingProps>) {
  const headingClass = classnames(styles.heading, styles[as]);
  const Tag = as;

  return <Tag className={headingClass}>{children}</Tag>;
}
