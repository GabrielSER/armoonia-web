import clsx from 'clsx'
import { useCart } from '../../contexts/CartContext'
import { ImCart } from 'react-icons/im'
import { BiArrowBack } from 'react-icons/bi'
import CartItemCard from './CartItemCard'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'
import CartItemsTable from './CartItemsTable'
import CreateOrderCard from './CreateOrderCard'

const BackButton = () => {
    return (
        <Link
            className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-14',
                'aspect-square',
                'rounded-full',
                'bg-shadow',
                'text-2xl',
                'hover:scale-105',
                'hover:opacity-70',
                'border-2',
                'border-transparent',
                'hover:border-black/70'
            )}
            to='/products'
        >
            <BiArrowBack />
        </Link>
    )
}


const Cart = () => {

    const { cartProducts } = useCart()

    if (cartProducts.length === 0) {
        return <EmptyCart />
    }

    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'gap-4',
                'w-full',
                'h-full',
                'p-2 md:p-6',
                'overflow-x-hidden',
                'overflow-y-hidden'
            )}
        >
            <div className='flex gap-2'>
                <BackButton />
                <label className='flex items-center text-primary font-montserrat font-bold'>
                    Volver al catálogo
                </label>
            </div>
            <hr className='text-primary' />
            <div className='flex gap-2 text-3xl'>
                <ImCart className='text-primary animate-bounce' />
                <h2 className='text- font-montserrat font-semibold'>
                    Verifica tu orden
                </h2>
            </div>
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'w-full',
                    'p-2',
                    'gap-4',
                    'overflow-x-hidden',
                    'overflow-y-auto'
                )}
            >
                {
                    cartProducts.map((cartProduct, index) =>
                        <CartItemCard key={index} cartProduct={cartProduct} />
                    )
                }
                <hr className='text-primary' />
                <label className='font-bold font-montserrat text-primary text-2xl'>
                    Resumen de la Orden
                </label>
                <CartItemsTable cartProducts={cartProducts} />
               <CreateOrderCard />
            </div>
        </div>
    )
}

export default Cart
