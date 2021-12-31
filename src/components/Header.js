import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
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
        <i
          css={css`
            font-size: 3rem;
            margin: auto 0;
            color: var(--gray-primary);
          `}
          className="fas fa-bars"
        ></i>
      </div>
    </header>
  )
}

export default Header
