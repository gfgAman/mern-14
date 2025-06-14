import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../redux/cartSlice"
import { addProduct } from "../redux/productSlice"


const Card = ({ name, img, price, category, inStock }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const product = {
    name,
    img,
    price,
    category,
    inStock,
    quantity: 1,
  }

  const viewProductHandler = () => {
    dispatch(addProduct(product))
    navigate(`/product/${name}`)
  }

  const addToCartHandler = () => {
    dispatch(addToCart(product))
  }

  const { cart } = useSelector((state) => state.cart)

  const isInCart = cart.some(item => item.name === name)

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-96">
      <img className="rounded-t-lg h-1/2 w-full object-cover" src={img} alt={name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ₹{price} – {inStock ? "In Stock" : "Out of Stock"} – {category}
        </p>
        <div className="flex justify-between gap-2">
          <button
            onClick={viewProductHandler}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Product
            <svg
              className="ml-2 w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 14 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5h12m0 0L9 1m4 4L9 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={addToCartHandler}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300"
          >
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
