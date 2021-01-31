import { ReactNode, useState } from "react"
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
}

export const PopperTooltip: React.FC<PopperTooltipProps> = ({
  placement = "top",
  arrow,
  ...props
}) => {
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

  const toggleTooltip = () => setIsOpen(!isOpen)

  return (
    <StyledPopperTooltip id="popper">
      <RootElementWrapper ref={setBoxRef} onClick={toggleTooltip}>
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
