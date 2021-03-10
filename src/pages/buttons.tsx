import styled from "styled-components/macro"
import { Button } from "../components/core/Button"
import { Header } from "../components/templates/Header"

interface PageButtonsProps {}

export default function PageButtons({ ...props }: PageButtonsProps) {
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

const StyledPageButtons = styled.div``

const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
`
