import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
//import Navigation from './Navigation'

import PantherLogo from "../images/Panther-Dark-Logo-white.png"
import Navigation from "./Navigation"

const Header = () => (
    
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
            <Navigation />
        </div>
        
      </div>
    </div>
    
  </header>
)

export default Header
