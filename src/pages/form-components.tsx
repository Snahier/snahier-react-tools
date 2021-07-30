import { Switch } from "components/core/Inputs/Switch"
import { TextField } from "components/core/Inputs/TextField"
import { Header } from "components/templates/Header"
import styled from "styled-components"

interface PageFormComponentsProps {}

export default function PageFormComponents({
  ...props
}: PageFormComponentsProps) {
  return (
    <StyledPageFormComponents {...props} className="page">
      <Header />
      <h1>Form Components</h1>

      <Content>
        <div>
          <h2>TextField</h2>
          <TextField label="Text field" placeholder="Placeholder" />
          <TextField
            label="Text field"
            placeholder="Placeholder"
            error="Error message"
          />
          <TextField
            label="Text field"
            placeholder="Placeholder"
            helper="Helper message"
          />
          <TextField
            label="Text field"
            placeholder="Placeholder"
            value="Read only"
            readOnly
          />
        </div>

        <div>
          <h2>Switch</h2>
          <span>
            default: <Switch />
            <Switch checked />
          </span>

          <span>
            disabled: <Switch disabled />
          </span>
          <span>
            disabled: <Switch disabled checked />
          </span>

          <span>checked by default:</span>
        </div>
      </Content>
    </StyledPageFormComponents>
  )
}

const StyledPageFormComponents = styled.div``

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
