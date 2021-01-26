import { Link } from "react-router-dom"
import { StyledHeader } from "./styles"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <h1>Snahier's component library</h1>
      <Link to="/">Return to home</Link>
    </StyledHeader>
  )
}
