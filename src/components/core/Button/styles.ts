import { grayscale, lighten, readableColor } from "polished"
import styled, { css } from "styled-components/macro"

interface ButtonProps {
  color: string
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ color }) => css`
    padding: 0.5rem;

    border: none;
    background: ${color};
    cursor: pointer;

    color: ${readableColor(color)};

    &:hover {
      background: ${lighten(0.1, color)};
    }

    &:disabled {
      background: ${grayscale(color)};
      cursor: not-allowed;
    }
  `}
`
