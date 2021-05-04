import { Placement } from "@popperjs/core"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { usePopper } from "react-popper"
import styled, { css } from "styled-components"

type PopperPortalProps = {
  targetRef: React.RefObject<any>
  placement?: Placement
  offset?: [number, number]

  clickMode?: boolean

  arrow?: boolean

  children: React.ReactNode
}

export const PopperPortal: React.FC<PopperPortalProps> = ({
  targetRef,
  placement,
  offset = [0, 0],
  clickMode = false,
  arrow = false,
  children,
  ...props
}) => {
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
        {
          name: "arrow",
          options: { element: arrowElement },
        },
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

  // Popper logic
  const hoverMode = !clickMode

  // Toggle popper logic
  useEffect(() => {
    if (targetRef && targetRef.current && clickMode) {
      const target = targetRef.current

      targetRef.current.addEventListener("click", togglePopper)

      return () => target.removeEventListener("click", togglePopper)
    }
  }, [clickMode, targetRef])

  // Toggle off on click outside popper
  useEffect(() => {
    if (clickMode) {
      const deactivateOnOutsideClick = (event: MouseEvent) => {
        !popperRef.current?.contains(event.target as Node) && deactivatePopper()
      }

      if (isOpen) {
        setTimeout(() => {
          document.addEventListener("click", deactivateOnOutsideClick)
        }, 1)
      } else {
        document.removeEventListener("click", deactivateOnOutsideClick)
      }

      return () => {
        document.removeEventListener("click", deactivateOnOutsideClick)
      }
    }
  }, [clickMode, isOpen])

  // Toggle on or off on hover
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
        <PopperWrapper
          ref={popperRef}
          style={styles.popper}
          {...attributes.popper}>
          {children}

          <Arrow
            disabled={!arrow}
            ref={setArrowElement}
            style={styles.arrow}
            data-popper-arrow
          />
        </PopperWrapper>,
        document.body
      )}
    </StyledPopperPortal>
  ) : null
}

type ArrowProps = {
  disabled: boolean
}
const Arrow = styled.div<ArrowProps>`
  ${({ disabled }) => css`
    position: absolute;
    z-index: -1;

    opacity: ${disabled ? 0 : 1};

    &::before {
      content: "";
      position: absolute;
      transform: translate(-50%, -50%) rotate(45deg);

      pointer-events: none;

      width: 0;
      height: 0;

      background: #fff;
    }

    &::before {
      border: 4px solid transparent;
    }
  `}
`

const PopperWrapper = styled.div`
  &[data-popper-placement^="top"] > [data-popper-arrow] {
    bottom: 0;
  }

  &[data-popper-placement^="bottom"] > [data-popper-arrow] {
    top: 0;
  }

  &[data-popper-placement^="left"] > [data-popper-arrow] {
    right: 0;
  }

  &[data-popper-placement^="right"] > [data-popper-arrow] {
    left: 0;
  }
`

const StyledPopperPortal = styled.div``
