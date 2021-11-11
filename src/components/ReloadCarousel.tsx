import { Children, ReactNode, UIEvent, useRef, useState } from "react"
import styled, { css } from "styled-components"

interface ReloadCarouselProps {
  children: ReactNode
}

export const ReloadCarousel = ({ ...props }: ReloadCarouselProps) => {
  const [activeControl, setActiveControl] = useState<number>(0)
  const slides = Children.toArray(props.children)

  const listRef = useRef<HTMLDivElement>(null)

  const handleItemScroll = (index: number) => {
    setActiveControl(index)
    listRef.current?.children[index].scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const slideMaxSize = event.currentTarget.getBoundingClientRect().width
    const { scrollLeft } = event.currentTarget

    if (!Number.isInteger(scrollLeft / slideMaxSize)) return

    const newIndex = scrollLeft / slideMaxSize
    if (activeControl !== newIndex) setActiveControl(newIndex)
  }

  return (
    <StyledReloadCarousel {...props}>
      <ItemList onScroll={handleScroll} ref={listRef}>
        {props.children}
      </ItemList>
      <Controls>
        {slides.map((_, index) => (
          <ControlButton key={index} active={activeControl === index} onClick={() => handleItemScroll(index)} />
        ))}
      </Controls>
    </StyledReloadCarousel>
  )
}

type StyledReloadCarouselProps = {}
const StyledReloadCarousel = styled.div<StyledReloadCarouselProps>`
  position: relative;

  display: flex;

  width: 100%;
  height: 100%;
`

type ItemListProps = {}
const ItemList = styled.div<ItemListProps>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;

  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  > * {
    scroll-snap-align: center;
  }

  min-width: 100%;
  max-width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`

type ControlsProps = {}
const Controls = styled.div<ControlsProps>`
  position: absolute;
  top: 50%;
  right: 2.25rem;
  transform: translateY(-50%);

  display: flex;
  gap: 0.75rem;
`

type ControlButtonProps = {
  active: boolean
}
const ControlButton = styled.button<ControlButtonProps>`
  ${({ active }) => css`
    width: 0.75rem;
    height: 0.75rem;

    transition: 0.3s;

    cursor: pointer;
    border: 1px solid white;
    border-radius: 50%;
    background: ${active ? "white" : "transparent"};
  `}
`
