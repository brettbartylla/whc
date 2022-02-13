/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from  './indexMenu'
import "./layout.css"
import "./sass/styles.scss"
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath:{
          regex:"/foodplots/"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }
        
      }
    `}
    render={data => (
      <>

        <div>
          <main>{children}
          </main>
          <footer style={{
            paddingBottom:15,
          }}>
            © {new Date().getFullYear()}, Whitetail Habitat Consulting
            {` `}
            {/* <a href="http://staging3.nn7sbarak3.us-west-2.elasticbeanstalk.com/">Brett Bartylla</a> */}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


