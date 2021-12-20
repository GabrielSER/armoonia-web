import clsx from 'clsx'
import React from 'react'

const Badge = (props) => {
    const { text } = props
    return (
        <div
            className={clsx(
                'absolute flex',
                'justify-center',
                'items-center',
                'w-6 aspect-square',
                'rounded-full',
                'bg-primary',
                'text-white',
                'font-bold',
                'animate-pulse',
                '-bottom-2 -right-3'
            )}
        >
            {text}
        </div>
    )
}

export default Badge
