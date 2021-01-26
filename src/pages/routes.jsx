import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PageCarouselSlide } from "./CarouselSlide"

export const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route path="/carousel-slide" component={PageCarouselSlide} />
      </Switch>
    </BrowserRouter>
  )
}
