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

const initialFilterOptions = {
    input: '',
    categories: []
}

const ProductProvider = (props) => {

    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [filterOptions, setFilterOptions] = useState(initialFilterOptions)

    const { query } = useArmoonia()

    useEffect(() => {
        const fetchProducts = async () => {
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

    const setSearchInput = useCallback((value) => {
        setFilterOptions({ ...filterOptions, input: value })
    }, [filterOptions, setFilterOptions])

    const addCategory = useCallback((category) => {
        setFilterOptions({ ...filterOptions, categories: [ ...filterOptions.categories, category ] })
    }, [filterOptions, setFilterOptions])

    const removeCategory = useCallback((category) => {
        const index = filterOptions.categories.indexOf(category)
        if (index >= 0) {
            filterOptions.categories.splice(index, 1)
        }
        setFilterOptions({ ...filterOptions })
    }, [filterOptions, setFilterOptions])

    useEffect(() => {
        let filteredProducts = products
        if (filterOptions.input) {
            const input = filterOptions.input.toLowerCase()
            filteredProducts = filteredProducts.filter(product => {
                if (product.product.name.toLowerCase().includes(input)) {
                    return true
                }
                if (product.product.description.toLowerCase().includes(input)) {
                    return true
                }
                return false
            })
        }
        if (filterOptions.categories.length !== 0) {
            filteredProducts = filteredProducts.filter(product => {
                return filterOptions.categories.includes(product.product.category)
            })
        }
        setFilterProducts([...filteredProducts])
    }, [products, filterOptions, setFilterProducts])

    const value = useMemo(() => ({
        products,
        filterProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        removeCategory,
        addCategory,
        setSearchInput
    }), [
        products,
        filterProducts
    ])

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
