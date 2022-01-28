import React, { useEffect, useRef, useState } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import logo from "../images/USA.svg"
import menuLogo from "../images/bars-menu.png"
import Navegacion from "../components/nav"
import HamburgerMenu from "../components/nav-hamburger-menu"

const EnlaceHome = styled(Link)`
  text-decoration: none;
  text-align: start;
  @media (min-width: 768px) {
    width: 157.66px;
  }
`
const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: var(--orange-primary);
  height: 3.4rem;
  transform: scale(0.9);
  padding: 0.8rem 3rem;
  margin: auto 0;
  i {
    margin-right: 1rem;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`
const Img = styled.img`
  height: 3rem;
  margin: auto 0;
  cursor:pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

const Header = () => {
  const showMenu = () => {
    const menu = document.querySelector(".hamburger-menu")
    menu.style.top = "0";
  }

  return (
    <header 
      css={css`
        padding: 2rem;
        position:   sticky;
        top: 0;
        z-index: 100;
        width: 100%;
        transition: all 0.3s ease-out;
        background:  var(--white);
      `}
    >
      <div
        css={css`
          color: var(--gray-primary);
          // max-width: 1200px;
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
              width: 6rem;
            `}
            src={logo}
          />
        </EnlaceHome>
        <Navegacion />
        <HamburgerMenu />
        <ContactDiv>
          <i className="fas fa-phone-alt"></i>
          <b>
            <span>
              <a href="tel:+528183589390">81 8358 9390 </a>
            </span>

          </b>
        </ContactDiv>
        <Img onClick={() => showMenu()} src={menuLogo} alt="menu-logo" />
      </div>
    </header>
  )
}

export default Header
