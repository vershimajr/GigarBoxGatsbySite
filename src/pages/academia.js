import React from "react"
import FormLayout from "../components/formLayout"
import { FormTextItem, FormEmailItem, FormTextareaItem } from "../components/FormItems"

const Academia = () => {
    return (
        <FormLayout
            formTitle="GigarBox Academia"
            formDescription="Provision your academic institution's staff, administration, and students with GigarBox Academia's secure, immutable record storage, management, and verification system"
        >
            <p className="form-description">Fill in the form below to request access</p>
            <FormTextItem varName="name" label="Name" placeholder="Name"></FormTextItem>
            <FormTextItem varName="institutionName" label="Institution Name" placeholder="Institution Name"></FormTextItem>
            <FormTextItem varName="jobTitle" label="Job Title" placeholder="Job Title"></FormTextItem>
            <FormTextItem varName="phoneNumber" label="Phone number" placeholder="Phone number"></FormTextItem>
            <FormEmailItem varName="email" label="Office Email" placeholder="Email"></FormEmailItem>
            <FormTextareaItem
                varName="institutionGoals"
                label="How would you like GigarBox Academia to be integrated at your institution? How can our support make your experience great?"
                placeholder="Share your institutional goals"
            ></FormTextareaItem>
        </FormLayout>
    )
}

export default Academia
