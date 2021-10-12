import clsx from 'clsx'

const Input = (props) => {
    return (
        <input
            className={clsx(
                'px-1 md:px-2 py-1',
                'appearance-none',
                'outline-none',
                'border border-green-700',
                'hover:bg-shadow',
                'focus:bg-shadow',
                'rounded-sm'
            )}
            {...props}
        />
    )
}

export default Input