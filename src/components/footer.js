import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PantherLogo from "../images/Panther-Dark-Logo-white.png"
import SubscribeFooter from "./SubscribeFooter"

const Footer = () => (
    <StaticQuery query={graphql`
        {
  wordpressAcfOptions {
    options {
      copyright
      cta {
        button_link
        button_text
        heading
      }
      footer_links {
        column_1 {
          heading
          links {
            link
            text
          }
        }
        column_2 {
          heading
          links {
            link
            text
          }
        }
        column_3 {
          heading
          links {
            link
            text
          }
        }
      }
      social_links {
        icon
        link
      }
    }
  }
}
        `} render={props => (
    <footer className="text-white" style={{
        background:`#2E2E2E`,
        paddingTop:`49px`,
        paddingBottom:`94px`,
    }}>
          <div className="container">
            <div className="row" style={{minHeight:`34px`, marginBottom:`42px`}}>
                <div className="col-md-6 m-dsm-b30">
                    <img src={PantherLogo} alt="panther logo" className="img-fluid" style={{maxWidth:`162px`}} />
                </div>
                <div className="ml-md-auto">
                    <ul className="list-unstyled d-flex align-items-center list-m-l15">
                    {props.wordpressAcfOptions.options.social_links.map((item, i) => (
                        <li key={i}>
                            <a href={item.link}><i className={item.icon}></i></a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row" style={{paddingBottom:`45px`}}>
                        <div className="col-md-4">
                            <h4>{props.wordpressAcfOptions.options.footer_links.column_1.heading}</h4>
                            <ul className="list-unstyled footer-links">
                            {props.wordpressAcfOptions.options.footer_links.column_1.links.map((item, i) => (
                                <li key={i}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))}   
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>{props.wordpressAcfOptions.options.footer_links.column_2.heading}</h4>
                            <ul className="list-unstyled footer-links">
                            {props.wordpressAcfOptions.options.footer_links.column_2.links.map((item, i) => (
                                <li key={i}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))}   
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>{props.wordpressAcfOptions.options.footer_links.column_3.heading}</h4>
                            <ul className="list-unstyled footer-links">
                            {props.wordpressAcfOptions.options.footer_links.column_3.links.map((item, i) => (
                                <li key={i}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))}   
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{paddingTop:`46px`}}>
                        {props.wordpressAcfOptions.options.copyright}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row" style={{marginBottom:`42px`}}>
                        <div className="col-12" style={{paddingTop:`47px`, paddingBottom:`65px`}}>
                            <h3>{props.wordpressAcfOptions.options.cta.heading}</h3>
                            <a href={props.wordpressAcfOptions.options.cta.button_link} className="btn btn-light">{props.wordpressAcfOptions.options.cta.button_text}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>Subscribe to newsletter</h3>
                            <SubscribeFooter />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </footer>
        )} />
)
export default Footer