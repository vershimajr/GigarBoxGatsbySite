import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "typeface-lato"
import "./layout.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./tailwind.css"

const Layout = ({ children, isNavActive }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            {isNavActive ? <Header siteTitle={data.site.siteMetadata.title} /> : ""}
            <div className="font-lato text-darkgray">
                <main>{children}</main>
            </div>
            <Footer></Footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isNavActive: PropTypes.bool,
}

Layout.defaultProps = {
    isNavActive: true,
}

export default Layout
