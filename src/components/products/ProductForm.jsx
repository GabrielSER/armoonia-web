import { useState } from 'react'
import GreenInput from '../ui/GreenInput'
import GreenTextArea from '../ui/GreenTextArea'
import Input from '../ui/Input'
import Card from './Card'
import ImageInput from '../ui/ImageInput'
import clsx from 'clsx'
import GreenImageInput from '../ui/GreenImageInput'
import GreenSelect from '../ui/GreenSelect'

const productCategories = [
    'Earings',
    'Bracelets',
    'Anklets'
]

const initialProduct = {
    name: '',
    category: '',
    photo: '',
    description: '',
    price: 0
}

const ProductForm = () => {

    const [product, setProduct] = useState(initialProduct)
    console.log(product)
    return (
        <Card className='w-64 md:w-96 h-100 flex-shrink p-2 space-y-2'>
            <h1 className={clsx(
                'flex',
                'font-fleur',
                'text-4xl',
                'justify-center',
                'text-primary'
            )}
            >
                Nuevo Producto
            </h1>
            <GreenInput
                label='Nombre'
                name='name'
                state={product}
                setState={setProduct}
            />
            <GreenInput
                label='Precio'
                name='price'
                type='number'
                state={product}
                setState={setProduct}
            />
            <GreenSelect
                name='category'
                state={product}
                setState={setProduct}
                options={productCategories}
            />
            <GreenTextArea
                label='Descripción'
                name='description'
                state={product}
                setState={setProduct}
            />
            <div className='w-1/2'>
                <GreenImageInput
                />
            </div>
        </Card>
    )
}

export default ProductForm
