import styled, { css } from "styled-components/macro"
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <h1>Snahier's component library</h1>
      <Link to="/">Return to home</Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    background-color: ${theme.background.secondary};
    color: ${theme.text.primary};
  `}
`
