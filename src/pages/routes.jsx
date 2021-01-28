import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PageCarouselSlide } from "./CarouselSlide"
import { PageHome } from "./Home"
import { PageModal } from "./Modal"
import { PageTooltip } from "./Tooltip"

export const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="carousel-slide" component={PageCarouselSlide} />
        <Route path="modal" component={PageModal} />
        <Route path="tooltip" component={PageTooltip} />
      </Switch>
    </BrowserRouter>
  )
}
