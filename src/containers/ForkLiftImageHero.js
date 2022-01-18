import React, { useRef } from "react"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ServiceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`

const ImageBackground = styled(BackgroundImage)`
  height: 480px;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  transform: rotate(8deg);
  
  :after{
    filter: brightness(85%);
    -webkit-animation: bounce-down 1.6s linear infinite;
    animation: bounce-down 1.6s linear infinite;
    width: 110% !important;
  }


  @-webkit-keyframes bounce-down {
    25% {
          -webkit-transform: translateY(-4px);
    }
    50%, 100% {
          -webkit-transform: translateY(0);
    }
    75% {
          -webkit-transform: translateY(4px);
    }
  }

  @keyframes bounce-down {
      25% {
          transform: translateY(-4px);
      }
      50%, 100% {
          transform: translateY(0);
      }
      75% {
          transform: translateY(4px);
      }
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 500px;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  @media (min-width: 992px) {
    margin-top:-20px;
    height: 90vh;
    max-width: 900px;
  }
`

const ForkLiftImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.png" }) {
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
    flex: 1;
    align-items: center;
    justify-content: center;
    transform: rotate(-8deg);
    overflow: hidden;
    position: relative;
    div {
      display: flex;
      overflow: hidden;
      position: relative;
      width: fit-content;
      height: 115px;
      margin: 0 auto;
      @media (max-width: 768px) {
        height: 70px;
      }
    }
    h1:nth-child(4) {
      margin-right: 2rem;
    }
    h1:nth-child(8) {
      margin-right: 2rem;
    }

    h1 {
      font-size: var(--lg);
      margin: 0;
      @media (min-width: 768px) {
        font-size: 10rem;
      }
    }
    .animation1 {
      animation: animation1;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
    }
    .animation2 {
      animation: animation2;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.1s;
    }
    .animation3 {
      animation: animation3;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.2s;
    }
    .animation4 {
      animation: animation4;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.3s;
    }
    .animation5 {
      animation: animation4;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.4s;
    }
    .animation6 {
      animation: animation4;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.5s;
    }
    .animation7 {
      animation: animation4;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.6s;
    }
    .animation8 {
      animation: animation4;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.7s;
    }
    .animation9 {
      animation: animation4;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.8s;
    }
    .animation10 {
      animation: animation4;
      animation-duration: 0.5s;
      position: absolute;
      animation-fill-mode: both;
      animation-delay: 0.9s;
    }
    @keyframes animation1 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation2 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation3 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation4 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation5 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation6 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation7 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation8 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation9 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
    @keyframes animation10 {
      from {
        transform: translate3d(0, 80%, 0);
        position: relative;
      }
      to {
        transform: translate3d(0, 0, 0);
        position: relative;
      }
    }
  `
  const bgHeroRef = useRef();

  return (
    <ServiceSection id="inicio">
      <ImageBackground
      className="bounce-animation" 
      ref={bgHeroRef}
      onStartLoad={() => bgHeroRef.current.selfRef.classList.toggle("loading")}
      onLoad={() => bgHeroRef.current.selfRef.classList.toggle("loading")} 
      fluid={image.sharp.fluid}>
        <TextoImagen>
          <div >
            <h1 className="animation1">L</h1>
            <h1 className="animation2">i</h1>
            <h1 className="animation3">f</h1>
            <h1 className="animation4">t</h1>
            <h1 className="animation5">w</h1>
            <h1 className="animation6">i</h1>
            <h1 className="animation7">t</h1>
            <h1 className="animation8">h</h1>
            <h1 className="animation9">u</h1>
            <h1 className="animation10">s</h1>
          </div>
        </TextoImagen>
      </ImageBackground>
    </ServiceSection>
  )
}

export default ForkLiftImage
