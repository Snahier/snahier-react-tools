import { createGlobalStyle } from "styled-components/macro"

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
`
