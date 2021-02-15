import { Close } from "@styled-icons/material-rounded"
import { useContext, useState } from "react"
import { ThemeContext } from "styled-components"
import { Content, Icon, StyledAlert } from "./styles"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  closeable?: boolean
  icon?: any
}

export const Alert: React.FC<AlertProps> = ({
  text,
  closeable = false,
  icon,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext)

  const [isDisplaying, setIsDisplaying] = useState(true)
  const [willClose, setWillClose] = useState(false)

  const closeAlert = () => {
    setWillClose(true)

    setTimeout(() => {
      setIsDisplaying(false)
    }, 1000)
  }

  return isDisplaying ? (
    <StyledAlert {...props} willClose={willClose}>
      {icon && <Icon>{icon}</Icon>}

      <Content>{children || text}</Content>

      {closeable && (
        <Close
          color={theme.colors.black}
          size="1rem"
          onClick={closeAlert}
          style={{ gridArea: "closeIcon" }}
        />
      )}
    </StyledAlert>
  ) : null
}
