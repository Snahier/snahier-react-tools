import { useEffect, useState } from "react"
import styled, { css, keyframes } from "styled-components/macro"

const SIZE = 44

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: any
  className?: string
  color?: string
  disableShrink?: boolean
  size?: number | string
  round?: boolean
  thickness?: number
  value?: number
  variant?: "indeterminate" | "determinate"
}

export const CircularProgress = ({
  classes,
  className,
  color = "inherit",
  disableShrink = false,
  size = 40,
  thickness = 0.1,
  round = false,
  value = 0,
  variant = "indeterminate",
  ...props
}: CircularProgressProps) => {
  if (thickness < 0 || thickness > 1) throw new Error("Thickness must be a value between 0 and 1.")

  const [progressValue, setProgressValue] = useState(0)
  const formattedThickness = (thickness / (100 / 22)) * 100

  const circleStyle: React.CSSProperties = {}
  const rootStyle: React.CSSProperties = {}

  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - formattedThickness) / 2)
    circleStyle.strokeDasharray = circumference.toFixed(3)
    circleStyle.strokeDashoffset = `${(((100 - progressValue) / 100) * circumference).toFixed(3)}px`
  }

  useEffect(() => {
    setTimeout(() => {
      setProgressValue(value)
    }, 1)
  }, [value])

  return (
    <StyledCircularProgress
      aria-valuenow={value ? Math.round(value) : undefined}
      variant={variant}
      color={color}
      style={{ width: size, height: size, ...rootStyle }}
      role="progressbar"
      {...props}
    >
      <Svg viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
        <Circle
          variant={variant}
          round={round}
          disableShrink={disableShrink}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - formattedThickness) / 2}
          style={circleStyle}
          fill="none"
          strokeWidth={formattedThickness}
        />
      </Svg>
    </StyledCircularProgress>
  )
}

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

interface StyledCircularProgressProps {
  variant: "indeterminate" | "determinate"
  color: string
}
const StyledCircularProgress = styled.div<StyledCircularProgressProps>`
  ${({ variant = "indeterminate", color = "primary" }) => css`
    display: flex;

    aspect-ratio: 1 / 1;

    ${variants[variant]}
    color: ${color};
  `}
`

const Svg = styled.svg`
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
  round: boolean
}
const Circle = styled.circle<CircleProps>`
  ${({ variant, disableShrink, round }) => css`
    stroke: currentColor;

    ${circleVariants[variant]}
    ${disableShrink && "animation: none;"}
    ${round && "stroke-linecap: round;"}
  `}
`
