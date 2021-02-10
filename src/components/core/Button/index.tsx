import { ButtonHTMLAttributes } from "react"
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
  const displayLoader = () => (
    <LoadWrapper color={color}>
      <CircularProgress size="1.5em" />
    </LoadWrapper>
  )

  return (
    <StyledButton {...props} color={color} load={load}>
      {load && displayLoader()}
      {children}
    </StyledButton>
  )
}
