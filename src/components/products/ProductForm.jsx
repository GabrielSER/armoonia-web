import { useCallback, useState } from 'react'
import GreenInput from '../ui/GreenInput'
import GreenTextArea from '../ui/GreenTextArea'
import Input from '../ui/Input'
import Card from './Card'
import ImageInput from '../ui/ImageInput'
import clsx from 'clsx'
import GreenImageInput from '../ui/GreenImageInput'
import GreenSelect from '../ui/GreenSelect'
import Button from '../ui/Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import product_categories from '../../assets/data/product_categories.json'
import { getPublicImage } from '../../common/images'

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
    const [amount, setAmount] = useState(productDetail?.amount ?? 1)


    const submit = async (product) => {
        const productDetail = {
            product,
            amount
        }
        console.log(productDetail)
        try {
            await onSubmit(productDetail)
            closeModal()
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <Card className='w-64 md:w-120 h-140 flex-shrink p-2 space-y-1'>
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
                labelFunction={option => option?.label ?? 'NEL'}
            />
            <GreenTextArea
                label='Descripción'
                name='description'
                state={product}
                setState={setProduct}
            />
            <div className='flex w-full space-x-2'>
                <div className='flex w-1/2 justify-center items-center'>
                    <GreenImageInput />
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
            <Button onClick={() => submit(product)}>
                {buttonText}
            </Button>
        </Card>
    )
}

export default ProductForm
