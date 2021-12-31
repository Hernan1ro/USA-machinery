import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import logo from "../icons/logo.png"
import menuLogo from "../icons/bars-menu.png"

const EnlaceHome = styled(Link)`
  text-align: center;
  text-decoration: none;
`
const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: var(--orange-primary);
  height: 3.4rem;
  transform: scale(0.9);
  padding: 0.8rem 1.8rem;
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
          display: flex;
          align-item: center;
          justify-content: space-between;
        `}
      >
        <EnlaceHome to="/">
          <img
            alt="home link"
            css={css`
              width: 4rem;
            `}
            src={logo}
          />
        </EnlaceHome>
        <ContactDiv>
          <i className="fas fa-phone-alt"></i>
          <span>81 2032 1618</span>
        </ContactDiv>
        <img
          css={css`
            height: 3rem;
            margin: auto 0;
          `}
          src={menuLogo}
          alt="menu-logo"
        />
      </div>
    </header>
  )
}

export default Header
