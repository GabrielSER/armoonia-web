import clsx from 'clsx'
import { useState } from 'react'
import { useAdmin } from '../../contexts/AdminContext'
import { useProducts } from '../../contexts/ProductContext'
import Modal from '../ui/Modal'
import Card from './Card'
import Carrousell from './Carrousell'
import CreateProduct from './CreateProduct'
import NewProductCard from './NewProductCard.jsx'
import ProductCard from './ProductCard'

const ProductList = () => {

    const { products } = useProducts()
    const { validated } = useAdmin()
    const [modal, setModal] = useState()

    const openCreateProduct = () => {
        setModal(<CreateProduct/>)
    }

    return (
        <div
            className={clsx(
                'flex',
                'flex-wrap',
                'w-full h-full',
                'justify-center',
                'gap-8',
                'overflow-x-hidden',
                'overflow-y-auto'
            )}
        >
            {
                modal &&
                <Modal>
                   {modal}
                </Modal>
            }
            <Carrousell />
            {
                validated &&
                <NewProductCard openCreate={openCreateProduct} />
            }
            {
                products.map((product, index) =>
                    <ProductCard
                        key={index}
                        detail={product}
                    />
                )
            }
        </div>
    )
}

export default ProductList