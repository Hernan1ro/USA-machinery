import React from "react"
import styled from "@emotion/styled"
import collado from "../images/collado.svg" 
import delprimo from "../images/delprimo.svg" 
import ficoxa from "../images/ficoxa.svg" 
import gbox from "../images/gbox.svg" 
import grupogodin from "../images/grupogodin.svg" 
import nutrioli from "../images/nutrioli.svg" 

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
  h1 {
    margin: 0;
    text-align: center;
    line-height: 1;
    font-size: var(--lg);
    color: var(--warn-black);
  }
  div {
    margin: 2rem;
    text-align: center;
    display: flex;
    overflow-x:auto;
  }
  img {
    margin: 0 10px;
    height: 50px;
    width: auto;
  }
  @media (min-width: 768px) {
    padding: 5rem 0 5rem 0;
    div {
      justify-content: space-around;
    }
    img {
    }
    h1 {
      margin-bottom: 5rem;
    }
  }
`

const OurClients = () => {
  return (
    <Container>
      <section id="clientes">
        <h1>
          Nuestros <br /> Clientes
        </h1>
        <div>
          <img src={delprimo} alt="delprimo" />
          <img src={ficoxa} alt="ficoxa" />
          <img src={gbox} alt="gbox" />
          <img src={collado} alt="collado" />
          <img src={grupogodin} alt="grupogodin" />
          <img src={nutrioli} alt="nutrioli" />
        </div>
      </section>
    </Container>
  )
}

export default OurClients
