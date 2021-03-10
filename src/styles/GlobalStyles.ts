import { createGlobalStyle, css } from "styled-components/macro"

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;

      margin: 0;
      padding: 0;
    }

    html,
    body,
    #root {
      height: 100%;
      font-size: 100%;
      font-family: ${theme.fonts.proximaNova}, sans-serif;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .page {
      display: grid;
      gap: 1rem;
      grid-auto-rows: max-content;

      height: 100vh;

      background-color: ${theme.background.primary};

      color: ${theme.text.primary};
    }
  `}
`
