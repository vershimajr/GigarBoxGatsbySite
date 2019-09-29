import React from "react"
import FormLayout from "../components/formLayout"
import { FormTextItem, FormEmailItem, FormTextareaItem, FormSelectItem } from "../components/FormItems"

const Contact = () => {
    return (
        <FormLayout
            formTitle="Contact Us"
            formDescription="Talk to us"
        >
            <FormSelectItem label="Subject" varName="subject" options={['Support','Sales','Developer','Partnership']}></FormSelectItem>
            <FormTextItem label="Name" placeholder="Name" varName="name"></FormTextItem>
            <FormEmailItem label="Email" placeholder="Email" varName="email"></FormEmailItem>
            <FormTextareaItem label="Message" varName="message" placeholder="Message"></FormTextareaItem>
        </FormLayout>
    )
}

export default Contact


