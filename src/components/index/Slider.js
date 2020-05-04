import React from "react"
import { graphql, StaticQuery } from 'gatsby'
//import Swiper from 'react-id-swiper';

import Img from "gatsby-image"
//import 'swiper/css/swiper.min.css';
import Swiper from "./CustomSwiper"


    
const Slider = () => (
    <StaticQuery query={graphql`
        {
  allWordpressPage(filter:   {slug: {eq: "home"}}) {
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
            
            <div style={{
                background:`#F0F0F0`,
                paddingTop:`89px`,
                paddingBottom:`100px`,
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>{props.allWordpressPage.edges[0].node.acf.sections_page[2].heading}</h2>
                            
                        </div>
                    </div>
                    <div className="row block-pn1">
                        
                        <div className="col-md-9 col-lg-9 mx-auto" style={{transform:`translateX(84px)`}}>
                            <Swiper>
                                {props.allWordpressPage.edges[0].node.acf.sections_page[2].slides.map((item, i) => (
                                    <div data-name={item.content.title} key={i}>
                                        <div className="d-md-flex no-gutters">
                                            <div className="col-md-8 p-pn9 mw-650 order-md-2">
                                                <Img fluid={item.image.localFile.childImageSharp.fluid} className="swiper-lazy" />
                                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                                            </div>
                                            <div className="col d-flex flex-column justify-content-center pr-5 order-md-1">
                                                <h3>{item.content.title}</h3>
                                                <p>{item.content.paragraph}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}    
                            </Swiper>    
                        </div>
                    </div>
                </div>
            </div>
            </>
        )} />  
)

export default Slider