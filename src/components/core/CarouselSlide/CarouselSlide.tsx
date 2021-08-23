import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components/macro"
import { viewport } from "../../../styles/helpers/viewport"

interface CarouselSlideProps extends React.HTMLAttributes<HTMLDivElement> {
  arrows?: {
    left: string
    right: string
  }
  buttons?: {
    active: any
    inactive: any
    position?: string
  }
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  arrows,
  buttons,
  ...props
}) => {
  const carouselSlideRef = useRef<HTMLDivElement>(null)
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const [slidesWidth, setSlidesWidth] = useState(0)
  const [slidesAmount, setSlidesAmount] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const updateScrollPosition = (scrollPosition: number) =>
    setScrollLeft(scrollPosition)

  const navigateToSlide = (slideNumber: number) => {
    carouselSlideRef?.current?.children[0].children[slideNumber].scrollIntoView(
      {
        behavior: "smooth",
        block: "nearest",
      }
    )
    setActiveSlide(slideNumber)
  }

  useEffect(() => {
    const childrenLength = React.Children.count(props.children)
    if (childrenLength > 0) {
      setSlidesWidth(carouselSlideRef?.current!.children[0].clientWidth)
      setSlidesAmount(childrenLength)
    }
  }, [props.children])

  useEffect(() => {
    const isWholeNumber = Number.isInteger(scrollLeft / slidesWidth)

    if (isWholeNumber) {
      setActiveSlide(scrollLeft / slidesWidth)
      setIsScrolling(false)
    }
  }, [isScrolling, scrollLeft, slidesWidth])

  const renderCustomSlideButtons = () =>
    [...Array(slidesAmount)].map((element, index) =>
      activeSlide === index ? (
        <div key={index} onClick={() => navigateToSlide(index)}>
          {buttons?.active}
        </div>
      ) : (
        <div key={index} onClick={() => navigateToSlide(index)}>
          {buttons?.inactive}
        </div>
      )
    )

  const renderDefaultSlideButtons = () =>
    [...Array(slidesAmount)].map((element, index) => (
      <SlideButton
        key={index}
        active={activeSlide === index}
        onClick={() => navigateToSlide(index)}
      />
    ))

  const renderButtons = () =>
    buttons ? renderCustomSlideButtons() : renderDefaultSlideButtons()

  const handleMouseOrTouchUp = () => {
    setIsScrolling(true)
  }

  return (
    <StyledCarouselSlide
      ref={carouselSlideRef}
      onScrollCapture={(event: any) =>
        updateScrollPosition(event.target.scrollLeft)
      }
      {...props}
    >
      <ContentArea
        isScrolling={isScrolling}
        onMouseUp={handleMouseOrTouchUp}
        onTouchEnd={handleMouseOrTouchUp}
      >
        {props.children}
      </ContentArea>
      <ButtonWrapper>{renderButtons()}</ButtonWrapper>
    </StyledCarouselSlide>
  )
}

const StyledCarouselSlide = styled.div`
  position: relative;

  background-color: lightblue;
`

type ContentAreaProps = {
  isScrolling: boolean
}
const ContentArea = styled.div<ContentAreaProps>`
  ${({ isScrolling }) => css`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;

    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    > * {
      scroll-snap-align: center;
    }

    width: 100%;
    height: 100%;

    @media (min-width: ${viewport.desktop.large}) {
      &::-webkit-scrollbar {
        display: none;
      }
    }

    pointer-events: ${isScrolling ? "none" : "all"};
    touch-action: ${isScrolling ? "none" : "auto"};
  `}
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-auto-flow: column;
  gap: 16px;

  background-color: coral;
`

interface SlideButtonProps {
  active: boolean
}

export const SlideButton = styled.button<SlideButtonProps>`
  ${({ active }) => css`
    width: 8px;
    height: 8px;

    outline: none;
    border-radius: 100%;

    ${active
      ? css`
          border: none;
        `
      : css`
          border: 1px solid white;
          background-color: transparent;
        `}
  `}
`
