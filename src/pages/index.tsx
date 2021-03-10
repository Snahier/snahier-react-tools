import Link from "next/link"
import styled from "styled-components/macro"
import { Header } from "../components/templates/Header"
import { viewport } from "../styles/helpers/viewport"

interface StyledPageHomeProps {}

const Home: React.FC<StyledPageHomeProps> = () => {
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
        <Link href="carousel-slide">Carousel Slide</Link>
        <Link href="modal">Modal</Link>
        <Link href="tooltip">Tooltip</Link>
        <Link href="buttons">Buttons</Link>
        <Link href="circular-progress">Circular Progress</Link>
        <Link href="shimmer-effect">Shimmer Effect</Link>
        <Link href="alert">Alert</Link>
        <Link href="double-range">Double Range</Link>
        <Link href="spin-select">Spin Select</Link>
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

export default Home
