import localFont from "next/font/local";

export const objectSans = localFont({
  src: [
    {
      path: "./PPObjectSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPObjectSans-Heavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-object-sans",
});

export const goshaSans = localFont({
  src: [
    {
      path: "./PPGoshaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPGoshaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gosha-sans",
});
