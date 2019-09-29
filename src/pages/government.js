import React from "react"
import FormLayout from "../components/formLayout"
import { FormTextItem, FormEmailItem, FormTextareaItem } from "../components/FormItems"

const Government = () => {
    return (
        <FormLayout
            formTitle="GigarBox Government"
            formDescription="Leverage the power of GigarBox Government for secure, cryptographically imutable, verifiable public document recording, managing, and issuance"
        >
            <p className="form-description">Fill in the form below to learn more</p>
            <FormTextItem label="Name" placeholder="Name" varName="name"></FormTextItem>
            <FormTextItem label="Country" placeholder="Country" varName="country"></FormTextItem>
            <FormTextItem label="Government Office" placeholder="(i.e. Federal, State, Municipal)" varName="officeType"></FormTextItem>
            <FormTextItem label="Department" placeholder="Department" varName="department"></FormTextItem>
            <FormTextItem label="Phone number" placeholder="Phone number" varName="phoneNumber"></FormTextItem>
            <FormEmailItem label="Office Email" placeholder="Email" varName="email"></FormEmailItem>
            <FormTextareaItem
                label="How would you like GigarBox to be integrated within your organization? How can our support make your experience great?"
                varName="goals"
                placeholder="Share your institutional goals"
            ></FormTextareaItem>
        </FormLayout>
    )
}

export default Government
