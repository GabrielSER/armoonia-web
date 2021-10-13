import Card from './Card'
import { BiAddToQueue } from 'react-icons/bi'
import clsx from 'clsx'


const NewProductCard = (props) => {

    const {openCreate} = props

    return (
        <Card className='w-64 h-96 p-4 flex-shrink-0'>
            <h3
                className={clsx(
                    'text-center',
                    'font-bold',
                    'text-2xl',
                    'text-primary'
                )}
            >
                Agregar nuevo producto
            </h3>
            <div
                className={clsx(
                    'flex',
                    'justify-center',
                    'items-center',
                    'w-full h-full'
                )}
            >
                <button
                    className={clsx(
                        'bg-secondary',
                        'rounded-full',
                        'p-8 hover:opacity-70',
                        'border-2',
                        'border-transparent',
                        'hover:border-primary',
                        'hover:scale-110',
                        'focus:border-primary',
                        'focus:scale-110',
                        'focus:outline-none'
                    )}
                    onClick={openCreate}
                >
                    <BiAddToQueue className='text-8xl text-primary' />
                </button>
            </div>
        </Card>
    )
}

export default NewProductCard
