import "./globals.css";

import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";

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
        <SessionProvider session={session}>
          <main className="flex flex-col min-h-screen items-center justify-center bg-surface text-text">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
