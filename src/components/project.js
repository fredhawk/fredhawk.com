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
    <>
      <Link to={`/project/${project.slug}/`}>
        <div className="w-64 bg-green-500 mx-auto">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="An astronaut"
            className="w-full"
          />
        </div>
        <h2>{project.title}</h2>
      </Link>
    </>
  )
}
