import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { getServerSession } from "next-auth";

import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { cn } from "@/utils/cva";

import { SessionProvider } from "@/components/SessionProvider";
import { Container } from "@/components/common/Container";
import { Navigation } from "@/components/layout/Navigation";

import { display, body } from "@/styles/fonts";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Eddy Sims",
  description:
    "Senior Software Engineer. Helping people turn their ideas into sites & apps that work.",
};

export default async function RootLayout({ children }: PropsWithChildren) {
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
      <body className={styles.body}>
        <ToastProvider>
          <SessionProvider session={session}>
            <ContactDrawerProvider>
              <div className={styles.wrapper}>
                <nav className={styles.nav}>Navigation</nav>
                <main className={styles.main}>
                  <Container className={styles.container}>{children}</Container>
                </main>
                {/* <Navigation /> */}
              </div>
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

const styles = {
  body: cn(display.variable, body.variable, "bg-slate-900 text-stone-50"),
  wrapper: cn("flex"),
  nav: cn(
    "fixed min-h-dvh w-full bg-red-500 opacity-50",
    "md:bg-blue-500",
    "lg:relative lg:w-72 lg:bg-green-500",
    "xl:bg-yellow-500",
    "2xl:bg-purple-500",
    "3xl:fixed 3xl:bg-pink-500",
  ),
  main: cn("flex min-h-dvh flex-1 flex-col items-center justify-center"),
  container: cn("min-h-full"),
};
