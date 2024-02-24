import { clsx } from "clsx";
import { PropsWithChildren } from "react";

type HeadingType = "h1" | "h2" | "h3";

type HeadingProps = {
  readonly as?: HeadingType;
  readonly style?: HeadingType;
};

export function Heading({
  as = "h2",
  style,
  children,
}: PropsWithChildren<HeadingProps>) {
  const Tag = as;
  const displayAs = style ?? as;

  return <Tag className={className.heading(displayAs)}>{children}</Tag>;
}

const className = {
  heading: (as: HeadingType) =>
    clsx("font-display font-normal uppercase", {
      "text-8xl": as === "h1",
      "text-6xl": as === "h2",
      "text-4xl": as === "h3",
    }),
};
