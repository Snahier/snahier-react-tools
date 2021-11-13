import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { CanvasCircularProgress } from "components/core/CanvasCircularProgress"

export default {
  component: CanvasCircularProgress,
  title: "Components/Core/CanvasCircularProgress",
} as Meta

const Template: Story<ComponentProps<typeof CanvasCircularProgress>> = (args) => (
  <div style={{ display: "flex", width: 400, height: 400, backgroundColor: "skyblue" }}>
    <CanvasCircularProgress {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  progress: 0.75,
  thickness: 0.1,
  size: "100%",
  color: "#808080",
  lineCap: "butt",
}
