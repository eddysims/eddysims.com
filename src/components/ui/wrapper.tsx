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
    <Tag className={cn(className, "wrapper border-y [&+.wrapper]:-mt-px")}>
      {children}
    </Tag>
  );
}
