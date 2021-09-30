import { Check } from "@styled-icons/material-rounded"
import { useForwardedRef } from "hooks/useForwardedRef"
import { ForwardedRef, forwardRef, InputHTMLAttributes, useEffect, useState } from "react"
import styled from "styled-components"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef(
  ({ checked, ...props }: CheckboxProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    // Force re-render once to prevent ref value not being shown properly.
    const [, setIsMounted] = useState(false)
    useEffect(() => setIsMounted(true), [])

    const innerRef = useForwardedRef(forwardedRef)

    const handleClick = () => innerRef.current?.click()

    return (
      <StyledCheckbox>
        <Input ref={innerRef} type="checkbox" {...props} />

        <Circle onClick={handleClick}>{(checked || innerRef.current?.checked) && <Check />}</Circle>
      </StyledCheckbox>
    )
  }
)

type StyledCheckboxProps = {}
const StyledCheckbox = styled.div<StyledCheckboxProps>``

type InputProps = {}
const Input = styled.input<InputProps>`
  display: none;
`

type CircleProps = {}
const Circle = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 1.5rem;

  border: 2px solid white;
  border-radius: 50%;
  background: transparent;

  color: white;
`
