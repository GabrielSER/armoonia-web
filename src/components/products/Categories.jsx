import clsx from 'clsx'
import product_categories from '../../assets/data/product_categories.json'
import { getPublicImage } from '../../common/images'

const Category = (props) => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'items-center',
                'hover:underline',
                'duration-200 ease-in-out transform hover:scale-110'
            )}
        >
            <img
                className={clsx(
                    'flex',
                    'w-14 md:w-12 lg:w-12',
                    'h-14 md:h-12 lg:h-12',
                    'rounded-full',
                    'hover:opacity-70',
                    'border-2 border-transparent',
                    'hover:border-primary'
                )}
                src={props.url}
                alt=''
            />
            <span
                className={clsx(
                    'flex',
                    'lg:justify-center',
                    'font-montserrat',
                    'text-gray-800',
                    'font-black'
                )}
            >
                <p>{props.name}</p>
            </span>
        </div >
    )
}

const Categories = () => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-row md:flex-col',
                'flex-shrink-0',
                'order-last md:order-first',
                'w-full md:w-32 h-24 md:h-full',
                'bg-secondary',
                'rounded',
                'p-3',
                'shadow-2xl'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'md:flex-col',
                    'p-2 md:p-3',
                    'gap-4 md:gap-0',
                    'w-full',
                    'justify-center',
                    'md:items-center',
                    'overflow-x-auto',
                    'md:overflow-x-hidden'
                )}
            >
                {
                    product_categories.map(category =>
                        <Category name={category.label} url={getPublicImage(category.image)} />
                    )
                }
            </div>
        </div >
    )
}

export default Categories
