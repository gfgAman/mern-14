import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null) // null = loading

  useEffect(() => {
    const token = localStorage.getItem('accessToken') // 🔁 was looking for 'dummyToken' but login sets 'accessToken'

    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const login = (token) => {
    if (token) {
      localStorage.setItem('accessToken', token)
      setIsAuthenticated(true)
    }
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
