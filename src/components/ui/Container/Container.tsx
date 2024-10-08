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
      {process.env.NEXT_PUBLIC_SHOW_DEVTOOLS === "true" && <SizeGuide />}
      {children}
    </div>
  );
}

const styles = {
  container: (size: ContainerProps["size"]) =>
    cn("container px-5 @container", "group group-[.container]:-mx-5", {
      "max-w-2xl": size === "sm",
      "max-w-xl": size === "xs",
      relative: process.env.NEXT_PUBLIC_SHOW_DEVTOOLS === "development",
    }),
};
