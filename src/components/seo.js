/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Helmet from "react-helmet"

const SEO = ({title, description, image}) => (
    <StaticQuery query={query} 
    render={({
        site: {
            siteMetadata: {
                defaultTitle,
                defaultDescription,
                defaultImage,
                url,
            }
        }
    })=>{
        const seo ={
            title: title || defaultTitle,
            description: description || defaultDescription,
            image: `${image ? image : url+defaultImage}`,
        }
        return(
            <Helmet>
                <title>{seo.title}</title>
                <meta name="image" content={seo.image} />
                <meta name="description" content={seo.description} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={seo.title} />
                <meta property="og:image" content={seo.image} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:title" content={seo.title} />
                <meta name="robots" content="noindex,nofollow" />
            </Helmet>
        )
    }} />
)
export default SEO

const query = graphql`
{
  site {
    siteMetadata {
      defaultTitle: title
      defaultDescription: description
      defaultImage: image
      url
    }
  }
}
`
