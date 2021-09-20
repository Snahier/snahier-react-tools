import { ArrowDropDown } from "@styled-icons/material"
import { HTMLAttributes, useCallback, useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

const AnimatedArrow = animated(ArrowDropDown)

interface ExpanderCollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
}

export const ExpanderCollapsible = ({ title, children, ...props }: ExpanderCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = useCallback(() => setIsOpen((prev) => !prev), [])

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

  const iconSpring = useSpring({ rotateZ: isOpen ? 180 : 0 })
  const contentSpring = useSpring({
    height: isOpen ? contentHeight : 0,
  })

  return (
    <StyledExpanderCollapsible {...props}>
      <Header>
        <span>{title}</span>
        <Button onClick={toggleIsOpen}>
          <AnimatedArrow size="1rem" style={iconSpring} />
        </Button>
      </Header>

      <Content ref={contentRef} style={contentSpring}>
        {children}
      </Content>
    </StyledExpanderCollapsible>
  )
}

type StyledExpanderCollapsibleProps = {}
const StyledExpanderCollapsible = styled.div<StyledExpanderCollapsibleProps>`
  background: blue;
`

type HeaderProps = {}
const Header = styled.div<HeaderProps>`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 0.5rem;

  padding: 0.5rem 1rem;

  background: green;
`

type ButtonProps = {}
const Button = styled.div<ButtonProps>`
  border: 1px solid currentColor;
  border-radius: 50%;

  font-size: 0;

  color: white;
`

type ContentProps = {}
const Content = styled(animated.div)<ContentProps>`
  overflow: hidden;
`
