import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'

const ProductContext = createContext()

const ProductProvider = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
       //traer del backend
       const traer = async (params) => {
        const response = await fetch('/api/products/', {
            mode:'cors',
            method: 'GET'
        })
        const products = await response.json()
        console.log(products)
        setProducts(products)
       }
       traer()
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
