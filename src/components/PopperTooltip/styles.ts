import styled, { css } from "styled-components/macro"

export const StyledPopperTooltip = styled.div``

export const RootElementWrapper = styled.div``

interface PopperContainerProps {
  isOpen: boolean
}
export const PopperContainer = styled.div<PopperContainerProps>`
  ${({ isOpen }) => css`
    ${!isOpen &&
    css`
      visibility: hidden;
      pointer-events: none;
    `}

    background: white;

    color: black;

    #arrow {
      position: absolute;
      width: 10px;
      height: 10px;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(45deg);

        width: 10px;
        height: 10px;

        background-color: white;
      }
    }

    &[data-popper-placement^="top"] > #arrow {
      bottom: -5px;
    }

    &[data-popper-placement^="bottom"] > #arrow {
      top: -5px;
    }

    &[data-popper-placement^="left"] > #arrow {
      right: -5px;
    }

    &[data-popper-placement^="right"] > #arrow {
      left: -5px;
    }
  `}
`

interface ArrowProps {
  active?: boolean
}
export const Arrow = styled.div<ArrowProps>`
  ${({ active }) => css`
    ${!active &&
    css`
      visibility: hidden;
      pointer-events: none;
    `}
  `}
`
