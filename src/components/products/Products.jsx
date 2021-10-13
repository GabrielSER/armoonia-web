import clsx from 'clsx'
import Categories from './Categories'
import ProductList from './ProductList'

const Products = () => {
    return (
        <div
            className={clsx(
                'flex',
                'w-full h-full',
                'flex-col md:flex-row',
                'overflow-x-hidden',
                'overflow-y-hidden'
            )}
        >
            <Categories />
            <ProductList />
        </div>
    )
}

export default Products
