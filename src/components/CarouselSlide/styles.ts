import styled, { css } from "styled-components/macro"

export const StyledCarouselSlide = styled.div`
  position: relative;

  background-color: lightblue;
`

export const ContentArea = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;

  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  > * {
    scroll-snap-align: center;
  }

  height: 100%;
`

export const ButtonWrapper = styled.div`
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
