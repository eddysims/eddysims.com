import NextLink, { type LinkProps } from "next/link";


export function Link({ children, ...props }: React.PropsWithChildren<LinkProps>) {
  return <NextLink {...props} className="underline inline-flex decoration-wavy decoration-2 underline-offset-4  hover:no-underline text-primary">{children}</NextLink>;
}
