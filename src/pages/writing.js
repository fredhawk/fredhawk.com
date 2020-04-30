import { graphql, Link } from "gatsby"
import React from "react"
import Quill from "../../content/assets/quill.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Writing" />
      <div className="w-16 mx-auto pt-2 pb-4">
        <img src={Quill} alt="Quill" />
      </div>
      <header className="py-8 mb-6">
        <h2 className="text-3xl text-gray-800">Writings</h2>
        <p>
          I write about React, CSS, accessibility and webdevelopment in general.
        </p>
      </header>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            data-testid="writing"
            key={node.fields.slug}
            className="mb-12"
          >
            <header>
              <h3 className="text-lg text-gray-800">
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small className="text-xs text-gray-700">
                {node.frontmatter.date}
              </small>
            </header>
            <section className="mb-4">
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { type: { eq: "Post" }, published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
