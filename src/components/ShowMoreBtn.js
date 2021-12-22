import React from "react"
import styled from "@emotion/styled"

const ConoceMasbtn = styled.div`
  display: flex;
  border-radius: 1.5rem;
  border: solid 1px var(--seconday-gray);
  padding: 0.5rem;
  width: 15rem;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  color: var(--seconday-gray);
  i {
    cursor: pointer;
  }
`

const ShowMoreBtn = () => {
  return (
    <ConoceMasbtn>
      CONOCE MÁS
      <i className="fas fa-chevron-down"></i>
    </ConoceMasbtn>
  )
}

export default ShowMoreBtn
