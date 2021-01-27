import styled, { css } from "styled-components/macro"

export const StyledModal = styled.div``

interface BackgroundBoxProps {
  opacity?: number
}

export const BackgroundBox = styled.div<BackgroundBoxProps>`
  ${({ opacity }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, ${opacity});
  `}
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 11;
`
