import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthProvider"

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth()

    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }

    return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default PrivateRoute
