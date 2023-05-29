import "@/styles/globals.css";

import { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import NextHead from "next/head";

import { useSystemTheme } from "@/hooks/useSystemTheme";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "900"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const colorMode = useSystemTheme("light");

  console.log({ colorMode });

  return (
    <>
      <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style>
      <NextHead>
        <title>Eddy Sims</title>
        <meta
          name="description"
          content="Eddy Sims, Software and Web3 Engineer in Edmonton, Alberta."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/favicon/${colorMode}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon/${colorMode}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon/${colorMode}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`/favicon/${colorMode}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`/favicon/${colorMode}/safari-pinned-tab.svg`}
          color="#a3160a"
        />
        <meta name="msapplication-TileColor" content="#f2ede7" />
        <meta name="theme-color" content="#f2ede7" />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
