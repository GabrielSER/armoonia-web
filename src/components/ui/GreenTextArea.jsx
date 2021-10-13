import clsx from 'clsx'
import TextArea from './TextArea'

const GreenTextArea = (props) => {

    const { label } = props
    const properties = { ...props }
    delete properties.label

    return (
        <>
            {
                label &&
                <label className='flex font-montserrat text-sm'>
                    {label}
                </label>
            }
            <TextArea
                className={clsx(
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
        </>
    )
}

export default GreenTextArea
