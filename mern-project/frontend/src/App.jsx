import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Header from "./components/Header"
import ProductDetails from "./screens/ProductDetails"
import Cart from "./screens/Cart"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App