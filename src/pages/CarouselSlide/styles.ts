import styled, { css } from "styled-components/macro"

export const StyledPageCarouselSlide = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-auto-rows: max-content;
    gap: 1rem;

    height: 100%;

    background-color: ${theme.background.primary};

    color: ${theme.text.primary};
  `}
`
