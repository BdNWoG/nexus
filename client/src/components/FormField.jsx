import React from 'react'

const FormField = ({
    labelName, placeholder, inputType, value, handleChange,
}) => {
    return (
        <label className='flex-1 w-full flex flex-col'>
            {labelName && (
                <span>{labelName}</span>
            )}
        </label>
    )
}

export default FormField