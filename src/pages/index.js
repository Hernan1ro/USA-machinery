import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/useHabitaciones"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import HabitacionesPrevew from "../components/habitacionesPrevew"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`
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

const IndexPage = () => {
  const habitaciones = useHabitaciones()

  return (
    <Layout>
      <ImagenHotel />
      <ConoceMasbtn>
        CONOCE MÁS
        <i class="fas fa-chevron-down"></i>
      </ConoceMasbtn>

      <h1
        css={css`
          text-align: center;
          margin-top: 3rem;
          font-size: 4rem;
        `}
      >
        Servicio
      </h1>

      <ListadoHabitaciones>
        {habitaciones.map(habitacion => {
          return (
            <HabitacionesPrevew key={habitacion.id} habitacion={habitacion} />
          )
        })}
      </ListadoHabitaciones>
    </Layout>
  )
}

export default IndexPage
