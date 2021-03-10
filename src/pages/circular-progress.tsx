import { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { CircularProgress } from "../components/core/CircularProgress"
import { Header } from "../components/templates/Header"
import { randomIntegerBetween } from "../helpers/randomIntegerBetween"

interface PageCircularProgressProps {}

export default function PageCircularProgress({ ...props }: PageCircularProgressProps) {
  const [value, setValue] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(randomIntegerBetween(0, 100))
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [value])

  return (
    <StyledPageCircularProgress className="page">
      <Header />
      <h2>Circular Progress Component</h2>
      <p>
        This component is composed one of 2 required variations.
        <br />
        determinate or indeterminate
        <br />
      </p>

      <h3>Determinate</h3>
      <p>Must receive a value property in order to work</p>

      <h3>Indeterminate</h3>
      <p>
        Does not require a value property to work, it'll just spin like a loader
      </p>

      <h3>Other props</h3>
      <p>It can receive size, line thickness, round line, color</p>

      <Content>
        <ContentItem>
          <h3>Determinate Progress</h3>
          <span>value: {value}%</span>
          <CircularProgress
            color="red"
            variant="determinate"
            value={value}
            size={125}
          />
        </ContentItem>

        <ContentItem>
          <h3>Round property</h3>
          <span>value: {value}%</span>
          <CircularProgress
            color="#0000ff"
            variant="determinate"
            size={150}
            value={value}
            round
          />
        </ContentItem>

        <ContentItem>
          <h3>Indeterminate progress</h3>
          <CircularProgress
            color="rgba(0,256,0, 0.5)"
            variant="indeterminate"
            size={100}
          />
        </ContentItem>

        <ContentItem>
          <h3>Disable shrink</h3>
          <CircularProgress
            color="#00ff00"
            variant="indeterminate"
            size={100}
            disableShrink
          />
        </ContentItem>
      </Content>
    </StyledPageCircularProgress>
  )
}

const StyledPageCircularProgress = styled.div``

const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
`

const ContentItem = styled.div`
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 1rem;
`

