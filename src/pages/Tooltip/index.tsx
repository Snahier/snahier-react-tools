import { StyledTooltip } from "./styles"

interface PageTooltipProps {}

export const PageTooltip: React.FC<PageTooltipProps> = () => {
  return (
    <StyledTooltip>
      <div>Tooltip Component</div>
    </StyledTooltip>
  )
}
