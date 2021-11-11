import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { CircularProgress } from "components/core/CircularProgress"

export default {
  component: CircularProgress,
  title: "Components/Core/CircularProgress",
} as Meta

const Template: Story<ComponentProps<typeof CircularProgress>> = (args) => <CircularProgress {...args} />

export const Default = Template.bind({})

Default.args = {
  disableShrink: false,
  round: false,
  thickness: 0.1,
  value: 75,
  variant: "indeterminate",
}
