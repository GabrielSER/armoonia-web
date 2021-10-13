import PropTypes from 'prop-types'
import { forwardRef, useRef } from 'react'
import Input from './Input'

const FileInput = forwardRef((props, ref) => {

    const {
        className,
        accept,
        name,
        onChange,
        state,
        setState,
        children
    } = props

    const inputRef = useRef()

    const openInput = () => {
        inputRef?.current?.click()
    }

    const onSelect = ({ event }) => {
        const value = event.target.files?.[0]
        if (onChange) {
            onChange({ name, value, event })
        }
        if (setState) {
            setState({ ...state, [name]: value })
        }
    }

    return (
        <div
            ref={ref}
            className={className}
            onClick={openInput}
        >
            {children}
            <Input
                ref={inputRef}
                className='hidden'
                type='file'
                accept={accept}
                onChange={onSelect}
                {...{ name, state }}
            />
        </div>
    )

})

FileInput.defaultTypes = {
    accept: '*/*'
}

FileInput.propTypes = {
    ...Input.propTypes,
    accept: PropTypes.string
}

export default FileInput
