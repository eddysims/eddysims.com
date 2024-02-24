import { Comfortaa, Lilita_One } from "next/font/google";

export const display = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const body = Comfortaa({ subsets: ["latin"], variable: "--font-body" });
