import styled from "styled-components/macro"
import { Info } from "styled-icons/fa-solid"
import { Alert } from "../components/core/Alert"
import { Header } from "../components/pages/Header"

interface PageAlertProps {}

export const PageAlert: React.FC<PageAlertProps> = () => {
  return (
    <StyledPageAlert className="page">
      <Header />
      <h2>Page Alert Component</h2>

      <Main>
        <Alert text="Alert component using the Text prop" />
        <Alert>Alert component using the children prop</Alert>
        <Alert closeable>Closeable alert</Alert>
        <Alert closeable icon={<Info size="1rem" />}>
          Closeable alert
        </Alert>
      </Main>
    </StyledPageAlert>
  )
}

const StyledPageAlert = styled.div``

const Main = styled.div`
  display: grid;
  gap: 1rem;

  margin: 1rem;
`
