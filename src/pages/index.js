import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionCard from "../components/Index/SectionCard"

const IndexPage = ({ data }) => {
    return (
        <Layout isNavActive={false}>
            <SEO title="GigarBox" />
            <BackgroundImage
                Tag="section"
                style={{ backgroundAttachment: "fixed", backgroundSize: "cover" }}
                className="index-hero"
                fluid={data.background.childImageSharp.fluid}
            >
                <div className="bg-custom-black-70">
                    <Img fluid={data.gigarLogo.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} style={{ height: "600px" }} className="h-64"></Img>
                    <h1 className="text-3xl text-white w-11/12 sm:w-6/12 lg:w-1/3 mx-auto text-center -mt-20 pb-20">
                        Decentralized, Immutable, <br />
                        Cryptographically-Secured File <br />
                        Storage and Management System
                    </h1>
                </div>
            </BackgroundImage>
            <section id="about-us" className="bg-svg-circuit-light bg-svg-fixed">
                <div className="container mx-auto py-24 flex flex-col">
                    <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center md:px-10">
                        <div className="w-11/12 md:w-1/2 lg:w-1/3 lg:mx-auto mt-16 md:mt-0 md:pr-10 lg:pr-0">
                            <h2 className="my-6 text-2xl lg:text-3xl font-bold leading-tight">
                                <span className="text-gold ">GigarBox was built for </span>cryptographically-secure document storage, management, and
                                verification
                            </h2>
                            <p className="text-xl">
                                GigarBox is enriching public and private social infrastructures through our trustful document recording and verification
                                technology
                            </p>
                        </div>
                        <Img
                            className="w-64 md:w-96 lg:w-128 order-first md:order-none md:py-20 mx-auto"
                            fluid={data.devices.childImageSharp.fluid}
                            imgStyle={{ objectFit: "scale-down" }}
                        ></Img>
                    </div>
                    <Link to="/technology" className="mx-auto mt-20 btn">
                        Learn About Our Technology
                    </Link>
                </div>
            </section>
            <BackgroundImage
                Tag="section"
                style={{ backgroundAttachment: "fixed", backgroundSize: "cover" }}
                className="index-hero"
                fluid={data.features.childImageSharp.fluid}
            >
                <div className="container mx-auto flex flex-wrap justify-between py-20">
                  <SectionCard title="Academia" link="/academia" link2="https://academia.gigarbox.com" link2message="Visit The Academia Portal">
                        Academic institutions around the world are leveraging GigarBox technology for the storage, management, and verification of student
                        academic records
                    </SectionCard>
                    <SectionCard title="Government" link="/government">
                        Municipalities around the world are leveraging GigarBox technology for recording, managing, and verifying publicly issued licenses,
                        deeds, and permits
                    </SectionCard>
                    <SectionCard title="Business" link="/business">
                        See how the power of GigarBox technology can add value to your business recordkeeping and document management workflow
                    </SectionCard>
                    <SectionCard title="Personal" link="/personal">
                        See how the power of GigarBox technology can add value to your personal recordkeeping
                    </SectionCard>
                </div>
            </BackgroundImage>
            <section className="bg-svg-circuit bg-svg-fixed bg-bluegray py-32 text-white">
                <div className="w-11/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mx-auto text-center">
                    <h1 className="text-5xl mb-10">Get Started With GigarBox</h1>
                    <Link to="/contact" className="block btn mx-10 text-darkgray">
                        Contact Us
                    </Link>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query IndexQuery {
        gigarLogo: file(relativePath: { eq: "gigarlogo.png" }) {
            childImageSharp {
                fluid(quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        devices: file(relativePath: { eq: "1026-gold.png" }) {
            childImageSharp {
                fluid(maxHeight: 345, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        background: file(relativePath: { eq: "background.jpg" }) {
            childImageSharp {
                fluid(quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        features: file(relativePath: { eq: "features.png" }) {
            childImageSharp {
                fluid(quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }
`

export default IndexPage
