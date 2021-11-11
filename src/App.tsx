import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
import { dark } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
