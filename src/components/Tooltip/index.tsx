import { useState } from "react"
import {
  Position,
  StyledTooltip,
  TooltipChildWrapper,
  TooltipContentWrapper,
} from "./styles"

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  clickMode?: boolean
  position?: Position
}

export const Tooltip: React.FC<TooltipProps> = ({
  clickMode,
  position = Position.TOP,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false)
  const hoverMode = !clickMode

  function toggleTooltip() {
    setIsActive(!isActive)
  }

  return (
    <StyledTooltip {...props}>
      {isActive && (
        <TooltipContentWrapper position={position}>
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
