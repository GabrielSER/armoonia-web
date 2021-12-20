import clsx from 'clsx'
import React from 'react'

const Circular = (props) => {

    const {className} = props
    const properties = { ...props }
    delete properties.className

    return (
        <div
            className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'aspect-square',
                'rounded-full',
                'hover:scale-110',
                'hover:opacity-70',
                'focus:outline-none',
                'overflow-x-hidden',
                'overflow-y-hidden',
                className
            )}
            {...properties}
        />
    )
}

export default Circular