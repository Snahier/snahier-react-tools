import { TimePicker } from "components/core/TimePicker"
import { Header } from "components/templates/Header"
import styled from "styled-components"

interface PageTimerPickerProps {}

export default function PageTimerPicker({ ...props }: PageTimerPickerProps) {
  return (
    <StyledPageTimerPicker {...props} className="page">
      <Header />
      <TimePicker
        style={{
          width: 600,
        }}
      />
    </StyledPageTimerPicker>
  )
}

type StyledPageTimerPickerProps = {}
const StyledPageTimerPicker = styled.div<StyledPageTimerPickerProps>``
