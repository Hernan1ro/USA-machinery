import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import ServiceList from "../components/ServiceList"

const ServiceSection = () => {
  return (
    <>
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
    </>
  )
}

export default ServiceSection
