import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { objectSans, goshaSans } from "@/styles/fonts";

import { Providers } from "./providers";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Eddy Sims",
  description:
    "Eddy Sims is a software engineer consultant who bring ideas to life by helping build MVP products.  help startups and small businesses build, test, and validate their web app ideas—quickly and efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
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
        className={`${objectSans.variable} ${goshaSans.variable} font-object selection:bg-primary selection:text-primary-foreground antialiased`}
      >
        <Providers>
          <div className="flex min-h-dvh flex-col">
            <Navigation />
            <main className="flex flex-1 flex-col">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
