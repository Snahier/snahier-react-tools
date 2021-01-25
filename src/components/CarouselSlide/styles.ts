import styled from "styled-components/macro"

export const StyledCarouselSlide = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;

  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  > * {
    scroll-snap-align: center;
  }

  background-color: lightblue;
`
