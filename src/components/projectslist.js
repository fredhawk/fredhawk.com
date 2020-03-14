import React from "react"
import { Project } from "./project"

export const ProjectList = ({ projects }) => {
  return (
    <div className="grid project-list">
      {projects.length > 0
        ? projects.map(({ node }) => (
            <Project key={`project-${node.frontmatter.title}`} project={node} />
          ))
        : null}
    </div>
  )
}
