import { cn } from "@/lib/utils";

import type { ElementType, PropsWithChildren } from "react";

type ContainerProps = {
  borderless?: boolean;
  className?: string;
  as?: ElementType;
};

export function Container({
  borderless,
  className,
  as = "div",
  children,
}: PropsWithChildren<ContainerProps>) {
  const Tag = as;

  return (
    <Tag
      className={cn(className, "mx-auto w-full max-w-4xl px-8 xl:px-4", {
        "border-x": !borderless,
      })}
    >
      {children}
    </Tag>
  );
}
