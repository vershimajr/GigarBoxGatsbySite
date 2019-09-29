import React from "react"
import PropTypes from "prop-types"

export const FormTextItem = ({ placeholder, children, label, varName }) => {
    return (
        <div className="form-item">
            <label className="form-label" htmlFor={varName}>
                {label}
            </label>
            <input className="form-input" placeholder={placeholder} id={varName} name={varName} type="text" />
        </div>
    )
}
FormTextItem.propTypes = {
    placeholder: PropTypes.string,
}

export const FormEmailItem = ({ placeholder, children, label, varName }) => {
    return (
        <div className="form-item">
            <label className="form-label" htmlFor={varName}>
                {label}
            </label>
            <input className="form-input" placeholder={placeholder} id={varName} name={varName} type="email" />
        </div>
    )
}
FormEmailItem.propTypes = {
    placeholder: PropTypes.string,
}

export const FormTextareaItem = ({ placeholder, label, varName }) => {
    return (
        <div className="form-item">
            <label className="form-label" htmlFor={varName}>
                {label}
            </label>
            <textarea className="form-input textarea-no-resize" name={varName} id={varName} placeholder={placeholder} rows="10"></textarea>
        </div>
    )
}

export const FormSelectItem = ({ placeholder, label, varName, options }) => {
    return (
        <div className="form-item">
            <label className="form-label" htmlFor={varName}>
                {label}
            </label>
            <select className="form-input bg-white" name={varName} id={varName}>
                {options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

const FormItem = ({ type, placeholder, children, varName }) => {
    return (
        <div className="form-item">
            <label className="form-label" htmlFor={varName}>
                {children}
            </label>
            <input className="form-input" placeholder={placeholder} id={varName} name={varName} type="text" />
        </div>
    )
}

export default FormItem
