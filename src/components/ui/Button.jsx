import clsx from 'clsx'


const Button = (props) => {
    return (
        <button
            className={clsx(
                'p-1',
                'shadow-md',
                'bg-primary',
                'text-sm md:text-lg',
                'text-secondary',
                'font-montserrat',
                'font-black',
                'hover:opacity-70',
                'focus:opacity-70',
                'focus:border',
                'focus:border-quaternary',
                'focus:outline-none',
                'disabled:bg-shadow',
                'disabled:text-gray-600',
                'disabled:cursor-wait'
            )}
            {...props}
        />
    )
}

export default Button
