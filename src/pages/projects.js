import { graphql } from "gatsby"
import React from "react"
import Lion from "../../content/assets/lion.svg"
import Layout from "../components/layout"
import { ProjectList } from "../components/projectslist"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const projects = data.allMdx.edges.map(edge => {
    data.allFile.edges.forEach(imgedge => {
      if (
        edge.node.frontmatter.imgUrl ===
        imgedge.node.childImageSharp.fluid.originalName
      ) {
        edge.node.frontmatter["imagedata"] = imgedge.node.childImageSharp
        return edge
      }
    })
    return edge
  })

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

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { frontmatter: { type: { eq: "Project" } } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            imgUrl
            title
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "projectimages" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 300) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
