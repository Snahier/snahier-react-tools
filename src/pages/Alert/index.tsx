import { Header } from "../../components/Header"
import { Main, StyledPageAlert } from "./styles"

interface PageAlertProps {}

export const PageAlert: React.FC<PageAlertProps> = () => {
  return (
    <StyledPageAlert className="page">
      <Header />
      <h2>Page Alert Component</h2>

      <Main></Main>
    </StyledPageAlert>
  )
}
