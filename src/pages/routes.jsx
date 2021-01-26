import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PageCarouselSlide } from "./CarouselSlide"
import { PageHome } from "./Home"

export const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/carousel-slide" component={PageCarouselSlide} />
      </Switch>
    </BrowserRouter>
  )
}
