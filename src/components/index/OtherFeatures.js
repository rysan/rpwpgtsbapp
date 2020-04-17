import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const OtherFeatures = () => (
    <StaticQuery query={graphql`
        {
  allWordpressPage(filter: {wordpress_id: {eq: 2}}) {
    edges {
      node {
        acf {
          sections_page {
            ... on WordPressAcf_other_features {
              heading
              row {
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
}
        `} render={props => (
        <div style={{
            paddingTop:`81px`,
            paddingBottom:`60px`,
        }}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2>{props.allWordpressPage.edges[0].node.acf.sections_page[3].heading}</h2>
                    </div>
                </div>
                {props.allWordpressPage.edges[0].node.acf.sections_page[3].row.map((item, i) => (
                <div key={i} className="row">
                    <div className="col-md-4 text-center">
                        <Img fluid={item.column_1.image.localFile.childImageSharp.fluid} style={{maxWidth:`100px`}} className="mx-auto" />
                        <h3>{item.column_1.heading}</h3>
                        <p>{item.column_1.paragraph}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <Img fluid={item.column_2.image.localFile.childImageSharp.fluid} style={{maxWidth:`100px`}} className="mx-auto" />
                        <h3>{item.column_2.heading}</h3>
                        <p>{item.column_2.paragraph}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <Img fluid={item.column_3.image.localFile.childImageSharp.fluid} style={{maxWidth:`100px`}} className="mx-auto" />
                        <h3>{item.column_3.heading}</h3>
                        <p>{item.column_3.paragraph}</p>
                    </div>
                </div>
                ))}
            </div>
        </div> 
    
    )} />
)

export default OtherFeatures