import { ShimmerEffect } from "../../components/core/ShimmerEffect"
import { Header } from "../../components/Header"
import { StyledPageShimmerEffect } from "./styles"

interface PageShimmerEffectProps {}

export const PageShimmerEffect: React.FC<PageShimmerEffectProps> = () => {
  return (
    <StyledPageShimmerEffect className="page">
      <Header />
      <h2>Shimmer Effect Component</h2>

      <ShimmerEffect width={500} height={500} />
    </StyledPageShimmerEffect>
  )
}
