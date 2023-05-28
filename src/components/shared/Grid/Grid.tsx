import { clsx } from "clsx";
import { PropsWithChildren } from "react";

import { normalizeResponsiveProp } from "@/helpers/normalizeResponsiveProp";
import { ResponsiveProp } from "@/types";

type GridProps = {
  columns?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6>;
};

export function Grid({
  columns = { mobile: 1, desktop: 6 },
  children,
}: PropsWithChildren<GridProps>) {
  const cols = normalizeResponsiveProp(columns);
  const gridStyles = clsx(
    "grid gap-3 lg:gap-8",
    {
      "grid-cols-1": cols.mobile === 1,
      "grid-cols-2": cols.mobile === 2,
      "grid-cols-3": cols.mobile === 3,
      "grid-cols-4": cols.mobile === 4,
      "grid-cols-5": cols.mobile === 5,
      "grid-cols-6": cols.mobile === 6,
    },
    {
      "lg:grid-cols-1": cols.desktop === 1,
      "lg:grid-cols-2": cols.desktop === 2,
      "lg:grid-cols-3": cols.desktop === 3,
      "lg:grid-cols-4": cols.desktop === 4,
      "lg:grid-cols-5": cols.desktop === 5,
      "lg:grid-cols-6": cols.desktop === 6,
    }
  );

  return <div className={gridStyles}>{children}</div>;
}
