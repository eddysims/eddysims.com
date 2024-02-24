import clsx from "clsx";
import { PropsWithChildren } from "react";

type ContainerProps = {
  size?: "base" | "xs";
};

export function Container({
  size = "base",
  children,
}: Readonly<PropsWithChildren<ContainerProps>>) {
  return <div className={styles(size)}>{children}</div>;
}

const styles = (size: ContainerProps["size"]) =>
  clsx("container", {
    "max-w-xl": size === "xs",
  });
