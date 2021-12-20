import clsx from 'clsx'
import { useState } from 'react'
import Input from './Input'

const GreenInput = (props) => {

    const { label, onValidate, required = false } = props
    const properties = { ...props }
    delete properties.label

    const [error, setError] = useState()

    const validateInput = (value) => {
        try {
            onValidate?.(value)
            if(!value && required) {
                throw new Error('This field is required')
            }
            setError(undefined)
        } catch (error) {
            setError(error.message)
        }
    }

    properties.onValidate = validateInput

    return (
        <>
            {
                label &&
                <label className='flex font-montserrat font-bold text-sm gap-1'>
                    {label}
                    {
                        required &&
                        <span className='text-red-600'>
                            *
                        </span>
                    }
                </label>
            }
            <Input
                className={clsx(
                    'w-full',
                    'px-2',
                    'py-1',
                    'appearance-none',
                    'outline-none',
                    'border border-green-700',
                    'hover:bg-shadow/5',
                    'focus:bg-shadow/5',
                    'rounded-sm',
                    'text-sm'
                )}
                {...properties}
            />
            {
                error &&
                <span className='text-red-600 text-xs'>
                    {error}
                </span>
            }
        </>
    )
}

export default GreenInput
