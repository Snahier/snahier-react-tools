import { Placement } from "@popperjs/core"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { usePopper } from "react-popper"
import styled, { css } from "styled-components"

interface PopperPortalWrapperProps {
  placement?: Placement
  offset?: [number, number]
  clickMode?: boolean
  arrow?: boolean

  content: React.ReactNode
  children: React.ReactNode
}

export const PopperPortalWrapper = ({
  placement,
  offset = [0, 0],
  clickMode = false,
  arrow = false,
  content,
  children,
  ...props
}: PopperPortalWrapperProps) => {
  // SSR related logic
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Popper related logic
  const targetRef = useRef<HTMLDivElement>(null)
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

  // Toggle off on click outside popper
  useEffect(() => {
    if (clickMode) {
      const deactivateOnOutsideClick = (event: MouseEvent | TouchEvent) => {
        if (
          !popperRef.current?.contains(event.target as Node) &&
          !targetRef.current?.contains(event.target as Node)
        ) {
          deactivatePopper()
        }
      }

      if (isOpen) {
        setTimeout(() => {
          document.addEventListener("mousedown", deactivateOnOutsideClick)
          document.addEventListener("touchstart", deactivateOnOutsideClick)
        }, 1)
      } else {
        document.removeEventListener("mousedown", deactivateOnOutsideClick)
        document.removeEventListener("touchstart", deactivateOnOutsideClick)
      }

      return () => {
        document.removeEventListener("mousedown", deactivateOnOutsideClick)
        document.removeEventListener("touchstart", deactivateOnOutsideClick)
      }
    }
  }, [clickMode, isOpen])

  return isMounted ? (
    <StyledPopperPortalWrapper {...props}>
      <Target
        ref={targetRef}
        onClick={() => clickMode && togglePopper()}
        onMouseEnter={() => hoverMode && activatePopper()}
        onMouseLeave={() => hoverMode && deactivatePopper()}
      >
        {children}
      </Target>
      {isOpen &&
        createPortal(
          <PopperWrapper
            ref={popperRef}
            style={styles.popper}
            {...attributes.popper}
          >
            {content}

            <Arrow
              disabled={!arrow}
              ref={setArrowElement}
              style={styles.arrow}
              data-popper-arrow
            />
          </PopperWrapper>,
          document.body
        )}
    </StyledPopperPortalWrapper>
  ) : null
}

const StyledPopperPortalWrapper = styled.div``

const Target = styled.div``

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
