import { rgba } from "polished"
import styled, { css } from "styled-components/macro"

interface ModalProps {
  open: boolean
  onClose: Function
  opacity?: number
}

export const Modal: React.FC<ModalProps> = ({ opacity = 0.2, ...props }) => {
  const opacityPercentageInDecimals = opacity / 100

  return props.open ? (
    <StyledModal>
      <BackgroundBox opacity={opacityPercentageInDecimals} onClick={() => props.onClose()} />
      <ModalContent>{props.children}</ModalContent>
    </StyledModal>
  ) : null
}

const StyledModal = styled.div``

interface BackgroundBoxProps {
  opacity?: number
}

const BackgroundBox = styled.div<BackgroundBoxProps>`
  ${({ opacity }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100vw;
    height: 100vh;

    background-color: ${rgba("black", opacity ? opacity * 100 : 0)};
  `}
`

const ModalContent = styled.div`
  position: relative;
  z-index: 11;
`
