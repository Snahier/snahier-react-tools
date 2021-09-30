import { DebugBox } from "components/core/DebugBox"
import { HTMLAttributes, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

interface TimePickerProps extends HTMLAttributes<HTMLDivElement> {}

export const TimePicker = ({ ...props }: TimePickerProps) => {
  const clockInteractor = useRef<HTMLDivElement>(null)
  const [centerCoords, setCenterCoords] = useState<[number, number]>([0, 0])
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>([0, 0])

  const [isMouseDown, setIsMouseDown] = useState(false)
  const toggleMouseDown = () => setIsMouseDown((prev) => !prev)

  useEffect(() => {
    const { width, height } = clockInteractor.current?.getBoundingClientRect() as DOMRect

    setCenterCoords([width / 2, height / 2])
  }, [])

  const handlePressMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isMouseDown) return

    const rect = clockInteractor.current?.getBoundingClientRect() as DOMRect

    const positionX = event.clientX - rect.left
    const positionY = event.clientY - rect.top

    setSelectedCoords([positionX, positionY])
  }

  const x = centerCoords[0] - selectedCoords[0]
  const y = centerCoords[1] - selectedCoords[1]
  const degree = Math.atan2(y, x) * (180 / Math.PI) + 180
  const selectedTime = (degree / 30 + 3) % 12

  return (
    <>
      <DebugBox
        data={{
          centerCoords,
          selectedCoords,
          ratio: {
            x: (centerCoords[0] - selectedCoords[0]) * -1,
            y: centerCoords[1] - selectedCoords[1],
            atan: Math.atan(((centerCoords[0] - selectedCoords[0]) * -1) / (centerCoords[1] - selectedCoords[1])),
            degree,
            selectedTime: Math.floor(selectedTime + 0.5),
            debug: (Math.atan2(74, 204) * 180) / Math.PI,
          },
        }}
        position={{ top: 0, left: 0 }}
      />
      <StyledTimePicker {...props}>
        <Header>
          <TimeButtonWrapper>
            <TimeButton>11</TimeButton>
            <span>:</span>
            <TimeButton>30</TimeButton>
          </TimeButtonWrapper>

          <PeriodWrapper>
            <PeriodButton>AM</PeriodButton>
            <PeriodButton>PM</PeriodButton>
          </PeriodWrapper>
        </Header>

        <Container>
          <ClockContainer>
            <ClockPointerLineWrapper time={Math.floor(selectedTime + 0.5)}>
              <ClockPointerCenterBall />
              <ClockPointerLine />
            </ClockPointerLineWrapper>

            {[...Array(12)].map((_, i) => (
              <ClockTimeIndicatorBox time={i + 1} key={i}>
                <ClockTimeIndicator time={i + 1}>{i + 1}</ClockTimeIndicator>
              </ClockTimeIndicatorBox>
            ))}

            <ClockInteractionBox
              ref={clockInteractor}
              onMouseMove={handlePressMove}
              onMouseDown={toggleMouseDown}
              onMouseUp={toggleMouseDown}
            />
          </ClockContainer>
        </Container>

        <Footer>
          <FooterButton>Cancel</FooterButton>
          <FooterButton>Ok</FooterButton>
        </Footer>
      </StyledTimePicker>
    </>
  )
}

type StyledTimePickerProps = {}
const StyledTimePicker = styled.div<StyledTimePickerProps>`
  justify-self: center;

  display: grid;
  justify-items: center;

  width: max-content;

  border: 1px solid #000;
`

type HeaderProps = {}
const Header = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
`

type TimeButtonWrapperProps = {}
const TimeButtonWrapper = styled.div<TimeButtonWrapperProps>`
  font-size: 3rem;
`

type TimeButtonProps = {}
const TimeButton = styled.button<TimeButtonProps>`
  font-size: 3rem;
`

type PeriodWrapperProps = {}
const PeriodWrapper = styled.div<PeriodWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`

type PeriodButtonProps = {}
const PeriodButton = styled.button<PeriodButtonProps>`
  font-size: 1.25rem;
`

type ContainerProps = {}
const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  width: 100%;

  background: darkgray;
`

type ClockContainerProps = {}
const ClockContainer = styled.div<ClockContainerProps>`
  position: relative;

  margin: 1rem;
  width: 100%;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
  background: lightgray;
`

type ClockPointerLineWrapperProps = {
  time: number
}
const ClockPointerLineWrapper = styled.div<ClockPointerLineWrapperProps>`
  ${({ time }) => css`
    transform: rotate(calc(${time} * 30deg));

    display: flex;

    width: 100%;
    height: 100%;
  `}
`

type ClockPointerCenterBallProps = {}
const ClockPointerCenterBall = styled.div<ClockPointerCenterBallProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 4px;
  height: 4px;

  border-radius: 50%;
  background: blue;
`

type ClockPointerLineProps = {}
const ClockPointerLine = styled.div<ClockPointerLineProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);

  width: 1px;
  height: 50%;

  background: blue;
`

type ClockTimeIndicatorBoxProps = {
  time: number
}
const ClockTimeIndicatorBox = styled.div<ClockTimeIndicatorBoxProps>`
  ${({ time }) => css`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0) rotate(calc(${time} * 30deg));

    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    height: 100%;
  `}
`

type ClockButtonProps = {
  time: number
}
const ClockTimeIndicator = styled.span<ClockButtonProps>`
  ${({ time }) => css`
    transform: rotate(calc(${time} * 30deg * -1));

    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;

    border-radius: 50%;
    background: red;

    font-size: 0.75rem;
  `}
`

type ClockInteractionBoxProps = {}
const ClockInteractionBox = styled.div<ClockInteractionBoxProps>`
  position: absolute;
  inset: 0;

  background: rgba(255, 0, 0, 0.2);
`

type FooterProps = {}
const Footer = styled.footer<FooterProps>`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  width: 100%;
`

type FooterButtonProps = {}
const FooterButton = styled.button<FooterButtonProps>``
