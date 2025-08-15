import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { ComponentPropsWithoutRef } from "react";

const textVariants = cva("font-normal", {
  variants: {
    variant: {
      xl: "text-2xl leading-normal sm:text-3xl ",
      lg: "text-xl leading-relaxed sm:text-xl ",
      xs: "text-sm",
      default: "text-base lg:text-lg",
    },
  },
});

type TextProps = {
  as?: React.ElementType;
} & VariantProps<typeof textVariants> &
  ComponentPropsWithoutRef<"p">;

export function Text({
  children,
  as = "p",
  variant = "default",
  className,
  ...props
}: TextProps) {
  const Comp = as;

  return (
    <Comp {...props} className={cn(textVariants({ variant }), className)}>
      {children}
    </Comp>
  );
}
