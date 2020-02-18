import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { ProjectList } from "../components/projectslist"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const projects = data.site.siteMetadata.projects
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectList projects={projects} />
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        projects {
          blogpostlink
          description
          imgUrl
          title
          url
        }
      }
    }
  }
`
