import { ButtonHTMLAttributes } from "react"
import { StyledButton } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
}

export const Button: React.FC<ButtonProps> = ({
  color = "#00008b",
  children,
  ...props
}) => {
  return (
    <StyledButton color={color} {...props}>
      {children}
    </StyledButton>
  )
}
