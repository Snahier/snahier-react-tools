import { GradientWrapper, StyledShimmerEffect } from "./styles"

interface ShimmerEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string
  height?: number | string
  gridArea?: string
  color?: string
}

export const ShimmerEffect: React.FC<ShimmerEffectProps> = ({
  width = "100%",
  height = "100%",
  gridArea,
  color = "#d3d3d3",
  ...props
}) => {
  return (
    <StyledShimmerEffect
      {...props}
      style={{
        ...props.style,
        width,
        height,
        gridArea,
      }}
      color={color}
    >
      <GradientWrapper color={color} />
    </StyledShimmerEffect>
  )
}
