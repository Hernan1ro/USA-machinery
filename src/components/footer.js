import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
    margin-left: 40%;
  }
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer
      css={css`
        background-color: var(--gray-primary);
        max-width: 1200px;
        padding: 2rem 2rem 4rem 2rem;
        margin: 0 auto;
        position: relative;
        @media (min-width: 768px) {
          padding: 2rem 2rem 12rem 2rem;
        }
      `}
    >
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
            max-width: 600px;
            @media (min-width: 768px) {
              margin-bottom: 8rem;
            }
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
        <p
          css={css`
            @media (min-width: 768px) {
              position: absolute;
              left: 7rem;
              bottom: 4rem;
            }
          `}
        >
          &copy; {year} USA Montacargas
        </p>
      </FooterContainer>
    </footer>
  )
}

export default Footer
