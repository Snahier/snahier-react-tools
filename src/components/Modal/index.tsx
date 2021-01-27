import { BackgroundBox, StyledModal } from "./styles"

interface ModalProps {
  open: boolean
  onClose: Function
  opacity?: number
}

export const Modal: React.FC<ModalProps> = ({ opacity = 20, ...props }) => {
  return props.open ? (
    <StyledModal>
      <BackgroundBox opacity={opacity / 100} onClick={() => props.onClose()} />
      <div>StyledModal Component</div>
    </StyledModal>
  ) : null
}
