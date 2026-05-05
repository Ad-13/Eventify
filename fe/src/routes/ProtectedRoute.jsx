import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "../context/auth";
import { storage } from "../api/storage";

export function ProtectedRoute() {
  const { user, loading } = useAuthState();
  const token = storage.getToken();

  if (loading) return null;

  return user || token ? <Outlet /> : <Navigate to="/signin" replace />;
}
