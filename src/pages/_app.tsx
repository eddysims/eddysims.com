import "@/styles/globals.css";

import { AppProps } from "next/app";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "900"],
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
