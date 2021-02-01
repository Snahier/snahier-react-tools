import styled, { css, keyframes } from "styled-components/macro"

const circularRotate = keyframes`
  from {
    transform-origin: center;
  }
  to {
    transform: rotate(360deg);
  }
`

const circularDash = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`

const variants = {
  determinate: css`
    transform: rotate(-90deg);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  `,
  indeterminate: css`
    animation: ${circularRotate} 1.4s linear infinite;
  `,
}
const colors = {
  primary: css`
    color: "#0000ff";
  `,
  secondary: css`
    color: "#ff0000";
  `,
  inherit: css`
    color: inherit;
  `,
}
interface CircularProgressProps {
  variant: "indeterminate" | "determinate"
  color: "inherit" | "primary" | "secondary"
}
export const StyledCircularProgress = styled.div<CircularProgressProps>`
  ${({ variant = "indeterminate", color = "primary" }) => css`
    display: inline-block;

    ${variants[variant]}
    ${colors[color]}
  `}
`

export const Svg = styled.svg`
  display: block;
`

const circleVariants = {
  indeterminate: css`
    animation: ${circularDash} 1.4s ease-in-out infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px;
  `,
  determinate: css`
    transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  `,
}
interface CircleProps {
  variant: "determinate" | "indeterminate"
  disableShrink: boolean
}
export const Circle = styled.circle<CircleProps>`
  ${({ variant, disableShrink }) => css`
    stroke: currentColor;

    ${circleVariants[variant]}
    ${disableShrink && "animation: none;"}
  `}
`
