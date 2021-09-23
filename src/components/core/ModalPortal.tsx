import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styled, { css } from "styled-components"

interface ModalPortalProps {
  isOpen: boolean
  onClose: any
  backdropBlur?: number
  children?: React.ReactNode
}

export const ModalPortal = ({ isOpen, onClose, backdropBlur, children, ...props }: ModalPortalProps) => {
  const [amountOfModals, setAmountOfModals] = useState(0)

  useEffect(() => {
    setAmountOfModals(document.getElementsByClassName("component-ModalPortal").length)
  }, [isOpen])

  return isOpen
    ? createPortal(
        <StyledModalPortal {...props} className="component-ModalPortal" amountOfModals={amountOfModals}>
          <Background onClick={onClose} backdropBlur={backdropBlur} />
          {children}
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
    position: fixed;
    inset: 0;
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
