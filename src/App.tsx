import { ThemeProvider } from "styled-components"
import { AppRoutes } from "./pages/routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { dark } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
