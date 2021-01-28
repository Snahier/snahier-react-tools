import styled, { css } from "styled-components/macro"
import { alpha } from "../../styles/helpers/alpha"

export const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  width: max-content;
  height: max-content;
`

export const TooltipChildWrapper = styled.div``

export const TooltipContentWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 100%;

    box-shadow: -13px 3px 13px 0 ${alpha(theme.colors.black, 25)};
    border-radius: 0.5rem;
    background-color: ${theme.colors.white};

    color: ${theme.colors.black};
  `}
`
