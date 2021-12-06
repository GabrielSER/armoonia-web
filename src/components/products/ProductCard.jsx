import clsx from 'clsx'
import { formatter } from '../../common/format'
import { useAdmin } from '../../contexts/AdminContext'
import { BsFillCartPlusFill, BsFillCartDashFill, BsPencilFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import Card from './Card'
import { useProducts } from '../../contexts/ProductContext'
import product_categories from '../../assets/data/product_categories.json'

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

const ButtonBar = (props) => {

    const { product, openUpdate } = props
    const { deleteProduct } = useProducts()

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
                    <CartButton
                        className='text-black'
                        onClick={() => openUpdate(product)}
                    >
                        <BsPencilFill />
                    </CartButton>
                    <CartButton
                        className='text-red-600'
                        onClick={() => deleteProduct(product.product.id)}
                    >
                        <MdDelete />
                    </CartButton>
                </>
            }
            <CartButton
                onClick={() => console.log('Remover de carro')}
                className='text-red-500'
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

    const { detail, openUpdate } = props
    const { product, amount } = detail

    const getCategoryLabel = (value) => {
        const category = product_categories.find(category => category.value === value)
        return category?.label ?? 'No definida'
    }
    return (
        <Card className='w-64 h-96 flex-shrink-0'>
            <div
                className={clsx(
                    'flex',
                    'relative',
                    'rounded',
                    'w-full',
                    'h-3/5'
                )}
            >
                <img
                    className='w-full h-full object-cover rounded-top'
                    src={product?.photo}
                />
                <ButtonBar product={detail} openUpdate={openUpdate} />
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
                <label
                    className={clsx(
                        'absolute',
                        'bottom-0',
                        'left-0',
                        'p-1',
                        'bg-secondary',
                        'rounded-tr-md',
                        'text-sm',
                        'text-primary',
                        'font-semibold'
                    )}
                >
                    {getCategoryLabel(product.category)}
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
