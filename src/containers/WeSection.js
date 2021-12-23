import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import weImagen from "../images/8.png"
import ContactButton from "../components/ContactButton"

const Contenido = styled.section`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  grid-template-columns: 1fr;

  p {
    margin-top: 0rem;
    font-size: 3rem;
    line-height: 1;
    font-weight: bolder;
    color: var(--gray-primary);
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 3rem;
    img {
      width: 105%;
    }
  }
`

const WeSection = () => {
  return (
    <>
      <Contenido>
        <div>
          <img src={weImagen} alt="we-image" />
        </div>
        <div
          css={css`
            max-width: 350px;
            @media (max-width: 768px) {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
          `}
        >
          <h3
            css={css`
              font-size: 2rem;
              margin-top: 1rem;
              margin-bottom: 2rem;
              color: var(--ligt-gray);
            `}
          >
            Nosotros
          </h3>
          <p>
            Comprometidos con el continuo desarrollo de la eficiencia y
            productividad del negocio para nuestros clientes
          </p>
          <ContactButton />
        </div>
      </Contenido>
    </>
  )
}

export default WeSection
