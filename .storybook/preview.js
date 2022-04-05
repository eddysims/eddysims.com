import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   theme: "#f00"
  // },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
