import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export const Project = ({ project }) => {
  return (
    <div
      data-testid="project"
      className="border rounded relative bg-purple-500 w-64 mx-auto hover:scale-110 transform"
    >
      <Link to={project.fields.slug}>
        <div className="">
          <Img
            fluid={project.frontmatter.imagedata.fluid}
            alt="An astronaut"
            className="w-full"
          />
        </div>
        <h2 className="absolute top-0 right-0 mt-10 mr-4 bg-orange-100 border-orange-600 border-2 p-1 rounded rotate-45 transform text-orange-800 hover:text-orange-500">
          {project.frontmatter.title}
        </h2>
      </Link>
    </div>
  )
}
