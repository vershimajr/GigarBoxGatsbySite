import React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="font-lato bg-lightgray">
            <div className="py-16 container mx-auto flex flex-col md:flex-row justify-between">
                <div className="w-11/12 mx-auto md:mx-0 md:w-1/3 flex justify-center md:justify-start">
                    <div className="text-muted flex flex-col items-center md:items-start">
                        <h6 className="mb-3 font-medium text-lg text-darkgray border-b-2 border-gold w-full md:w-auto text-center md:text-left pb-2 md:pb-0">
                            Links
                        </h6>
                        <Link to="/#about-us">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/technology">Our Technology</Link>
                    </div>
                </div>
                <div className="order-last md:order-none w-10/12 sm:w-6/12 mx-auto md:mx-0 md:w-1/3 text-muted text-center flex flex-col justify-center items-center">
                    <p>GigarBox is enriching public and private social infrastructures through our trustful document recording and verification technology</p>
                </div>
                <div className="my-10 md:my-0 w-11/12 mx-auto md:mx-0 md:w-1/3 flex justify-center md:justify-end">
                    <div className="text-muted flex flex-col items-center md:items-end">
                        <h6 className="mb-3 font-medium text-lg text-darkgray border-b-2 border-gold w-full md:w-auto text-center md:text-left pb-2 md:pb-0">
                            Use Cases
                        </h6>
                        <Link aria-label="GigarBox Academic form page" to="/academia">GigarBox Academic</Link>
                        <Link aria-label="GigarBox Government form page" to="/government">GigarBox Government</Link>
                        <Link aria-label="GigarBox Business form page" to="/business">GigarBox Buisness</Link>
                        <Link aria-label="GigarBox Personal form page" to="/personal">GigarBox Personal</Link>
                    </div>
                </div>
            </div>
            <div className="text-center pb-5">©2019 GigarBox Company L.P. and its affiliates</div>
        </footer>
    )
}

export default Footer
