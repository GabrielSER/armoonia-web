import { useCallback, useState } from 'react'
import GreenInput from '../ui/GreenInput'
import GreenTextArea from '../ui/GreenTextArea'
import Card from './Card'
import clsx from 'clsx'
import GreenImageInput from '../ui/GreenImageInput'
import GreenSelect from '../ui/GreenSelect'
import Button from '../ui/Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import product_categories from '../../assets/data/product_categories.json'

const initialProduct = {
    name: '',
    category: product_categories[0].value,
    photo: '',
    description: '',
    price: 0
}

const ProductForm = (props) => {

    const {
        productDetail,
        title,
        closeModal,
        buttonText,
        onSubmit
    } = props

    const [product, setProduct] = useState(productDetail?.product ?? initialProduct)
    const [photos, setPhotos] = useState(productDetail?.photos ?? [])
    const [amount, setAmount] = useState(productDetail?.amount ?? 1)
    const [imageLoading, setImageLoading] = useState(false)

    const submit = useCallback(async () => {
        const productDTO = { ...product }
        if (photos.length > 0) {
            productDTO.photos = photos
        }
        const productDetail = {
            product: productDTO,
            amount
        }
        try {
            await onSubmit(productDetail)
            closeModal()
        } catch (error) {
            console.error(error)
        }
    }, [product, photos, amount])

    const addPhoto = (change) => {
        const photo = {
            photo: change.value
        }
        setPhotos([...photos, photo])
    }

    return (
        <Card className='flex-col w-64 md:w-120 h-140 flex-shrink p-2 space-y-1'>
            <div className='flex flex-row-reverse justify-between items-center'>
                <button
                    className={clsx(
                        'flex',
                        'text-3xl',
                        'text-primary'
                    )}
                    onClick={closeModal}
                >
                    <AiOutlineCloseCircle />
                </button>
                <h1
                    className={clsx(
                        'flex',
                        'font-fleur',
                        'text-3xl',
                        'self-center',
                        'text-primary'
                    )}
                >
                    {title}
                </h1>
                <h1>

                </h1>
            </div>
            <GreenInput
                label='Nombre'
                name='name'
                state={product}
                setState={setProduct}
            />
            <GreenSelect
                label='Categoría'
                name='category'
                state={product}
                setState={setProduct}
                options={product_categories}
                valueField='value'
                labelFunction={option => option?.label}
            />
            <GreenTextArea
                label='Descripción'
                name='description'
                state={product}
                setState={setProduct}
            />
            <div className='flex w-full space-x-2'>
                <div className='flex w-1/2 justify-center items-center'>
                    <GreenImageInput
                        name='photo'
                        value={photos?.[photos.length - 1]}
                        onChange={addPhoto}
                        changeLoading={setImageLoading}
                    />
                </div>
                <div className='w-1/2'>
                    <GreenInput
                        label='Precio'
                        name='price'
                        type='number'
                        state={product}
                        setState={setProduct}
                    />
                    <GreenInput
                        label='Cantidad'
                        type='number'
                        value={amount}
                        onChange={(change) => setAmount(change.value)}
                    />
                </div>
            </div>
            <Button
                onClick={submit}
                disabled={imageLoading}
            >
                {buttonText}
            </Button>
        </Card>
    )
}

export default ProductForm
