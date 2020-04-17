import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/index/Hero"
import Features from "../components/index/Features"
import Slider from "../components/index/Slider"
import OtherFeatures from "../components/index/OtherFeatures"
import Featured from "../components/index/Featured"
import CTABanner from "../components/index/CTABanner"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" keywords={['Runpanther', 'test', 'test2']} />
  <Hero />
  <Features />
  <Slider />
  <OtherFeatures />
  <Featured />
  <CTABanner />
  </Layout>
)

export default IndexPage
