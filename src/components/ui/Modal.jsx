import clsx from 'clsx'

const Modal = (props) => {
    return (
        <div className='pointer-events-none'>
            <div
                className={clsx(
                    'flex',
                    'absolute',
                    'z-20',
                    'justify-center',
                    'items-center',
                    'inset-0',
                    'w-full',
                    'h-full',
                    'bg-shadow',
                    'pointer-events-auto'
                )}
                {...props}
            />
        </div>
    )
}

export default Modal

