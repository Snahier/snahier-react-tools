import { SelectSpin } from "components/core/Inputs/SpinSelect"
import { Header } from "components/templates/Header"
import styled from "styled-components/macro"

interface PageSpinSelectProps {}

export default function PageSpinSelect({ ...props }: PageSpinSelectProps) {
  const options = [
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

  return (
    <StyledPageSpinSelect {...props} className="page">
      <Header />
      <h2>Spin Select Component</h2>
      <div
        style={{
          display: "flex",
          justifySelf: "center",
          gap: "1rem",
        }}>
        <div
          style={{
            justifySelf: "center",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
            width: 400,
            height: 600,
            background: "lightblue",
          }}>
          <SelectSpin options={options} />
        </div>

        <div
          style={{
            justifySelf: "center",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
            width: 500,
            height: 500,
            background: "lightblue",
          }}>
          <SelectSpin infiniteScroll options={options} />
        </div>
      </div>
    </StyledPageSpinSelect>
  )
}

const StyledPageSpinSelect = styled.div``
