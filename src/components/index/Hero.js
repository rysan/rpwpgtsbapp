import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
//import DemoForm from "./DemoForm"

//import WPShortcodes from "./shortcodes"
//import { MDXProvider } from "@mdx-js/react"
//import { MDXRenderer } from "gatsby-plugin-mdx"
//import BadgeContent from "../shortcodes/BadgeContent.mdx"

//const shortcodes = { BadgeContent }

const Hero = () => (
    
    <StaticQuery query={graphql`
    {
  allWordpressPage(filter:   {slug: {eq: "home"}}) {
    edges {
      node {
        acf {
          sections_page {
              ... on WordPressAcf_hero {
              content {
                heading
                paragraph
                top_link {
                  badge_text
                  link
                  text
                }
            }
            image {
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            }
          }
        }
      }
    }
  }
}    
        `} render={props => (
    <div style={{
                background: `#D8D8D8`,
                paddingTop: `33px`,
                paddingBottom: `60px`,
            }}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-md-flex flex-column justify-content-center">
                    <div>
                        <p><a href={props.allWordpressPage.edges[0].node.acf.sections_page[0].content.top_link.link}><span className="badge badge-secondary">{props.allWordpressPage.edges[0].node.acf.sections_page[0].content.top_link.badge_text}</span> {props.allWordpressPage.edges[0].node.acf.sections_page[0].content.top_link.text}</a></p>
                        <h1>{props.allWordpressPage.edges[0].node.acf.sections_page[0].content.heading}</h1>
                        <p>{props.allWordpressPage.edges[0].node.acf.sections_page[0].content.paragraph}</p>
                    </div>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                        <input type="email" name="email" />
                        <input type="hidden" name="bot-field" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="col-md-6">
                <Img fluid={props.allWordpressPage.edges[0].node.acf.sections_page[0].image.localFile.childImageSharp.fluid} />
                </div>
            </div>
        </div>    
    </div>
            )} />
)



export default Hero