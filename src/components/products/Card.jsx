import clsx from 'clsx'
import React from 'react'

const Card = (props) => {

    const properties = { ...props }
    delete properties.className

    return (
        <div
            className={clsx(
                'flex shrink-0',
                'p-0.5',
                'bg-gradient-to-br',
                'from-secondary',
                'to-primary',
                'rounded-lg',
                'shadow-lg',
                'font-montserrat',
                'overflow-x-hidden',
                'overflow-y-hidden'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'flex-shrink-0',
                    'w-full h-full',
                    'bg-white',
                    'rounded-lg',
                    'shadow-lg',
                    'overflow-x-hidden',
                    'overflow-y-hidden',
                    props.className
                )}
                {...properties}
            />
        </div>
    )
}

export default Card
