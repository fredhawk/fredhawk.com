import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.pageContext.project

    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="w-64 bg-green-500 mx-auto">
          <Img fluid={project.imgUrl} alt="An astronaut" className="w-full" />
        </div>
        <h2>{project.title}</h2>
        <p className="description">{project.description}</p>

        <ul>
          {project.techstack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex justify-around items-center">
          <a href={project.url}>Demo</a>
          <a href={project.githublink}>Github</a>
        </div>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug {
    site {
      siteMetadata {
        title
      }
    }
  }
`
