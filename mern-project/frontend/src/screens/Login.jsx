import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      // basic validation
      if (!email || !password) {
        setError('Please fill in all fields')
        return
      }
      const res = await axios.post('http://localhost:3000/login', { email: email, password: password },{
        "content-type":"Application",
        "Authorization":_
      })

      console.log(res, 'resnsn');

      if(res?.data?.status===404){
        toast.success(res?.data?.message)
        return
      }
      // simulate token from backend (in real app, make API call here)
      // const dummyToken = 'dummy_access_token_123'
      // login(dummyToken)

      // redirect to protected route (e.g. products or cart)
      // navigate('/cart')
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
        <div onClick={() => navigate('/signup')}>Signup</div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Login
