import { Meta, Story } from "@storybook/react"
import { PopperTooltip } from "components/core/PopperTooltip"
import { ComponentProps } from "react"

export default {
  component: PopperTooltip,
  title: "Components/Core/PopperTooltip",
} as Meta

const Template: Story<ComponentProps<typeof PopperTooltip>> = (args) => (
  <div style={{ display: "flex" }}>
    <PopperTooltip {...args}>
      <button>child example</button>
    </PopperTooltip>
  </div>
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
