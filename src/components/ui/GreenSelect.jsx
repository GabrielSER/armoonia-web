import clsx from 'clsx'
import Select from './Select'

const GreenOption = (props) => {

    const {
        value,
        option,
        labelFunction
    } = props

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
            {labelFunction?.(option) ?? value}
        </div>
    )
}

const GreenSelect = (props) => {

    const { label, labelFunction } = props

    const properties = { ...props }
    delete properties.label
    delete properties.labelFunction

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
                component={(props) => <GreenOption labelFunction={labelFunction} {...props}/>}
                {...properties}
            />
        </>
    )
}

export default GreenSelect
