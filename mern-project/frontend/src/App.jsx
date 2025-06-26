import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Signup from './screens/Signup'
import Login from './screens/Login'
import Cart from './screens/Cart'
import Home from './screens/Home'
import ProductDetails from './screens/ProductDetails'
import { AuthProvider } from './auth/AuthProvider'
import Header from './components/Header'
import PrivateRoute from './auth/PrivateRoute'


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/products"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          /> */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path='*' element={<Navigate to="/login" />} />
          <Route path="product/:title" element={<ProductDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
