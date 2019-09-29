import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import { graphql } from 'gatsby';
import Img from "gatsby-image"

const Technology = ({ data }) => {
    return (
        <Layout>
            <Hero title={true}></Hero>
            <section id="tech-section" className="md:pb-6 bg-svg-circuit bg-svg-fixed bg-darkgray2 text-white">
                <div className="container mx-auto py-10 lg:py-32 flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-1/2 px-10 text-lg">
                        <h3 className="my-10 md:my-5 text-3xl border-b-2 text-gold border-gold self-start">Our Tech</h3>
                        <p>
                            GigarBox leverages the power of cutting-edge IPFS network technology to provision its partners with the most secure and robust
                            private networks for document storage. Files on IPFS are hashed and distributed among the nodes of the network, giving them
                            cryptographic immutability and the resilience of decentralization. Learn more about IPFS technology{" "}
                            <a href="https://ipfs.io/" className="text-blue-400">
                                here
                            </a>
                        </p>
                        <p className="my-5">
                            GigarBox documents are signed by their cryptographic hash. The documents cannot be tampered with or in any way altered, otherwise
                            the hash is voided and fraud is easily detected.
                        </p>
                        <p>
                            At GigarBox, we custom engineer file recording, management, and verification systems for our partners, tailoring these systems to
                            the needs of their staff, administration, and domain.
                        </p>
                    </div>
                    <div className="py-20 lg:pt-10 lg:pt-0 lg:w-1/2 flex flex-col sm:flex-row lg:flex-col items-center justify-around px-5">
                        <Img className="w-64" fluid={data.ipfsLogo.childImageSharp.fluid}></Img>
                        <Img className="mt-32 sm:mt-0 w-64" fluid={data.temporalLogo.childImageSharp.fluid}></Img>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query TechnologyQuery {
        ipfsLogo: file(relativePath: { eq: "IPFS_logo.png" }) {
            childImageSharp {
                fluid(quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        temporalLogo: file(relativePath: { eq: "temporal.png" }) {
            childImageSharp {
                fluid(quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Technology
