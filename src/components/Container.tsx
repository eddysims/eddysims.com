import { PropsWithChildren } from "react";

export function Container({ children }: Readonly<PropsWithChildren<unknown>>) {
  return <div className="container">{children}</div>;
}
