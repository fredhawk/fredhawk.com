import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathname={props.location.pathname}
      />
      <article>
        <header className="py-4">
          <h1 className="text-2xl text-gray-900">{post.frontmatter.title}</h1>
          <p className="text-sm text-gray-400">{post.frontmatter.date}</p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>

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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM DD")
        description
      }
    }
  }
`
