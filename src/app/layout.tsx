import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { preload } from "react-dom";

import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { cn } from "@/utils/cva";

import { Layout } from "@/components/layout/Layout";

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
      <body className={styles.body}>
        <ToastProvider>
          <ContactDrawerProvider>
            <Layout>{children}</Layout>
          </ContactDrawerProvider>
        </ToastProvider>
      </body>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}

const styles = {
  body: cn(
    display.variable,
    body.variable,
    "bg-slate-900 font-body text-stone-50",
  ),
};
