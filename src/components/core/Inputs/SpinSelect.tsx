import React, { useEffect, useRef, useState } from "react"
import { useScroll } from "react-use-gesture"
import styled, { css } from "styled-components/macro"

interface Option {
  label: string | number
  value: string | number
}
interface SelectSpinProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Option[]

  infiniteScroll?: boolean
}

export const SelectSpin: React.FC<SelectSpinProps> = ({
  options,
  infiniteScroll = false,
  ...props
}) => {
  const listRef = useRef<HTMLDivElement>(null)

  const [list, setList] = useState<Option[]>()

  useEffect(() => {
    setList([...options, ...options, ...options])
  }, [options])

  const [count, setCount] = useState(options.length * 2)

  const activePosition = Math.abs(count % options.length)

  const scrollToItemCenter = (
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

  const [scrollTop, setScrollTop] = useState(0)
  const scrollHeight = listRef.current?.scrollHeight

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    // const top = listRef.current?.children[0] as HTMLElement
    // const middle = listRef.current?.children[options.length] as HTMLElement
    // const bottom = listRef.current?.children[options.length * 2] as HTMLElement
  }

  const middleElement = listRef.current?.children[
    options.length
  ] as HTMLDivElement

  useEffect(() => {
    if (infiniteScroll && middleElement) {
      middleElement.scrollIntoView({
        behavior: "auto",
        block: "center",
      })
    }
  }, [infiniteScroll, options.length, middleElement])

  useScroll(
    (event) => {
      console.log(event)
    },
    {
      domTarget: listRef,
    }
  )

  return (
    <>
      <StyledSelectSpin {...props}>
        <SpinContainer
          ref={listRef}
          infiniteScroll={infiniteScroll}
          onScroll={(event) => {
            handleActiveItem(event)
            setScrollTop(listRef.current!.scrollTop)
            handleScroll(event)
          }}
        >
          {list?.length &&
            list.map((option, index) => (
              <Item
                key={index}
                selected
                data-value={list[index].value}
                onClick={scrollToItemCenter}
              >
                {option.label}
              </Item>
            ))}
        </SpinContainer>

        <Borders>0</Borders>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            border: "1px solid black",
            color: "black",
            fontSize: "1rem",
          }}
        >
          <p>Count: {count}</p>
          <p>Position: {activePosition}</p>
          <p>Array active item:</p>
          <pre>
            <code>{JSON.stringify(options[activePosition], null, 2)}</code>
          </pre>
          <p>Scroll Top: {scrollTop}</p>
          <p>Scroll Height: {scrollHeight}</p>
        </div>
      </StyledSelectSpin>
    </>
  )
}

const StyledSelectSpin = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  overflow: hidden scroll;

  width: 100%;
  height: calc(57px * 5);

  font-size: 2rem;
`

interface SpinContainerProps {
  infiniteScroll: boolean
}
const SpinContainer = styled.div<SpinContainerProps>`
  user-select: none;

  display: flex;
  flex-direction: column;
  justify-items: center;

  overflow: hidden scroll;
  overscroll-behavior: contain;
  touch-action: pan-y;
  scroll-snap-type: y mandatory;
  > * {
    scroll-snap-align: center;
  }

  width: 100%;
  max-height: 100%;
  padding: calc(57px * 2 + 28.5px) 0;
`

interface ItemProps {
  selected: boolean
}
const Item = styled.div<ItemProps>`
  ${({ theme, selected }) =>
    css`
      display: flex;
      justify-content: center;

      transition: 0.3s;

      ${!selected &&
      css`
        opacity: 0.35;
      `}

      width: 100%;

      border: 1px solid yellow;

      color: ${theme.colors.black};
    `}
`

const Borders = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;

  pointer-events: none;

  border: 1px solid black;
  border-left: none;
  border-right: none;

  color: transparent;
`
