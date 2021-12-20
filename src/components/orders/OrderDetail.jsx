import { useEffect, useState } from 'react'
import { useProducts } from '../../contexts/ProductContext'
import CartItemCard from '../cart/CartItemCard'
import CartItemsTable from '../cart/CartItemsTable'
import Card from '../products/Card'

const OrderDetail = (props) => {

    const { orderContainer } = props
    const { order, products, meta } = orderContainer

    const { getProduct } = useProducts()

    const [orderProducts, setOrderProducts] = useState([])

    useEffect(() => {
        const orderProducts = products.map((product) => {
            const orderProduct = getProduct(product.id)
            orderProduct.amount = product.amount
            if(product.variant_id) {
                orderProduct.variant = orderProduct.variants.find(variant => variant.id === product.variant_id)
            }
            return orderProduct
        })
        setOrderProducts(orderProducts)
    }, [products, getProduct])

    return (
        <Card className='flex-col p-4'>
            {order.client_name}
            <CartItemsTable cartProducts={orderProducts} />
        </Card>
    )
}

export default OrderDetail
