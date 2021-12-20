import clsx from 'clsx'
import React from 'react'
import { useOrders } from '../../contexts/OrderContext'
import OrderDetail from './OrderDetail'
import OrdersTable from './OrdersTable'

const Orders = () => {

    const { selectedOrder } = useOrders()

    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'w-full h-full',
                'p-4',
                'gap-2',
                'overflow-x-hidden',
                'overflow-y-auto'
            )}
        >
            <label className='font-bold font-montserrat text-primary text-2xl'>
                Ordenes
            </label>
            <OrdersTable />
            {
                selectedOrder &&
                <OrderDetail orderContainer={selectedOrder}/>
            }
        </div>
    )
}

export default Orders
