import { useCallback } from 'react'
import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'
import { httpMethod, useArmoonia } from '../hooks/useArmoonia'
import { useAdmin } from './AdminContext'

const OrderContext = createContext()

const OrderProvider = (props) => {

    const [orders, setOrders] = useState([])
    const [selectedOrder, setOrder] = useState()
    const { validated } = useAdmin()
    const { query, loading } = useArmoonia()

    useEffect(() => {
        if (!validated) {
            setOrders([])
            return
        }
        const fetchOrders = async () => {
            const orders = await query('/api/orders/')
            orders.sort((o1, o2)=> new Date(o2.order.created_at) - new Date(o1.order.created_at))
            setOrders(orders)
        }
        fetchOrders()
    }, [validated, query])

    const addOrder = useCallback(async (order) => {
        const newOrder = await query('api/orders/', {
            method: httpMethod.POST,
            body: order
        })
        setOrders([...orders, newOrder])
    }, [orders, query])

    const removeOrder = useCallback(async (id) => {
        await query(`api/orders/${id}`, {
            method: httpMethod.DELETE
        })
        const index = orders.findIndex(order => order.order.id === id)
        if (index >= 0) {
            if(selectedOrder?.order.id === orders[index].order.id) {
                setOrder(undefined)
            }
            orders.splice(index, 1)
            setOrders([...orders])
        }
    }, [orders, query, selectedOrder])

    const changeOrderStatus = useCallback(async (id, status) => {
        const updatedOrder = await query(`api/orders`, {
            method: httpMethod.PUT,
            body: {
                id,
                status
            }
        })
        const index = orders.findIndex(order => order.order.id === id)
        if (index >= 0) {
            const order = orders[index]
            order.order = updatedOrder
            if(selectedOrder?.order.id === order.order.id) {
                setOrder(order)
            }
            orders.splice(index, 1, order)
            setOrders([...orders])
        }
    }, [query, orders, selectedOrder])

    const selectOrder = useCallback(async (id) => {
        const order = orders.find(order => order.order.id === id)
        if (order) {
            setOrder(order)
        }
    }, [orders])

    const value = useMemo(() => ({
        orders,
        selectedOrder,
        addOrder,
        removeOrder,
        selectOrder,
        changeOrderStatus
    }), [
        orders,
        selectedOrder,
        addOrder,
        removeOrder,
        selectOrder,
        changeOrderStatus
    ])

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