import { Navigate, Outlet } from 'react-router-dom'
import { useAuthState }     from '../context/auth'

const ProtectedRoute = () => {
  const { token } = useAuthState()
  return token ? <Outlet /> : <Navigate to="/signin" replace />
}

export default ProtectedRoute
