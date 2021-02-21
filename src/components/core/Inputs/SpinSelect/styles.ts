import styled, { css } from "styled-components/macro"

export const StyledSelectSpin = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 3rem;
`

export const SpinContainer = styled.div`
  user-select: none;

  display: flex;
  flex-direction: column;
  justify-items: center;

  overflow: hidden scroll;
  scroll-snap-type: y mandatory;
  > * {
    scroll-snap-align: center;
  }

  width: 100%;
  max-height: 100%;
  padding: ${57 * 4}px 0;
`

interface ItemProps {
  selected: boolean
}
export const Item = styled.div<ItemProps>`
  ${({ theme, selected }) =>
    css`
      display: flex;
      justify-content: center;

      transition: 0.3s;

      width: 100%;

      border: 1px solid yellow;

      color: ${selected ? theme.colors.black : "gray"};
    `}
`

export const Borders = styled.div`
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
