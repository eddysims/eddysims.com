/**
 * Code sampled from https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics
 * return to that repo for examples of tracking events in form submissions
 */
export const GA_TRACKING_ID = '<YOUR_GA_TRACKING_ID>'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_GOOGLE_ANALYTICS_ID, {
    page_path: url,
  })
}
