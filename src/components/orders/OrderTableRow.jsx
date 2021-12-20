import clsx from 'clsx'
import Circular from '../ui/Circular'
import { formatter, dateFormatter } from '../../common/format'
import { useOrders } from '../../contexts/OrderContext'

const Cell = (props) => {
    return (
        <td
            className='px-2 py-2 border border-shadow'
            {...props}
        />
    )
}

const nextStatus = (status) => {
    switch (status) {
        case 'pending':
            return 'paid'
        case 'paid':
            return 'closed'
        default:
            return undefined
    }
}

const StatusButton = (props) => {

    const { order } = props
    const { id, status } = order
    const { changeOrderStatus } = useOrders()

    return (
        <Circular
            className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-5 h-5',
                'rounded-full',
                status === 'pending' && 'bg-quaternary',
                status === 'paid' && 'bg-primary',
                status === 'closed' && 'bg-shadow',
                'border border-shadow',
                'text-black'
            )}
            onClick={() => changeOrderStatus(id, nextStatus(status))}
            disabled={nextStatus(status) !== undefined}
        />
    )

}


const OrderTableRow = (props) => {

    const { changeOrderStatus } = useOrders()
    const { index, orderContainer, onClick } = props
    const { order, meta } = orderContainer

    return (
        <tr
            className={clsx(
                index % 2 === 0 ? 'bg-shadow/5' : 'bg-white',
                'border border-shadow',
                'hover:scale-[1.01]',
                'hover:bg-quaternary/20'
            )}
            onClick={onClick}
        >
            <Cell>
                {order.id}
            </Cell>
            <Cell>
                {order.client_name}
            </Cell>
            <Cell>
                {order.client_phone}
            </Cell>
            <Cell>
                {meta.totalProducts}
            </Cell>
            <Cell>
                {dateFormatter.format(new Date(order.created_at))}
            </Cell>
            <Cell>
                {formatter.format(meta.totalPrice)}
            </Cell>
            <Cell>
                <StatusButton order={order} />
                {order.status}
            </Cell>
        </tr>
    )
}

export default OrderTableRow
