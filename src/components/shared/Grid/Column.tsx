import { clsx } from "clsx";
import { PropsWithChildren } from "react";

import { normalizeResponsiveProp } from "@/helpers/normalizeResponsiveProp";
import { ResponsiveProp } from "@/types";

type ColumnProps = {
  order?: ResponsiveProp<1 | 2>;
};

export function Column({ order, children }: PropsWithChildren<ColumnProps>) {
  const normalizedOrder = normalizeResponsiveProp(order);
  const columnStyle = clsx(
    {
      "order-1": normalizedOrder?.mobile === 1,
      "order-2": normalizedOrder?.mobile === 2,
    },
    {
      "lg:order-1": normalizedOrder?.desktop === 1,
      "lg:order-2": normalizedOrder?.desktop === 2,
    }
  );

  return <div className={columnStyle}>{children}</div>;
}
