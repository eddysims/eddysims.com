import { clsx } from "clsx";
import NextLink from "next/link";

import { ButtonProps } from "./Button.types";

export function Button({
  label,
  href,
  external,
  size = "base",
  download,
  variation = "primary",
  onClick,
}: ButtonProps) {
  const buttonStyles = clsx(
    "relative font-black uppercase rounded border-2 inline-flex items-center tracking-wider",
    {
      "px-8 h-10 text-md": size === "base",
      "px-5 h-8 text-sm": size === "small",
    },
    {
      "text-primary border-primary hover:text-white hover:bg-primary":
        variation === "primary",
      "border-none hover:bg-secondary": variation === "ghost",
    }
  );

  const buttonProps = {
    className: buttonStyles,
    onClick,
  };

  const buttonLinkProps = {
    ...buttonProps,
    ...((download || external) && { target: "_blank" }),
    ...(download && { download: true }),
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
