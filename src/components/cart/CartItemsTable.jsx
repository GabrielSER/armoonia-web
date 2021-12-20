import CartTableRow from './CartTableRow'
import { formatter } from '../../common/format'

const CartItemsTable = (props) => {

    const { cartProducts } = props

    return (
        <table className='table-auto'>
            <thead>
                <tr className='bg-secondary text-primary border border-primary divide-x divide-primary'>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartProducts.map((cartProduct, index) =>
                        <CartTableRow key={index} index={index} cartProduct={cartProduct} />
                    )
                }
                <tr>
                    <td colSpan={2} />
                    <td className='bg-secondary font-bold text-center text-primary border-2 border-primary'>
                        Total
                    </td>
                    <td className='bg-primary font-bold text-xl text-left text-white border-2 border-primary p-1'>
                        {
                            formatter.format(
                                cartProducts.reduce(
                                    (total, current) => total + current.product.price * current.amount,
                                    0
                                )
                            )
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartItemsTable
