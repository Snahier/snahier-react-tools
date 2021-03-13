import {
  DownArrow,
  LeftArrow,
  RightArrow,
  UpArrow,
} from "@styled-icons/boxicons-solid"
import styled, { css, keyframes } from "styled-components"

interface ScrollIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "top" | "bottom" | "left" | "right"
}

const variants = {
  top: <UpArrow size="1rem" style={{ gridArea: "arrowTop" }} />,
  bottom: <DownArrow size="1rem" style={{ gridArea: "arrowBottom" }} />,
  left: <LeftArrow size="1rem" style={{ gridArea: "arrowLeft" }} />,
  right: <RightArrow size="1rem" style={{ gridArea: "arrowRight" }} />,
}

export const ScrollIndicator = ({
  direction = "bottom",
  ...props
}: ScrollIndicatorProps) => {
  return (
    <StyledScrollIndicator direction={direction} {...props}>
      {variants[direction]}

      <Text>Scroll {direction}</Text>
    </StyledScrollIndicator>
  )
}

const animations = {
  gap: (direction: "top" | "bottom" | "left" | "right") => keyframes`
    0% {
      ${
        direction === "top" || direction === "bottom"
          ? css`
              gap: 0.5rem 0;
            `
          : css`
              gap: 0 0.5rem;
            `
      }
    }
    50% {
      ${
        direction === "top" || direction === "bottom"
          ? css`
              gap: 1rem 0;
            `
          : css`
              gap: 0 1rem;
            `
      }
    }
    100% {
      ${
        direction === "top" || direction === "bottom"
          ? css`
              gap: 0.5rem 0;
            `
          : css`
              gap: 0 0.5rem;
            `
      }
    }
  `,
}

const StyledScrollIndicator = styled.div<ScrollIndicatorProps>`
  ${({ direction }) => css`
    animation: ${animations.gap(direction)} 1.5s ease-in-out infinite;

    display: grid;
    grid:
      ".         arrowTop     ."
      "arrowLeft text         arrowRight"
      ".         arrowBottom  .";
    justify-items: center;
    align-items: center;

    width: max-content;
  `}
`

const Text = styled.span`
  grid-area: text;
  position: relative;
`
