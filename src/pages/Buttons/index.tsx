import { Header } from "../../components/Header"
import { StyledPageButtons } from "./styles"

interface PageButtonsProps {}

export const PageButtons: React.FC<PageButtonsProps> = () => {
  return (
    <StyledPageButtons className="page">
      <Header />
      <h2>Buttons</h2>
    </StyledPageButtons>
  )
}
