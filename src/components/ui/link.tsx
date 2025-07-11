"use client";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { type buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { NoNullable } from "@/types";
import type { VariantProps } from "class-variance-authority";

type LinkProps = NoNullable<VariantProps<typeof buttonVariants>> &
  NextLinkProps & {
    className?: string;
    unstyled?: boolean;
    href: string;
  };

export function Link({
  className,
  variant,
  size,
  unstyled,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  const { push } = useRouter();

  if (variant) {
    return (
      <Button asChild variant={variant} size={size}>
        <NextLink {...props} onMouseDown={() => push(props.href)} />
      </Button>
    );
  }

  return (
    <NextLink
      {...props}
      onMouseDown={() => push(props.href)}
      className={cn(
        !unstyled &&
          "text-primary underline decoration-wavy hover:no-underline",
        className,
      )}
    />
  );
}
