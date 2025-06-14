import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'


const CartItem = ({ category, img, inStock, name, price, quantity }) => {
    const [count, setCount] = useState(quantity)

    const dispatch = useDispatch()

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => {
        if (count > 1)
            setCount(prev => prev - 1)
        else dispatch(removeFromCart(name))
    }

    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
            {/* Product Image */}
            <div className="w-24 h-24">
                <img src={img} alt={name} className="w-full h-full object-cover rounded-md" />
            </div>

            {/* Product Details */}
            <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{category}</p>
                <p className="text-sm text-green-600">{inStock ? 'In Stock' : 'Out of Stock'}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                    <button
                        onClick={decrement}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                        -
                    </button>
                    <span className="font-medium">{count}</span>
                    <button
                        onClick={increment}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                        +
                    </button>
                </div>

                {/* Prices */}
                <div className="mt-2">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Price: ₹{price.toFixed(2)}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Total: ₹{(count * price).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
