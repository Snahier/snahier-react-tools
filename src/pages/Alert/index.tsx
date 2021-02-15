import { Info } from "styled-icons/fa-solid"
import { Alert } from "../../components/core/Alert"
import { Header } from "../../components/Header"
import { Main, StyledPageAlert } from "./styles"

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
