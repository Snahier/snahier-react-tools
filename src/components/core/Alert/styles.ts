import styled, { css, keyframes } from "styled-components/macro"

const animations = {
  fadeOut: keyframes`
    to {
      opacity: 0
    }
  `,
}

export const StyledAlert = styled.div<{ willClose: boolean }>`
  ${({ theme, willClose }) => css`
    display: grid;
    grid-auto-flow: column;
    grid:
      "icon content closeIcon"
      / auto 1fr auto;

    ${willClose &&
    css`
      animation: ${animations.fadeOut} 1s ease-out;
    `}

    padding: 0.75rem;
    width: 100%;

    border-radius: 0.25rem;
    background: ${theme.colors.white};

    color: ${theme.colors.black};
  `}
`

export const Content = styled.div`
  grid-area: content;
`

export const Icon = styled.div`
  grid-area: icon;

  margin-right: 1rem;
`
