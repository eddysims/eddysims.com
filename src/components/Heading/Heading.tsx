import { PropsWithChildren } from "react";
import { display } from "@/styles/fonts";
import { clsx } from "clsx";
type HeadingType = "h1" | "h2" | "h3";
type HeadingProps = {
  as?: HeadingType;
  style?: HeadingType;
};
export function Heading({
  as = "h2",
  style,
  children,
}: PropsWithChildren<HeadingProps>) {
  const Tag = as;
  const displayAs = style ?? as;
  const headingClassNames = clsx(display.className, "font-normal uppercase", {
    "text-8xl": displayAs === "h1",
    "text-6xl": displayAs === "h2",
    "text-4xl": displayAs === "h3",
  });

  return <Tag className={headingClassNames}>{children}</Tag>;
}
