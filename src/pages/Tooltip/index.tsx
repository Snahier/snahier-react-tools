import { Header } from "../../components/Header"
import { StyledTooltip } from "./styles"

interface PageTooltipProps {}

export const PageTooltip: React.FC<PageTooltipProps> = () => {
  return (
    <StyledTooltip className="page">
      <Header />
      <div>Tooltip Component</div>
    </StyledTooltip>
  )
}
