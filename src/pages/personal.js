import React from "react"
import FormLayout from "../components/formLayout"

import { FormTextItem, FormEmailItem } from "../components/FormItems"

const Personal = () => {
    return (
        <>
            <FormLayout formTitle="GigarBox Personal" formDescription="Fill in the form below to learn more about GigarBox Personal">
                <FormTextItem varName="name" placeholder="Name" label="Name"></FormTextItem>
                <FormEmailItem varName="email" placeholder="Email" label="Email"></FormEmailItem>
            </FormLayout>
        </>
    )
}

export default Personal
