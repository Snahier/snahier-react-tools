import { CircularProgress } from "components/core/CircularProgress"
import { grayscale, lighten, readableColor } from "polished"
import { ButtonHTMLAttributes, useEffect, useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components/macro"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  load?: boolean
}

export const Button: React.FC<ButtonProps> = ({ color = "#00008b", load, children, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [width, setWidth] = useState(0)

  const getElementSize = () => {
    if (buttonRef.current) {
      const { clientWidth } = buttonRef.current

      setWidth(clientWidth)
    }
  }

  useEffect(() => {
    getElementSize()
  }, [buttonRef.current?.clientWidth])

  const handleCreateRipples = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = event
    const { offsetLeft, offsetTop } = event.currentTarget

    const xPosition = clientX - offsetLeft
    const yPosition = clientY - offsetTop

    const ripples = document.createElement("span")
    ripples.style.left = `${xPosition}px`
    ripples.style.top = `${yPosition}px`

    buttonRef.current?.appendChild(ripples)

    setTimeout(() => {
      ripples.remove()
    }, 1000)
  }

  const displayLoader = () => (
    <LoadWrapper color={color}>
      <CircularProgress size="1.5em" />
    </LoadWrapper>
  )

  return (
    <StyledButton {...props} ref={buttonRef} color={color} load={load} width={width} onClick={handleCreateRipples}>
      {load && displayLoader()}
      {children}
    </StyledButton>
  )
}

const animations = {
  ripple: (width: number) => keyframes`
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: ${width * 5}px;
      height: ${width * 5}px;
      opacity: 0;
    }
  `,
}

interface StyledButtonProps {
  color: string
  load?: boolean
  width: number
}

const StyledButton = styled.button<StyledButtonProps>`
  ${({ color, load, width }) => css`
    position: relative;

    overflow: hidden;

    padding: 0.5rem;

    outline: none;
    border: none;
    background: ${color};
    cursor: pointer;
    ${load && "pointer-events: none;"}

    color: ${readableColor(color)};

    transition: 0.3s;

    &:hover {
      background: ${lighten(0.1, color)};
    }

    &:disabled {
      opacity: 0.75;

      background: ${grayscale(color)};
      cursor: not-allowed;
    }

    span {
      position: absolute;
      transform: translate(-50%, -50%);

      pointer-events: none;
      border-radius: 50%;
      background-color: ${readableColor(color)};

      animation: ${animations.ripple(width)} 1s linear infinite;
    }
  `}
`

const LoadWrapper = styled.div<{ color: string }>`
  ${({ color }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color};
  `}
`
