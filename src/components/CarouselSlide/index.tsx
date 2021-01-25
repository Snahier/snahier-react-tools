import React, { useEffect, useRef, useState } from "react"
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

export const CarouselSlide: React.FC<CarouselSlideProps> = (props) => {
  const carouselSlideRef = useRef<HTMLDivElement>(null)
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const [slidesWidth, setSlidesWidth] = useState(0)
  const [slidesAmount, setSlidesAmount] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  function updateScrollPosition(scrollPosition: number) {
    setScrollLeft(scrollPosition)
  }

  function navigateToSlide(slideNumber: number) {
    carouselSlideRef?.current?.children[0].children[slideNumber].scrollIntoView(
      {
        behavior: "smooth",
      }
    )
  }

  useEffect(() => {
    setSlidesWidth(carouselSlideRef?.current!.children[0].clientWidth)
    setSlidesAmount(React.Children.count(props.children))
  }, [props.children])

  useEffect(() => {
    setActiveSlide(scrollLeft / slidesWidth)
  }, [scrollLeft, slidesWidth])

  return (
    <StyledCarouselSlide
      ref={carouselSlideRef}
      onScrollCapture={(event: any) =>
        updateScrollPosition(event.target.scrollLeft)
      }
    >
      <ContentArea>{props.children}</ContentArea>
      <ButtonWrapper>
        {[...Array(slidesAmount)].map((element, index) => (
          <SlideButton
            key={index}
            active={activeSlide === index}
            onClick={() => navigateToSlide(index)}
          />
        ))}
      </ButtonWrapper>
    </StyledCarouselSlide>
  )
}
