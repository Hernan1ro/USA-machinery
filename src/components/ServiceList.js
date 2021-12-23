import React from "react"
import styled from "@emotion/styled"

import ServiceItem from "../components/ServiceItem"

const ListServices = styled.ul`
  max-width: 1200px;
  width: 90%;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  overflow: scroll;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 235px);
    overflow: hidden;
    justify-content: center;
  }
`

const ServiceList = () => {
  return (
    <ListServices>
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
    </ListServices>
  )
}

export default ServiceList
