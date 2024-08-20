import { PropsWithChildren } from "react";

import { Navigation } from "@/components/sandbox/auth/Navigation";

export default function AuthLayout({
  children,
}: Readonly<PropsWithChildren<unknown>>) {
  return (
    <div className="text-text flex min-h-screen flex-col">
      <Navigation />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
