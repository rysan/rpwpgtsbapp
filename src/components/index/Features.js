import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Features = () => (
    
    <StaticQuery query={graphql`
        {
  allWordpressPage(filter:   {slug: {eq: "home"}}) {
    edges {
      node {
        acf {
          sections_page {
            ... on WordPressAcf_features {
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
              }
              column_2 {
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
              }
              column_3 {
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
                paddingTop:`120px`,
                paddingBottom:`71px`,
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <Img fluid={props.allWordpressPage.edges[0].node.acf.sections_page[1].column_1.image.localFile.childImageSharp.fluid} />
                            <h3>{props.allWordpressPage.edges[0].node.acf.sections_page[1].column_1.heading}</h3>
                            <p>{props.allWordpressPage.edges[0].node.acf.sections_page[1].column_1.paragraph}</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <Img fluid={props.allWordpressPage.edges[0].node.acf.sections_page[1].column_2.image.localFile.childImageSharp.fluid} />
                            <h3>{props.allWordpressPage.edges[0].node.acf.sections_page[1].column_2.heading}</h3>
                            <p>{props.allWordpressPage.edges[0].node.acf.sections_page[1].column_2.paragraph}</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <Img fluid={props.allWordpressPage.edges[0].node.acf.sections_page[1].column_3.image.localFile.childImageSharp.fluid} />
                            <h3>{props.allWordpressPage.edges[0].node.acf.sections_page[1].column_3.heading}</h3>
                            <p>{props.allWordpressPage.edges[0].node.acf.sections_page[1].column_3.paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        
        )} />
)

export default Features