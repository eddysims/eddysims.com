import { PropsWithChildren } from "react";

export function Banner({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="py-3 px-5 bg-green-300 flex items-center text-surface rounded">
      {children}
    </div>
  );
}
