import clsx from "clsx";
import { PropsWithChildren } from "react";

type SectionProps = {
  spacing?: "full";
};

export function Section({
  spacing = "full",
  children,
}: PropsWithChildren<SectionProps>) {
  const sectionClass = clsx("flex flex-col", {
    "min-h-screen justify-center": spacing === "full",
  });

  return (
    <div className={sectionClass} data-testid="section">
      {children}
    </div>
  );
}
