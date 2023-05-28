import { clsx } from "clsx";
import NextLink from "next/link";

import { ButtonProps } from "./Button.types";

export function Button({ label, href, external, onClick }: ButtonProps) {
  const buttonStyles = clsx(
    "relative px-8 h-10 text-primary font-black uppercase rounded border-2 border-primary inline-flex items-center tracking-wider text-sm hover:text-white hover:bg-primary"
  );

  const buttonProps = {
    className: buttonStyles,
    onClick,
  };

  const buttonLinkProps = {
    ...buttonProps,
    ...(external && { target: "_blank" }),
  };

  if (href) {
    return (
      <NextLink {...buttonLinkProps} href={href}>
        {label}
      </NextLink>
    );
  }

  return <button {...buttonProps}>{label}</button>;
}
