import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "../components/header"
import Footer from "../components/footer"
import mainFont from "../fonts/david-regular.otf"
import secondaryFont from "../fonts/Kostic - Roc Grotesk Medium.otf"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --white: #f9f9f9;
            --orange-primary: #fdb337;
            --gray-primary: #32363b;
            --ligt-gray: #c1c1c3;
            --seconday-gray: #828387;
            --warn-black: #33353b;
            ---third-gray: #a7a8ac;
            /* fonts size  */
            --lg: 6rem;
            /* fontw  */
            --main-font: mainFont;
            --secondary-font: secondaryFont;
          }
          * {
            box-sizing: border-box;
          }
          html { 
            font-size: 62.5%;
            scroll-behavior: smooth;
          }
          body {
            background-color: var(--white)
            margin: 0;
            padding: 0;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>USA MACHINERY</title>
        <meta
          name="description"
          content="Empresa con mas de 10 años de experiencia en renta y venta de montacargas, venta de refacciones y servicio técnico a clientes con equipos"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <Header />
      {children}
      <Footer title="USA MACHINERY" />
    </>
  )
}

export default Layout