import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { ShimmerEffect } from "components/core/ShimmerEffect"

export default {
  component: ShimmerEffect,
  title: "Components/ShimmerEffect",
} as Meta

const Template: Story<ComponentProps<typeof ShimmerEffect>> = (args) => <ShimmerEffect {...args} />

export const Default = Template.bind({})

Default.args = {
  width: 250,
  height: 250,
  circle: false,
}
