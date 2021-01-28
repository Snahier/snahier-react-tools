import { Header } from "../../components/Header"
import { Tooltip } from "../../components/Tooltip"
import { StyledPageTooltip } from "./styles"

interface PageTooltipProps {}

export const PageTooltip: React.FC<PageTooltipProps> = () => {
  return (
    <StyledPageTooltip className="page">
      <Header />
      <h2>Tooltip Component</h2>

      <Tooltip>
        <button>hover me</button>
      </Tooltip>

      <Tooltip>
        <button>click me</button>
      </Tooltip>
    </StyledPageTooltip>
  )
}
