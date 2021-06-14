import { Close } from "@styled-icons/material"
import { useEffect, useState } from "react"
import styled, { css } from "styled-components"

interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number
  children?: React.ReactNode
}

export const useSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openSnackbar = () => setIsOpen(true)
  const closeSnackbar = () => setIsOpen(false)

  const Component = ({ duration, children, ...props }: SnackbarProps) => {
    const [countdown, setCountdown] = useState<number | undefined>(duration)

    useEffect(() => {
      if (countdown) {
        setTimeout(() => {
          setCountdown(countdown - 1)
        }, 1000)
      }
      if (countdown === 0) setIsOpen(false)
    }, [countdown])

    return isOpen ? (
      <StyledSnackbar {...props}>
        {children}

        {duration && countdown ? (
          <CountdownBar progress={(countdown / duration) * 100} />
        ) : null}

        <button onClick={closeSnackbar}>
          <Close size="1.5rem" />
        </button>
      </StyledSnackbar>
    ) : null
  }

  return { Snackbar: Component, openSnackbar }
}

const StyledSnackbar = styled.div`
  position: fixed;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem;

  background: #fff;

  color: #000;
`

const CountdownBar = styled.div<{
  progress: number
}>`
  ${({ progress }) => css`
    position: absolute;
    bottom: 0;
    left: 0;

    width: ${progress}%;
    height: 4px;

    background: #000;

    transition: width 0.3s;
  `}
`
