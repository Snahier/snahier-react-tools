import { useEffect, useRef, useState } from "react"
import { ParentWrapper, StyledTooltip, TooltipContent } from "./styles"

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  clickMode?: boolean
  position?: "top" | "bottom" | "left" | "right"
  arrow?: boolean
}

export const Tooltip: React.FC<TooltipProps> = ({
  clickMode,
  position = "top",
  arrow,
  ...props
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  const [isActive, setIsActive] = useState(false)
  const [rootRect, setRootRect] = useState<DOMRectReadOnly>()
  const [contentRect, setContentRect] = useState<DOMRectReadOnly>()

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

  useEffect(() => {
    const rootElement = tooltipRef.current?.children[0]
    const contentElement = tooltipRef.current?.children[1]

    if (!rootRect) {
      const rootRectData = rootElement?.getBoundingClientRect() as DOMRectReadOnly
      setRootRect(rootRectData)
    }

    if (!contentRect) {
      const contentRectData = contentElement?.getBoundingClientRect() as DOMRectReadOnly
      setContentRect(contentRectData)
    }
  }, [tooltipRef, isActive, contentRect, rootRect])

  const centerVertically = rootRect && rootRect.top + rootRect.height / 2
  const centerHorizontally = rootRect && rootRect.left + rootRect.width / 2

  const positionTop =
    rootRect && contentRect && rootRect.top - contentRect.height - 16
  const positionBottom = rootRect && rootRect.top + rootRect.height + 16
  const positionLeft =
    rootRect && contentRect && rootRect.left - contentRect.width - 16
  const positionRight = rootRect && rootRect.left + rootRect.width + 16

  const positions = {
    top: {
      top: positionTop,
      left: centerHorizontally,
      transform: "translate(-50%, 0)",
    },
    bottom: {
      top: positionBottom,
      left: centerHorizontally,
      transform: "translate(-50%, 0)",
    },
    left: {
      top: centerVertically,
      left: positionLeft,
      transform: "translate(0, -50%)",
    },
    right: {
      top: centerVertically,
      left: positionRight,
      transform: "translate(0, -50%)",
    },
  }

  return (
    <StyledTooltip {...props} ref={tooltipRef}>
      <ParentWrapper
        onMouseEnter={() => hoverMode && activate()}
        onMouseLeave={() => hoverMode && deactivate()}
        onClick={() => clickMode && toggleTooltip()}
      >
        {props.children}
      </ParentWrapper>

      <TooltipContent
        position={position}
        arrow={arrow}
        style={{
          visibility: isActive ? "initial" : "hidden",
          top: positions[position].top,
          left: positions[position].left,
          transform: positions[position].transform,
        }}
      >
        <div style={{ width: "max-content" }}>Tooltip content example</div>
        <div style={{ width: "max-content" }}>Tooltip content example</div>
        <div style={{ width: "max-content" }}>Tooltip content example</div>
      </TooltipContent>
    </StyledTooltip>
  )
}
