import { Circle, StyledCircularProgress, Svg } from "./styles"

const SIZE = 44

export interface CircularProgressProps {
  classes?: any
  className?: string
  color?: "inherit" | "primary" | "secondary"
  disableShrink?: boolean
  size?: number | string
  thickness?: number
  value?: number
  variant?: "indeterminate" | "determinate"
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  classes,
  className,
  color = "primary",
  disableShrink = false,
  size = 40,
  thickness = 3.6,
  value = 0,
  variant = "indeterminate",
  ...props
}) => {
  const circleStyle: React.CSSProperties = {}
  const rootStyle: React.CSSProperties = {}

  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2)
    circleStyle.strokeDasharray = circumference.toFixed(3)
    circleStyle.strokeDashoffset = `${(
      ((100 - value) / 100) *
      circumference
    ).toFixed(3)}px`
  }

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
          disableShrink={disableShrink}
          style={circleStyle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </Svg>
    </StyledCircularProgress>
  )
}
