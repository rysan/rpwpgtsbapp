import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Img from "gatsby-image"

const Slider = () => (
    <StaticQuery query={graphql`
        {
  allWordpressPage(filter: {wordpress_id: {eq: 2}}) {
    edges {
      node {
        acf {
          sections_page {
            ... on WordPressAcf_slider {
              id
              heading
              slides {
                content {
                  icon
                  paragraph
                  title
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
}
        `} render={props => (
            <>
            <Helmet>
            <script src={withPrefix("swiper.min.js")} />
            <script src={withPrefix("main.js")} />
            </Helmet>
            <div style={{
                background:`#F0F0F0`,
                paddingTop:`89px`,
                padingBottom:`100px`,
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>{props.allWordpressPage.edges[0].node.acf.sections_page[2].heading}</h2>
                        </div>
                    </div>
                    <div className="row block-pn1">
                        <div className="col-md-3 col-lg-2">
                            <div className="swiper-pagination d-none d-md-block"></div>
                        </div>
                        <div className="col-md-9 col-lg-8">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                {props.allWordpressPage.edges[0].node.acf.sections_page[2].slides.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="d-md-flex no-gutters">
                                            <div className="col-md-8 p-pn9 mw-650 order-md-2">
                                                <Img fluid={item.image.localFile.childImageSharp.fluid} />
                                            </div>
                                            <div className="col d-flex flex-column justify-content-center pr-5 order-md-1">
                                                <h3>{item.content.title}</h3>
                                                <p>{item.content.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )} />  
)

export default Slider