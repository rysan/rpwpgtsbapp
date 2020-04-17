import React from "react"
import { graphql, StaticQuery } from "gatsby"

const CTABanner = () => (
    
    <StaticQuery query={graphql`
    {
  allWordpressPage(filter:   {slug: {eq: "home"}}) {
    edges {
      node {
        acf {
          sections_page {
            ... on WordPressAcf_cta_banner {
              button {
                link
                text
              }
              paragraph
              heading
            }
          }
        }
      }
    }
  }
}    
        `} render={props => (
        <div style={{
            paddingTop:`99px`,
            paddingBottom:`99px`,
        }}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2>{props.allWordpressPage.edges[0].node.acf.sections_page[5].heading}</h2>
                        <p>{props.allWordpressPage.edges[0].node.acf.sections_page[5].paragraph}</p>
                        <a href={props.allWordpressPage.edges[0].node.acf.sections_page[5].button.link} className="btn btn-secondary">{props.allWordpressPage.edges[0].node.acf.sections_page[5].button.text}</a>
                    </div>
                </div>
            </div>
        </div>   
        )} />
)

export default CTABanner