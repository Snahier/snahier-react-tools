import React, { useRef, useState } from "react"
import { Borders, Item, SpinContainer, StyledSelectSpin } from "./styles"

interface SelectSpinProps extends React.HTMLAttributes<HTMLDivElement> {}

interface Option {
  label: string | number
  value: string | number
}

export const SelectSpin: React.FC<SelectSpinProps> = (props) => {
  const listRef = useRef<HTMLDivElement>(null)

  const options: Option[] = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "Jun", value: 6 },
    { label: "Jul", value: 7 },
    { label: "Aug", value: 8 },
    { label: "Sep", value: 9 },
    { label: "Oct", value: 10 },
    { label: "Nov", value: 11 },
    { label: "Dec", value: 12 },
  ]
  const [count, setCount] = useState(options.length * 2)

  const activePosition = Math.abs(count % options.length)

  const scrollToCenter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  const handleActiveItem = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { left, top } = listRef.current?.getBoundingClientRect() as DOMRect
    const { clientHeight, clientWidth } = listRef.current as HTMLDivElement
    const center = top + clientHeight / 2

    const active = document.elementFromPoint(left + clientWidth / 2, center)

    const value = active?.getAttribute("data-value")

    // eslint-disable-next-line eqeqeq
    const itemIndex = options.findIndex((item) => item.value == value)

    if (itemIndex !== -1) setCount(itemIndex)
  }

  return (
    <>
      <StyledSelectSpin {...props}>
        <SpinContainer ref={listRef} onScroll={handleActiveItem}>
          {options.map((item, index) => (
            <Item
              key={item.value}
              data-value={item.value}
              selected={count === index}
              onClick={scrollToCenter}
            >
              {item.label}
            </Item>
          ))}
        </SpinContainer>

        <Borders>0</Borders>
      </StyledSelectSpin>

      <div style={{ position: "fixed", left: "56%", color: "black" }}>
        <p>Count: {count}</p>
        <p>Position: {activePosition}</p>
        <p>
          Array active item: <br />
        </p>
        <pre>
          <code>{JSON.stringify(options[activePosition], null, 2)}</code>
        </pre>
      </div>
    </>
  )
}
