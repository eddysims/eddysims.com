import { cn } from "@/lib/utils";

import type { ElementType, PropsWithChildren } from "react";

type WrapperProps = {
  className?: string;
  as?: ElementType;
};

export function Wrapper({
  as = "div",
  className,
  children,
}: PropsWithChildren<WrapperProps>) {
  const Tag = as;

  return (
    <Tag
      data-slot="wrapper"
      className={cn(className, "[&+[data-slot=wrapper]:-mt-px")}
    >
      {children}
    </Tag>
  );
}
