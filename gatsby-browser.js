import { MDXProvider } from "@mdx-js/react"
import "prismjs/themes/prism.css"
import React from "react"

const components = {
  wrapper: ({ children }) => <>{children}</>,
  h2: props => (
    <h2 className="mb-8 text-lg text-gray-800" {...props}>
      {props.children}
    </h2>
  ),
  h3: props => (
    <h3 className="mb-6 text-md text-gray-700" {...props}>
      {props.children}
    </h3>
  ),
  p: props => (
    <p className="mb-4 leading-relaxed text-sm text-gray-800" {...props}>
      {props.children}
    </p>
  ),

  blockquote: props => (
    <blockquote
      className="mb-4 leading-relaxed text-sm bg-gray-200 py-3"
      {...props}
    >
      {props.children}
    </blockquote>
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
