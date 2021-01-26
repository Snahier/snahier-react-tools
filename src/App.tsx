import React from "react"
import { Routes } from "./pages/routes"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Components</h1>
      <Routes />
    </div>
  )
}

export default App
