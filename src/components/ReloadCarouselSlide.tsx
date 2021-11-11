import { HTMLAttributes } from "react"
import styled from "styled-components"

interface ReloadCarouselSlideProps extends HTMLAttributes<HTMLDivElement> {}

export const ReloadCarouselSlide = ({ ...props }: ReloadCarouselSlideProps) => {
  return <StyledReloadCarouselSlide {...props}>{props.children}</StyledReloadCarouselSlide>
}

type StyledReloadCarouselSlideProps = {}
const StyledReloadCarouselSlide = styled.div<StyledReloadCarouselSlideProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow: hidden;

  width: 100%;
`
