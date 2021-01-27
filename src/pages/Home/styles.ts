import styled, { css } from "styled-components/macro"
import { viewport } from "../../styles/helpers/viewport"

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

export const ComponentsList = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${viewport.tablets}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${viewport.desktop.extraLarge}) {
    grid-template-columns: repeat(6, 1fr);
  }
`
