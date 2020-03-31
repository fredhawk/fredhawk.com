import { MDXProvider } from "@mdx-js/react"
import "prismjs/themes/prism.css"
import React from "react"

const components = {
  wrapper: ({ children }) => <>{children}</>,
  h2: props => (
    <h2 className="mb-8 text-lg text-green-600" {...props}>
      {props.children}
    </h2>
  ),
  h3: props => (
    <h3 className="mb-6 text-md" {...props}>
      {props.children}
    </h3>
  ),
  p: props => (
    <p className="mb-4 leading-relaxed text-sm" {...props}>
      {props.children}
    </p>
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
