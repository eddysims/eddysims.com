import NextLink, { type LinkProps } from "next/link";


export function Link({ children, ...props }: React.PropsWithChildren<LinkProps>) {
  return <NextLink {...props} className="text-red-500 underline decoration-wavy decoration-2 decoration-offset-8  hover:no-underline uppercase">{children}</NextLink>;
}
