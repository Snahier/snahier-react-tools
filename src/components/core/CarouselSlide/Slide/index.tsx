import { StyledSlide } from "./styles"

interface SlideProps {}

export const Slide: React.FC<SlideProps> = (props) => {
  return <StyledSlide>{props.children}</StyledSlide>
}
