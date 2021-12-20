import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --white: #fff;
            --orange-primary: #f2b753;
            --gray-primary: #32363b;
            --ligt-gray: #c1c1c3;
            --seconday-gray: #828387;
            --warn-black: #33353b;
            ---third-gray: #a7a8ac;
          }
          * {
            box-sizing: border-box;
          }
          html {
            font-size: 62.5%;
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
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
      </Helmet>
      <Header />
      {children}
      <Footer title="USA MACHINERY" />
    </>
  )
}

export default Layout
