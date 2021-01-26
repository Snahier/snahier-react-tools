import React from "react"
import { ThemeProvider } from "styled-components"
import { Routes } from "./pages/routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { dark } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
