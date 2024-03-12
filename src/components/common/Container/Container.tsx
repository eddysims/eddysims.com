import clsx from "clsx";
import { PropsWithChildren } from "react";

type ContainerProps = {
  /**
   * The size of the container.
   */
  size?: "base" | "sm" | "xs";
  /**
   * Allows for passing a className to the container.
   *
   * **Note** This is an anti-pattern within this project. This is used
   * here as the container often needs additional classes to be passed
   */
  className?: string;
};

export function Container({
  size = "base",
  className,
  children,
}: Readonly<PropsWithChildren<ContainerProps>>) {
  return <div className={clsx(className, styles(size))}>{children}</div>;
}

const styles = (size: ContainerProps["size"]) =>
  clsx("container px-5", "group group-[.container]:-mx-5", {
    "max-w-2xl": size === "sm",
    "max-w-xl": size === "xs",
  });
