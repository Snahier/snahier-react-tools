import { useState } from "react"
import {
  StyledTooltip,
  TooltipChildWrapper,
  TooltipContentWrapper,
} from "./styles"

interface TooltipProps {
  clickMode?: boolean
}

export const Tooltip: React.FC<TooltipProps> = ({ clickMode, ...props }) => {
  const [isActive, setIsActive] = useState(false)
  const hoverMode = !clickMode

  function toggleTooltip() {
    setIsActive(!isActive)
  }

  return (
    <StyledTooltip {...props}>
      {isActive && (
        <TooltipContentWrapper>
          <div style={{ width: "max-content" }}>Tooltip content example</div>
        </TooltipContentWrapper>
      )}

      <TooltipChildWrapper
        onMouseEnter={() => hoverMode && toggleTooltip()}
        onMouseLeave={() => hoverMode && toggleTooltip()}
        onClick={() => clickMode && toggleTooltip()}
      >
        {props.children}
      </TooltipChildWrapper>
    </StyledTooltip>
  )
}
