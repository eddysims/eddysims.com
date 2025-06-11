import { cn } from "@/lib/utils";

import type { ElementType, PropsWithChildren } from "react";

type ContainerProps = {
  className?: string;
  as?: ElementType;
};

export function Container({
  as = "div",
  className,
  children,
}: PropsWithChildren<ContainerProps>) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        className,
        "mx-auto w-full max-w-4xl border-x px-8 xl:px-4",
      )}
    >
      {children}
    </Tag>
  );
}
