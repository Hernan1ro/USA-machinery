import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Navegacion from "./nav"
import { Link } from "gatsby"
import logo from "../Icons/logo.png"

const EnlaceHome = styled(Link)`
  text-align: center;
  text-decoration: none;
`
const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: var(--orange-primary);
  height: 4rem;
  padding: 1rem;
  margin: auto 0;
  i {
    margin-right: 1rem;
  }
`

const Header = () => {
  return (
    <header
      css={css`
        background-color: var(--white);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          color: var(--gray-primary);
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-item: center;
            justify-content: space-between;
          }
        `}
      >
        <EnlaceHome to="/">
          <img
            css={css`
              width: 8rem;
            `}
            src={logo}
          />
        </EnlaceHome>
        <Navegacion />
        <ContactDiv>
          <i className="fas fa-phone-alt"></i>
          <span>81 2032 1618</span>
        </ContactDiv>
      </div>
    </header>
  )
}

export default Header
