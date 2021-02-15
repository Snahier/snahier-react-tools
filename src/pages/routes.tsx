import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PageAlert } from "./Alert"
import { PageButtons } from "./Buttons"
import { PageCarouselSlide } from "./CarouselSlide"
import { PageCircularProgress } from "./CircularProgress"
import { PageHome } from "./Home"
import { PageModal } from "./Modal"
import { PageShimmerEffect } from "./ShimmerEffect"
import { PageTooltip } from "./Tooltip"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/carousel-slide" component={PageCarouselSlide} />
        <Route path="/modal" component={PageModal} />
        <Route path="/tooltip" component={PageTooltip} />
        <Route path="/buttons" component={PageButtons} />
        <Route path="/circular-progress" component={PageCircularProgress} />
        <Route path="/shimmer-effect" component={PageShimmerEffect} />
        <Route path="/alert" component={PageAlert} />
      </Switch>
    </BrowserRouter>
  )
}
