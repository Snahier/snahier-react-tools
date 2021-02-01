import { useEffect, useState } from "react"
import { CircularProgress } from "../../components/CircularProgress"
import { Header } from "../../components/Header"
import { randomIntegerBetween } from "../../helpers/randomIntegerBetween"
import { Content, StyledPageCircularProgress } from "./styles"

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

      <Content>
        <CircularProgress
          color="primary"
          variant="determinate"
          value={value}
          size={150}
        />

        <CircularProgress
          color="primary"
          variant="determinate"
          size={150}
          value={value}
          round
        />

        <CircularProgress color="primary" variant="indeterminate" size={100} />
      </Content>
    </StyledPageCircularProgress>
  )
}
