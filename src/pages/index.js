import React from "react"
import Layout from "../components/layout"
import ForkLiftImageHero from "../containers/ForkLiftImageHero"
import ShowMoreBtn from "../components/ShowMoreBtn"
import ServiceSection from "../containers/ServiceSection"

const IndexPage = () => {
  return (
    <Layout>
      <ForkLiftImageHero />
      <ShowMoreBtn />
      <ServiceSection />
    </Layout>
  )
}

export default IndexPage
