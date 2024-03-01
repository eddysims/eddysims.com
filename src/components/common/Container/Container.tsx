import clsx from "clsx";
import { PropsWithChildren } from "react";

type ContainerProps = {
  size?: "base" | "sm" | "xs";
};

export function Container({
  size = "base",
  children,
}: Readonly<PropsWithChildren<ContainerProps>>) {
  return <div className={styles(size)}>{children}</div>;
}

const styles = (size: ContainerProps["size"]) =>
  clsx("container px-5", "group group-[.container]:-mx-5", {
    "max-w-2xl": size === "sm",
    "max-w-xl": size === "xs",
  });
