import { useCallback } from 'react'
import { useProducts } from '../../contexts/ProductContext'
import ProductForm from './ProductForm'

const CreateProduct = (props) => {

    const { closeModal } = props
    const { addProduct } = useProducts()

    const  submit = async (product) => {
        await addProduct(product)
    }

    return (
        <ProductForm
            title='Agregar Producto'
            buttonText='Agregar'
            onSubmit={submit}
            closeModal={closeModal}
        />
    )
}

export default CreateProduct
