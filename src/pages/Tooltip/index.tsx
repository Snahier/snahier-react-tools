import { Header } from "../../components/Header"
import { PopperTooltip } from "../../components/PopperTooltip"
import { Tooltip } from "../../components/Tooltip"
import {
  ButtonsContainer,
  OverflowHiddenWrapper,
  StyledPageTooltip,
} from "./styles"

interface PageTooltipProps {}

export const PageTooltip: React.FC<PageTooltipProps> = () => {
  return (
    <StyledPageTooltip className="page">
      <Header />
      <h2>Tooltip Component</h2>

      <ButtonsContainer>
        <Tooltip>
          <button>hover me</button>
        </Tooltip>

        <Tooltip clickMode>
          <button>click me</button>
        </Tooltip>

        <Tooltip clickMode arrow>
          <button>tooltip with arrow</button>
        </Tooltip>

        <OverflowHiddenWrapper>
          <PopperTooltip
            content={
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            }
          >
            <button>tooltip</button>
          </PopperTooltip>
        </OverflowHiddenWrapper>
      </ButtonsContainer>
    </StyledPageTooltip>
  )
}
