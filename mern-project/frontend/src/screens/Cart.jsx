import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {
    const { cart } = useSelector((state) => state.cart)

    return (
        <div>
            {cart && cart.length > 0 ? (
                cart.map(({ category, img, inStock, name, price, quantity }) => (
                    <CartItem
                        key={name}
                        category={category}
                        img={img}
                        name={name}
                        price={price}
                        quantity={quantity}
                        inStock={inStock}
                    />
                ))
            ) : (
                <h2>No items in the cart</h2>
            )}
        </div>
    )
}

export default Cart