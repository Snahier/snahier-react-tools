import React from "react"
import {
  ButtonWrapper,
  ContentArea,
  SlideButton,
  StyledCarouselSlide,
} from "./styles"

interface CarouselSlideProps extends React.HTMLAttributes<HTMLDivElement> {
  arrows?: {
    left: Arrow
    right: Arrow
  }
}

interface Arrow {
  active: string
  inactive: string
}

/**
 * # Done
 * Render Slides.
 * Show a button for each slide.
 *
 * # To do
 * Show active slide button
 * Show arrows.
 */
export const CarouselSlide: React.FC<CarouselSlideProps> = (props) => {
  const slidesAmount = React.Children.count(props.children)

  return (
    <StyledCarouselSlide>
      <ContentArea>{props.children}</ContentArea>
      <ButtonWrapper>
        {[...Array(slidesAmount)].map((element, index) => (
          <SlideButton key={index} active={true} />
        ))}
      </ButtonWrapper>
    </StyledCarouselSlide>
  )
}
