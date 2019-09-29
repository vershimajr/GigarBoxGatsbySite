import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"

const formLayout = ({ children, formTitle, formDescription }) => {
    const formSubmitEmail = process.env.GATSBY_formSubmitEmail
    return (
        <>
            <Layout>
                <Hero></Hero>
                <div className="bg-lightgray bg-svg-circuit-light">
                    <div className="form-container">
                        <h3 className="form-heading">{formTitle}</h3>
                        <p className="form-description">{formDescription}</p>
                        <form action={`https://mailthis.to/${formSubmitEmail}`} method="POST" className="form-main">
                            <input type="hidden" name="_subject" value={`GigarBox: New submission for ${formTitle}`} />
                            {children}
                            <button type="submit" className="form-submit mx-auto">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default formLayout
