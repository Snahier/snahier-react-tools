import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styled, { css } from "styled-components"

interface Position {
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
  transform?: string
}
interface ModalPortalProps {
  isOpen: boolean
  onClose: any
  content: React.ReactNode
  position: Position
  backdropBlur?: number
}

export const ModalPortal = ({
  isOpen,
  onClose,
  content,
  position,
  backdropBlur,
  ...props
}: ModalPortalProps) => {
  const [amountOfModals, setAmountOfModals] = useState(0)

  useEffect(() => {
    setAmountOfModals(
      document.getElementsByClassName("component-ModalPortal").length
    )
  }, [isOpen])

  return isOpen
    ? createPortal(
        <StyledModalPortal
          {...props}
          className="component-ModalPortal"
          amountOfModals={amountOfModals}
        >
          <Background onClick={onClose} backdropBlur={backdropBlur} />
          <Content
            style={{
              top: position.top,
              bottom: position.bottom,
              left: position.left,
              right: position.right,
              transform: position.transform,
            }}
          >
            {content}
          </Content>
        </StyledModalPortal>,
        document.body
      )
    : null
}

type StyledModalPortalProps = {
  amountOfModals: number
}
const StyledModalPortal = styled.div<StyledModalPortalProps>`
  ${({ amountOfModals }) => css`
    position: relative;
    z-index: ${10 + amountOfModals};
  `}
`

type BackgroundProps = {
  backdropBlur: number | undefined
}
const Background = styled.div<BackgroundProps>`
  ${({ backdropBlur }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.2);

    ${backdropBlur && `backdrop-filter: blur(${backdropBlur}px);`}
  `}
`

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`
