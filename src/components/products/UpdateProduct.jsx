import { useCallback } from 'react'
import { useProducts } from '../../contexts/ProductContext'
import ProductForm from './ProductForm'

const UpdateProduct = (props) => {

    const { closeModal, product } = props
    const { updateProduct } = useProducts()

    const submit = async (productDetail) => {
        await updateProduct(productDetail)
    }

    return (
        <ProductForm
            productDetail={product}
            title='Modificar Producto'
            buttonText='Modificar'
            onSubmit={submit}
            closeModal={closeModal}
        />
    )
}

export default UpdateProduct
