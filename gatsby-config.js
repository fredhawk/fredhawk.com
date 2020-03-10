module.exports = {
  siteMetadata: {
    title: `Fred Hawk`,
    description: `My site`,
    author: `Fred Hawk`,
    siteUrl: `https://fredhawk.com`,
    navLinks: [
      {
        src: `/`,
        title: `Home`,
      },
      { src: `/writing/`, title: `Writing` },
      { src: `/projects/`, title: `Projects` },
      {
        src: `/contact/`,
        title: `Contact`,
      },
    ],
    projects: [
      {
        title: `Bookfinder`,
        githublink: `https://github.com/ozinon/google-book-api`,
        url: `https://friendly-bookfinder.netlify.com/`,
        description: `A React project to search for books through use of Google Books API. Project made to settle my own curiosity about Parcel and setting up a project with automated testing, linting and code style upon committing to git.
        The biggest challenge on this project was to set it up with automation on the things I wanted. Setting each up wasn't that difficult but getting them to work together was not straight forward. To solve that issue I used tools like Husky and lint-staged that glued them together and made them work together.`,
        imgUrl: `https://via.placeholder.com/300`,
        techstack: [`Parcel`, `ReactJS`, `Jest`, `Google Books API`],
        slug: `book-finder`,
      },
      {
        title: `Resume Bears`,
        githublink: `https://github.com/chingu-voyages/v8-bears-team-17`,
        url: `https://resume-bears.netlify.com/`,
        description: `A tool to easily edit and build upon for a resume using Vue and Vuetify. Inspired by and works with jsonresume.org. Trying out Vue for the first time was fun.
        The greatest challenge was to style and export to PDF which we solved through using native CSS printing styles rather than using JavaScript to do it.`,
        imgUrl: `https://via.placeholder.com/300`,
        techstack: [`Vue`, `Vuetify`],
        slug: `resume-bears`,
      },
      {
        title: `Blue Candlenut`,
        githublink: `https://github.com/ozinon/blue-candlenut`,
        url: `https://blue-candlenut.netlify.com/`,
        description: `Tool to find closest service centers in Norway. Built with React using the Google Maps API.
        Solving how to populate the map with all the pointers and then calculating and building a new list based on distance from where your input coordinates was a challenge.`,
        imgUrl: `https://via.placeholder.com/300`,
        techstack: [`ReactJS`, `Google Maps API`],
        slug: `blue-candlenut`,
      },
      {
        title: `Budget Bears`,
        githublink: `https://github.com/chingu-voyage7/Bears-Team-19`,
        url: `https://budget-bears.netlify.com/`,
        description: `A home expense tracking app where you can track multiple accounts. It is built with ReactJS and Redux on the frontend and NodeJS on the backend.
        Making a timeline charts over the transactions with different accounts and purchase categories was solved by having a chart with the total balance of all the accounts. But there is also charts filtered on each account. Making the creation of an account a transaction in and of itself helped a lot. That also solved a problem we had with how to handle account creations in relation to transactions on the backend. At first account creation had no record or relation to transactions which proved a problem with initial balance of the account.`,
        imgUrl: `https://via.placeholder.com/300`,
        techstack: [
          `Docker`,
          `ExpressJS`,
          `KnexJS`,
          `Postgres`,
          `ReactJS`,
          `Redux`,
          `Bulma`,
          `Firebase Auth`,
          `Rechars`,
        ],
        slug: `budget-bears`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Fred Hawk's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fred-hawk-blog`,
        short_name: `fredhawk`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
