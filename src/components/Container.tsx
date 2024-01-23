import { Props } from "next/script";
import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren<unknown>) {
  return <div className="container">{children}</div>;
}
