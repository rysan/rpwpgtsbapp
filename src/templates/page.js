import React from "react"
import Layout from "../components/layout"

export default ({pageContext}) => (
    <Layout>
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    <strong>URL:</strong><a href={pageContext.acf.url} target="_blank" rel="noopener noreferrer">{pageContext.acf.url}</a>
    </Layout>
);