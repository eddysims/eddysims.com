import "./globals.css";

import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";

import { Button } from "@/components/Button";
import { SessionProvider } from "@/components/SessionProvider";

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
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
