import styled, { css } from "styled-components/macro"

export const StyledPageHome = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid: "header" max-content;
    grid-auto-rows: max-content;
    gap: 1rem;

    height: 100%;

    background: ${theme.background.primary};

    color: ${theme.text.primary};
  `}
`

export const ComponentsList = styled.div``
