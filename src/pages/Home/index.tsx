import { Link } from "react-router-dom"
import { SelectSpin } from "../../components/core/Inputs/SpinSelect"
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
        <Link to="buttons">Buttons</Link>
        <Link to="circular-progress">Circular Progress</Link>
        <Link to="shimmer-effect">Shimmer Effect</Link>
        <Link to="alert">Alert</Link>
      </ComponentsList>

      <div
        style={{
          justifySelf: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          width: 500,
          height: 500,
          background: "lightblue",
        }}
      >
        <SelectSpin />
      </div>
    </StyledPageHome>
  )
}
