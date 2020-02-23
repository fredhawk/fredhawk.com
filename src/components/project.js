import { graphql, useStaticQuery } from "gatsby"
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
    <div className="py-4">
      <a href={project.blogpostlink}>
        <div className="sm:flex sm:flex-row">
          <div className="sm:w-64">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="An astronaut"
              className="max-w-full h-32 md:h-full"
            />
          </div>
          <div className="flex flex-col justify-between sm:px-6">
            <div>
              <h2 className="py-2 text-xl text-gray-800">{project.title}</h2>
              <p className="pb-2 text-gray-600">{project.description}</p>
            </div>
            <ul className="flex">
              <li className="px-2 mr-2 border rounded border-red-400">React</li>
              <li className="px-2 mx-2 border rounded border-green-400">CSS</li>
              <li className="px-2 mx-2 border rounded border-purple-400">
                Accessibility
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  )
}
