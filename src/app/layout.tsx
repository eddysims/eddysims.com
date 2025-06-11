import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Eddy Sims",
  description: "Eddy Sims is a software engineer consultant who bring ideas to life by helping build MVP products.  help startups and small businesses build, test, and validate their web app ideas—quickly and efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
