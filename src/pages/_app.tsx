import "@/styles/globals.css";

import { Raleway } from "next/font/google";
import { AppProps } from "next/app";

const raleway = Raleway({
  weight: ['200', '400'],
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
