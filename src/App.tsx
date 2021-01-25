import React from "react"
import { CarouselSlide } from "./components/CarouselSlide"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Components</h1>

      <CarouselSlide />
    </div>
  )
}

export default App
