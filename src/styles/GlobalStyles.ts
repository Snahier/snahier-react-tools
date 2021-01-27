import { createGlobalStyle, css } from "styled-components/macro"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    font-size: 100%;
    font-family: "proxima-nova", sans-serif;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .page {
    ${({ theme }) => css`
      display: grid;
      gap: 1rem;
      grid-auto-rows: max-content;

      height: 100%;

      background-color: ${theme.background.primary};

      color: ${theme.text.primary};
    `}
  }
`
