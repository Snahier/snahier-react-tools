import { useEffect, useRef, useState } from "react"
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
  const tooltipRef = useRef<HTMLDivElement>(null)

  const [isActive, setIsActive] = useState(false)

  const toggleTooltip = () => setIsActive(!isActive)
  const activate = () => setIsActive(true)
  const deactivate = () => setIsActive(false)

  const hoverMode = !clickMode

  useEffect(() => {
    const deactivateOnOutsideClick = (event: MouseEvent) => {
      !tooltipRef.current?.contains(event.target as Node) && deactivate()
    }

    clickMode && isActive
      ? document.addEventListener("click", deactivateOnOutsideClick)
      : document.removeEventListener("click", deactivateOnOutsideClick)

    return () => {
      document.removeEventListener("click", deactivateOnOutsideClick)
    }
  }, [isActive, clickMode])

  return (
    <StyledTooltip {...props} ref={tooltipRef}>
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
