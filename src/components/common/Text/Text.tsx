import { PropsWithChildren } from "react";

import { body } from "@/styles/fonts";

export function Text({ children }: Readonly<PropsWithChildren>) {
  return <p className={`${body.className} text-xl`}>{children}</p>;
}
