import { StyledTooltip } from "./styles"

interface TooltipProps {}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  return <StyledTooltip>{props.children}</StyledTooltip>
}
