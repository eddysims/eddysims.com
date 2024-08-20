import type { PropsWithChildren } from "react";

export function Banner({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="text-surface flex items-center rounded bg-green-300 px-5 py-3">
      {children}
    </div>
  );
}
