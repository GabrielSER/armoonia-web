import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'
import { useArmoonia } from '../hooks/useArmoonia'
import { useAdmin } from './AdminContext'

const OrderContext = createContext()

const OrderProvider = (props) => {

    const [orders, setOrders] = useState([])
    const {validated} = useAdmin()
    const {query, loading } = useArmoonia()

    useEffect(() => {
        if(!validated) {
            setOrders([])
            return
        }
        const fetchOrders = async () => {
            const orders = await query('/api/orders/')
            setOrders(orders)
        }
        fetchOrders()
    }, [validated])

    const addOrder = (value) => {

    }

    const removeOrder = () => {

    }

    const value = useMemo(() => ({
        orders,
        addOrder,
        removeOrder
    }), [orders])

    return <OrderContext.Provider value={value} {...props} />
}

const useOrders = () => {
    const context = useContext(OrderContext)
    if (!context) {
        throw new Error('Invalid use of use UseOrders, OrderProvider must be defined in parent hierarchy')
    }
    return context
}

export { OrderProvider, useOrders }