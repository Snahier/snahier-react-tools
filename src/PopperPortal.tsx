import { Placement } from "@popperjs/core"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { usePopper } from "react-popper"
import styled from "styled-components"

type PopperPortalProps = {
  targetRef: React.RefObject<any>
  placement?: Placement
  offset?: [number, number]

  clickMode?: boolean

  children: React.ReactNode
}

export const PopperPortal = ({
  targetRef,
  placement,
  offset = [0, 0],
  children,
  ...props
}: PopperPortalProps) => {
  // SSR related logic
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Popper related logic
  const popperRef = useRef(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>()
  const { styles, attributes } = usePopper(
    targetRef.current,
    popperRef.current,
    {
      modifiers: [
        { name: "arrow", options: { element: arrowElement } },
        {
          name: "offset",
          options: { offset },
        },
      ],
      placement,
    }
  )

  // Tooltip related logic
  const [isOpen, setIsOpen] = useState(false)

  const togglePopper = () => setIsOpen((prev) => !prev)

  // Open and close logic
  useEffect(() => {
    if (targetRef && targetRef.current) {
      const target = targetRef.current

      targetRef.current.addEventListener("click", togglePopper)
      return () => target.removeEventListener("click", togglePopper)
    }
  }, [targetRef])

  return isMounted && isOpen ? (
    <StyledPopperPortal {...props}>
      {createPortal(
        <div ref={popperRef} style={styles.popper} {...attributes.popper}>
          {children}
          <div ref={setArrowElement} style={styles.arrow} />
        </div>,
        document.body
      )}
    </StyledPopperPortal>
  ) : null
}

const StyledPopperPortal = styled.div``
