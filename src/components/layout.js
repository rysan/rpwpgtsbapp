/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Header from "./header"
//import "./bootstrap-grid.min.css"
import "./main.css"
import styled, {createGlobalStyle} from "styled-components"
//import MainMenu from "./MainMenu"
//import Navigation from "./Navigation"
import Footer from "./footer"

const GlobalStyles = createGlobalStyle`
    body, html{
        margin:0 !important;
        padding:0 !important;
    }
`
const LayoutWrapper = styled.div``

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <GlobalStyles />
        <Helmet>
            <script src={withPrefix("menu.js")} />
        </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div id="main" className="main-container">
        
        <LayoutWrapper>
        
        <main>{children}</main>
        
        <Footer />
        </LayoutWrapper>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
