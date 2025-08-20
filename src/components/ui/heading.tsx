import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { ComponentPropsWithoutRef } from "react";

export const headingVariants = cva("font-bold font-kyoto not-prose", {
  variants: {
    variant: {
      xl: "text-5xl md:text-7xl lg:text-8xl",
      lg: "text-xl leading-normal sm:text-3xl md:text-5xl",
      md: "text-xl leading-normal sm:text-2xl md:text-4xl",
    },
  },
});

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & VariantProps<typeof headingVariants> &
  ComponentPropsWithoutRef<"h1">;

export function Heading({
  children,
  as = "h2",
  variant = "xl",
  className,
  ...props
}: HeadingProps) {
  const Comp = as;

  return (
    <Comp {...props} className={cn(headingVariants({ variant }), className)}>
      {children}
    </Comp>
  );
}
