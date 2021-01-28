import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { ComponentsList, StyledPageHome } from "./styles"

interface StyledPageHomeProps {}

export const PageHome: React.FC<StyledPageHomeProps> = () => {
  return (
    <StyledPageHome className="page">
      <Header
        style={{
          gridArea: "header",
        }}
      />

      <h2>Homepage</h2>

      <h3>Available Components</h3>

      <ComponentsList>
        <Link to="carousel-slide">Carousel Slide</Link>
        <Link to="modal">Modal</Link>
        <Link to="tooltip">Tooltip</Link>
      </ComponentsList>
    </StyledPageHome>
  )
}
