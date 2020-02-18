import React from "react"

export const Project = ({ project }) => {
  return (
    <div>
      <a href={project.blogpostlink}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <img src={project.imgUrl} alt={project.title} />
      </a>
    </div>
  )
}
