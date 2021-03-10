import { AppProps } from "next/dist/next-server/lib/router/router"
import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/GlobalStyles"
import { dark } from "styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
