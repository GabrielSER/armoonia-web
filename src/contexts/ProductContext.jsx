import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext,
    useCallback
} from 'react'
import { httpMethod, useArmoonia } from '../hooks/useArmoonia'

const ProductContext = createContext()

const ProductProvider = (props) => {

    const [products, setProducts] = useState([])
    const { query } = useArmoonia()

    useEffect(() => {
        const fetchProducts = async (params) => {
            const products = await query('/api/products/')
            setProducts(products)
        }
        fetchProducts()
    }, [])

    const addProduct = useCallback(async (product) => {
        const newProduct = await query('api/products/', {
            method: httpMethod.POST,
            body: product
        })
        setProducts([...products, newProduct])
    }, [products])

    const deleteProduct = useCallback(async (id) => {
        console.log(id)
        await query(`api/products/${id}`, {
            method: httpMethod.DELETE
        })
        const index = products.findIndex(product => product.product.id === id)
        if (index >= 0) {
            products.splice(index, 1)
            setProducts([...products])
        }
    }, [products])

    const updateProduct = useCallback(async (productDetail) => {
        const { product, amount } = productDetail
        await query(`api/products/inventory`, {
            method: httpMethod.PUT,
            body: {
                product_id: product.id,
                amount
            }
        })
        const updatedProduct = await query(`api/products/`, {
            method: httpMethod.PUT,
            body: product
        })
        const index = products.findIndex(p => p.product.id === product.id)
        if (index >= 0) {
            products.splice(index, 1, updatedProduct)
            setProducts([...products])
        }
    }, [products])

    const value = useMemo(() => ({
        products,
        addProduct,
        updateProduct,
        deleteProduct
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
