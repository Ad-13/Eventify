import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useAuthDispatch, AUTH_ACTIONS } from "../../context/auth";
import { storage } from "../../api/storage";

export function Navbar() {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    storage.removeToken();
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
    navigate("/");
  }

  return (
    <nav
      className="flex items-center justify-between px-6 py-3
                    border-b border-vd-border
                    backdrop-blur-sm sticky top-0 z-50"
    >
      <Link
        to="/"
        className="flex items-center gap-2 text-vd-text text-2xl font-medium"
      >
        <span className="w-6 h-6 rounded-md bg-vd-accent flex items-center justify-center text-white">
          ◈
        </span>
        Eventify
      </Link>

      <div className="flex items-center gap-4 text-vd-muted">
        <Link to="/" className="hover:text-vd-text transition-colors">
          Events
        </Link>
      </div>

      <div className="flex items-center gap-2">
        {user ? (
          <>
            {user && (
              <span className="text-sm text-vd-muted mr-2">
                {user.name || user.email}
              </span>
            )}
            <button onClick={handleLogout} className="btn-ghost px-3 py-1.5">
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="btn-ghost px-3 py-1.5">
              Sign in
            </Link>
            <Link to="/signup" className="btn-accent px-3 py-1.5">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
