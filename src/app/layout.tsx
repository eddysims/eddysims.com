import { RootProvider } from "fumadocs-ui/provider";

import { Toaster } from "@/components/ui/sonner";
import { objectSans, kyotoSans } from "@/styles/fonts";

import type { ReactNode } from "react";

import "@/app/global.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Eddy Sims" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${objectSans.variable} ${kyotoSans.variable} bg-background font-object flex min-h-screen flex-col antialiased`}
      >
        <RootProvider>{children}</RootProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
