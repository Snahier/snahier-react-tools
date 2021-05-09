import { PopperPortal } from "components/core/Popper/PopperPortal"
import { PopperPortalWrapper } from "components/core/Popper/PopperPortalWrapper"
import { useRef } from "react"
import styled from "styled-components/macro"
import { Header } from "../components/templates/Header"

interface PageTooltipProps {}

export default function PageTooltip({ ...props }: PageTooltipProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <StyledPageTooltip className="page">
      <Header />
      <h2>Tooltip Component</h2>

      <ButtonsContainer>
        <OverflowHiddenWrapper>
          <PopperPortal targetRef={buttonRef}>
            <CustomTooltip>Portal Popper</CustomTooltip>
          </PopperPortal>
          <button ref={buttonRef}>tooltip with portal using ref</button>
        </OverflowHiddenWrapper>

        <OverflowHiddenWrapper>
          <PopperPortalWrapper
            content={<CustomTooltip>Portal Popper</CustomTooltip>}
          >
            <button>tooltip with portal using wrapper</button>
          </PopperPortalWrapper>
        </OverflowHiddenWrapper>
      </ButtonsContainer>
    </StyledPageTooltip>
  )
}

const StyledPageTooltip = styled.div``

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 0;
  justify-items: center;
`

const OverflowHiddenWrapper = styled.div`
  padding: 2rem;
  overflow: hidden;

  background-color: crimson;
`

const CustomTooltip = styled.div`
  width: 200px;
  height: 2rem;

  background: #fff;
`
