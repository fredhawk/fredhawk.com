import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { Navigation } from "./navigation"

const Header = ({ siteTitle, navlinks }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="w-full mb-4">
      <div className="lg:mx-auto lg:max-w-screen sm:flex sm:justify-between sm:px-4 sm:py-3 sm:text-center ">
        <div className="flex items-center justify-between px-2 py-3 sm:p-0">
          <div>
            <h1 className="text-xl px-2 uppercase">
              <Link to="/" className="no-underline">
                {siteTitle}
              </Link>
            </h1>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className=""
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <MdClose size="24px" /> : <MdMenu size="24px" />}
            </button>
          </div>
        </div>
        <Navigation links={navlinks} isOpen={isOpen} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  navlinks: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

Header.defaultProps = {
  siteTitle: ``,
  navlinks: [],
}

export default Header
