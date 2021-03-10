import { useState } from "react"
import styled from "styled-components/macro"
import { Modal } from "../components/core/Modal"
import { Header } from "../components/templates/Header"

interface PageModalProps {}

export default function PageModal({ ...props }: PageModalProps) {
  const [isModalOneOpen, setIsModalOneOpen] = useState(false)
  const handleCloseModalOne = () => setIsModalOneOpen(false)
  const handleOpenModalOne = () => setIsModalOneOpen(true)

  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false)
  const handleCloseModalTwo = () => setIsModalTwoOpen(false)
  const handleOpenModalTwo = () => setIsModalTwoOpen(true)

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

      <OpenModalButton onClick={handleOpenModalOne}>
        Open modal 1
      </OpenModalButton>

      <Modal open={isModalOneOpen} onClose={handleCloseModalOne}>
        <ModalContent
          style={{
            bottom: "0%",
            right: "0%",
            background: "#fff",
          }}>
          Modal one custom child{" "}
          <OpenModalButton onClick={handleOpenModalTwo}>
            Open modal 2
          </OpenModalButton>
        </ModalContent>
      </Modal>

      <Modal open={isModalTwoOpen} onClose={handleCloseModalTwo}>
        <ModalContent
          style={{
            bottom: "25%",
            right: "10%",
            background: "#ddd",
          }}>
          Modal two custom child
        </ModalContent>
      </Modal>
    </StyledPageModal>
  )
}

const StyledPageModal = styled.div``

const OpenModalButton = styled.button`
  width: fit-content;
`

const ModalContent = styled.div`
  position: fixed;
  width: 640px;
  height: 480px;
  color: #000;
`
