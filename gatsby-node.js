const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPage = path.resolve(`./src/templates/project.js`)
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                imgUrl
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMdx.edges.filter(
    edge => edge.node.frontmatter.date !== null
  )

  const projects = result.data.allMdx.edges.filter(
    edge => edge.node.frontmatter.date === null
  )

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next,
      },
    })
  })

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node

    createPage({
      path: project.node.fields.slug,
      component: projectPage,
      context: {
        slug: project.node.fields.slug,
        previous,
        next,
        img: project.node.frontmatter.imgUrl,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx` && node.frontmatter.type === `Post`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/writing${value}`,
    })
  }
  if (node.internal.type === `Mdx` && node.frontmatter.type === `Project`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/projects${value}`,
    })
  }
}
