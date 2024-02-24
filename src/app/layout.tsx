import "./globals.css";

import clsx from "clsx";
import { Comfortaa, Lilita_One } from "next/font/google";
import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";

import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";

import { SessionProvider } from "@/components/SessionProvider";

import type { Metadata } from "next";

const display = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Comfortaa({ subsets: ["latin"], variable: "--font-body" });

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
      <body className={clsx(display.variable, body.variable)}>
        <SessionProvider session={session}>
          <ContactDrawerProvider>
            <main className="flex flex-col min-h-screen items-center justify-center bg-surface text-text">
              {children}
            </main>
          </ContactDrawerProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
