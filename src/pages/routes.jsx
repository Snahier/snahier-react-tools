import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PageCarouselSlide } from "./CarouselSlide"
import { PageHome } from "./Home"
import { PageModal } from "./Modal"

export const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/carousel-slide" component={PageCarouselSlide} />
        <Route path="/modal" component={PageModal} />
      </Switch>
    </BrowserRouter>
  )
}
