import { useState } from "react"
import { CircularProgress } from "../../components/CircularProgress"
import { Header } from "../../components/Header"
import { StyledPageCircularProgress } from "./styles"

interface PageCircularProgressProps {}

export const PageCircularProgress: React.FC<PageCircularProgressProps> = () => {
  const [value, setValue] = useState(0)

  return (
    <StyledPageCircularProgress className="page">
      <Header />
      <h2>Circular Progress Component</h2>

      <CircularProgress
        color="primary"
        variant="determinate"
        value={value}
        size={100}
      />

      <input
        type="text"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </StyledPageCircularProgress>
  )
}
