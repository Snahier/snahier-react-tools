import { StyledButton } from "./styles"

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = () => {
  return (
    <StyledButton>
      <div>Button Component</div>
    </StyledButton>
  )
}
