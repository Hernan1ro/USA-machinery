import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import truckLogo from "../Icons/truck.svg"

const ListServices = styled.ul`
  max-width: 1200px;
  width: 80%;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  overflow: hidden;
`
const ServiceItem = styled.div`
  min-width: 23rem;
  position: relative;
  span {
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--ligt-gray);
  }
  h3 {
    font-weight: bolder;
    color: var(--gray-primary);
    line-height: 1;
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--seconday-gray);
  }
`

const ServiceList = () => {
  return (
    <ListServices>
      <ServiceItem>
        <span>01</span>
        <h3>
          Venta/Renta <br /> de Montacargas
        </h3>
        <StaticImage
          placeholder="blurred"
          layout="fixed"
          width={210}
          height={210}
          src="../images/man-working.jpg"
          alt="Man working"
          css={css`
            margin-bottom: 1rem;
          `}
        />
        <div
          css={css`
            width: 50rem;
            border-radius: 50%;
            background-color: var(--orange-primary);
            width: 5rem;
            height: 5rem;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 105px;
            right: 0px;
          `}
        >
          <img src={truckLogo} alt="truck icon" />
        </div>
        <p>
          Con nosotros puedes rentar/comprar nuestros modelos de montacargas
          nuevos, seminuevos y usados
        </p>
      </ServiceItem>
    </ListServices>
  )
}

export default ServiceList
