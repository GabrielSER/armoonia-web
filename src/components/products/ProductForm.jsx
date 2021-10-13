import { useState } from 'react'
import GreenInput from '../ui/GreenInput'
import GreenTextArea from '../ui/GreenTextArea'
import Input from '../ui/Input'
import Card from './Card'
import ImageInput from '../ui/ImageInput'
import clsx from 'clsx'
import GreenImageInput from '../ui/GreenImageInput'
import GreenSelect from '../ui/GreenSelect'
import Button from '../ui/Button'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const productCategories = [
    'Arete',
    'Brazalete',
    'Tobillera',
    'Earcuff',
    'Collar',
    'Gafero',
    'Tapabocas'
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
        <Card className='w-64 md:w-120 h-140 flex-shrink p-2 space-y-1'>
            <div className='flex flex-row-reverse justify-between items-center'>
            <button
                    className={clsx(
                        'flex',
                        'text-3xl',
                        'text-primary'
                    )}
                >
                    <AiOutlineCloseCircle/>
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
                    Nuevo Producto
                </h1>                <h1
                    className={clsx(
                        'flex',
                        'font-fleur',
                        'text-3xl',
                        'self-center',
                        'text-primary'
                    )}
                >
                    
                </h1>
            </div>

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
                label='Categoría'
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
            <div className='w-1/2 self-center'>
                <GreenImageInput
                />
            </div>
            <Button>
                Agregar
            </Button>
        </Card>
    )
}

export default ProductForm
