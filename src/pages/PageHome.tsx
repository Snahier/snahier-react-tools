import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import { SelectSpin } from "../components/core/Inputs/SpinSelect"
import { Header } from "../components/pages/Header"
import { viewport } from "../styles/helpers/viewport"

interface StyledPageHomeProps {}

export const PageHome: React.FC<StyledPageHomeProps> = () => {
  const options = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "Jun", value: 6 },
    { label: "Jul", value: 7 },
    { label: "Aug", value: 8 },
    { label: "Sep", value: 9 },
    { label: "Oct", value: 10 },
    { label: "Nov", value: 11 },
    { label: "Dec", value: 12 },
  ]

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
      </ComponentsList>

      <div
        style={{
          display: "flex",
          justifySelf: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            justifySelf: "center",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
            width: 400,
            height: 600,
            background: "lightblue",
          }}
        >
          <SelectSpin options={options} />
        </div>
        <div
          style={{
            justifySelf: "center",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
            width: 500,
            height: 500,
            background: "lightblue",
          }}
        >
          <SelectSpin infiniteScroll options={options} />
        </div>
      </div>
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
