import "styled-components"
import { dark } from "./theme"

export type Theme = typeof dark

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
