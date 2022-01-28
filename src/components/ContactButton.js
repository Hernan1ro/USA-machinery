import React from "react"
import { css } from "@emotion/react"

const ContactButton = () => {
  return (
    <a href="#contacto"
      css={css`
        text-decoration: none;
        font-weight: 800;
        color: var(--gray-primary);
        background-color: var(--orange-primary);
        max-width: 14rem;
        padding: 1rem 2rem;
        padding-top: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15rem;
        font-size: 1.4rem;
        border: none;
        cursor: pointer;
        margin-top: 1rem;
      `}
    >
      CONTÁCTANOS
    </a>
  )
}

export default ContactButton
