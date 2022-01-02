import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import truckLogo from "../Icons/truck.svg"

const ItemService = styled.div`
  min-width: 23rem;
  position: relative;
  max-width: 235px;
  span {
    font-weight: 600;
    font-size: 3rem;
    color: var(--ligt-gray);
  }
  h3 {
    font-weight: bolder;
    color: var(--gray-primary);
    line-height: 1;
    margin-bottom: 1.2rem;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.7rem;
    line-height: 1;
    width: 80%;
    font-weight: 600;
    color: var(--seconday-gray);
  }
`

const ServiceItem = () => {
  return (
    <ItemService>
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
          transform: scale(1.2);
        `}
      >
        <img src={truckLogo} alt="truck icon" />
      </div>
      <p>
        Con nosotros puedes rentar/comprar nuestros modelos de montacargas
        nuevos, seminuevos y usados
      </p>
    </ItemService>
  )
}

export default ServiceItem
