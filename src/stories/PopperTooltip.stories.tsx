import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { PopperTooltip } from "components/core/PopperTooltip"
import { ThemeProvider } from "styled-components"
import { dark } from "styles/theme"

export default {
  component: PopperTooltip,
  title: "Components/Core/PopperTooltip",
} as Meta

const Template: Story<ComponentProps<typeof PopperTooltip>> = (args) => (
  <ThemeProvider theme={dark}>
    <div style={{ display: "flex" }}>
      <PopperTooltip {...args}>
        <button>child example</button>
      </PopperTooltip>
    </div>
  </ThemeProvider>
)

export const Default = Template.bind({})

Default.args = {
  arrow: true,
  placement: "right",
  clickMode: false,
  content: (
    <div
      style={{
        width: "max-content",
        height: "max-content",
        padding: "1rem",
        background: "skyblue",
      }}
    >
      Popper content
    </div>
  ),
}
