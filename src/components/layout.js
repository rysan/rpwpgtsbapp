/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./bootstrap-grid.min.css"
//import "./main.css"
import styled, {createGlobalStyle} from "styled-components"
import MainMenu from "./MainMenu"

const GlobalStyles = createGlobalStyle`
    body, html{
        margin:0 !important;
        padding:0 !important;
    }
`
const LayoutWrapper = styled.div`
max-width:960px;
margin:0 auto;
`

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <MainMenu />
        <LayoutWrapper>
        
        <main>{children}</main>
        
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </LayoutWrapper>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
