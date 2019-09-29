import React from "react"
import { Link } from "gatsby"

const SectionCard = ({ children, title, link }) => {
    return (
        <div className="section-card bg-white p-10 flex flex-col items-center text-center rounded shadow-lg mx-auto mb-5">
            <h3 className="text-3xl mb-3">{title}</h3>
            <p className="mb-8">{children}</p>
            <Link to={link} className="mt-auto inline-block btn" aria-label={`GigarBox ${title} form page`} >
                Learn More
            </Link>
        </div>
    )
}

export default SectionCard;
