import { useState } from "react"
import styled from "styled-components"
import { ModalPortal } from "../components/core/ModalPortal"
import { Header } from "../components/templates/Header"

export default function PageModalPortal({ ...props }) {
  const [isModal1Open, setIsModal1Open] = useState(false)

  return (
    <StyledPageModalPortal {...props} className="page">
      <Header />
      <h1>Modal Portal Component</h1>

      <Content>
        <button onClick={() => setIsModal1Open(true)}>Open modal 1</button>

        <button>Open modal 2</button>

        <button>Open modal 3</button>
      </Content>

      <ModalPortal
        isOpen={isModal1Open}
        onClose={() => setIsModal1Open(false)}
      />
    </StyledPageModalPortal>
  )
}

const StyledPageModalPortal = styled.div``

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`
