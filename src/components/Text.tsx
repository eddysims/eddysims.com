import { PropsWithChildren } from "react";

export function Text({ children }: PropsWithChildren<unknown>) {
  return <p className={`font-body text-xl`}>{children}</p>;
}
