import { StyledCarouselSlide } from "./styles"

interface CarouselSlideProps {}

export const CarouselSlide: React.FC<CarouselSlideProps> = () => {
  return (
    <StyledCarouselSlide>
      <div>StyledCarouselSlide Component</div>
    </StyledCarouselSlide>
  )
}
