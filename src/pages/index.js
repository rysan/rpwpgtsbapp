import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/index/Hero"
import Features from "../components/index/Features"
import Slider from "../components/index/Slider"
import OtherFeatures from "../components/index/OtherFeatures"
import Featured from "../components/index/Featured"
import CTABanner from "../components/index/CTABanner"

const IndexPage = ({data}) => {
  const page = data.wordpressPage
  return (
  <Layout>
  <SEO 
    title={page.yoast_title} 
    description={page.yoast_meta.map((item) => (item.name==='description' ? item.content : '')).join('')}  
    />
  <Hero />
  <Features />
  <Slider />
  <OtherFeatures />
  <Featured />
  <CTABanner />
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query{
        wordpressPage( slug: {eq: "home"}) {
            title
            excerpt
            yoast_title
            yoast_meta {
              content
              name
            }
        }
    }
`