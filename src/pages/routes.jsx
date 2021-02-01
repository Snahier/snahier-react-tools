import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PageButtons } from "./Buttons"
import { PageCarouselSlide } from "./CarouselSlide"
import { PageCircularProgress } from "./CircularProgress"
import { PageHome } from "./Home"
import { PageModal } from "./Modal"
import { PageTooltip } from "./Tooltip"

export const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/carousel-slide" component={PageCarouselSlide} />
        <Route path="/modal" component={PageModal} />
        <Route path="/tooltip" component={PageTooltip} />
        <Route path="/buttons" component={PageButtons} />
        <Route path="/circular-progress" component={PageCircularProgress} />
      </Switch>
    </BrowserRouter>
  )
}
