import React from "react"
import { StyledCarouselSlide } from "./styles"

interface CarouselSlideProps extends React.HTMLAttributes<HTMLDivElement> {
  arrows?: boolean
}

export const CarouselSlide: React.FC<CarouselSlideProps> = (props) => {
  const slidesAmount = React.Children.count(props.children)

  return <StyledCarouselSlide>{props.children}</StyledCarouselSlide>
}
