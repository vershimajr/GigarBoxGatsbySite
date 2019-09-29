import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import PropTypes from 'prop-types';

const Hero = ({title}) => {
    const data = useStaticQuery(graphql`
        query HeroQuery {
            heroBackground: file(relativePath: { eq: "businesspeople.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `)
    return (
            <BackgroundImage
                Tag="section"
                style={{backgroundAttachment: "fixed", backgroundSize: "cover", height: '16rem', backgroundPosition: 'left' }}
                className="index-hero"
                fluid={data.heroBackground.childImageSharp.fluid}
            >
                <div className="absolute inset-0 text-white bg-black-70 text-4xl flex text-center items-center justify-center">
                    { title ? (
                        <span><span className="mr-2">GigarBox </span>Technology</span>
                    ) : '' }
                </div>
            </BackgroundImage>
    )
}

Hero.defaultProps = {
    title:false,
}

Hero.propTypes = {
    title: PropTypes.bool,
}

export default Hero
