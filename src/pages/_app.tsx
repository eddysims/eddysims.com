import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "~lib/gtag";

import "@pids/styles/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    handleRouteChange(router.pathname);
  }, []);

  /**
   * Disabling no spreading here as this is the ideal way
   * to make sure that everything gets through.
   */
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;

  function handleRouteChange(url) {
    pageview(url);
  }
}

export default MyApp;
