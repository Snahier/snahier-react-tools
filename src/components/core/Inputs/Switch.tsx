import { darken, lighten, rgba } from "polished"
import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from "react"
import styled, { css } from "styled-components"

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "checkbox"
  color?: string
}

export const Switch = forwardRef(
  (
    { type = "checkbox", checked = false, disabled = false, color = "blue", ...props }: SwitchProps,
    ref: ForwardedRef<HTMLInputElement> | null
  ) => {
    const [isChecked, setIsChecked] = useState(checked ?? false)

    const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      if (disabled) return null
      if (props.onClick) props.onClick(event)
      setIsChecked((previous) => !previous)
    }

    return (
      <StyledSwitch onClick={handleClick}>
        <Background color={color} checked={isChecked} disabled={disabled}>
          <CircleWrapper checked={isChecked}>
            <Circle checked={isChecked} color={color} />
          </CircleWrapper>
        </Background>

        <Input {...props} ref={ref} type={type} disabled={disabled} />
      </StyledSwitch>
    )
  }
)

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;

  width: 2rem;
  max-width: 2rem;
  height: 1.25rem;
  max-height: 1.25rem;
`

type BackgroundProps = {
  checked: boolean
  color: string
  disabled: boolean
}
const Background = styled.div<BackgroundProps>`
  ${({ checked, color, disabled }) => css`
    position: relative;

    width: 100%;
    height: 1rem;

    background: ${checked ? lighten(0.15, color) : "darkgray"};

    border-radius: 2rem;

    ${disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
  `}
`

const Input = styled.input`
  appearance: none;
  position: absolute;
  width: 2rem;
  height: 1.25rem;

  &::before {
    position: absolute;
    content: "";
    display: block;

    width: 100%;
    height: 100%;
  }
`

type CircleWrapperProps = {
  checked: boolean
}
const CircleWrapper = styled.div<CircleWrapperProps>`
  ${({ checked }) => css`
    transition: 0.2s ease-out;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: ${checked ? "calc(100% - 1.25rem)" : 0};
  `}
`

type CircleProps = {
  checked: boolean
  color: string
}
const Circle = styled.div<CircleProps>`
  ${({ checked, color }) => css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.25rem;
    height: 1.25rem;

    &:hover {
      transition: 0.2s ease-out;
      &::before {
        content: "";
        position: absolute;
        pointer-events: none;

        display: block;

        width: 2.5rem;
        height: 2.5rem;

        border-radius: 50%;
        background: ${rgba(checked ? lighten(0.3, color) : "white", 0.5)};
      }
    }
    &::after {
      transition: 0.2s ease-out;
      content: "";
      position: absolute;

      display: block;

      width: 1.25rem;
      height: 1.25rem;

      box-shadow: 0 2px 4px ${darken(checked ? 0.2 : 0, checked ? color : "white")};
      border-radius: 50%;
      background: ${checked ? color : "white"};
    }
  `}
`
