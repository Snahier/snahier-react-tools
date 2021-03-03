import { DoubleRange } from "components/core/Inputs/DoubleRange"
import { Header } from "components/pages/Header"
import { useState } from "react"
import styled from "styled-components/macro"

interface PageDoubleRangeProps {}

export const PageDoubleRange: React.FC<PageDoubleRangeProps> = () => {
  const [range, setRange] = useState({
    min: 0,
    max: 100,
    value: [0, 100],
  })

  const setValue = (min: number, max: number) => {
    setRange({
      ...range,
      value: [min, max],
    })
  }

  return (
    <StyledPageDoubleRange className="page">
      <Header />
      <h2>Double Range Component</h2>

      <DoubleRange
        min={range.min}
        max={range.max}
        value={range.value}
        onSetValue={setValue}
      />
    </StyledPageDoubleRange>
  )
}

const StyledPageDoubleRange = styled.div``
