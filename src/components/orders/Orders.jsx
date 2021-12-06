import clsx from 'clsx'
import React from 'react'
import OrderList from './OrderList'

const Orders = () => {
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
        <OrderList/>
    </div>
    )
}

export default Orders
