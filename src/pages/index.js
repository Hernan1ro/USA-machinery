import React from "react"
import Layout from "../components/layout"
import ForkLiftImageHero from "../containers/ForkLiftImageHero"
import ShowMoreBtn from "../components/ShowMoreBtn"
import ServiceSection from "../containers/ServiceSection"
import ServiceImageSection from "../containers/ServiceImageSection"
import WeSection from "../containers/WeSection"
import ExperienceSection from "../containers/ExperienceSection"

const IndexPage = () => {
  return (
    <Layout>
      <ForkLiftImageHero />
      <ShowMoreBtn />
      <ServiceSection />
      <ServiceImageSection />
      <WeSection />
      <ExperienceSection />
    </Layout>
  )
}

export default IndexPage
