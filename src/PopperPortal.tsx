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
  clickMode = false,
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
  const popperRef = useRef<HTMLDivElement>(null)
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
  const activatePopper = () => setIsOpen(true)
  const deactivatePopper = () => setIsOpen(false)

  // Open and close logic
  const hoverMode = !clickMode

  useEffect(() => {
    if (targetRef && targetRef.current && clickMode) {
      const target = targetRef.current

      targetRef.current.addEventListener("click", togglePopper)
      return () => target.removeEventListener("click", togglePopper)
    }
  }, [clickMode, targetRef])

  // useEffect(() => {
  //   const deactivateOnOutsideClick = (event: MouseEvent) => {
  //     !popperRef.current?.contains(event.target as Node) && deactivatePopper()
  //   }

  //   clickMode && isOpen
  //     ? document.addEventListener("click", deactivateOnOutsideClick)
  //     : document.removeEventListener("click", deactivateOnOutsideClick)

  //   return () => {
  //     document.removeEventListener("click", deactivateOnOutsideClick)
  //   }
  // }, [clickMode, isOpen])

  useEffect(() => {
    if (targetRef && targetRef.current && hoverMode) {
      const target = targetRef.current

      targetRef.current.addEventListener("mouseenter", activatePopper)
      targetRef.current.addEventListener("mouseleave", deactivatePopper)

      return () => {
        target.removeEventListener("mouseenter", activatePopper)
        target.removeEventListener("mouseleave", deactivatePopper)
      }
    }
  }, [hoverMode, targetRef])

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
