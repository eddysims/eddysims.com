import { PropsWithChildren } from "react";

export function Column({ children }: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}
