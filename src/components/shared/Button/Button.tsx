import { clsx } from "clsx";
import NextLink from "next/link";

type ButtonProps = {
  label: string;
  href: string;
  external?: boolean;
};

export function Button({ label, href, external }: ButtonProps) {
  const buttonStyles = clsx(
    "relative px-8 h-10 text-primary font-black uppercase rounded border-2 border-primary inline-flex items-center tracking-wider text-sm hover:text-white hover:bg-primary"
  );

  const buttonProps = {
    className: buttonStyles,
    href,
    ...(external && { target: "_blank" }),
  };

  return <NextLink {...buttonProps}>{label}</NextLink>;
}
