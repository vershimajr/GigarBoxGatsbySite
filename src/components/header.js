import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
    const [isNavActive, toggleNavActive] = useState(false)
    const navMargin = (isNavActive) ? "mt-0" : "-mt-64"
    return (
        <nav className="bg-navyblue font-lato text-lightgray text-lg tw-shadow-xl">
            <div className="w-10/12 md:container flex flex-wrap justify-between items-center mx-auto">
                <div className="bg-navyblue py-4 z-20 flex justify-between w-full md:w-auto">
                    <div id="nav-header" className="flex items-center">
                        <Link to="/" className="text-2xl py-1 text-white hover:text-gold font-medium">
                            GigarBox
                        </Link>
                    </div>
                    <button className="bg-darkgray rounded px-3 py-1 text-2xl block md:hidden" onClick={() => toggleNavActive(!isNavActive)}>&#x2630;</button>
                </div>
                <div id="nav-link" className={ `${navMargin} md:mt-0 tr-200-ease md:mt-0 pb-5 md:pb-0 flex flex-col md:flex-row md:items-center text-center w-full md:w-auto font-medium` }>
                    <Link className="my-1 md:my-0 py-2 md:py-0 mx-3 hover:text-gold" to="/#about-us">
                        About
                    </Link>
                    <Link className="my-1 md:my-0 py-2 md:py-0 mx-3 hover:text-gold" to="/contact">
                        Contact
                    </Link>
                    <Link className="my-1 md:my-0 py-2 md:py-0 mx-3 hover:text-gold" to="/technology">
                        Technology
                    </Link>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
