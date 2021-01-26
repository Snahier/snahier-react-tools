import styled, { css } from "styled-components/macro"

export const StyledHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    background-color: ${theme.background.secondary};
    color: ${theme.text.primary};
  `}
`
