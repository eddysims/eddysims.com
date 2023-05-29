import { clsx } from "clsx";
import { PropsWithChildren } from "react";

import { normalizeResponsiveProp } from "@/helpers/normalizeResponsiveProp";
import { ResponsiveProp } from "@/types";

type ColumnProps = {
  order?: ResponsiveProp<1 | 2>;
  verticalAlign?: "start" | "center" | "end";
};

export function Column({
  order,
  verticalAlign,
  children,
}: PropsWithChildren<ColumnProps>) {
  const normalizedOrder = normalizeResponsiveProp(order);
  const columnStyle = clsx(
    {
      "order-1": normalizedOrder?.mobile === 1,
      "order-2": normalizedOrder?.mobile === 2,
    },
    {
      "lg:order-1": normalizedOrder?.desktop === 1,
      "lg:order-2": normalizedOrder?.desktop === 2,
    },
    {
      grid: Boolean(verticalAlign),
      "items-start": verticalAlign === "start",
      "items-center": verticalAlign === "center",
      "items-end": verticalAlign === "end",
    }
  );

  return <div className={columnStyle}>{children}</div>;
}
