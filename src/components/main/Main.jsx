import Nav from './Nav'
import Header from './Header'
import ProductCard from './ProductCard'
import clsx from 'clsx'
import { ProductProvider, useProducts } from '../../contexts/ProductContext'

const ProductList = () => {

    const { products, addProduct, removeProduct } = useProducts()

    return (
        <>
            {
                products.map((product, index) =>
                    <ProductCard
                        key={index}
                        detail={product}
                    />)
            }
        </>
    )

}


const Main = () => {
    return (
        <ProductProvider>
            <div className='flex flex-col md:flex-row w-full h-full'>
                <div className='flex flex-col w-full h-full overflow-x-hidden overflow-y-hidden'>
                    <Header />
                    <div className='flex flex-wrap w-full h-full justify-center p-6 gap-8 overflow-x-hidden overflow-y-auto'>
                        <div
                            className={clsx(
                                'flex',
                                'w-full',
                                'h-[60vh]',
                                'bg-secondary',
                                'justify-center',
                                'items-center',
                                'text-gray-100'
                            )}
                        >
                            Carrousell
                        </div>
                        <ProductList />
                    </div>
                </div>
                <Nav />
            </div>
        </ProductProvider>
    )
}

export default Main