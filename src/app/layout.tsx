import { RootProvider } from "fumadocs-ui/provider";
import { objectSans, kyotoSans } from "@/styles/fonts";
import type { ReactNode } from "react";

import "@/app/global.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${objectSans.variable} ${kyotoSans.variable} flex flex-col min-h-screen bg-background antialiased font-object`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
