import { useState } from "react"
import { Header } from "../../components/Header"
import { Modal } from "../../components/Modal"
import { StyledPageModal } from "./styles"

interface PageModalProps {}

export const PageModal: React.FC<PageModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleCloseModal() {
    setIsOpen(false)
  }

  function handleOpenModal() {
    setIsOpen(true)
  }

  return (
    <StyledPageModal className="page">
      <Header />
      <h2>Modal Component</h2>

      <button
        style={{
          width: "fit-content",
        }}
        onClick={handleOpenModal}
      >
        open modal button
      </button>

      <Modal open={isOpen} onClose={handleCloseModal} />
    </StyledPageModal>
  )
}
