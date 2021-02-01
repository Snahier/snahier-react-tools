import { useState } from "react"
import { CircularProgress } from "../../components/CircularProgress"
import { Header } from "../../components/Header"
import { Content, StyledPageCircularProgress } from "./styles"

interface PageCircularProgressProps {}

export const PageCircularProgress: React.FC<PageCircularProgressProps> = () => {
  const [value, setValue] = useState(50)

  return (
    <StyledPageCircularProgress className="page">
      <Header />
      <h2>Circular Progress Component</h2>

      <input
        type="text"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        style={{
          maxWidth: "20ch",
        }}
      />
      <Content>
        <CircularProgress
          color="primary"
          variant="determinate"
          value={value}
          size={50}
        />

        <CircularProgress color="primary" variant="indeterminate" />
      </Content>
    </StyledPageCircularProgress>
  )
}
