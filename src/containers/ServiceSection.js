import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import ServiceList from "../components/ServiceList"

const ServiceSection = () => {
  return (
    <section>
      <h1
        css={css`
          text-align: center;
          margin-top: 3rem;
          font-size: 5rem;
        `}
      >
        Servicios
      </h1>
      <ServiceList />
    </section>
  )
}

export default ServiceSection
