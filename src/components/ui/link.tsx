import NextLink, { type LinkProps as NextLinkProps } from "next/link";

import { cn } from "@/lib/utils";

type LinkProps = NextLinkProps & {
  className?: string;
};

export function Link({
  className,
  ...props
}: React.PropsWithChildren<LinkProps>) {
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
