import { cn } from "@/utils/cva";

import type { PropsWithChildren } from "react";

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

  return <Tag className={styles.heading(displayAs)}>{children}</Tag>;
}

const styles = {
  heading: (as: HeadingType) =>
    cn("font-display font-normal uppercase", {
      "text-6xl md:text-8xl": as === "h1",
      "text-6xl": as === "h2",
      "text-3xl md:text-4xl": as === "h3",
    }),
};
