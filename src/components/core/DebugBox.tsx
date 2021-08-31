import { HTMLAttributes, useEffect, useRef, useState } from "react"
import { useDrag } from "react-use-gesture"
import styled, { css } from "styled-components"

interface DebugWrapperProps extends HTMLAttributes<HTMLDivElement> {
  placementMode?: "fixed" | "absolute"
  position?: {
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
  }
  data: object
}

export const DebugBox = ({
  placementMode = "fixed",
  data,
  ...props
}: DebugWrapperProps) => {
  const [isActive, setIsActive] = useState(true)

  const boxRef = useRef<HTMLDivElement>(null)
  const [boxPosition, setBoxPosition] = useState<[number, number]>([0, 0])
  useEffect(() => {
    const { top, left } = boxRef.current?.getBoundingClientRect() as DOMRect
    setBoxPosition([left, top])
  }, [])

  const dragGesture = useDrag((state) => {
    boxRef.current!.style.left = String(boxPosition[0] + state.offset[0]) + "px"
    boxRef.current!.style.top = String(boxPosition[1] + state.offset[1]) + "px"
  })

  return (
    <StyledDebugBox
      {...props}
      {...dragGesture()}
      ref={boxRef}
      style={{
        position: placementMode,
        ...props.style,
      }}
    >
      <TitleWrapper>
        <Title>Debug box</Title>
        <ToggleButton
          isActive={isActive}
          onClick={() => setIsActive((prev) => !prev)}
        />
      </TitleWrapper>

      {isActive && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </StyledDebugBox>
  )
}

const StyledDebugBox = styled.div`
  z-index: 1000000;

  padding: 0.5rem;

  background: rgba(0, 0, 0, 0.8);

  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px black;

  user-select: none;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const Title = styled.div`
  font-size: 0.65rem;
`

type ToggleButtonProps = {
  isActive: boolean
}
const ToggleButton = styled.button<ToggleButtonProps>`
  ${({ isActive }) => css`
    width: 1rem;
    height: 1rem;

    outline: none;
    border: none;
    border-radius: 50%;
    background: ${isActive ? "crimson" : "lime"};

    font-size: 0;
  `}
`
