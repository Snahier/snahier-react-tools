import { ShimmerEffect } from "../../components/core/ShimmerEffect"
import { Header } from "../../components/Header"
import { Content, StyledPageShimmerEffect } from "./styles"

interface PageShimmerEffectProps {}

export const PageShimmerEffect: React.FC<PageShimmerEffectProps> = () => {
  return (
    <StyledPageShimmerEffect className="page">
      <Header />
      <h2>Shimmer Effect Component</h2>

      <Content>
        <ShimmerEffect width={250} height={250} />
        <ShimmerEffect width={250} height={250} circle color="lightblue" />
        <ShimmerEffect width={250} height={250} circle color="lightgreen" />
      </Content>
    </StyledPageShimmerEffect>
  )
}
