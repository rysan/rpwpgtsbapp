import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
//import innertext from "innertext"

const PageLayout = ({pageContext, data}) => {
    const page = data.wordpressPage
    return (
    <Layout>
    <SEO 
    title={page.yoast_title} 
    description={page.yoast_meta.map((item) => (item.name==='description' ? item.content : '')).join('')}  
    />
    
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
    )
}

export default PageLayout

export const query = graphql`
    query($slug: String!){
        wordpressPage( slug: {eq: $slug}) {
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