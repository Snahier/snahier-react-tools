import { StyledShimmerEffect } from "./styles"

interface ShimmerEffectProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ShimmerEffect: React.FC<ShimmerEffectProps> = () => {
  return (
    <StyledShimmerEffect>
      <div>StyledShimmerEffect Component</div>
    </StyledShimmerEffect>
  )
}
