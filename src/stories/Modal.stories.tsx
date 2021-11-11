import { ComponentProps } from "react"

import { Story, Meta } from "@storybook/react"
import { Modal } from "components/core/Modal"

export default {
  component: Modal,
  title: "Components/Core/Modal",
} as Meta

const Template: Story<ComponentProps<typeof Modal>> = (args) => (
  <Modal
    {...args}
    children={
      <div
        style={{
          width: "max-content",
          padding: "2rem",
          background: "white",
        }}
      >
        Text
      </div>
    }
  />
)

export const Default = Template.bind({})

Default.args = {
  open: false,
}
