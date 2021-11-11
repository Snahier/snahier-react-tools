import { PageReloadCarousel } from "pages/PageReloadCarousel"
import { BrowserRouter, Route, Routes } from "react-router-dom"
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

export const AppRoutes: React.FC<RoutesProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/carousel-slide" element={<PageCarouselSlide />} />
        <Route path="/modal" element={<PageModal />} />
        <Route path="/tooltip" element={<PageTooltip />} />
        <Route path="/buttons" element={<PageButtons />} />
        <Route path="/circular-progress" element={<PageCircularProgress />} />
        <Route path="/shimmer-effect" element={<PageShimmerEffect />} />
        <Route path="/alert" element={<PageAlert />} />
        <Route path="/double-range" element={<PageDoubleRange />} />
        <Route path="/reload-carousel" element={<PageReloadCarousel />} />
      </Routes>
    </BrowserRouter>
  )
}
