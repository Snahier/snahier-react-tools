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

  const toggleTooltip = () => setIsActive(!isActive)
  const activate = () => setIsActive(true)
  const deactivate = () => setIsActive(false)

  return (
    <StyledTooltip {...props}>
      {isActive && (
        <TooltipContentWrapper position={position}>
          <div style={{ width: "max-content" }}>Tooltip content example</div>
          <div style={{ width: "max-content" }}>Tooltip content example</div>
          <div style={{ width: "max-content" }}>Tooltip content example</div>
        </TooltipContentWrapper>
      )}

      <TooltipChildWrapper
        onMouseEnter={() => hoverMode && activate()}
        onMouseLeave={() => hoverMode && deactivate()}
        onClick={() => clickMode && toggleTooltip()}
      >
        {props.children}
      </TooltipChildWrapper>
    </StyledTooltip>
  )
}
