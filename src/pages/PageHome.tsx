import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import { Header } from "../components/templates/Header"
import { viewport } from "../styles/helpers/viewport"

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
        <Link to="double-range">Double Range</Link>
        <Link to="reload-carousel">Reload Carousel</Link>
      </ComponentsList>
    </StyledPageHome>
  )
}

const StyledPageHome = styled.div``

const ComponentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 0;

  @media (min-width: ${viewport.tablets}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${viewport.desktop.extraLarge}) {
    grid-template-columns: repeat(6, 1fr);
  }
`
