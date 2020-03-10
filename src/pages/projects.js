import { graphql } from "gatsby"
import React from "react"
import Lion from "../../content/assets/lion.svg"
import Layout from "../components/layout"
import { ProjectList } from "../components/projectslist"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const projects = data.site.siteMetadata.projects
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="w-32 mx-auto pt-2 pb-4">
        <img src={Lion} alt="Lion" />
      </div>
      <header className="py-8">
        <h2 className="text-3xl text-gray-800">Projects</h2>
      </header>
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
          imgUrl
          title
          slug
        }
      }
    }
  }
`
