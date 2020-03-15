import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"

const ProjectTemplate = props => {
  const project = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="w-64 bg-green-500 mx-auto">
        <Img
          fluid={props.data.file.childImageSharp.fluid}
          alt="An astronaut"
          className="w-full"
        />
      </div>
      <h2>{project.frontmatter.title}</h2>
      <section dangerouslySetInnerHTML={{ __html: project.html }} />
      <MDXRenderer>{project.body}</MDXRenderer>
      <ul>
        {project.frontmatter.techstack.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="flex justify-around items-center">
        <a href={project.frontmatter.url}>Demo</a>
        <a href={project.frontmatter.githublink}>Github</a>
      </div>
      <nav className="mt-12">
        <ul className="flex justify-between">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                &larr; {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} &rarr;
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!, $img: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        imgUrl
        url
        githublink
        techstack
      }
    }
    file(relativePath: { eq: $img }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
