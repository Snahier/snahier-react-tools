export const isTouch = () => {
  if (typeof window !== undefined) return null

  if (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  ) {
    return true
  } else {
    return false
  }
}
