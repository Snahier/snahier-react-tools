import { readableColor } from "polished"
import styled, { css } from "styled-components/macro"

interface ButtonProps {
  color: string
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ color }) => css`
    background: ${color};
    color: ${readableColor(color)};
  `}
`
