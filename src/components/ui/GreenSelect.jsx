import clsx from 'clsx'
import Select from './Select'

const GreenOption = (props) => {
    return (
        <div
            className={clsx(
                'w-full px-3 py-2',
                'hover:opacity-70',
                !props.selected && [
                    'bg-secondary/50'
                ],
                props.selected && [
                    'bg-white'
                ]
            )}
        >
            {props.value}
        </div>
    )
}

const GreenSelect = (props) => {
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
        <Select
            className={clsx(
                'relative',
                'text-sm',
                'border',
                'border-primary',
                'outline-none'
            )}
            dropdownStyle={clsx(
                'bg-white',
                'rounded-bl rounded-br',
                'border border-primary',
                'divide-y divide-primary'
            )}
            component={GreenOption}
            {...props}
        />
        </>
    )
}

export default GreenSelect
