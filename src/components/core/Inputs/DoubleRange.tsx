import { useState } from "react"
import styled, { css } from "styled-components/macro"

interface DoubleRangeProps {
  min: number
  max: number
  value: Array<number>
  onSetValue: (min: number, max: number) => void
}

export const DoubleRange: React.FC<DoubleRangeProps> = ({
  min,
  max,
  value,
  onSetValue,
  ...props
}) => {
  const [firstValue, setFirstValue] = useState(value[0])
  const [secondValue, setSecondValue] = useState(value[1])

  const handleSetMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(event.target.value)
    setFirstValue(newMin)
  }

  const handleSetMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(event.target.value)
    setSecondValue(newMax)
  }

  const updateValues = () => {
    onSetValue(
      Math.min(firstValue, secondValue),
      Math.max(firstValue, secondValue)
    )
  }

  return (
    <StyledDoubleRange {...props}>
      <StartBall />
      <RangeLine />
      <EndBall />

      <InputWrapper>
        <FirstInput
          type="range"
          name="min"
          min={min}
          max={max}
          defaultValue={value[0]}
          onChange={handleSetMin}
          onMouseUp={updateValues}
          onTouchEnd={updateValues}
        />
      </InputWrapper>

      <InputWrapper>
        <SecondInput
          type="range"
          name="max"
          min={min}
          max={max}
          defaultValue={value[1]}
          onChange={handleSetMax}
          onMouseUp={updateValues}
          onTouchEnd={updateValues}
        />
      </InputWrapper>
    </StyledDoubleRange>
  )
}

const StyledDoubleRange = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 15rem;
  height: 1.25rem;
`

const RangeLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;
  height: 2px;

  border-radius: 1rem;
  background: red;
`

const startEndBalls = css`
  content: "";

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 0.5rem;
  height: 0.5rem;

  border-radius: 100%;
  background: red;
`

const StartBall = styled.div`
  ${startEndBalls}
`

const EndBall = styled.div`
  ${startEndBalls}
  right: 0;
`

const sliderShared = css`
  appearance: none;

  position: relative;

  width: 100%;
  height: 4px;

  pointer-events: none;
  outline: none;
  border-radius: 1rem;
  background: none;

  &::-webkit-slider-thumb {
    position: relative;
    z-index: 1;

    appearance: none;

    pointer-events: all;
    width: 1.25rem;
    height: 1.25rem;

    cursor: pointer;
    background: green;
    border-radius: 50%;
  }
`

const InputWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;

  width: 100%;

  pointer-events: none;
`

const FirstInput = styled.input`
  ${sliderShared}
`

const SecondInput = styled.input`
  ${sliderShared}
`
