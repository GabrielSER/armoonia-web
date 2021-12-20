import clsx from 'clsx'
import { RiEmotionSadLine } from 'react-icons/ri'
import Card from '../products/Card'
import Link from '../ui/Link'

const EmptyCart = () => {
    return (
        <div
            className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-full',
                'h-full'
            )}
        >
            <Card
                className={clsx(
                    'flex flex-col',
                    'w-72 xs:w-120 h-min',
                    'justify-center items-center',
                    'p-4',
                    'gap-4'
                )}
            >
                <RiEmotionSadLine className='text-primary text-4xl' />
                <p className='text-center'>
                    Aún no has agregado ningún producto a tu carrito
                </p>
                <Link
                    className='rounded-l-full rounded-r-full px-2'
                    to='/products'
                >
                    Regresar al catálogo
                </Link>
            </Card>
        </div>
    )
}

export default EmptyCart