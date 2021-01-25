import React from "react"
import { CarouselSlide } from "./components/CarouselSlide"
import { Slide } from "./components/CarouselSlide/Slide"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Components</h1>

      <CarouselSlide
        buttons={{
          active: <button>active</button>,
          inactive: <button>inactive</button>,
        }}
      >
        <Slide>
          <img src="https://picsum.photos/120?random=1" alt="" />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/120?random=2" alt="" />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/120?random=3" alt="" />
        </Slide>
      </CarouselSlide>
    </div>
  )
}

export default App
