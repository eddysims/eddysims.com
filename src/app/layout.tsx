import "./globals.css";

import clsx from "clsx";
import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";

import { ContactDrawerProvider } from "@/providers/ContactDrawerProvider";

import { SessionProvider } from "@/components/SessionProvider";

import { body, display } from "@/styles/fonts";

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
    <html lang="en" className={clsx(body.variable, display.variable)}>
      <body>
        <SessionProvider session={session}>
          <ContactDrawerProvider>{children}</ContactDrawerProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
