import dynamic from "next/dynamic";

import { cn } from "@/utils/cva";

import type { ElementType, PropsWithChildren } from "react";

const SizeGuide =
  process.env.NEXT_PUBLIC_SHOW_DEVTOOLS === "true"
    ? dynamic(() =>
        import("./components/SizeGuide").then((mod) => mod.SizeGuide),
      )
    : null;

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
  /**
   * The element type to render the container as.
   */
  as?: ElementType;
};

export function Container({
  size = "base",
  className,
  as = "div",
  children,
}: PropsWithChildren<ContainerProps>) {
  const Tag = as;

  return (
    <Tag className={cn(container(size), className)}>
      {SizeGuide && <SizeGuide />}
      {children}
    </Tag>
  );
}

const container = (size: ContainerProps["size"]) =>
  cn("container w-full px-5 @container", "group", {
    "max-w-2xl": size === "sm",
    "max-w-xl": size === "xs",
    relative: process.env.NEXT_PUBLIC_SHOW_DEVTOOLS === "development",
  });
