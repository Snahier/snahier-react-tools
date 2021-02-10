import { Button } from "../../components/core/Button"
import { Header } from "../../components/Header"
import { Content, StyledPageButtons } from "./styles"

interface PageButtonsProps {}

export const PageButtons: React.FC<PageButtonsProps> = () => {
  return (
    <StyledPageButtons className="page">
      <Header />
      <h2>Buttons</h2>

      <Content>
        <Button>Button</Button>
        <Button load>Loading Button</Button>
        <Button disabled>Disabled Button</Button>
      </Content>
    </StyledPageButtons>
  )
}
