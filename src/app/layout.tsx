import "./globals.css";

import { PropsWithChildren } from "react";

import { Button } from "@/components/Button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eddy Sims",
  description:
    "Senior Software Engineer. Helping people turn their ideas into sites & apps that work.",
};

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren<unknown>>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Button label="Foo" />
      </body>
    </html>
  );
}
