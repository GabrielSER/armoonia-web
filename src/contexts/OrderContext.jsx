import { useCallback } from 'react'
import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'
import Orders from '../components/orders/Orders'
import { httpMethod, useArmoonia } from '../hooks/useArmoonia'
import { useAdmin } from './AdminContext'

const OrderContext = createContext()

const initialFilterOptions = {
    input: ''
}
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

    const addOrder = useCallback(async (order)  => {        
        const newOrder = await query('api/orders/', {
        method: httpMethod.POST,
        body: order
    })
    setOrders([...orders, newOrder])
}, [orders])

    const removeOrder = useCallback(async (id) => {
        await query(`api/orders/${id}`, {
            method: httpMethod.DELETE
        })
        const index = orders.findIndex(order => order.id === id)
        if (index >= 0) {
            orders.splice(index, 1)
            setOrders([...orders])
        }
    }, [orders])

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