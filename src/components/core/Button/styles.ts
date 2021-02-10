import { lighten, readableColor } from "polished"
import styled, { css } from "styled-components/macro"

interface ButtonProps {
  color: string
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ color }) => css`
    padding: 0.5rem;

    border: none;
    background: ${color};

    color: ${readableColor(color)};

    &:hover {
      background: ${lighten(0.1, color)};
    }
  `}
`
