import { PropsWithChildren } from "react";

import { Navigation } from "@/components/sandbox/auth/Navigation";

export default function AuthLayout({
  children,
}: Readonly<PropsWithChildren<unknown>>) {
  return (
    <div className="bg-surface min-h-screen flex flex-col text-text">
      <Navigation />
      <main className="flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
}
