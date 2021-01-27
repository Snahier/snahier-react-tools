import { StyledModal } from "./styles"

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  return (
    <StyledModal>
      <div>StyledModal Component</div>
    </StyledModal>
  )
}
