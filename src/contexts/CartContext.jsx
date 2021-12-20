import { useCallback } from 'react'
import {
    createContext,
    useState,
    useMemo,
    useContext
} from 'react'
import { httpMethod, useArmoonia } from '../hooks/useArmoonia'
import { useOrders } from './OrderContext'

const CartContext = createContext()

const CartProvider = (props) => {

    const [cartProducts, setCartProducts] = useState([])
    const {addOrder} = useOrders()
    const { query, loading } = useArmoonia()

    const putCartProduct = useCallback((cartProduct) => {
        setCartProducts(previous => {
            const index = previous.findIndex(product => product.product.id === cartProduct.product.id)
            if (index >= 0) {
                previous.splice(index, 1, cartProduct)
            }
            else {
                previous.push(cartProduct)
            }
            return [...previous]
        })
    }, [])

    const addCartProduct = useCallback((product) => {
        const productDetail = {
            ...product,
            amount: 1,
            inventoryAmount: product.amount
        }
        if (!productDetail.variant && product.variants?.length !== 0) {
            productDetail.variant = productDetail.variants?.[0]
        }
        putCartProduct(productDetail)
    }, [putCartProduct])

    const removeCartProduct = useCallback((id) => {
        setCartProducts(previous => {
            previous = previous.filter(product => product.product.id !== id)
            return [...previous]
        })
    }, [])

    const createOrderWithCart = useCallback(async (clientDetails) => {
        const order = {
            client_name: clientDetails.name,
            client_email: clientDetails.email,
            client_phone: clientDetails.phone,
            client_city: clientDetails.city,
            client_address: clientDetails.address
        }
        const products = cartProducts.map(cartProduct => {
            const orderProduct = {
                id: cartProduct.product.id,
                amount: cartProduct.amount
            }
            const variant = cartProduct.variant
            if (variant) {
                orderProduct.variant = variant.id
                orderProduct.variantName = variant.name
            }
            return orderProduct
        })
        const response = await addOrder({ order, products })
        setCartProducts([])
        return response
    }, [cartProducts, addOrder])

    const value = useMemo(() => ({
        cartProducts,
        putCartProduct,
        addCartProduct,
        removeCartProduct,
        createOrderWithCart,
        loading
    }), [
        cartProducts,
        putCartProduct,
        addCartProduct,
        removeCartProduct,
        createOrderWithCart,
        loading
    ])

    return <CartContext.Provider value={value} {...props} />
}

const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('Invalid use of use UseCart, CartProvider must be defined in parent hierarchy')
    }
    return context
}

export { CartContext, CartProvider, useCart }