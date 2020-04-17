import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from "styled-components"
//import SiteInfo from "./SiteInfo"
//import PropTypes from "prop-types"




const MenuItem = styled(Link)`
color: white;
display: block;
padding: 8px 16px;
`

const Navigation = () => (
    <StaticQuery query={graphql`
    {
   allWordpressWpApiMenusMenusItems(filter: {name: {eq: "TopNav"}}) {
    edges {
      node {
        items {
          title
          object_slug
          wordpress_children {
            title
            object_slug
          }
        }
      }
    }
  }
}
  `}
  render={props =>  (
        <ul className="list-unstyled">
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, i) => (
                <li key={i}>
                    <MenuItem to={item.object_slug} activeClassName="nav-active">{item.title}</MenuItem>
                    {item.wordpress_children ? (
                        <>
                            <ul className="submenu">
                            {item.wordpress_children.map((child, j) =>(
                                <li key={j}>
                                    <MenuItem to={child.object_slug} activeClassName="nav-active">{child.title}</MenuItem>
                                </li>
                            ))}
                            </ul>
                        </>
                        ) : null}
                </li>
            ))}
        </ul>
    )} />
)

export default Navigation