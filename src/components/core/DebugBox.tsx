import { HTMLAttributes, useState } from "react"
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
  position = { top: 0, left: 0 },
  data,
  ...props
}: DebugWrapperProps) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <StyledDebugBox
      {...props}
      style={{
        position: placementMode,
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
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
  padding: 0.5rem;

  background: rgba(0, 0, 0, 0.8);

  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px black;
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
