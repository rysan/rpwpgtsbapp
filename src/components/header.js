import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import Navigation from './Navigation'

import PantherLogo from "../images/Panther-Dark-Logo-white.png"
import Navigation from "./Navigation"

const Header = ({ siteTitle }) => (
    
  <header className="header"
    style={{
      background: `#D8D8D8`,
    }}
  >
    <div className="container">
        <div className="d-flex flex-row align-items-center" style={{
            paddingTop:`40px`, paddingBottom:`40px`,
        }}>
        <Link to="/" className="d-block" style={{
            maxWidth: `152px`,
        }}>
        <img src={PantherLogo} alt="panther logo" className="img-fluid" />
        </Link>
        <div className="ml-auto position-relative" style={{minHeight: `45px`,}}>
            <nav id="nav">
                <Navigation />
            </nav>
        </div>
        
      </div>
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
