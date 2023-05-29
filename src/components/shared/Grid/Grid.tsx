import { clsx } from "clsx";
import { PropsWithChildren } from "react";

import { normalizeResponsiveProp } from "@/helpers/normalizeResponsiveProp";
import { ResponsiveProp } from "@/types";

type GridProps = {
  columns?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6>;
  gap?: ResponsiveProp<"sm" | "md" | "lg" | "xl">;
};

export function Grid({
  columns = { mobile: 1, desktop: 6 },
  gap = { mobile: "md", desktop: "lg" },
  children,
}: PropsWithChildren<GridProps>) {
  const cols = normalizeResponsiveProp(columns);
  const normalizedGap = normalizeResponsiveProp(gap);
  const gridStyles = clsx(
    "grid",
    {
      "gap-3": normalizedGap?.mobile === "sm",
      "gap-5": normalizedGap?.mobile === "md",
      "gap-8": normalizedGap?.mobile === "lg",
      "gap-10": normalizedGap?.mobile === "xl",
    },
    {
      "lg:gap-3": normalizedGap?.desktop === "sm",
      "lg:gap-5": normalizedGap?.desktop === "md",
      "lg:gap-8": normalizedGap?.desktop === "lg",
      "lg:gap-10": normalizedGap?.desktop === "xl",
    },
    {
      "grid-cols-1": cols?.mobile === 1,
      "grid-cols-2": cols?.mobile === 2,
      "grid-cols-3": cols?.mobile === 3,
      "grid-cols-4": cols?.mobile === 4,
      "grid-cols-5": cols?.mobile === 5,
      "grid-cols-6": cols?.mobile === 6,
    },
    {
      "lg:grid-cols-1": cols?.desktop === 1,
      "lg:grid-cols-2": cols?.desktop === 2,
      "lg:grid-cols-3": cols?.desktop === 3,
      "lg:grid-cols-4": cols?.desktop === 4,
      "lg:grid-cols-5": cols?.desktop === 5,
      "lg:grid-cols-6": cols?.desktop === 6,
    }
  );

  return <div className={gridStyles}>{children}</div>;
}
