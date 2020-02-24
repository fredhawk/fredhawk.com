import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const Navigation = ({ links, isOpen }) => {
  return (
    <nav
      className={`${
        isOpen ? "block " : "hidden"
      } sm:flex items-center px-2 pt-2 pb-4 sm:p-0`}
    >
      <ul className="sm:flex">
        {links.map(link => (
          <li key={link.title} className="mt-1 font-semibold px-2 py-1 sm:ml-2">
            <Link to={link.src}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

Navigation.defaultProps = {
  navlinks: [],
}
