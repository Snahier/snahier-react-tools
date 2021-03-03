import { Close } from "@styled-icons/material-rounded"
import { useContext, useState } from "react"
import { ThemeContext } from "styled-components"
import styled, { css, keyframes } from "styled-components/macro"

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

const animation = {
  fadeOut: keyframes`
    to {
      opacity: 0
    }
  `,
}

const StyledAlert = styled.div<{ willClose: boolean }>`
  ${({ theme, willClose }) => css`
    display: grid;
    grid-auto-flow: column;
    grid:
      "icon content closeIcon"
      / auto 1fr auto;

    ${willClose &&
    css`
      animation: ${animation.fadeOut} 1s ease-out;
    `}

    padding: 0.75rem;
    width: 100%;

    border-radius: 0.25rem;
    background: ${theme.colors.white};

    color: ${theme.colors.black};
  `}
`

const Content = styled.div`
  grid-area: content;
`

const Icon = styled.div`
  grid-area: icon;

  margin-right: 1rem;
`
