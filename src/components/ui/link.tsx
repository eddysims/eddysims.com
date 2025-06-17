import NextLink, { type LinkProps as NextLinkProps } from "next/link";

import { type buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { NoNullable } from "@/types";
import type { VariantProps } from "class-variance-authority";

type LinkProps = NoNullable<VariantProps<typeof buttonVariants>> &
  NextLinkProps & {
    className?: string;
  };

export function Link({
  className,
  variant,
  size,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  if (variant) {
    return (
      <Button asChild variant={variant} size={size}>
        <NextLink {...props} />
      </Button>
    );
  }

  return (
    <NextLink
      {...props}
      className={cn(
        "text-primary underline decoration-wavy hover:no-underline",
        className,
      )}
    />
  );
}
