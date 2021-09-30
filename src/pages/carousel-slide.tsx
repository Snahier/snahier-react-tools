import { Carousel } from "components/core/Carousel"
import styled from "styled-components/macro"
import { Header } from "../components/templates/Header"

interface PageCarouselSlideProps {}

export default function PageCarouselSlide({
  ...props
}: PageCarouselSlideProps) {
  return (
    <StyledPageCarouselSlide className="page">
      <Header />

      <h2>Carousel Slide Component</h2>

      <Carousel>
        <div style={{ background: "red" }}>
          <img src="https://picsum.photos/300/?random=1" alt="" />
        </div>
        <div style={{ background: "green" }}>
          <img src="https://picsum.photos/400/?random=2" alt="" />
        </div>
        <div style={{ background: "blue" }}>
          <span>text only</span>
        </div>
      </Carousel>
    </StyledPageCarouselSlide>
  )
}

const StyledPageCarouselSlide = styled.div``
