import { useState } from "react"
import { Modal } from "../../components/core/Modal"
import { Header } from "../../components/Header"
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

      <p>The component is used based on 3 required props:</p>

      <p>
        open: boolean
        <br />
        Makes the modal display or hide
      </p>

      <p>
        onClose: callback function
        <br />
        Usually a function to set the state in the <strong>open</strong> prop as
        false.
        <br />
        It gets activated once clicked in the dark area outside the modal
        content or in an optional button or any element that you can add inside
        the custom content element.
      </p>

      <p>
        children: ReactElement | HTMLElement
        <br />
        Can receive any JSX but requires a few actions for positioning.
        <br />
        The wrapper element must have a <strong>position: fixed</strong>{" "}
        property to be positioned anywhere you want by using{" "}
        <strong>top, bottom, left or right</strong>
      </p>

      <button
        style={{
          width: "fit-content",
        }}
        onClick={handleOpenModal}
      >
        open modal button
      </button>

      <Modal open={isOpen} onClose={handleCloseModal}>
        <div
          style={{
            position: "fixed",
            top: "50%",
            right: "0%",
            width: 640,
            height: 480,
            background: "#fff",
            color: "#000",
          }}
        >
          Custom element as modal child
        </div>
      </Modal>
    </StyledPageModal>
  )
}
