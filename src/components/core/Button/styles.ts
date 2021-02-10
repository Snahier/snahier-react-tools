import { grayscale, lighten, readableColor } from "polished"
import styled, { css } from "styled-components/macro"

interface ButtonProps {
  color: string
  loading?: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ color, loading }) => css`
    position: relative;

    padding: 0.5rem;

    border: none;
    background: ${color};
    cursor: pointer;
    ${loading && "pointer-events: none;"}

    color: ${readableColor(color)};

    transition: 0.3s;

    &:hover {
      background: ${lighten(0.1, color)};
    }

    &:disabled {
      opacity: 0.75;

      background: ${grayscale(color)};
      cursor: not-allowed;
    }

    &:focus {
      outline: 2px solid ${lighten(0.5, color)};
      background: ${lighten(0.1, color)};
    }
  `}
`

export const LoadWrapper = styled.div<{ color: string }>`
  ${({ color }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color};
  `}
`
