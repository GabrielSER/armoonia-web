import clsx from 'clsx'
import { formatter } from '../../common/format'
import { useAdmin } from '../../contexts/AdminContext'
import { BsFillCartPlusFill, BsFillCartDashFill, BsPencilFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import Card from './Card'


const CartButton = (props) => {

    const { className } = props
    const properties = { ...props }
    delete properties.className

    return (
        <button
            className={clsx(
                'flex',
                'w-10 h-10',
                'justify-center',
                'items-center',
                'rounded-full',
                'bg-secondary/50',
                'text-2xl',
                'transition duration-200 ease-in-out',
                'hover:opacity-70',
                'hover:scale-110',
                'focus:outline-none ',
                'focus:border-2 focus:border-primary',
                'focus:scale-110',
                'focus:opacity-70',
                className
            )}
            {...properties}
        />
    )
}

const ButtonBar = () => {

    const { validated } = useAdmin()

    return (
        <div
            className={clsx(
                'flex',
                'space-x-3',
                'p-2 absolute',
                'right-0'
            )}
        >
            {
                validated &&
                <>
                    <CartButton className='text-black'>
                        <BsPencilFill />
                    </CartButton>
                    <CartButton className='text-red-600'>
                        <MdDelete />
                    </CartButton>
                </>
            }
            <CartButton
                onClick={() => console.log('Remover de carro')}
                className='text-red-400'
            >
                <BsFillCartDashFill />
            </CartButton>
            <CartButton className='text-primary'>
                <BsFillCartPlusFill />
            </CartButton>
        </div>
    )
}


const ProductCard = (props) => {

    const { detail } = props
    const { product, amount } = detail

    return (
        <Card className='w-64 h-96 flex-shrink-0'>
            <div
                className={clsx(
                    'flex',
                    'relative',
                    'w-full',
                    'h-3/5'
                )}
            >
                <img
                    className='w-full h-full object-cover'
                    src={product.photo}
                />
                <ButtonBar />
                <label
                    className={clsx(
                        'absolute',
                        'bottom-0',
                        'right-0',
                        'p-1',
                        'bg-secondary',
                        'rounded-tl-md',
                        'text-sm',
                        'text-primary',
                        'font-semibold'
                    )}
                >
                    {`${amount} diponibles`}
                </label>
            </div>
            <div className='flex flex-col p-3'>
                <label className={clsx(
                    'h-12',
                    'font-bold',
                    'overflow-hidden',
                    'overflow-ellipsis'
                )}
                >
                    {product.name}
                </label>
                <label className='font-bold text-primary'>
                    {`${formatter.format(product.price)} COP`}
                </label>
                <p
                    className={clsx(
                        'h-12',
                        'text-xs',
                        'overflow-x-none overflow-y-auto'
                    )}
                >
                    {product.description}
                </p>
            </div>
        </Card>
    )
}

export default ProductCard
