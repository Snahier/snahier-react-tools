import { useSpring } from "@react-spring/core"
import { animated } from "@react-spring/web"
import { ExpanderCollapsible } from "components/core/ExpanderCollapsible"
import { Header } from "components/templates/Header"
import { useState } from "react"
import styled from "styled-components"

interface PageExpanderCollapsibleProps {}

export default function PageExpanderCollapsible({ ...props }: PageExpanderCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false)

  const divSpring = useSpring({
    height: isOpen ? 200 : 100,
    background: isOpen ? "yellow" : "red",
  })

  return (
    <StyledPageExpanderCollapsible {...props} className="page">
      <Header />
      <h1>Expander Collapsible Component</h1>

      <Content>
        <ExpanderCollapsible title="title 1">
          <span>content 1</span>

          <ExpanderCollapsible title="title 2">
            <span>content 2</span>

            <ExpanderCollapsible title="title 3">
              <span>content 3</span>
            </ExpanderCollapsible>
          </ExpanderCollapsible>

          <ExpanderCollapsible title="title 4">
            <span>content 4</span>
          </ExpanderCollapsible>

          <animated.div style={divSpring} onClick={() => setIsOpen((prev) => !prev)} />
        </ExpanderCollapsible>
      </Content>
    </StyledPageExpanderCollapsible>
  )
}

type StyledPageExpanderCollapsibleProps = {}
const StyledPageExpanderCollapsible = styled.div<StyledPageExpanderCollapsibleProps>``

type ContentProps = {}
const Content = styled.div<ContentProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
