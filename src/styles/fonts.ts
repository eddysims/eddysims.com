import { Lilita_One, Comfortaa } from "next/font/google";

const display = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Comfortaa({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export { display, body };
