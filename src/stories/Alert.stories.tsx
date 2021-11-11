import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { Alert } from "components/core/Alert"
import { ThemeProvider } from "styled-components"
import { dark } from "styles/theme"
import { Home } from "@styled-icons/material-rounded"

export default {
  component: Alert,
  title: "Components/Core/Alert",
} as Meta

const Template: Story<ComponentProps<typeof Alert>> = (args) => (
  <ThemeProvider theme={dark}>
    <Alert {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})

Default.args = {
  children: "Alert",
  closeable: false,
  icon: <Home size="1rem" />,
}
