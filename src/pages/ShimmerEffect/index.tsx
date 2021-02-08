import { Header } from "../../components/Header"
import { StyledPageShimmerEffect } from "./styles"

interface PageShimmerEffectProps {}

export const PageShimmerEffect: React.FC<PageShimmerEffectProps> = () => {
  return (
    <StyledPageShimmerEffect className="page">
      <Header />
      <h2>Shimmer Effect Component</h2>
    </StyledPageShimmerEffect>
  )
}
