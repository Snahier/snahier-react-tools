import { DebugBox } from "components/core/DebugBox"
import { isTouch } from "helpers/isTouch"
import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react"
import { useDrag } from "react-use-gesture"
import styled from "styled-components"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  customButtons?: {
    active: ReactElement<any, string | JSXElementConstructor<any>>
    inactive: ReactElement<any, string | JSXElementConstructor<any>>
  }
}

export const Carousel = ({
  customButtons,
  children,
  ...props
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [lastScrollLeft, setLastScrollLeft] = useState(0)

  const [contentWidth, setContentWidth] = useState<number>(0)
  useEffect(() => {
    if (carouselRef.current) {
      setContentWidth(carouselRef.current!.getBoundingClientRect().width)
    }
  }, [carouselRef])

  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [isScrolling, setIsScrolling] = useState(false)
  useEffect(() => {
    const slideRatio = carouselRef.current!.scrollLeft / contentWidth
    if (Number.isInteger(slideRatio)) {
      setActiveSlide(slideRatio)
      setIsScrolling(false)
    } else {
      setIsScrolling(true)
    }
  }, [carouselRef.current?.scrollLeft, contentWidth])

  const dragGesture = useDrag(
    (state) => {
      const handleStartDrag = () => {
        if (!isDragging && state.dragging) setIsDragging(true)
      }
      const handleEndDrag = () => {
        if (isDragging && !state.dragging) {
          setIsDragging(false)
          setLastScrollLeft(carouselRef.current!.scrollLeft)

          const releaseDistancePercentage = state.distance / contentWidth
          if (releaseDistancePercentage > 0.1) {
            if (state.direction[0] < 0) {
              carouselRef.current!.scrollLeft = contentWidth * activeSlide + 1
              setLastScrollLeft(
                (carouselRef.current!.scrollLeft =
                  contentWidth * activeSlide + 1)
              )
            }
            if (state.direction[0] > 0) {
              carouselRef.current!.scrollLeft = contentWidth * activeSlide - 1
              setLastScrollLeft(
                (carouselRef.current!.scrollLeft =
                  contentWidth * activeSlide + 1)
              )
            }
          }
        }
      }
      const handleMoveDrag = () => {
        if (!isDragging) return

        carouselRef.current!.scrollLeft = lastScrollLeft - state.movement[0]
      }

      handleStartDrag()
      handleMoveDrag()
      handleEndDrag()
    },
    { useTouch: isTouch() }
  )

  return (
    <StyledCarousel {...props}>
      <DebugBox
        position={{ top: "3rem", left: "3rem" }}
        data={{
          activeSlide,
          isScrolling,
          scrollLeft: carouselRef.current?.scrollLeft,
        }}
      />

      <ContentArea
        ref={carouselRef}
        {...dragGesture()}
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
        }}
      >
        {children}
      </ContentArea>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
  position: relative;

  display: flex;

  border: 3px solid #000;
`

type ContentAreaProps = {}
const ContentArea = styled.div<ContentAreaProps>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;

  width: 100%;

  overflow: hidden;

  cursor: grabbing;

  img {
    pointer-events: none;
  }
`

// const Buttons = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);

//   display: flex;
//   gap: 0 0.5rem;
// `

// type ButtonProps = {
//   active: boolean
// }
// const Button = styled.button<ButtonProps>`
//   ${({ active }) => css`
//     width: 1rem;
//     height: 1rem;

//     border: 1px solid white;
//     border-radius: 50%;
//     background: ${active ? "white" : "transparent"};
//   `}
// `
