import { InputHTMLAttributes, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  color?: string
  error?: string
  helper?: string
  readOnly?: boolean
}

export const TextField = ({
  color = "blue",
  placeholder,
  label,
  error,
  helper,
  readOnly,
  ...props
}: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleFocus = () => {
    setIsActive(true)
  }
  const handleBlur = () => {
    const hasValue = inputRef.current!.value.length > 0
    setIsActive(hasValue ? true : false)
  }

  useEffect(() => {
    if (readOnly) setIsActive(true)
    if (error?.length) setIsActive(true)
  }, [error, readOnly])

  return (
    <StyledTextField>
      <InputContainer color={color}>
        <Input
          {...props}
          ref={inputRef}
          type="text"
          color={color}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={!isActive ? undefined : placeholder}
          readOnly={readOnly}
        />

        <OutlineWrapper
          isActive={isActive}
          color={color}
          error={error}
          helper={helper}
        >
          <OutlineStart />
          <OutlineLabel isActive={isActive}>
            <Label isActive={isActive}>{label}</Label>
          </OutlineLabel>
          <OutlineEnd />
        </OutlineWrapper>
      </InputContainer>

      <InfoContainer>
        {!error && helper ? <HelperText>{helper}</HelperText> : null}
        {error ? <Error>{error}</Error> : null}
      </InfoContainer>
    </StyledTextField>
  )
}

const StyledTextField = styled.div``

const InputContainer = styled.div`
  position: relative;

  margin-top: 0.5rem;
  width: max-content;
`

interface InputProps {
  color: string
}
const Input = styled.input<InputProps>`
  ${({ color, readOnly }) => css`
    width: 100%;
    padding: 0.75rem;

    outline: none;
    border: none;
    background: transparent;

    caret-color: ${readOnly ? "transparent" : color};
    ${readOnly &&
    css`
      pointer-events: none;
      color: gray;
    `}
  `}
`

interface OutlineWrapperProps {
  isActive: boolean
  color: string
  error?: string
  helper?: string
}
const OutlineWrapper = styled.div<OutlineWrapperProps>`
  ${({ isActive, color, error, helper }) => css`
    position: absolute;
    inset: 0;
    pointer-events: none;

    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 0.75rem auto 1fr;
    align-items: center;

    color: ${isActive ? color : "gray"};
    ${error && "color: red;"}
  `}
`

const OutlineStart = styled.div`
  width: 0.75rem;
  height: 100%;

  border: 1px solid currentColor;
  border-right: none;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`

interface OutlineLabelProps {
  isActive: boolean
}
const OutlineLabel = styled.div<OutlineLabelProps>`
  ${({ isActive }) => css`
    display: flex;
    flex-direction: column;

    width: max-content;
    height: 100%;

    border: 1px solid currentColor;
    border-top: ${isActive ? "none" : "1px solid currentColor"};
    border-right: none;
    border-left: none;
  `}
`

interface LabelProps {
  isActive: boolean
}
const Label = styled.label<LabelProps>`
  ${({ isActive }) => css`
    transition: 0.15s;
    transform: translateY(${isActive ? "-50%" : 0});

    display: flex;
    align-items: center;
    flex: ${isActive ? 0 : 1};

    height: max-content;
    padding: 0 0.25rem;

    font-size: ${isActive ? "0.75rem" : "1rem"};
  `}
`

const OutlineEnd = styled.div`
  height: 100%;

  border: 1px solid currentColor;
  border-left: none;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`

const InfoContainer = styled.div``

const HelperText = styled.span`
  ${({ theme }) => css`
    margin-left: 0.75rem;

    color: gray;
    font-size: 0.75rem;
  `}
`

const Error = styled(HelperText)`
  margin-left: 0.75rem;

  color: red;
  font-size: 0.75rem;
`
