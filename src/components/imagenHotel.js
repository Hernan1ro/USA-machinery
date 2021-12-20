import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const ForkLiftImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const TextoImagen = styled.div`
    color: var(--orange-primary);
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 6rem;
      margin: 0;
      @media (min-width: 768px) {
        font-size: 10rem;
      }
      @media (min-width: 992px) {
        font-size: 18rem;
      }
    }
    }
  `
  return (
    <ImageBackground fadeIn="soft" tag="section" fluid={image.sharp.fluid}>
      <TextoImagen>
        <h1>Lift with us</h1>
      </TextoImagen>
    </ImageBackground>
  )
}

export default ForkLiftImage
