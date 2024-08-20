import { cn } from "@/utils/cva";

import { SizeGuide } from "./components/SizeGuide";

import type { PropsWithChildren } from "react";

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
  return (
    <div className={cn(styles.container(size), className)}>
      {process.env.NODE_ENV === "development" && <SizeGuide />}
      {children}
    </div>
  );
}

const styles = {
  container: (size: ContainerProps["size"]) =>
    cn("container px-5 @container", {
      "max-w-2xl": size === "sm",
      "max-w-xl": size === "xs",
      relative: process.env.NODE_ENV === "development",
    }),
};
