import { ReactNode, useRef, useState } from "react"
import { usePopper } from "react-popper"
import {
  PopperContainer,
  RootElementWrapper,
  StyledPopperTooltip,
} from "./styles"

interface PopperTooltipProps {
  placement?: "auto" | "top" | "bottom" | "right" | "left"
  content: ReactNode
}

export const PopperTooltip: React.FC<PopperTooltipProps> = ({
  placement = "top",
  ...props
}) => {
  const boxRef = useRef(null)
  const tooltipRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  const { styles, attributes } = usePopper(boxRef.current, tooltipRef.current, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 16],
        },
      },
    ],
    placement,
  })

  const toggleTooltip = () => setIsOpen(!isOpen)

  return (
    <StyledPopperTooltip>
      <RootElementWrapper ref={boxRef} onClick={toggleTooltip}>
        {props.children}
      </RootElementWrapper>

      <PopperContainer
        ref={tooltipRef}
        isOpen={isOpen}
        style={styles.popper}
        {...attributes.popper}
      >
        {props.content}
      </PopperContainer>
    </StyledPopperTooltip>
  )
}
