import styled, { css } from "styled-components/macro"
import { alpha } from "../../styles/helpers/alpha"

export const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  width: max-content;
  height: max-content;
`

export const TooltipChildWrapper = styled.div``

const positions = {
  top: css`
    bottom: calc(100% + 1rem);
  `,
  bottom: css`
    top: calc(100% + 1rem);
  `,
  left: css`
    right: calc(100% + 1rem);
  `,
  right: css`
    left: calc(100% + 1rem);
  `,
}
interface ContentProps {
  position: Position
}
export enum Position {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}
export const TooltipContentWrapper = styled.div<ContentProps>`
  ${({ theme, position }) => css`
    position: absolute;
    ${positions[position]}

    box-shadow: -13px 3px 13px 0 ${alpha(theme.colors.black, 25)};
    border-radius: 0.5rem;
    background-color: ${theme.colors.white};

    color: ${theme.colors.black};
  `}
`
