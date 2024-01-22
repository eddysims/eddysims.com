import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eddy Sims",
  description: "Senior Software Engineer. Helping people turn their ideas into sites & apps that work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
