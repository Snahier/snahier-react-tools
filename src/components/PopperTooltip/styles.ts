import styled, { css } from "styled-components/macro"

export const StyledPopperTooltip = styled.div``

export const RootElementWrapper = styled.div``

interface PopperContainerProps {
  isOpen: boolean
}
export const PopperContainer = styled.div<PopperContainerProps>`
  ${({ isOpen }) => css`
    position: relative;
    z-index: 1;

    ${!isOpen &&
    css`
      visibility: hidden;
      pointer-events: none;
    `}

    border-radius: 4px;
    background: white;

    color: black;
  `}
`
