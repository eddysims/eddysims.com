import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { preload } from "react-dom";

import { ToastProvider } from "@/providers/ToastProvider";
import { cn } from "@/utils/cva";

import { Navigation } from "@/components/layout/Layout/components/Navigation";
import { Container } from "@/components/ui/Container";

import { display, body } from "@/styles/fonts";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Eddy Sims",
  description:
    "Senior Software Engineer. Helping people turn their ideas into sites & apps that work.",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  preload("/icons/sprite.svg", { as: "image" });

  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#171820" />
        <meta name="msapplication-TileColor" content="#171820" />
        <meta name="theme-color" content="#171820" />
      </Head>
      <body
        className={cn(
          display.variable,
          body.variable,
          "bg-slate-900 font-body text-stone-50",
        )}
      >
        <ToastProvider>
          <div className="flex">
            <Navigation />
            <main className="flex min-h-dvh flex-1 flex-col items-center justify-center @container">
              <Container>{children}</Container>
            </main>
          </div>
        </ToastProvider>
      </body>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
