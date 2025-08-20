import { RootProvider } from "fumadocs-ui/provider";

import { Toaster } from "@/components/ui/sonner";
import { objectSans, kyotoSans } from "@/styles/fonts";

import type { ReactNode } from "react";

import "@/app/global.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${objectSans.variable} ${kyotoSans.variable} bg-background font-object flex min-h-screen flex-col antialiased`}
      >
        <RootProvider>{children}</RootProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
