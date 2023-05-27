import { clsx } from "clsx";
import { PropsWithChildren } from "react";

type HeadingProps = {
  as?: "h1" | "h2";
};

export function Heading({
  as = "h2",
  children,
}: PropsWithChildren<HeadingProps>) {
  const Element = as;

  return (
    <Element
      className={clsx({
        "text-6xl md:text-7xl lg:text-8xl font-extralight lowercase":
          as === "h1",
      })}
    >
      {children}
    </Element>
  );
}
