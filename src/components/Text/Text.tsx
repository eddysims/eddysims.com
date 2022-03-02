import { PropsWithChildren } from "react";

export function Text({ children }: PropsWithChildren<unknown>) {
  return <p>{children}</p>;
}
