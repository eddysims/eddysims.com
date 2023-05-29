import { clsx } from "clsx";
import { PropsWithChildren } from "react";

type ContainerProps = {
  className?: string;
};

export function Container({
  className,
  children,
}: PropsWithChildren<ContainerProps>) {
  return <div className={clsx(className, "container")}>{children}</div>;
}
