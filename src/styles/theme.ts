interface ThemeProps {
  name: string

  background: {
    primary: string
    secondary: string
  }
  text: {
    primary: string
  }
  fonts: {
    proximaNova: string
  }
  colors: {
    white: string
    black: string
  }
}

export const dark: ThemeProps = {
  name: "dark",

  background: {
    primary: "#011627",
    secondary: "#437f97",
  },
  text: {
    primary: "#ebf2fA",
  },
  fonts: {
    proximaNova: "proxima-nova",
  },
  colors: {
    white: "#ffffff",
    black: "#000000",
  },
}
