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

    onSetValue(
      Math.min(firstValue, secondValue),
      Math.max(firstValue, secondValue)
    )
  }

  const handleSetMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(event.target.value)
    setSecondValue(newMax)

    onSetValue(
      Math.min(firstValue, secondValue),
      Math.max(firstValue, secondValue)
    )
  }

  return (
    <StyledDoubleRange {...props}>
      <MinInput
        type="range"
        name="min"
        min={min}
        max={max}
        defaultValue={value[0]}
        onChange={handleSetMin}
      />

      <MaxInput
        type="range"
        name="max"
        min={min}
        max={max}
        defaultValue={value[1]}
        onChange={handleSetMax}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 250,
          background: "white",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <pre>
          <p>Valor final</p>
          <code>{JSON.stringify(value, null, 2)}</code>
        </pre>
        <br />
        <pre>
          <code>
            {JSON.stringify(
              {
                min,
                max,
              },
              null,
              2
            )}
          </code>
        </pre>
        <pre>
          <code>
            {JSON.stringify(
              {
                firstValue,
                secondValue,
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
    </StyledDoubleRange>
  )
}

const StyledDoubleRange = styled.div`
  padding: 2rem;

  width: 15rem;

  background: white;
`

const sliderShared = css`
  appearance: none;

  position: relative;
  z-index: 0;

  width: 100%;
  height: 0.25rem;

  pointer-events: none;
  outline: none;
  border-radius: 1rem;
  background: red;

  &::-webkit-slider-thumb {
    position: relative;
    z-index: 1;

    appearance: none;

    pointer-events: all;
    width: 1rem;
    height: 1rem;

    cursor: pointer;
    background: green;
    border-radius: 50%;
  }
`

const startEndBalls = css`
  content: "";

  position: absolute;
  top: -50%;

  width: 0.5rem;
  height: 0.5rem;

  border-radius: 100%;
  background: #000;
`

const MinInput = styled.input`
  ${sliderShared}

  &::before {
    ${startEndBalls}
  }
`

const MaxInput = styled.input`
  ${sliderShared}

  &::after {
    ${startEndBalls}
    right: 0;
  }
`
