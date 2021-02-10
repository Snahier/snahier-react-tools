import { ButtonHTMLAttributes, useEffect, useRef, useState } from "react"
import { CircularProgress } from "../CircularProgress"
import { LoadWrapper, StyledButton } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  load?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  color = "#00008b",
  load,
  children,
  ...props
}) => {
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
    <StyledButton
      {...props}
      ref={buttonRef}
      color={color}
      load={load}
      width={width}
      onClick={handleCreateRipples}
    >
      {load && displayLoader()}
      {children}
    </StyledButton>
  )
}
