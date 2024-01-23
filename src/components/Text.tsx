import { PropsWithChildren } from "react";
import { body } from "@/styles/fonts";
export function Text({ children }: PropsWithChildren<unknown>) {
  return <p className={`${body.className} text-xl`}>{children}</p>;
}
