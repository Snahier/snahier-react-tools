import { RefObject } from "hoist-non-react-statics/node_modules/@types/react"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const useResizeObserver = (ref: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setWidth(width)
      setHeight(height)
    })

    resizeObserver.observe(ref.current as Element)

    return () => resizeObserver.disconnect()
  }, [ref])

  return { width, height }
}

interface CanvasCircularProgressProps {
  progress: number
  thickness?: number
  size?: number | string
  color?: string
}

export const CanvasCircularProgress = ({
  progress,
  thickness = 0.5,
  size = "10rem",
  lineCap = "square",
  color = "#808080",
  ...props
}: CanvasCircularProgressProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { width, height } = useResizeObserver(containerRef)

  const [canvas, setCanvas] = useState<HTMLCanvasElement>()
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvasRef.current.getContext("2d")
      setCanvas(canvas)
      setContext(context)
    }
  }, [size])

  useEffect(() => {
    whiteCircle()

    function whiteCircle() {
      if (canvas && context) {
        const canvasX = canvas.width / 2
        const canvasY = canvas.height / 2
        const thicknessValue = (thickness * canvas.width) / 2
        const radius = (canvas.width - thicknessValue) / 2

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.beginPath()
        context.strokeStyle = color
        context.lineWidth = thicknessValue
        context.lineCap = lineCap
        context.arc(canvasX, canvasY, radius, 0, Math.PI * progress * 2, false)
        context.stroke()
        context.closePath()
      }
    }
  }, [canvas, context, width, height, lineCap, progress, thickness, color])

  return (
    <StyledCanvasCircularProgress
      {...props}
      ref={containerRef}
      style={{
        width: size,
        height: size,
      }}
    >
      <Canvas
        ref={canvasRef}
        width={containerRef.current?.clientWidth}
        height={containerRef.current?.clientHeight}
      />
    </StyledCanvasCircularProgress>
  )
}

type StyledCanvasCircularProgressProps = {}
const StyledCanvasCircularProgress = styled.div<StyledCanvasCircularProgressProps>``

type CanvasProps = {}
const Canvas = styled.canvas<CanvasProps>``
