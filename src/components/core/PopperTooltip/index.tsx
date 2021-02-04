import { ReactNode, useEffect, useRef, useState } from "react"
import { usePopper } from "react-popper"
import {
  Arrow,
  PopperContainer,
  RootElementWrapper,
  StyledPopperTooltip,
} from "./styles"

interface PopperTooltipProps {
  content: ReactNode
  placement?: "top" | "bottom" | "right" | "left"
  arrow?: boolean
  clickMode?: boolean
}

export const PopperTooltip: React.FC<PopperTooltipProps> = ({
  placement = "top",
  arrow,
  clickMode,
  ...props
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null)

  const [boxRef, setBoxRef] = useState<HTMLDivElement | null>(null)
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null)
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)

  const { styles, attributes } = usePopper(boxRef, tooltipRef, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 16],
        },
      },
      {
        name: "arrow",
        options: {
          element: arrowRef,
        },
      },
    ],
    placement,
  })

  const hoverMode = !clickMode

  const toggleTooltip = () => setIsOpen(!isOpen)
  const activateTooltip = () => setIsOpen(true)
  const deactivateTooltip = () => setIsOpen(false)

  useEffect(() => {
    const deactivateOnOutsideClick = (event: MouseEvent) => {
      !componentRef.current?.contains(event.target as Node) &&
        deactivateTooltip()
    }

    clickMode && isOpen
      ? document.addEventListener("click", deactivateOnOutsideClick)
      : document.removeEventListener("click", deactivateOnOutsideClick)

    return () => {
      document.removeEventListener("click", deactivateOnOutsideClick)
    }
  }, [isOpen, clickMode])

  return (
    <StyledPopperTooltip id="popper" ref={componentRef}>
      <RootElementWrapper
        ref={setBoxRef}
        onClick={() => clickMode && toggleTooltip()}
        onMouseEnter={() => hoverMode && activateTooltip()}
        onMouseLeave={() => hoverMode && deactivateTooltip()}
      >
        {props.children}
      </RootElementWrapper>

      {isOpen && (
        <PopperContainer
          id="tooltip"
          ref={setTooltipRef}
          isOpen={isOpen}
          style={styles.popper}
          {...attributes.popper}
        >
          {props.content}

          <Arrow
            id="arrow"
            className="arrow"
            active={arrow}
            ref={setArrowRef}
            style={styles.arrow}
            data-popper-arrow
          />
        </PopperContainer>
      )}
    </StyledPopperTooltip>
  )
}
