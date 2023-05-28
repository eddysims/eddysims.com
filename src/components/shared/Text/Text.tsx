import { PropsWithChildren } from "react";

export function Text({ children }: PropsWithChildren<unknown>) {
  return (
    <p className="text-md md:text-lg lg:text-xl leading-loose">{children}</p>
  );
}
