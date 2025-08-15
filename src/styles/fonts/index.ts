import localFont from "next/font/local";

export const objectSans = localFont({
  src: [
    {
      path: "./PPObjectSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPObjectSans-Slanted.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./PPObjectSans-Heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./PPObjectSans-HeavySlanted.otf",
      weight: "700",
      style: "italic",
    },
  ],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-object-sans",
});

export const kyotoSans = localFont({
  src: [
    {
      path: "./PPKyoto-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./PPKyoto-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./PPKyoto-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PPKyoto-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./PPKyoto-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PPKyoto-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./PPKyoto-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./PPKyoto-ExtraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  fallback: ["system-ui", "serif"],
  variable: "--font-kyoto-sans",
});
