import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { Button } from "components/core/Button"

export default {
  component: Button,
  title: "Components/Core/Button",
} as Meta

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: "Button",
  disabled: false,
  load: false,
}
