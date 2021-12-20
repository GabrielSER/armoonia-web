import clsx from 'clsx'
import { formatter } from '../../common/format'

const CartTableRow = (props) => {

    const { cartProduct, index } = props
    const { product, amount, variant } = cartProduct

    return (
        <tr
            key={index}
            className={clsx(
                index % 2 === 0 ? 'bg-shadow/5' : 'bg-white',
                'border border-shadow',
                'divide-x'
            )}
        >
            <td className='p-1'>
                <label className='text-sm font-bold font-montserrat text-black'>
                    {product.name}
                    {
                        variant &&
                        <span className='text-primary'>
                            {` (${variant.name})`}
                        </span>
                    }
                </label>
            </td>
            <td className='text-center'>
                {amount}
            </td>
            <td className='p-1'>
                {formatter.format(product.price)}
            </td>
            <td className='font-bold p-1'>
                {formatter.format(product.price * amount)}
            </td>
        </tr>
    )
}

export default CartTableRow
