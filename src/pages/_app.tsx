import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { pageview } from '../lib/gtag'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  useEffect(() => {
    handleRouteChange(router.pathname)
  }, [])

  return <Component {...pageProps} />

  function handleRouteChange(url) {
    pageview(url)
  }
}

export default MyApp
