import { forwardRef } from 'react'
import FileInput from './FileInput'


const ImageInput = forwardRef((props, ref) => {

    const { className, children } = props
    const properties = { ...props }

    return (
        <FileInput
            ref={ref}
            className={className}
            accept='image/*'
            {...properties}
        >
            {children}
        </FileInput>
    )
})

export default ImageInput
