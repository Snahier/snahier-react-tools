import { ForwardedRef, useEffect, useRef } from "react"

export const useForwardedRef = <T>(ref: ForwardedRef<T>) => {
  const innerRef = useRef<T>(null)

  useEffect(() => {
    if (!ref) return
    typeof ref === "function" ? ref(innerRef.current) : (ref.current = innerRef.current)
  })

  return innerRef
}
