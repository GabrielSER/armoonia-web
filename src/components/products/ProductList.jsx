import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { useAdmin } from '../../contexts/AdminContext'
import { useProducts } from '../../contexts/ProductContext'
import HeaderCarousell from '../main/HeaderCarousell'
import Modal from '../ui/Modal'
import CreateProduct from './CreateProduct'
import NewProductCard from './NewProductCard.jsx'
import ProductCard from './ProductCard'
import UpdateProduct from './UpdateProduct'

const ProductList = () => {

    const { filterProducts } = useProducts()
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
                'overflow-x-hidden',
                'overflow-y-auto',
                'pb-8',
                'gap-4'
            )}
        >
            {
                modal &&
                <Modal>
                    {modal}
                </Modal>
            }
            <HeaderCarousell />
                {
                    validated &&
                    <NewProductCard openCreate={openCreateProduct} />
                }
                {
                    filterProducts.map((product, index) =>
                        <ProductCard
                            key={index}
                            detail={product}
                            openUpdate={openUpdateProduct}
                        />
                    )
                }
        </div>
    )
}

export default ProductList