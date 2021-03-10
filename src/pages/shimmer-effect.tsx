import styled from "styled-components/macro"
import { ShimmerEffect } from "../components/core/ShimmerEffect"
import { Header } from "../components/templates/Header"

interface PageShimmerEffectProps {}

export default function PageShimmerEffect({
  ...props
}: PageShimmerEffectProps) {
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

const StyledPageShimmerEffect = styled.div``

const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
`
