import { ExpanderCollapsibleArea } from "components/core/ExpanderCollapsibleArea"
import { Header } from "components/templates/Header"
import { useState } from "react"
import styled from "styled-components"

interface PageExpanderCollapsibleProps {}

export default function PageExpanderCollapsible({ ...props }: PageExpanderCollapsibleProps) {
  const [contents, setContents] = useState({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
  })

  const toggleContent = (number: number) => {
    setContents((prev) => ({ ...prev, [number]: !prev[String(number) as keyof typeof contents] }))
  }

  return (
    <StyledPageExpanderCollapsible {...props} className="page">
      <Header />
      <h1>Expander Collapsible Component</h1>

      <Content>
        <div>
          <button onClick={() => toggleContent(1)}>content 1 {String(contents[1])}</button>
          <button onClick={() => toggleContent(2)}>content 2 {String(contents[2])}</button>
          <button onClick={() => toggleContent(3)}>content 3 {String(contents[3])}</button>
          <button onClick={() => toggleContent(4)}>content 4 {String(contents[4])}</button>
        </div>

        <div>
          <ExpanderCollapsibleArea open={contents[1]}>
            <span>content 1</span>

            <ExpanderCollapsibleArea open={contents[2]}>
              <span>content 2</span>

              <ExpanderCollapsibleArea open={contents[3]}>
                <span>content 3</span>
              </ExpanderCollapsibleArea>
            </ExpanderCollapsibleArea>

            <ExpanderCollapsibleArea open={contents[4]}>
              <span>content 4</span>
            </ExpanderCollapsibleArea>

            {/* <animated.div style={divSpring} onClick={() => setIsOpen((prev) => !prev)} /> */}
          </ExpanderCollapsibleArea>
        </div>
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
