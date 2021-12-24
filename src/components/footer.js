import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-primary);
  margin-top: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  i {
    font-size: 2.6rem;
    color: var(--white);
  }
  input {
    height: inherit;
    width: -webkit-fill-available;
    background-color: var(--gray-primary);
    border: none;
    border-bottom: 2px solid var(--white);
    outline: none;
  }
  h6 {
    font-size: 2rem;
    color: var(--white);
    margin: 2rem 0 0 0;
  }
  p {
    line-height: 1;
    color: var(---third-gray);
    font-size: 1.6rem;
    margin: 1rem 0;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <span
        css={css`
          color: var(--white);
          font-weight: 700;
          font-size: 2rem;
        `}
      >
        Quédate en contacto
      </span>
      <span
        css={css`
          color: var(--ligt-gray);
          font-weight: 700;
          font-size: 2rem;
        `}
      >
        Compártenos tu correo
      </span>
      <div
        css={css`
          height: 5rem;
          border-bottom: 3px solid var(--white);
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <input type="text" />
        <i class="fas fa-arrow-right"></i>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 1rem;
        `}
      >
        <div>
          <h6>Ubicación</h6>
          <p>Río Pánuco 291 Nuevo Repueblo 64720 Monterrey, N.L.</p>
        </div>
        <div>
          <h6>Contacto</h6>
          <p>
            Horarios de Oficina <br /> 8:30 - 6:00 <br /> 81 2032 1618{" "}
          </p>
        </div>
      </div>
      <p>
        &copy; {year} USA <br /> Montacargas
      </p>
    </FooterContainer>
  )
}

export default Footer
