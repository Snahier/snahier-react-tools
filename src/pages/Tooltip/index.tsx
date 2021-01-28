import { Header } from "../../components/Header"
import { StyledPageTooltip } from "./styles"

interface PageTooltipProps {}

export const PageTooltip: React.FC<PageTooltipProps> = () => {
  return (
    <StyledPageTooltip className="page">
      <Header />
      <h2>Tooltip Component</h2>
    </StyledPageTooltip>
  )
}
