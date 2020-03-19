/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Footer } from "./footer.js"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navLinks {
            src
            title
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        siteTitle={data.site.siteMetadata.title}
        navlinks={data.site.siteMetadata.navLinks}
      />
      <main className="lg:mx-auto lg:max-w-3xl px-4 sm:px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
