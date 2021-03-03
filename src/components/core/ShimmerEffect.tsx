import { lighten } from "polished"
import styled, { css, keyframes } from "styled-components/macro"

interface ShimmerEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string
  height?: number | string
  gridArea?: string
  color?: string
  circle?: boolean
}

export const ShimmerEffect: React.FC<ShimmerEffectProps> = ({
  width = "100%",
  height = "100%",
  gridArea,
  color = "#d3d3d3",
  circle = false,
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
      circle={circle}
    >
      <GradientWrapper color={color} />
    </StyledShimmerEffect>
  )
}

const animations = {
  loading: keyframes`
    0% {
      left: -45%;
    }
    100% {
      left: 100%;
    }
  `,
}

interface StyledShimmerEffectProps {
  color: string
  circle: boolean
}

const StyledShimmerEffect = styled.div<StyledShimmerEffectProps>`
  ${({ color, circle }) => css`
    position: relative;
    background-color: ${color};
    overflow: hidden;

    ${circle &&
    css`
      border-radius: 100%;
    `}
  `}
`
interface GradientProps {
  color: string
}
const GradientWrapper = styled.div<GradientProps>`
  ${({ color }) => {
    return css`
      position: absolute;
      left: -50%;
      height: 100%;
      width: 50%;

      background: linear-gradient(
        to left,
        ${lighten(0.005, color)},
        ${lighten(0.03, color)},
        ${lighten(0.06, color)},
        ${lighten(0.03, color)},
        ${lighten(0.005, color)}
      );

      animation: ${animations.loading} 1.5s infinite;
      z-index: 45;
    `
  }}
`
