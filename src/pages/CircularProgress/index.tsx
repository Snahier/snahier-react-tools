import { CircularProgress } from "../../components/CircularProgress"
import { Header } from "../../components/Header"
import { StyledPageCircularProgress } from "./styles"

interface PageCircularProgressProps {}

export const PageCircularProgress: React.FC<PageCircularProgressProps> = () => {
  return (
    <StyledPageCircularProgress className="page">
      <Header />
      <h2>Circular Progress Component</h2>

      <CircularProgress color="primary" variant="indeterminate" />
    </StyledPageCircularProgress>
  )
}
