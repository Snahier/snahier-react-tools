import { useEffect, useState } from "react"
import { CircularProgress } from "../../components/CircularProgress"
import { Header } from "../../components/Header"
import { randomIntegerBetween } from "../../helpers/randomIntegerBetween"
import { Content, ContentItem, StyledPageCircularProgress } from "./styles"

interface PageCircularProgressProps {}

export const PageCircularProgress: React.FC<PageCircularProgressProps> = () => {
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
            color="primary"
            variant="determinate"
            value={value}
            size={150}
          />
        </ContentItem>

        <ContentItem>
          <h3>Round property</h3>
          <span>value: {value}%</span>
          <CircularProgress
            color="primary"
            variant="determinate"
            size={150}
            value={value}
            round
          />
        </ContentItem>

        <ContentItem>
          <h3>Indeterminate progress</h3>
          <CircularProgress
            color="primary"
            variant="indeterminate"
            size={100}
          />
        </ContentItem>
      </Content>
    </StyledPageCircularProgress>
  )
}
