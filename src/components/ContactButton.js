import React from "react"
import { css } from "@emotion/react"

const ContactButton = () => {
  return (
    <button
      css={css`
        font-weight: 800;
        color: var(--gray-primary);
        background-color: var(--orange-primary);
        width: 12rem;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15rem;
        font-size: 1.4rem;
        border: none;
        cursor: pointer;
      `}
    >
      CONTÁCTANOS
    </button>
  )
}

export default ContactButton
