import React from "react"
import styled from "@emotion/styled"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
  }
`

const ServiceList = () => {
  return <div>List</div>
}

export default ServiceList
