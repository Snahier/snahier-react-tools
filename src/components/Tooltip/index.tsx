import { useState } from "react"
import {
  StyledTooltip,
  TooltipChildWrapper,
  TooltipContentWrapper,
} from "./styles"

interface TooltipProps {}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const [isActive, setIsActive] = useState(false)

  function toggleTooltip() {
    setIsActive(!isActive)
  }

  return (
    <StyledTooltip>
      {isActive && (
        <TooltipContentWrapper>Tooltip content example</TooltipContentWrapper>
      )}

      <TooltipChildWrapper
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        {props.children}
      </TooltipChildWrapper>
    </StyledTooltip>
  )
}
