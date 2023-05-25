import "@/styles/globals.css";

import { AppProps } from "next/app";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["200", "400"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
