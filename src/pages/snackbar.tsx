import { Header } from "components/templates/Header"
import { useSnackbar } from "hooks/useSnackbar"
import styled from "styled-components"

interface PageSnackbarProps {}

export default function PageSnackbar({ ...props }: PageSnackbarProps) {
  const { Snackbar, openSnackbar } = useSnackbar()

  return (
    <StyledPageSnackbar {...props} className="page">
      <Header />
      <h1>Snackbar Component</h1>

      <button onClick={openSnackbar}>Open snackbar</button>

      <Snackbar duration={10}>testing snackbar</Snackbar>
    </StyledPageSnackbar>
  )
}

const StyledPageSnackbar = styled.div``
