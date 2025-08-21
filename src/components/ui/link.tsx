import NextLink, { type LinkProps } from "next/link";

export function Link({
  children,
  ...props
}: React.PropsWithChildren<LinkProps<string>>) {
  return (
    <NextLink
      {...props}
      className="text-primary inline-flex underline decoration-wavy decoration-2 underline-offset-4 hover:no-underline"
    >
      {children}
    </NextLink>
  );
}
