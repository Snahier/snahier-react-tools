import styled from "styled-components/macro"
import { CarouselSlide } from "../components/core/CarouselSlide/CarouselSlide"
import { Slide } from "../components/core/CarouselSlide/Slide"
import { Header } from "../components/templates/Header"

interface PageCarouselSlideProps {}

export default function PageCarouselSlide({
  ...props
}: PageCarouselSlideProps) {
  return (
    <StyledPageCarouselSlide className="page">
      <Header />

      <h2>Carousel Slide Component</h2>

      <CarouselSlide
        buttons={{
          active: <button>active</button>,
          inactive: <button>inactive</button>,
        }}
        style={{
          maxHeight: "300px",
        }}>
        <Slide>
          <img src="https://picsum.photos/800/?random=1" alt="" />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/480/?random=2" alt="" />
        </Slide>
        <Slide>
          <span>Only text</span>
        </Slide>
      </CarouselSlide>

      <CarouselSlide
        style={{
          maxHeight: "300px",
        }}>
        <Slide>
          <img src="https://picsum.photos/800/?random=1" alt="" />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/480/?random=2" alt="" />
        </Slide>
        <Slide>
          <span>Only text</span>
        </Slide>
      </CarouselSlide>
    </StyledPageCarouselSlide>
  )
}

const StyledPageCarouselSlide = styled.div``
