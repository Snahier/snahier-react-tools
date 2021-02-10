import { ButtonHTMLAttributes } from "react"
import { CircularProgress } from "../CircularProgress"
import { LoadWrapper, StyledButton } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  color = "#00008b",
  loading,
  children,
  ...props
}) => {
  const displayLoader = () => (
    <LoadWrapper color={color}>
      <CircularProgress size="1.5em" />
    </LoadWrapper>
  )

  return (
    <StyledButton color={color} {...props}>
      {loading && displayLoader()}
      {children}
    </StyledButton>
  )
}
