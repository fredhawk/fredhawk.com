import React from "react"

export const Footer = () => (
  <footer className="mx-auto max-w-3xl px-4 sm:px-6 text-center mt-8">
    <hr className="horizontal-rule" />
    <p className="mt-6">© {new Date().getFullYear()}</p>
  </footer>
)
