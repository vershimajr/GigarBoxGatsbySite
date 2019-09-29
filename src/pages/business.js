import React from "react"
import FormLayout from "../components/formLayout"
import { FormTextItem, FormEmailItem, FormTextareaItem, FormSelectItem } from "../components/FormItems"

const Business = () => {
    return (
        <FormLayout
            formTitle="GigarBox Business"
            formDescription="Fill in the form below to request access to GigarBox for Business"
        >
            <FormTextItem varName="name" label="Name" placeholder="Name"></FormTextItem>
            <FormTextItem varName="businessName" label="Business Name" placeholder="Business Name"></FormTextItem>
            <FormSelectItem varName="numEmployees" label="No. Employees" options={['0-10', '10-50','50-100','>100']}></FormSelectItem>
            <FormTextItem varName="phoneNumber" label="Phone number" placeholder="Phone number"></FormTextItem>
            <FormEmailItem varName="email" label="Office Email" placeholder="Email"></FormEmailItem>
            <FormTextareaItem
                varName="institutionGoals"
                label="How would you like GigarBox Business to be integrated at your business? How can our support make your experience great?"
                placeholder="Share your business goals"
            ></FormTextareaItem>
        </FormLayout>
    )
}

export default Business

