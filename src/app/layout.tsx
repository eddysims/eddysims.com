import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";

import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";
import { ToastProvider } from "@/providers/ToastProvider";

import { SessionProvider } from "@/components/SessionProvider";

import { display, body } from "@/styles/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eddy Sims",
  description:
    "Senior Software Engineer. Helping people turn their ideas into sites & apps that work.",
};

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren<unknown>>) {
  const session = await getServerSession();

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
      <body className={clsx(display.variable, body.variable)}>
        <ToastProvider>
          <SessionProvider session={session}>
            <ContactDrawerProvider>
              <main className="flex flex-col min-h-screen items-center justify-center bg-surface text-text">
                {children}
              </main>
            </ContactDrawerProvider>
          </SessionProvider>
        </ToastProvider>
      </body>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
