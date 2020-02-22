import React from "react"
import { Project } from "./project"

export const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.length > 0
        ? projects.map(project => (
            <Project key={`project-${project.title}`} project={project} />
          ))
        : null}
    </div>
  )
}