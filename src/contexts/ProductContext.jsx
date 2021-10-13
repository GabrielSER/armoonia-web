import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'
import { useArmoonia } from '../hooks/useArmoonia'

const ProductContext = createContext()

const ProductProvider = (props) => {

    const [products, setProducts] = useState([])
    const { query } = useArmoonia()

    useEffect(() => {
        const fetchProducts = async (params) => {
            const products = await query('/api/products/')
            console.log(products)
            setProducts(products)
        }
        fetchProducts()
    }, [])

    const addProduct = (value) => {

    }

    const removeProduct = () => {

    }

    const value = useMemo(() => ({
        products,
        addProduct,
        removeProduct
    }), [products])

    return <ProductContext.Provider value={value} {...props} />
}

const useProducts = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error('Invalid use of useProducts, ProductProvider must be defined in parent hierarchy')
    }
    return context
}


export { ProductProvider, useProducts }
