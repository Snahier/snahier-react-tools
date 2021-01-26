import { CarouselSlide } from "../../components/CarouselSlide"
import { Slide } from "../../components/CarouselSlide/Slide"
import { StyledPageCarouselSlide } from "./styles"

interface PageCarouselSlideProps {}

export const PageCarouselSlide: React.FC<PageCarouselSlideProps> = () => {
  return (
    <StyledPageCarouselSlide>
      <h2>Carousel Slide Component</h2>

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
    </StyledPageCarouselSlide>
  )
}