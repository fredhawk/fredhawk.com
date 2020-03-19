import React from "react"

export const Footer = () => (
  <footer className="mx-auto w-full px-4 sm:px-6 text-center mt-8 md:max-w-3xl">
    <hr className="horizontal-rule" />
    <p className="mt-6">© {new Date().getFullYear()}</p>
  </footer>
)
