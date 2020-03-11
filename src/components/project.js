import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export const Project = ({ project }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="relative bg-purple-500 w-64 mx-auto hover:scale-110 transform">
      <Link to={`/project/${project.slug}/`}>
        <div className="">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="An astronaut"
            className="w-full"
          />
        </div>
        <h2 className="absolute top-0 right-0 mt-10 mr-4 bg-orange-500 p-1 rounded rotate-45 transform">
          {project.title}
        </h2>
      </Link>
    </div>
  )
}
