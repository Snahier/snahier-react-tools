import { PopperTooltip } from "../../components/core/PopperTooltip"
import { Tooltip } from "../../components/core/Tooltip"
import { Header } from "../../components/Header"
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
            arrow
            content={
              <div>
                test test test
                <br />
                test test test
                <br />
                test test test
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
