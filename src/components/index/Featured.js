import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Featured = () => (
    <StaticQuery query={graphql`
        {
  allWordpressPage(filter: {wordpress_id: {eq: 2}}) {
    edges {
      node {
        acf {
          sections_page {
            ... on WordPressAcf_featured {
              column_1 {
                heading
                paragraph
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
                button {
                  link
                  text
                }
              }
              column_2 {
                button {
                  link
                  text
                }
                heading
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
                paragraph
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
            background:`#F0F0F0`,
            paddingTop: `90px`,
            paddingBottom: `90px`, 
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Img fluid={props.allWordpressPage.edges[0].node.acf.sections_page[4].column_1.image.localFile.childImageSharp.fluid} style={{maxWidth:`283px`}} className="mx-auto" />
                        <h3>{props.allWordpressPage.edges[0].node.acf.sections_page[4].column_1.heading}</h3>
                        <p>{props.allWordpressPage.edges[0].node.acf.sections_page[4].column_1.paragraph}</p>
                        <a href={props.allWordpressPage.edges[0].node.acf.sections_page[4].column_1.button.link} className="btn btn-secondary">{props.allWordpressPage.edges[0].node.acf.sections_page[4].column_1.button.text}</a>
                    </div>
                    <div className="col-md-6 text-center">
                        <Img fluid={props.allWordpressPage.edges[0].node.acf.sections_page[4].column_2.image.localFile.childImageSharp.fluid} style={{maxWidth:`283px`}} className="mx-auto" />
                        <h3>{props.allWordpressPage.edges[0].node.acf.sections_page[4].column_2.heading}</h3>
                        <p>{props.allWordpressPage.edges[0].node.acf.sections_page[4].column_2.paragraph}</p>
                        <a href={props.allWordpressPage.edges[0].node.acf.sections_page[4].column_2.button.link} className="btn btn-secondary">{props.allWordpressPage.edges[0].node.acf.sections_page[4].column_2.button.text}</a>
                    </div>
                </div>
            </div>
        </div>
    )} />
)

export default Featured