import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { CanvasCircularProgress } from "components/core/CanvasCircularProgress"

export default {
  component: CanvasCircularProgress,
  title: "Components/Core/CanvasCircularProgress",
} as Meta

const Template: Story<ComponentProps<typeof CanvasCircularProgress>> = (args) => (
  <CanvasCircularProgress {...args} />
)

export const Default = Template.bind({})

Default.args = {}
