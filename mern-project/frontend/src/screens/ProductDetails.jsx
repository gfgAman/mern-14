import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cartSlice"


const ProductDetails = () => {

  const { product } = useSelector((state) => state.product)
  const { cart } = useSelector((state) => state.cart)
 
  const { name, img, price, category, inStock }= product

  const dispatch = useDispatch()

  const addToCartHandler = () => {

    if (product) {
      dispatch(addToCart(product))
    }
  }

  const isInCart = cart.some(item => item.name === name)
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 p-4 bg-white rounded-lg shadow-md">
      <section className="w-full sm:w-1/3">
        <img src={img} alt={name} className="w-full h-auto object-cover rounded-lg" />
      </section>
      <section className="flex flex-col justify-center sm:justify-start text-center sm:text-left space-y-1">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{category}</p>
        <p className="text-blue-600 font-medium">₹{price}</p>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={addToCartHandler}
          disabled={isInCart}
        >
          {isInCart ? 'Added' : "add to cart"}
        </button>
      </section>
    </div>

  )
}

export default ProductDetails