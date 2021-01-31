import styled, { css } from "styled-components/macro"
import { alpha } from "../../styles/helpers/alpha"

export const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  width: max-content;
  height: max-content;
`

export const ParentWrapper = styled.div``

interface ContentProps {
  position: "top" | "bottom" | "left" | "right"
  arrow?: boolean
}
const boxPositions = {
  left: css`
    right: calc(100% + 1rem);
    top: 50%;
    transform: translateY(-50%);
  `,
  right: css`
    left: calc(100% + 1rem);
    top: 50%;
    transform: translateY(-50%);
  `,
  top: css`
    bottom: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
  `,
  bottom: css`
    top: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
  `,
}
const arrowPositions = {
  left: css`
    right: -0.5rem;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  `,
  right: css`
    left: -0.5rem;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  `,
  top: css`
    left: 50%;
    bottom: -0.5rem;
    transform: translateX(-50%) rotate(45deg);
  `,
  bottom: css`
    left: 50%;
    top: -0.5rem;
    transform: translateX(-50%) rotate(45deg);
  `,
}
export const TooltipContent = styled.div<ContentProps>`
  ${({ theme, position, arrow }) => css`
    position: absolute;
    ${boxPositions[position]}

    box-shadow: -13px 3px 13px 0 ${alpha(theme.colors.black, 25)};
    border-radius: 0.5rem;
    background-color: ${theme.colors.white};

    color: ${theme.colors.black};

    ${arrow &&
    css`
      &::after {
        content: "";
        position: absolute;
        ${arrowPositions[position]}
        z-index: 3;

        width: 1rem;
        height: 1rem;

        background-color: red;
      }
    `}
  `}
`
