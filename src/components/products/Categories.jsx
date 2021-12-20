import clsx from 'clsx'
import { useState } from 'react'
import product_categories from '../../assets/data/product_categories.json'
import { getPublicImage } from '../../common/images'
import { useProducts } from '../../contexts/ProductContext'

const Category = (props) => {

    const { category } = props
    const [active, setActive] = useState(false)
    const [focus, setFocus] = useState(false)
    const { removeCategory, addCategory } = useProducts()

    const properties = { ...props }
    delete properties.category

    const onClick = () => {
        const newValue = !active
        setActive(newValue)
        if (newValue) {
            addCategory(category.value)
        }
        else {
            removeCategory(category.value)
        }
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter' || event.key === 'NumpadEnter') {
            onClick()
        }
    }
    
    return (
        <div
            className={clsx(
                'flex',
                'relative',
                'justify-center',
                'w-14 md:w-full',
                'h-14',
                'flex-shrink-0',
                'hover:scale-110',
                'hover:opacity-70',
                'focus:outline-none'
            )}
            onClick={onClick}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyDown={handleKeyDown}
            tabIndex={1}
        >
            <img
                className={clsx(
                    'flex',
                    'w-12 h-12',
                    'rounded-full',
                    'border-2 border-transparent',
                    'hover:border-primary',
                    active && [
                        'border-primary'
                    ],
                    focus && [
                        'border-shadow'
                    ]
                )}
                src={getPublicImage(category.image)}
                alt=''
            />
            <label
                className={clsx(
                    'flex',
                    'absolute',
                    'justify-center',
                    'w-full',
                    'top-full',
                    'text-center',
                    'text-xs md:text-sm',
                    'font-montserrat',
                    'text-gray-800',
                    'font-black',
                    active && [
                        'underline'
                    ]
                )}
            >
                {category.plural}
            </label>
        </div>
    )
}

const Categories = () => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-row md:flex-col',
                'order-last md:order-first',
                'flex-initial',
                'w-full md:w-36 h-24 md:h-full',
                'gap-4 md:gap-6',
                'bg-secondary',
                'rounded',
                'px-6 md:px-2',
                'py-1 md:py-6',
                'shadow-2xl',
                'overflow-x-auto md:overflow-x-hidden',
                'overflow-y-hidden md:overflow-y-auto'
            )}
        >
            {
                product_categories.map((category, index) =>
                    <Category key={index} category={category} />
                )
            }
        </div >
    )
}

export default Categories
