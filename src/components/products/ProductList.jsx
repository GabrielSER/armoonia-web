import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { useAdmin } from '../../contexts/AdminContext'
import { useProducts } from '../../contexts/ProductContext'
import Modal from '../ui/Modal'
import Card from './Card'
import Carrousell from './Carrousell'
import CreateProduct from './CreateProduct'
import NewProductCard from './NewProductCard.jsx'
import ProductCard from './ProductCard'
import UpdateProduct from './UpdateProduct'

const ProductList = () => {

    const { products } = useProducts()
    const { validated } = useAdmin()
    const [modal, setModal] = useState()


    const closeModal = useCallback(() => {
        setModal(undefined)
    }, [setModal])

    const openCreateProduct = useCallback(() => {
        setModal(<CreateProduct closeModal={closeModal} />)
    }, [setModal, closeModal])

    const openUpdateProduct = useCallback((product) => {
        setModal(<UpdateProduct product={product} closeModal={closeModal} />)
    }, [setModal, closeModal])


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
                        openUpdate = {openUpdateProduct}
                    />
                )
            }
        </div>
    )
}

export default ProductList