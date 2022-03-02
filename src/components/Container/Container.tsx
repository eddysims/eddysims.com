import classnames from "classnames";
import { PropsWithChildren } from "react";

import styles from "./Container.module.css";

export type ContainerSizes = "base" | "small";

interface ContainerProps {
  readonly size?: ContainerSizes;
  readonly className?: string;
}

export function Container({
  size = "base",
  className,
  children,
}: PropsWithChildren<ContainerProps>) {
  const containerClass = classnames(styles.container, styles[size], className);

  return <div className={containerClass}>{children}</div>;
}
