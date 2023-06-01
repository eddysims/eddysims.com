import "@/styles/globals.css";

import { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import NextHead from "next/head";

import { useSystemTheme } from "@/hooks/useSystemTheme";

const IS_DEV = process.env.NODE_ENV && process.env.NODE_ENV === "development";
const raleway = Raleway({
  weight: ["100", "200", "300", "400", "900"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const colorMode = useSystemTheme("light");
  const GA_TAG_ID = "G-1K6V3DKDSK"; // Add your own Tag ID here

  return (
    <>
      <NextHead>
        <title>Eddy Sims</title>
        <meta
          name="description"
          content="Eddy Sims, Software and Web3 Engineer in Edmonton, Alberta."
        />
        <style jsx global>
          {`
            :root {
              --raleway-font: ${raleway.style.fontFamily};
            }
          `}
        </style>
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

        {!IS_DEV && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TAG_ID}', {
                      page_path: window.location.pathname,
                  });
                  `,
              }}
            />
          </>
        )}
      </NextHead>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
