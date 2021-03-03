import styled from "styled-components/macro"

interface SlideProps {}

export const Slide: React.FC<SlideProps> = (props) => {
  return <StyledSlide>{props.children}</StyledSlide>
}

const StyledSlide = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 100%;
  height: 100%;

  > * {
    max-width: 100%;
  }
`
