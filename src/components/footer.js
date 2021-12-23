import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const FooterContainer = styled.footer`
  background-color: rgba(44, 62, 80);
  margin-top: 5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <h5>Quédate en contacto</h5>
      <span>Compártenos tu correo</span>
      <div>
        <input type="text" />
        <i>arrow</i>
      </div>
      <div>
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
        {year} &copy; USA <br /> Montacargas
      </p>
    </FooterContainer>
  )
}

export default Footer
