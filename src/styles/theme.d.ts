import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: string
    background: {
      primary: string
      secondary: string
    }
    text: {
      primary: string
    }
    colors: {
      white: string
      black: string
    }
  }
}
