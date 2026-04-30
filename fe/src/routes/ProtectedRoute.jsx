import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute() {
  // const { token } = useAuthState() // later
  const token = localStorage.getItem('token')

  return token ? <Outlet /> : <Navigate to="/signin" replace />
}
