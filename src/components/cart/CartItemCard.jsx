import clsx from 'clsx'
import { useCallback } from 'react'
import { useCart } from '../../contexts/CartContext'
import Card from '../products/Card'
import Carrousell from '../ui/Carousell'
import Circular from '../ui/Circular'
import GreenInput from '../ui/GreenInput'
import Button from '../ui/Button'
import { FaPlusCircle, FaMinusCircle, FaTrashAlt } from 'react-icons/fa'
import { formatter } from '../../common/format'

const VariantOption = (props) => {

    const { variant, selected, onClick } = props

    return (
        <div
            className={clsx(
                'relative',
                'flex',
                'w-20 h-20',
                'justify-center'
            )}
            onClick={onClick}
        >
            <Circular
                className={clsx(
                    'overflow-x-hidden',
                    'w-full h-full',
                    selected && [
                        'border-2',
                        'border-primary',
                        'scale-110'
                    ],
                    !selected && [
                        'border-2',
                        'border-shadow',
                        'scale-105'
                    ]
                )}
            >
                <Carrousell
                    className='w-full h-full'
                    images={variant.photos.map(photo => photo.photo)}
                />
                {
                    !selected &&
                    <div className='absolute w-full h-full bg-white/40' />
                }
            </Circular>
            <label
                className={clsx(
                    'absolute',
                    'w-full',
                    '-bottom-5',
                    'text-center',
                    'text-xs',
                    'font-bold',
                    'truncate',
                    selected && 'text-primary',
                    !selected && 'text-shadow'
                )}
            >
                {variant.name}
            </label>
        </div>
    )
}

const AmountSelector = (props) => {

    const { amount, maxAmount, addAmount, subtractAmount } = props

    return (
        <div className='flex h-min'>
            <Button
                className='flex justify-center items-center w-10 h-10 text-lg rounded-l-lg'
                onClick={subtractAmount}
                disabled={amount === 1}
            >
                <FaMinusCircle />
            </Button>
            <GreenInput
                value={amount}
                disabled
            />
            <Button
            className='flex justify-center items-center w-10 h-10 text-lg rounded-r-lg'
                onClick={addAmount}
                disabled={amount === maxAmount}
            >
                <FaPlusCircle />
            </Button>
        </div>
    )
}

const RemoveButton = (props) => {
    return (
        <button
            className={clsx(
                'absolute',
                'flex',
                'justify-center',
                'items-center',
                'rounded-br-lg',
                'bg-red-600',
                'text-white',
                'text-xl xs:text-base',
                'w-14 xs:w-10',
                'h-14 xs:h-10',
                'z-20',
                'focus:outline-none',
                'focus:opacity-70',
                'focus:scale-110',
                'hover:opacity-70',
                'hover:scale-110'
            )}
            {...props}
        >
            <FaTrashAlt />
        </button>
    )
}


const CartItemCard = (props) => {

    const { cartProduct } = props
    const { product, amount, inventoryAmount, variant, variants } = cartProduct
    const { putCartProduct, removeCartProduct } = useCart()

    const getPhotos = useCallback(() => {
        let photos = (variant ?? product).photos
        if (!photos) {
            photos = variants.flatMap(variant => variant.photos)
        }
        return photos.map(photo => photo.photo)
    }, [variant, product, variants])

    return (
        <Card
            className={clsx(
                'relative',
                'flex',
                'flex-col md:flex-row',
                'w-full',
                'h-min md:h-52'
            )}
        >
            <RemoveButton onClick={() => removeCartProduct(product.id)} />
            <Carrousell
                className={clsx(
                    'aspect-video',
                    'md:aspect-square',
                    'lg:aspect-video',
                    'h-48',
                    'md:h-full'
                )}
                images={getPhotos()}
            />
            <div className='flex flex-col md:flex-row w-full h-full p-2 gap-2'>
                <div className='flex flex-col gap-1 w-full'>
                    <label className='font-bold'>
                        {product.name}
                    </label>
                    <p
                        className={clsx(
                            variant ? 'max-h-12' : 'max-h-40',
                            'text-xs',
                            'overflow-x-none overflow-y-auto'
                        )}
                    >
                        {product.description}
                    </p>
                    {
                        variants?.length > 0 &&
                        <div
                            className={clsx(
                                'flex',
                                'w-full',
                                'h-32',
                                'items-center',
                                'p-4',
                                'gap-4',
                                'overflow-x-auto',
                                'overflow-y-hidden'
                            )}
                        >
                            {
                                variants.map((variantOption, index) =>
                                    <VariantOption
                                        key={index}
                                        variant={variantOption}
                                        selected={variant?.id === variantOption.id}
                                        onClick={() => putCartProduct({ ...cartProduct, variant: variantOption })}
                                    />
                                )
                            }
                        </div>
                    }
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label className='font-bold font-montserrat text-primary'>
                        Cantidad a ordenar
                    </label>
                    <AmountSelector
                        amount={amount}
                        maxAmount={inventoryAmount}
                        addAmount={() => putCartProduct({ ...cartProduct, amount: amount + 1 })}
                        subtractAmount={() => putCartProduct({ ...cartProduct, amount: amount - 1 })}
                    />
                    <hr className='text-primary' />
                    <label className='font-bold font-montserrat text-primary'>
                        Resumen
                    </label>
                    <div className='flex w-full justify-between gap-2'>
                        <label className='text-sm font-bold font-montserrat text-black'>
                            {`x${amount} ${product.name}`}
                            {
                                variant &&
                                <span className='text-primary'>
                                    {` (${variant.name})`}
                                </span>
                            }
                        </label>
                        <label className='font-bold'>
                            {formatter.format(product.price * amount)}
                        </label>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CartItemCard
