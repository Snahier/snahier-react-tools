import { HTMLAttributes, useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

interface ExpanderCollapsibleAreaProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
}

export const ExpanderCollapsibleArea = ({ open, children, ...props }: ExpanderCollapsibleAreaProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    setContentHeight(contentRef.current!.scrollHeight)
  }, [])

  useEffect(() => {
    const observer = new MutationObserver((mutationList) => {
      mutationList.forEach((mutation) => {
        let heightSum = 0

        contentRef.current?.childNodes.forEach((child) => {
          heightSum += (child as HTMLElement).getBoundingClientRect().height
        })

        setContentHeight(heightSum)
      })
    })

    observer.observe(contentRef.current as Element, {
      attributeFilter: ["style"],
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  const contentSpring = useSpring({ height: open ? contentHeight : 0 })

  return (
    <StyledExpanderCollapsibleArea {...props}>
      <Content ref={contentRef} style={contentSpring}>
        {children}
      </Content>
    </StyledExpanderCollapsibleArea>
  )
}

type StyledExpanderCollapsibleAreaProps = {}
const StyledExpanderCollapsibleArea = styled.div<StyledExpanderCollapsibleAreaProps>`
  background: blue;
`

type ContentProps = {}
const Content = styled(animated.div)<ContentProps>`
  overflow: hidden;
`
