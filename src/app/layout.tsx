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
      <body
        className={`${objectSans.variable} ${goshaSans.variable} font-object antialiased`}
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
