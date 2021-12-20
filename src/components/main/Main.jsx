import Header from './Header'
import clsx from 'clsx'
import { ProductProvider } from '../../contexts/ProductContext'
import Products from '../products/Products'
import { Route } from 'react-router'
import { OrderProvider } from '../../contexts/OrderContext'
import Orders from '../orders/Orders'
import { CartProvider } from '../../contexts/CartContext'
import Cart from '../cart/Cart'

const Main = () => {
    return (
        <ProductProvider>
            <OrderProvider>
                <CartProvider>
                    <div
                        className={clsx(
                            'flex',
                            'flex-col',
                            'w-full h-full',
                            'overflow-x-hidden',
                            'overflow-y-hidden'
                        )}
                    >
                        <Header />
                        <div
                            className={clsx(
                                'w-full h-full relative',
                                'overflow-x-hidden',
                                'overflow-y-hidden'
                            )}
                        >
                            <Route path='/products' component={Products} />
                            <Route path='/cart' component={Cart} />
                            <Route path='/orders' component={Orders} />
                        </div>
                    </div>
                </CartProvider>
            </OrderProvider>
        </ProductProvider >
    )
}

export default Main