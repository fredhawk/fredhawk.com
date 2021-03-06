import { graphql, Link } from "gatsby"
import React from "react"
import Hawk from "../../content/assets/hawk.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges.filter((post, i) => i < 3)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-16 mx-auto pt-2 pb-4">
        <img src={Hawk} alt="Hawk" />
      </div>
      <div className="articlelist">
        <h2 className="text-3xl text-gray-800 mb-6 py-8">Recent Posts</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              data-testid="post"
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
              <section>
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
      </div>
    </Layout>
  )
}

export default IndexPage

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
