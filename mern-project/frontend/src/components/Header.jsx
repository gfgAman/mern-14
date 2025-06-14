import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()
    const {cart} = useSelector((state) => state.cart)
    return (
        <div className="bg-purple-950 text-white flex justify-between px-4 py-3 fixed w-full">
            <p className="hover:text-red-600">Logo</p>
            <div className="flex justify-between w-1/5 hover:text-red-600">
                <p onClick={() => navigate('/')}>Home</p>
                <div>

                <p onClick={() => navigate('/cart')} className="relative">Cart
                    <p className="absolute -top-4 -right-4 bg-yellow-400 px-1 rounded">{cart.length}</p>
                </p>
                </div>
                <p>Login</p>
            </div>
        </div>
    )
}

export default Header