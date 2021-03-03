import { PageSpinSelect } from "pages/PageSpinSelect"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PageAlert } from "./PageAlert"
import { PageButtons } from "./PageButtons"
import { PageCarouselSlide } from "./PageCarouselSlide"
import { PageCircularProgress } from "./PageCircularProgress"
import { PageDoubleRange } from "./PageDoubleRange"
import { PageHome } from "./PageHome"
import { PageModal } from "./PageModal"
import { PageShimmerEffect } from "./PageShimmerEffect"
import { PageTooltip } from "./PageTooltip"

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
        <Route path="/double-range" component={PageDoubleRange} />
        <Route path="/spin-select" component={PageSpinSelect} />
      </Switch>
    </BrowserRouter>
  )
}
