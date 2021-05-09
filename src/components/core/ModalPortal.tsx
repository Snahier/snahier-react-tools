import { createPortal } from "react-dom"
import styled from "styled-components"

interface ModalPortalProps {
  isOpen: boolean
  onClose: any
}

export const ModalPortal = ({
  isOpen,
  onClose,
  ...props
}: ModalPortalProps) => {
  return (
    <StyledModalPortal {...props}>
      {isOpen && createPortal(<Background onClick={onClose} />, document.body)}
    </StyledModalPortal>
  )
}

const StyledModalPortal = styled.div``

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`
