import { useOrders } from '../../contexts/OrderContext'
import OrderTableRow from './OrderTableRow'

const Heading = (props) => {
    return (
        <th
            className='p-2 border border-primary'
            {...props}
        />
    )
}


const OrdersTable = () => {

    const { orders, selectOrder, removeOrder } = useOrders()

    return (
        <table className='table-auto shadow-lg'>
            <thead>
                <tr className='h-12 bg-secondary text-primary'>
                    <Heading>Id</Heading>
                    <Heading>Nombre del cliente</Heading>
                    <Heading>Número de teléfono</Heading>
                    <Heading>Productos</Heading>
                    <Heading>Fecha de creación</Heading>
                    <Heading>Precio total</Heading>
                    <Heading>Estado</Heading>
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    orders.map((order, index) =>
                        <OrderTableRow
                            key={index}
                            index={index}
                            orderContainer={order}
                            onClick={() => selectOrder(order.order.id)}
                        />
                    )
                }
            </tbody>
        </table>
    )
}

export default OrdersTable
